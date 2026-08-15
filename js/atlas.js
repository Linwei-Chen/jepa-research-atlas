/* build-research-atlas managed asset: reader-ui-v2 */
(function () {
  "use strict";

  var rawMeta = window.ATLAS_META && typeof window.ATLAS_META === "object" ? window.ATLAS_META : {};
  var siteMeta = rawMeta.meta && typeof rawMeta.meta === "object" ? rawMeta.meta : rawMeta;
  var routes = Array.isArray(rawMeta.routes) ? rawMeta.routes.slice() : [];
  var levels = Array.isArray(rawMeta.levels) ? rawMeta.levels.slice() : [];
  var papers = Array.isArray(window.PAPERS) ? window.PAPERS.slice() : [];

  routes.sort(function (a, b) { return numberOr(a.order, 0) - numberOr(b.order, 0); });
  levels.sort(function (a, b) { return numberOr(a.order, numberOr(a.id, 0)) - numberOr(b.order, numberOr(b.id, 0)); });

  var routeById = new Map(routes.map(function (route) { return [String(route.id), route]; }));
  var levelById = new Map(levels.map(function (level) { return [String(level.id), level]; }));
  var clusterNodes = new Map();
  var mobileClusterNodes = new Map();
  var previewKey = "";

  var state = {
    query: "",
    status: "all",
    route: "all",
    level: "all"
  };

  var elements = {
    title: document.getElementById("page-title"),
    domain: document.getElementById("domainName"),
    subtitle: document.getElementById("pageSubtitle"),
    scopeNote: document.getElementById("scopeNote"),
    heroPaperCount: document.getElementById("heroPaperCount"),
    heroRouteCount: document.getElementById("heroRouteCount"),
    heroUpdated: document.getElementById("heroUpdated"),
    heroAxis: document.getElementById("heroAxis"),
    heroCoverage: document.getElementById("heroCoverage"),
    search: document.getElementById("searchInput"),
    status: document.getElementById("statusFilter"),
    route: document.getElementById("routeFilter"),
    level: document.getElementById("levelFilter"),
    levelLabel: document.getElementById("levelFilterLabel"),
    reset: document.getElementById("resetFilters"),
    controls: document.getElementById("atlasControls"),
    svg: document.getElementById("atlasSvg"),
    mobileGrid: document.getElementById("mobileClusterGrid"),
    mapEmpty: document.getElementById("mapEmpty"),
    inspector: document.getElementById("inspectorContent"),
    inspectorPanel: document.getElementById("groupInspector"),
    clearSelection: document.getElementById("clearSelection"),
    contextCount: document.getElementById("contextCount"),
    live: document.getElementById("atlasLive"),
    routeCards: document.getElementById("routeCards"),
    routeEmpty: document.getElementById("routeEmpty"),
    timeline: document.getElementById("yearTimeline"),
    timelineEmpty: document.getElementById("timelineEmpty"),
    resultSummary: document.getElementById("resultSummary"),
    activeFilters: document.getElementById("activeFilters"),
    paperIndex: document.getElementById("paperIndex"),
    indexEmpty: document.getElementById("indexEmpty"),
    overview: document.getElementById("overviewText"),
    audience: document.getElementById("audienceText"),
    scope: document.getElementById("scopeText"),
    coverage: document.getElementById("coverageText"),
    thesisCard: document.getElementById("thesisCard"),
    thesis: document.getElementById("thesisText"),
    recommendationCard: document.getElementById("recommendationCard"),
    recommendation: document.getElementById("recommendationText"),
    footerTitle: document.getElementById("footerTitle"),
    footerUpdated: document.getElementById("footerUpdated")
  };

  var svgNamespace = "http://www.w3.org/2000/svg";
  var mapCenter = { x: 400, y: 340 };

  function numberOr(value, fallback) {
    var parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  }

  function textOr(value, fallback) {
    return typeof value === "string" && value.trim() ? value.trim() : (fallback || "");
  }

  function arrayOr(value) {
    return Array.isArray(value) ? value : [];
  }

  function compactLabel(value, maximumUnits) {
    var input = textOr(value, "领域");
    var output = "";
    var units = 0;
    var characters = Array.from(input);
    for (var index = 0; index < characters.length; index += 1) {
      var character = characters[index];
      var size = character.charCodeAt(0) > 255 ? 2 : 1;
      if (units + size > maximumUnits) return output + "…";
      output += character;
      units += size;
    }
    return output;
  }

  function paperLevel(paper) {
    if (paper.level !== undefined && paper.level !== null) return String(paper.level);
    if (paper.training_level !== undefined && paper.training_level !== null) return String(paper.training_level);
    return "";
  }

  function titleLocal(paper) {
    return textOr(paper.title_local, textOr(paper.title_zh, textOr(paper.title, "未命名条目")));
  }

  function routeColor(route) {
    return textOr(route && route.color, "#137c78");
  }

  function routeTextColor(route) {
    return textOr(route && (route.text_color || route.textColor), routeColor(route));
  }

  function clusterKey(routeId, levelId) {
    return String(routeId) + "::" + String(levelId);
  }

  function linkFor(paper) {
    return "paper.html?id=" + encodeURIComponent(String(paper.id));
  }

  function statusLabel(paper) {
    if (paper.status === "peer-reviewed") return "同行评议";
    if (paper.status === "preprint") return "预印本";
    if (paper.status === "official-report") return "官方报告或标准";
    if (["official-report", "standard", "white-paper"].indexOf(paper.source_type) >= 0) return "官方报告或标准";
    return "状态待核";
  }

  function coverageLabel(value) {
    return {
      L0: "L0 · 快速侦察",
      L1: "L1 · 结构化扫描",
      L2: "L2 · 范围内覆盖饱和",
      L3: "L3 · 持续维护"
    }[value] || textOr(value, "未说明");
  }

  function tierRank(tier) {
    return { core: 0, bridge: 1, background: 2 }[tier] !== undefined ? { core: 0, bridge: 1, background: 2 }[tier] : 9;
  }

  function sortedPapers(list) {
    return list.slice().sort(function (a, b) {
      return tierRank(a.tier) - tierRank(b.tier)
        || numberOr(a.relevance_rank, 9999) - numberOr(b.relevance_rank, 9999)
        || numberOr(b.year, 0) - numberOr(a.year, 0)
        || textOr(a.title).localeCompare(textOr(b.title));
    });
  }

  function makeSvg(tag, attributes) {
    var node = document.createElementNS(svgNamespace, tag);
    Object.keys(attributes || {}).forEach(function (name) {
      node.setAttribute(name, String(attributes[name]));
    });
    return node;
  }

  function setRouteStyle(node, route) {
    node.style.setProperty("--route-color", routeColor(route));
    node.style.setProperty("--route-text", routeTextColor(route));
  }

  function applyMetadata() {
    var title = textOr(siteMeta.title, "研究地图");
    var domain = textOr(siteMeta.domain, "研究领域");
    var updated = textOr(siteMeta.updated, "—");
    var axis = textOr(siteMeta.axis_label, "层级");
    var coverage = textOr(siteMeta.coverage_level);
    var thesis = textOr(siteMeta.thesis);
    var recommendation = textOr(siteMeta.recommendation);

    document.documentElement.lang = textOr(siteMeta.language, "zh-CN");
    document.title = title;
    elements.title.textContent = title;
    elements.domain.textContent = domain;
    elements.subtitle.textContent = textOr(siteMeta.subtitle, "先看研究路线与证据层级，再下钻到具体工作。");
    elements.scopeNote.textContent = textOr(siteMeta.scope_note, "研究范围与覆盖边界尚未说明。");
    elements.heroPaperCount.textContent = String(papers.length);
    elements.heroRouteCount.textContent = String(routes.length);
    elements.heroUpdated.textContent = updated;
    elements.heroAxis.textContent = axis;
    elements.heroCoverage.textContent = coverageLabel(coverage);
    elements.levelLabel.textContent = "聚焦" + axis;
    elements.overview.textContent = textOr(siteMeta.overview, "领域概览尚未提供。");
    elements.audience.textContent = "目标读者：" + textOr(siteMeta.audience, "未说明");
    elements.scope.textContent = "覆盖边界：" + textOr(siteMeta.scope_note, "未说明");
    elements.coverage.textContent = "覆盖深度：" + coverageLabel(coverage)
      + (textOr(siteMeta.coverage_note) ? "；" + textOr(siteMeta.coverage_note) : "");
    elements.thesisCard.hidden = !thesis;
    elements.thesis.textContent = thesis;
    elements.recommendationCard.hidden = !recommendation;
    elements.recommendation.textContent = recommendation;
    elements.footerTitle.textContent = title;
    elements.footerUpdated.textContent = "检索截止：" + updated;
  }

  function populateFilters() {
    routes.forEach(function (route) {
      var option = document.createElement("option");
      option.value = String(route.id);
      option.textContent = textOr(route.label, String(route.id));
      elements.route.appendChild(option);
    });

    levels.forEach(function (level) {
      var option = document.createElement("option");
      option.value = String(level.id);
      option.textContent = textOr(level.short, String(level.id)) + " · " + textOr(level.label, "未命名层级");
      elements.level.appendChild(option);
    });
  }

  function buildMap() {
    var title = elements.svg.querySelector("title");
    var description = elements.svg.querySelector("desc");
    elements.svg.replaceChildren(title, description);
    clusterNodes.clear();

    if (!routes.length || !levels.length) return;

    var innerRadius = 78;
    var outerRadius = 312;
    var levelStep = levels.length > 1 ? (outerRadius - innerRadius) / (levels.length - 1) : 0;

    levels.forEach(function (level, levelIndex) {
      var radius = innerRadius + levelStep * levelIndex;
      level._atlasRadius = radius;
      elements.svg.appendChild(makeSvg("circle", {
        class: "map-ring",
        cx: mapCenter.x,
        cy: mapCenter.y,
        r: radius
      }));
      var ringLabel = makeSvg("text", {
        class: "map-ring-label",
        x: 22,
        y: 28 + levelIndex * 18
      });
      ringLabel.textContent = textOr(level.short, String(level.id)) + " " + textOr(level.label);
      elements.svg.appendChild(ringLabel);
    });

    routes.forEach(function (route, routeIndex) {
      var angleDegrees = -90 + routeIndex * (360 / routes.length);
      route._atlasAngle = angleDegrees;
      var radians = angleDegrees * Math.PI / 180;
      var spokeRadius = outerRadius + 10;
      elements.svg.appendChild(makeSvg("line", {
        class: "map-spoke",
        x1: mapCenter.x,
        y1: mapCenter.y,
        x2: mapCenter.x + Math.cos(radians) * spokeRadius,
        y2: mapCenter.y + Math.sin(radians) * spokeRadius,
        stroke: routeColor(route)
      }));

      var labelRadius = outerRadius + 20;
      var labelX = mapCenter.x + Math.cos(radians) * labelRadius;
      var labelY = mapCenter.y + Math.sin(radians) * labelRadius;
      var routeLabel = makeSvg("text", {
        class: "map-route-label",
        x: labelX,
        y: labelY,
        fill: routeTextColor(route),
        "text-anchor": labelX < mapCenter.x - 10 ? "end" : (labelX > mapCenter.x + 10 ? "start" : "middle"),
        "dominant-baseline": "middle"
      });
      routeLabel.textContent = textOr(route.short, textOr(route.label, String(route.id)));
      elements.svg.appendChild(routeLabel);
    });

    elements.svg.appendChild(makeSvg("circle", { class: "map-core", cx: mapCenter.x, cy: mapCenter.y, r: 54 }));
    var coreTitle = makeSvg("text", { class: "map-core-title", x: mapCenter.x, y: mapCenter.y - 3 });
    coreTitle.textContent = compactLabel(textOr(siteMeta.map_center_label, siteMeta.domain), 10);
    var coreSub = makeSvg("text", { class: "map-core-sub", x: mapCenter.x, y: mapCenter.y + 17 });
    coreSub.textContent = "EVIDENCE ATLAS";
    elements.svg.appendChild(coreTitle);
    elements.svg.appendChild(coreSub);

    routes.forEach(function (route) {
      levels.forEach(function (level) {
        var radians = route._atlasAngle * Math.PI / 180;
        var x = mapCenter.x + Math.cos(radians) * level._atlasRadius;
        var y = mapCenter.y + Math.sin(radians) * level._atlasRadius;
        var key = clusterKey(route.id, level.id);
        var group = makeSvg("g", {
          class: "cluster-button",
          role: "button",
          tabindex: "0",
          focusable: "true",
          "aria-pressed": "false",
          "aria-controls": "groupInspector atlas-index",
          "data-route": route.id,
          "data-level": level.id
        });
        setRouteStyle(group, route);

        var nodeTitle = makeSvg("title", {});
        nodeTitle.textContent = textOr(route.label) + "；" + textOr(level.short) + " " + textOr(level.label);
        var hit = makeSvg("circle", { class: "cluster-hit", cx: x, cy: y, r: 22 });
        var mark = makeSvg("circle", { class: "cluster-mark", cx: x, cy: y, r: 17 });
        var count = makeSvg("text", { class: "cluster-count", x: x, y: y + 2 });
        var unit = makeSvg("text", { class: "cluster-unit", x: x, y: y + 14 });
        unit.textContent = "项";
        group.appendChild(nodeTitle);
        group.appendChild(hit);
        group.appendChild(mark);
        group.appendChild(count);
        group.appendChild(unit);

        group.addEventListener("mouseenter", function () { showGroup(route, level, true); });
        group.addEventListener("focus", function () { showGroup(route, level, true); });
        group.addEventListener("click", function () {
          showGroup(route, level, false);
          toggleGroup(route, level, true);
        });
        group.addEventListener("keydown", function (event) {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            showGroup(route, level, false);
            toggleGroup(route, level, true);
          } else if (event.key === "Escape") {
            event.preventDefault();
            clearResultSelection(true);
          }
        });

        elements.svg.appendChild(group);
        clusterNodes.set(key, { node: group, count: count, route: route, level: level });
      });
    });
  }

  function buildMobileGrid() {
    elements.mobileGrid.replaceChildren();
    mobileClusterNodes.clear();

    routes.forEach(function (route, routeIndex) {
      var section = document.createElement("section");
      section.className = "mobile-route-group";
      setRouteStyle(section, route);
      var heading = document.createElement("h4");
      heading.id = "mobile-route-" + routeIndex;
      heading.textContent = textOr(route.label, String(route.id));
      section.setAttribute("aria-labelledby", heading.id);
      var buttonGrid = document.createElement("div");
      buttonGrid.className = "mobile-route-buttons";

      levels.forEach(function (level) {
        var button = document.createElement("button");
        button.type = "button";
        button.className = "mobile-cluster-button";
        button.dataset.route = String(route.id);
        button.dataset.level = String(level.id);
        button.setAttribute("aria-pressed", "false");
        button.setAttribute("aria-controls", "groupInspector atlas-index");
        setRouteStyle(button, route);

        var levelCode = document.createElement("span");
        levelCode.className = "mobile-level";
        levelCode.textContent = textOr(level.short, String(level.id));
        var count = document.createElement("span");
        count.className = "mobile-count";
        var levelName = document.createElement("span");
        levelName.className = "mobile-level-name";
        levelName.textContent = textOr(level.label, "未命名层级");
        button.appendChild(levelCode);
        button.appendChild(count);
        button.appendChild(levelName);

        button.addEventListener("mouseenter", function () { showGroup(route, level, true); });
        button.addEventListener("focus", function () { showGroup(route, level, true); });
        button.addEventListener("click", function () {
          showGroup(route, level, false);
          toggleGroup(route, level, true);
          revealInspectorOnMobile();
        });

        buttonGrid.appendChild(button);
        mobileClusterNodes.set(clusterKey(route.id, level.id), {
          section: section,
          button: button,
          count: count,
          route: route,
          level: level
        });
      });

      section.appendChild(heading);
      section.appendChild(buttonGrid);
      elements.mobileGrid.appendChild(section);
    });
  }

  function revealInspectorOnMobile() {
    if (!window.matchMedia || !window.matchMedia("(max-width: 900px)").matches) return;
    window.requestAnimationFrame(function () {
      var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      elements.inspectorPanel.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start"
      });
    });
  }

  function buildRouteCards() {
    elements.routeCards.replaceChildren();
    elements.routeEmpty.hidden = routes.length > 0;

    routes.forEach(function (route) {
      var article = document.createElement("article");
      article.className = "route-card";
      setRouteStyle(article, route);
      var code = document.createElement("span");
      code.className = "route-code";
      var routeTotal = papers.filter(function (paper) { return String(paper.primary_route) === String(route.id); }).length;
      code.textContent = textOr(route.short, String(route.id)) + " · 总收录 " + routeTotal + " 项";
      var title = document.createElement("h3");
      title.textContent = textOr(route.label, String(route.id));
      var description = document.createElement("p");
      description.textContent = textOr(route.description, "尚未填写路线说明。");
      var question = document.createElement("strong");
      question.textContent = "关键判断：" + textOr(route.question, "核心判断问题尚未说明。");
      var button = document.createElement("button");
      button.type = "button";
      button.className = "button quiet";
      button.dataset.route = String(route.id);
      button.setAttribute("aria-pressed", "false");
      button.textContent = "聚焦这条路线";
      button.addEventListener("click", function () {
        var sameRouteOnly = state.route === String(route.id) && state.level === "all";
        state.route = sameRouteOnly ? "all" : String(route.id);
        state.level = "all";
        syncSelectionControls();
        applyState();
        announce(sameRouteOnly ? "已取消路线聚焦" : "已聚焦路线：" + textOr(route.label));
      });
      article.appendChild(code);
      article.appendChild(title);
      article.appendChild(description);
      article.appendChild(question);
      article.appendChild(button);
      elements.routeCards.appendChild(article);
    });
  }

  function buildTimeline() {
    elements.timeline.replaceChildren();
    var counts = new Map();
    papers.forEach(function (paper) {
      var year = Number(paper.year);
      if (!Number.isInteger(year)) return;
      counts.set(year, (counts.get(year) || 0) + 1);
    });
    var years = Array.from(counts.keys()).sort(function (a, b) { return a - b; });
    elements.timelineEmpty.hidden = years.length > 0;
    if (!years.length) return;
    var maximum = Math.max.apply(null, years.map(function (year) { return counts.get(year); }));
    years.forEach(function (year) {
      var item = document.createElement("div");
      item.className = "year-item";
      item.setAttribute("role", "listitem");
      item.setAttribute("aria-label", year + " 年，纳入 " + counts.get(year) + " 项");
      var count = document.createElement("span");
      count.className = "year-count";
      count.textContent = String(counts.get(year));
      var bar = document.createElement("span");
      bar.className = "year-bar";
      bar.style.setProperty("--year-height", Math.max(16, Math.round(counts.get(year) / maximum * 150)) + "px");
      bar.setAttribute("aria-hidden", "true");
      var label = document.createElement("b");
      label.textContent = String(year);
      item.appendChild(count);
      item.appendChild(bar);
      item.appendChild(label);
      elements.timeline.appendChild(item);
    });
  }

  function contextMatches(paper) {
    if (state.status !== "all" && String(paper.status) !== state.status) return false;
    if (!state.query) return true;

    var route = routeById.get(String(paper.primary_route));
    var level = levelById.get(paperLevel(paper));
    var routeSearchValues = [];
    arrayOr(paper.routes).forEach(function (routeId) {
      var relatedRoute = routeById.get(String(routeId));
      routeSearchValues.push(String(routeId));
      if (relatedRoute) routeSearchValues.push(relatedRoute.label, relatedRoute.description);
    });
    var values = [
      paper.title,
      paper.title_local,
      paper.title_zh,
      paper.short_title,
      paper.venue,
      paper.problem,
      paper.mechanism,
      paper.elevator,
      paper.source_type,
      route && route.label,
      route && route.description,
      level && level.label
    ].concat(
      arrayOr(paper.tags),
      routeSearchValues,
      arrayOr(paper.authors),
      arrayOr(paper.evidence),
      arrayOr(paper.limitations),
      arrayOr(paper.implications)
    );
    return values.join(" ").toLocaleLowerCase().indexOf(state.query.toLocaleLowerCase()) >= 0;
  }

  function resultMatches(paper) {
    if (state.route !== "all" && String(paper.primary_route) !== state.route) return false;
    if (state.level !== "all" && paperLevel(paper) !== state.level) return false;
    return true;
  }

  function getContextPapers() {
    return papers.filter(contextMatches);
  }

  function papersInGroup(list, routeId, levelId) {
    return list.filter(function (paper) {
      return String(paper.primary_route) === String(routeId) && paperLevel(paper) === String(levelId);
    });
  }

  function exactGroupSelected(route, level) {
    return state.route === String(route.id) && state.level === String(level.id);
  }

  function normalizeExactSelection(context) {
    if (state.route === "all" || state.level === "all") return false;
    if (papersInGroup(context, state.route, state.level).length) return false;
    state.route = "all";
    state.level = "all";
    syncSelectionControls();
    return true;
  }

  function toggleGroup(route, level, shouldAnnounce) {
    var same = exactGroupSelected(route, level);
    state.route = same ? "all" : String(route.id);
    state.level = same ? "all" : String(level.id);
    syncSelectionControls();
    applyState();
    if (shouldAnnounce) {
      announce(same
        ? "已取消分组聚焦，显示当前范围内的全部结果"
        : "已选择：" + textOr(route.label) + "，" + textOr(level.label));
    }
  }

  function clearResultSelection(shouldAnnounce) {
    if (state.route === "all" && state.level === "all") return;
    state.route = "all";
    state.level = "all";
    syncSelectionControls();
    applyState();
    if (shouldAnnounce) announce("已取消路线与层级选择");
  }

  function syncSelectionControls() {
    elements.route.value = state.route;
    elements.level.value = state.level;
  }

  function updateRouteCardButtons() {
    elements.routeCards.querySelectorAll("button[data-route]").forEach(function (button) {
      var selected = state.route === button.dataset.route && state.level === "all";
      button.setAttribute("aria-pressed", selected ? "true" : "false");
      button.textContent = selected ? "取消路线聚焦" : "聚焦这条路线";
    });
  }

  function updateClusterNodes(context) {
    var visibleGroups = 0;
    var visibleRoutes = new Set();

    clusterNodes.forEach(function (entry) {
      var items = papersInGroup(context, entry.route.id, entry.level.id);
      var visible = items.length > 0;
      var selected = exactGroupSelected(entry.route, entry.level);
      if (visible) visibleGroups += 1;

      entry.count.textContent = String(items.length);
      entry.node.classList.toggle("is-empty", !visible);
      entry.node.classList.toggle("is-selected", selected);
      entry.node.setAttribute("tabindex", visible ? "0" : "-1");
      entry.node.setAttribute("aria-hidden", visible ? "false" : "true");
      entry.node.setAttribute("aria-pressed", selected ? "true" : "false");
      entry.node.setAttribute("aria-label",
        textOr(entry.route.label) + "，" + textOr(entry.level.short) + " " + textOr(entry.level.label)
        + "，" + items.length + " 项；" + (selected ? "取消此组" : "选择此组"));
    });

    mobileClusterNodes.forEach(function (entry) {
      var items = papersInGroup(context, entry.route.id, entry.level.id);
      var visible = items.length > 0;
      var selected = exactGroupSelected(entry.route, entry.level);
      entry.button.hidden = !visible;
      entry.count.textContent = items.length + " 项";
      entry.button.setAttribute("aria-pressed", selected ? "true" : "false");
      entry.button.setAttribute("aria-label",
        textOr(entry.route.label) + "，" + textOr(entry.level.short) + " " + textOr(entry.level.label)
        + "，" + items.length + " 项；" + (selected ? "取消此组" : "选择此组"));
      if (visible) visibleRoutes.add(String(entry.route.id));
    });

    mobileClusterNodes.forEach(function (entry) {
      entry.section.hidden = !visibleRoutes.has(String(entry.route.id));
    });

    elements.mapEmpty.hidden = visibleGroups > 0;
  }

  function appendInspectorItem(list, paper) {
    var item = document.createElement("li");
    var link = document.createElement("a");
    link.className = "inspector-link";
    link.href = linkFor(paper);
    var title = document.createElement("b");
    title.textContent = titleLocal(paper);
    var facts = document.createElement("span");
    facts.textContent = (paper.year || "年份待核") + " · " + statusLabel(paper);
    link.appendChild(title);
    link.appendChild(facts);
    item.appendChild(link);
    list.appendChild(item);
  }

  function showGroup(route, level, shouldAnnounce) {
    var context = getContextPapers();
    var items = sortedPapers(papersInGroup(context, route.id, level.id));
    previewKey = clusterKey(route.id, level.id);
    elements.inspector.replaceChildren();

    var eyebrow = document.createElement("p");
    eyebrow.className = "eyebrow";
    eyebrow.textContent = textOr(route.short, String(route.id)) + " × " + textOr(level.short, String(level.id));
    var title = document.createElement("h3");
    title.id = "inspectorTitle";
    title.textContent = items.length + " 项研究工作";
    var routeLine = document.createElement("p");
    routeLine.className = "inspector-route";
    routeLine.textContent = textOr(route.label) + " · " + textOr(level.label);
    elements.inspector.appendChild(eyebrow);
    elements.inspector.appendChild(title);
    elements.inspector.appendChild(routeLine);

    if (items.length) {
      var listWrap = document.createElement("div");
      listWrap.className = "inspector-list-wrap";
      listWrap.setAttribute("role", "region");
      listWrap.setAttribute("aria-label", textOr(route.label) + "与" + textOr(level.label) + "的研究工作");
      listWrap.setAttribute("tabindex", "0");
      var list = document.createElement("ul");
      list.className = "inspector-list";
      items.forEach(function (paper) { appendInspectorItem(list, paper); });
      listWrap.appendChild(list);
      elements.inspector.appendChild(listWrap);
    } else {
      var empty = document.createElement("p");
      empty.textContent = "当前搜索与出版状态下，这个组没有条目。";
      elements.inspector.appendChild(empty);
    }

    var actions = document.createElement("div");
    actions.className = "inspector-actions";
    var toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "button quiet";
    toggle.disabled = items.length === 0;
    toggle.textContent = exactGroupSelected(route, level) ? "取消聚焦" : "聚焦此组";
    toggle.addEventListener("click", function () { toggleGroup(route, level, true); });
    var jump = document.createElement("a");
    jump.className = "button primary";
    jump.href = "#atlas-index";
    jump.textContent = exactGroupSelected(route, level) ? "查看此组文献" : "聚焦此组并查看文献";
    jump.setAttribute("aria-disabled", items.length ? "false" : "true");
    if (!items.length) {
      jump.removeAttribute("href");
    } else {
      jump.addEventListener("click", function () {
        if (!exactGroupSelected(route, level)) {
          state.route = String(route.id);
          state.level = String(level.id);
          syncSelectionControls();
          applyState();
        }
      });
    }
    actions.appendChild(toggle);
    actions.appendChild(jump);
    elements.inspector.appendChild(actions);

    if (shouldAnnounce) announce("已预览：" + textOr(route.label) + "，" + textOr(level.label) + "，" + items.length + " 项");
  }

  function refreshPreview() {
    if (!previewKey) return;
    var parts = previewKey.split("::");
    var route = routeById.get(parts[0]);
    var level = levelById.get(parts.slice(1).join("::"));
    if (route && level) showGroup(route, level, false);
  }

  function renderActiveFilters() {
    elements.activeFilters.replaceChildren();
    var labels = [];
    if (state.query) labels.push("搜索：" + state.query);
    if (state.status !== "all") {
      labels.push({
        "peer-reviewed": "同行评议",
        preprint: "预印本",
        "official-report": "官方报告或标准"
      }[state.status] || state.status);
    }
    if (state.route !== "all") labels.push("路线：" + textOr((routeById.get(state.route) || {}).label, state.route));
    if (state.level !== "all") labels.push(textOr(siteMeta.axis_label, "层级") + "：" + textOr((levelById.get(state.level) || {}).label, state.level));
    if (!labels.length) labels.push("当前显示全部收录");

    labels.forEach(function (label) {
      var chip = document.createElement("span");
      chip.className = "filter-chip";
      chip.textContent = label;
      elements.activeFilters.appendChild(chip);
    });
  }

  function createPaperLink(paper, route) {
    var item = document.createElement("li");
    item.dataset.paperId = String(paper.id);
    var link = document.createElement("a");
    link.className = "paper-label-link";
    link.href = linkFor(paper);
    setRouteStyle(link, route);
    var titles = document.createElement("span");
    titles.className = "paper-label-titles";
    var local = document.createElement("b");
    local.textContent = titleLocal(paper);
    var original = document.createElement("span");
    original.textContent = textOr(paper.title, titleLocal(paper));
    titles.appendChild(local);
    if (original.textContent !== local.textContent) titles.appendChild(original);
    var summary = document.createElement("span");
    summary.className = "paper-label-summary";
    summary.textContent = textOr(paper.elevator, textOr(paper.problem, "查看问题、机制、证据与局限。"));
    titles.appendChild(summary);
    var facts = document.createElement("span");
    facts.className = "paper-label-facts";
    var year = document.createElement("strong");
    year.textContent = String(paper.year || "—");
    var status = document.createElement("span");
    status.textContent = statusLabel(paper);
    var evidence = document.createElement("span");
    evidence.textContent = "证据 " + textOr(paper.evidence_level, "待核");
    var tier = document.createElement("span");
    tier.textContent = { core: "核心深读", bridge: "桥接工作", background: "背景材料" }[paper.tier] || "阅读层级待核";
    facts.appendChild(year);
    facts.appendChild(status);
    facts.appendChild(evidence);
    facts.appendChild(tier);
    link.appendChild(titles);
    link.appendChild(facts);
    item.appendChild(link);
    return item;
  }

  function renderIndex(result) {
    elements.paperIndex.replaceChildren();
    elements.indexEmpty.hidden = result.length > 0;
    elements.resultSummary.textContent = "显示 " + result.length + " / " + papers.length + " 项。";
    if (!result.length) return;

    var routeOrder = routes.map(function (route) { return String(route.id); });
    var grouped = new Map();
    result.forEach(function (paper) {
      var routeId = String(paper.primary_route || "unclassified");
      if (!grouped.has(routeId)) grouped.set(routeId, []);
      grouped.get(routeId).push(paper);
    });
    grouped.forEach(function (_, routeId) {
      if (routeOrder.indexOf(routeId) < 0) routeOrder.push(routeId);
    });

    routeOrder.forEach(function (routeId) {
      var routeItems = grouped.get(routeId) || [];
      if (!routeItems.length) return;
      var route = routeById.get(routeId) || {
        id: routeId,
        label: "未分类路线",
        short: "未分类",
        color: "#64787f",
        text_color: "#4c5d63"
      };
      var article = document.createElement("article");
      article.className = "index-route";
      setRouteStyle(article, route);
      var header = document.createElement("header");
      var heading = document.createElement("h3");
      heading.textContent = textOr(route.label, routeId);
      var routeCount = document.createElement("span");
      routeCount.textContent = routeItems.length + " 项";
      header.appendChild(heading);
      header.appendChild(routeCount);
      article.appendChild(header);

      var levelOrder = levels.map(function (level) { return String(level.id); });
      var byLevel = new Map();
      routeItems.forEach(function (paper) {
        var levelId = paperLevel(paper) || "unclassified";
        if (!byLevel.has(levelId)) byLevel.set(levelId, []);
        byLevel.get(levelId).push(paper);
      });
      byLevel.forEach(function (_, levelId) {
        if (levelOrder.indexOf(levelId) < 0) levelOrder.push(levelId);
      });

      levelOrder.forEach(function (levelId) {
        var levelItems = byLevel.get(levelId) || [];
        if (!levelItems.length) return;
        var level = levelById.get(levelId) || { id: levelId, short: "—", label: "未分类层级" };
        var section = document.createElement("section");
        section.className = "index-level";
        var levelHeading = document.createElement("h4");
        var code = document.createElement("b");
        code.textContent = textOr(level.short, String(level.id));
        var name = document.createElement("span");
        name.textContent = textOr(level.label, "未分类层级");
        var count = document.createElement("small");
        count.textContent = levelItems.length + " 项";
        levelHeading.appendChild(code);
        levelHeading.appendChild(name);
        levelHeading.appendChild(count);
        var list = document.createElement("ul");
        list.className = "paper-label-list";
        sortedPapers(levelItems).forEach(function (paper) { list.appendChild(createPaperLink(paper, route)); });
        section.appendChild(levelHeading);
        section.appendChild(list);
        article.appendChild(section);
      });
      elements.paperIndex.appendChild(article);
    });
  }

  function applyState() {
    var context = getContextPapers();
    var selectionCleared = normalizeExactSelection(context);
    var result = context.filter(resultMatches);
    updateClusterNodes(context);
    updateRouteCardButtons();
    renderIndex(result);
    renderActiveFilters();
    elements.contextCount.textContent = "当前范围：" + context.length + " 项；聚焦结果：" + result.length + " 项。";
    elements.clearSelection.hidden = state.route === "all" && state.level === "all";
    refreshPreview();
    if (selectionCleared) announce("原分组在当前范围内已为空，已自动取消聚焦");
  }

  function announce(message) {
    elements.live.textContent = "";
    window.setTimeout(function () { elements.live.textContent = message; }, 20);
  }

  function bindControls() {
    elements.controls.addEventListener("submit", function (event) { event.preventDefault(); });
    elements.search.addEventListener("input", function (event) {
      state.query = event.target.value.trim();
      applyState();
    });
    elements.status.addEventListener("change", function (event) {
      state.status = event.target.value;
      applyState();
      announce("出版状态上下文已更新");
    });
    elements.route.addEventListener("change", function (event) {
      state.route = event.target.value;
      applyState();
      announce("结果路线已更新");
    });
    elements.level.addEventListener("change", function (event) {
      state.level = event.target.value;
      applyState();
      announce("结果层级已更新");
    });
    elements.reset.addEventListener("click", function () {
      state.query = "";
      state.status = "all";
      state.route = "all";
      state.level = "all";
      elements.search.value = "";
      elements.status.value = "all";
      syncSelectionControls();
      applyState();
      announce("已重置筛选");
    });
    elements.clearSelection.addEventListener("click", function () { clearResultSelection(true); });
  }

  applyMetadata();
  populateFilters();
  buildMap();
  buildMobileGrid();
  buildRouteCards();
  buildTimeline();
  bindControls();
  applyState();
}());
