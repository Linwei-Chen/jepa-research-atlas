/* build-research-atlas managed asset: reader-ui-v2 */
(function () {
  "use strict";

  var rawMeta = window.ATLAS_META && typeof window.ATLAS_META === "object" ? window.ATLAS_META : {};
  var siteMeta = rawMeta.meta && typeof rawMeta.meta === "object" ? rawMeta.meta : rawMeta;
  var routes = Array.isArray(rawMeta.routes) ? rawMeta.routes : [];
  var levels = Array.isArray(rawMeta.levels) ? rawMeta.levels : [];
  var papers = Array.isArray(window.PAPERS) ? window.PAPERS : [];
  var routeById = new Map(routes.map(function (route) { return [String(route.id), route]; }));
  var levelById = new Map(levels.map(function (level) { return [String(level.id), level]; }));
  var paperById = new Map(papers.map(function (paper) { return [String(paper.id), paper]; }));
  var svgNamespace = "http://www.w3.org/2000/svg";

  var elements = {
    article: document.getElementById("paperArticle"),
    notFound: document.getElementById("paperNotFound"),
    notFoundReason: document.getElementById("notFoundReason"),
    detailNav: document.getElementById("detailNav"),
    sectionNav: document.getElementById("paperSectionNav"),
    route: document.getElementById("paperRoute"),
    title: document.getElementById("paperTitle"),
    titleLocal: document.getElementById("paperTitleLocal"),
    elevator: document.getElementById("paperElevator"),
    facts: document.getElementById("paperFacts"),
    problem: document.getElementById("paperProblem"),
    mechanism: document.getElementById("paperMechanism"),
    diagram: document.getElementById("mechanismDiagram"),
    steps: document.getElementById("mechanismSteps"),
    evidence: document.getElementById("paperEvidence"),
    evidenceLocationsBlock: document.getElementById("paperEvidenceLocationsBlock"),
    evidenceLocations: document.getElementById("paperEvidenceLocations"),
    limitations: document.getElementById("paperLimitations"),
    implications: document.getElementById("paperImplications"),
    sourceNote: document.getElementById("paperSourceNote"),
    versionBlock: document.getElementById("paperVersionBlock"),
    versionNote: document.getElementById("paperVersionNote"),
    links: document.getElementById("paperLinks"),
    relatedBlock: document.getElementById("relatedBlock"),
    related: document.getElementById("relatedPapers"),
    footerTitle: document.getElementById("detailFooterTitle")
  };

  function textOr(value, fallback) {
    return typeof value === "string" && value.trim() ? value.trim() : (fallback || "");
  }

  function arrayOr(value) {
    return Array.isArray(value) ? value : [];
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

  function statusLabel(paper) {
    if (paper.status === "peer-reviewed") return "同行评议";
    if (paper.status === "preprint") return "预印本";
    if (paper.status === "official-report") return "官方报告或标准";
    if (["official-report", "standard", "white-paper"].indexOf(paper.source_type) >= 0) return "官方报告或标准";
    return "状态待核";
  }

  function tierLabel(value) {
    return { core: "核心深读", bridge: "桥接工作", background: "背景材料" }[value] || "层级待核";
  }

  function verificationLabel(value) {
    return {
      discovered: "已发现",
      "metadata-checked": "元数据已核验",
      "abstract-checked": "摘要已核验",
      "full-text-checked": "全文已核验"
    }[value] || textOr(value);
  }

  function evidenceVectorLabel(value) {
    if (!value || typeof value !== "object" || Array.isArray(value)) return "";
    return ["V", "D", "P", "Q"].map(function (axis) {
      return value[axis] === undefined || value[axis] === null ? "" : String(value[axis]).trim();
    }).filter(Boolean).join(" · ");
  }

  function createSvg(tag, attributes) {
    var node = document.createElementNS(svgNamespace, tag);
    Object.keys(attributes || {}).forEach(function (name) {
      node.setAttribute(name, String(attributes[name]));
    });
    return node;
  }

  function addFact(label, value) {
    if (!textOr(String(value || ""))) return;
    var row = document.createElement("div");
    var term = document.createElement("dt");
    term.textContent = label;
    var description = document.createElement("dd");
    description.textContent = String(value);
    row.appendChild(term);
    row.appendChild(description);
    elements.facts.appendChild(row);
  }

  function fillList(list, values, fallback) {
    list.replaceChildren();
    var items = arrayOr(values);
    if (!items.length) items = [fallback];
    items.forEach(function (value) {
      var item = document.createElement("li");
      item.textContent = textOr(String(value), fallback);
      list.appendChild(item);
    });
  }

  function splitDiagramText(value, limit) {
    var input = textOr(value, "未命名步骤");
    var lines = [];
    var current = "";
    var units = 0;
    Array.from(input).forEach(function (character) {
      var size = character.charCodeAt(0) > 255 ? 2 : 1;
      if (current && units + size > limit) {
        lines.push(current.trim());
        current = "";
        units = 0;
      }
      current += character;
      units += size;
    });
    if (current.trim()) lines.push(current.trim());

    if (lines.length > 3) {
      lines.splice(3);
      lines[2] = lines[2].replace(/[\s，。、；：,.!?]+$/, "") + "…";
    }
    return lines;
  }

  function renderDiagram(steps) {
    elements.diagram.replaceChildren();
    var values = steps.length ? steps : ["输入", "处理", "输出"];
    var boxWidth = 176;
    var boxHeight = 108;
    var gap = 52;
    var margin = 32;
    var width = Math.max(720, margin * 2 + values.length * boxWidth + (values.length - 1) * gap);
    var height = 205;
    elements.diagram.setAttribute("viewBox", "0 0 " + width + " " + height);
    elements.diagram.setAttribute("width", String(width));
    elements.diagram.setAttribute("height", String(height));
    elements.diagram.style.width = width + "px";
    elements.diagram.style.maxWidth = "none";

    var title = createSvg("title", { id: "diagramTitle" });
    title.textContent = "机制步骤解释性示意图";
    var description = createSvg("desc", { id: "diagramDesc" });
    description.textContent = values.map(function (step, index) { return "步骤" + (index + 1) + "：" + step; }).join("；");
    elements.diagram.appendChild(title);
    elements.diagram.appendChild(description);

    var definitions = createSvg("defs", {});
    var marker = createSvg("marker", {
      id: "arrowhead",
      markerWidth: "8",
      markerHeight: "8",
      refX: "6",
      refY: "3",
      orient: "auto",
      markerUnits: "strokeWidth"
    });
    marker.appendChild(createSvg("path", { d: "M0,0 L0,6 L7,3 z", fill: "#c6483e" }));
    definitions.appendChild(marker);
    elements.diagram.appendChild(definitions);

    values.forEach(function (step, index) {
      var x = margin + index * (boxWidth + gap);
      var y = 48;
      if (index < values.length - 1) {
        elements.diagram.appendChild(createSvg("line", {
          class: "diagram-arrow",
          x1: x + boxWidth + 8,
          y1: y + boxHeight / 2,
          x2: x + boxWidth + gap - 10,
          y2: y + boxHeight / 2
        }));
      }

      elements.diagram.appendChild(createSvg("rect", {
        class: "diagram-box",
        x: x,
        y: y,
        width: boxWidth,
        height: boxHeight,
        rx: "2"
      }));

      var number = createSvg("text", { class: "diagram-number", x: x + boxWidth / 2, y: y + 20 });
      number.textContent = "步骤 " + String(index + 1).padStart(2, "0");
      elements.diagram.appendChild(number);

      var label = createSvg("text", { class: "diagram-step", x: x + boxWidth / 2, y: y + 48 });
      splitDiagramText(String(step), 16).forEach(function (line, lineIndex) {
        var tspan = createSvg("tspan", {
          x: x + boxWidth / 2,
          dy: lineIndex === 0 ? "0" : "18"
        });
        tspan.textContent = line;
        label.appendChild(tspan);
      });
      elements.diagram.appendChild(label);
    });
  }

  function safeHref(value) {
    var href = textOr(value);
    if (!href) return "";
    if (/^https?:/i.test(href)) return href;
    if (/^[a-z][a-z0-9+.-]*:/i.test(href)) return "";
    var localPath = href.split(/[?#]/, 1)[0];
    try {
      for (var round = 0; round < 4; round += 1) {
        var decoded = decodeURIComponent(localPath);
        if (decoded === localPath) break;
        localPath = decoded;
      }
    } catch (error) {
      return "";
    }
    if (/%[0-9a-f]{2}/i.test(localPath)) return "";
    if (/^[a-z][a-z0-9+.-]*:/i.test(localPath)) return "";
    localPath = localPath.replace(/\\/g, "/");
    if (/^\//.test(localPath) || localPath.split("/").indexOf("..") >= 0) return "";
    return href;
  }

  function addSourceLink(label, value, seen) {
    var href = safeHref(value);
    if (!href || seen.has(href)) return;
    seen.add(href);
    var link = document.createElement("a");
    link.className = "button quiet";
    link.href = href;
    link.textContent = label;
    if (/^https?:/i.test(href)) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    elements.links.appendChild(link);
  }

  function renderSources(paper) {
    elements.links.replaceChildren();
    var seen = new Set();
    addSourceLink("一手主入口", paper.paper_url, seen);
    addSourceLink("PDF", paper.pdf_url, seen);
    addSourceLink("预印本", paper.preprint_url, seen);
    addSourceLink("官方报告", paper.official_report_url, seen);
    addSourceLink("项目页", paper.project_url, seen);
    addSourceLink("代码", paper.code_url, seen);
    addSourceLink("数据", paper.data_url, seen);
    addSourceLink("官方图表", paper.figure_url, seen);

    if (!elements.links.children.length) {
      var missing = document.createElement("p");
      missing.textContent = "没有可安全显示的一手链接。";
      elements.links.appendChild(missing);
    }
  }

  function renderEvidenceLocations(values) {
    elements.evidenceLocations.replaceChildren();
    var locations = arrayOr(values);

    locations.forEach(function (entry) {
      var item = document.createElement("li");
      if (typeof entry === "string") {
        item.textContent = textOr(entry);
      } else if (entry && typeof entry === "object" && !Array.isArray(entry)) {
        var claim = textOr(entry.claim);
        var details = [textOr(entry.source), textOr(entry.location)].filter(Boolean).join(" · ");
        var href = safeHref(entry.url);
        if (claim) {
          var claimNode = document.createElement("b");
          claimNode.textContent = claim;
          item.appendChild(claimNode);
        }
        if (details) {
          var detailNode = document.createElement("span");
          detailNode.textContent = details;
          item.appendChild(detailNode);
        }
        if (href) {
          var link = document.createElement("a");
          link.href = href;
          link.textContent = "打开定位来源";
          if (/^https?:/i.test(href)) {
            link.target = "_blank";
            link.rel = "noopener noreferrer";
          }
          item.appendChild(link);
        }
      }
      if (item.textContent.trim()) elements.evidenceLocations.appendChild(item);
    });
    elements.evidenceLocationsBlock.hidden = elements.evidenceLocations.children.length === 0;
  }

  function renderRelated(paper) {
    elements.related.replaceChildren();
    var related = arrayOr(paper.related_ids).map(function (id) { return paperById.get(String(id)); }).filter(Boolean);
    elements.relatedBlock.hidden = related.length === 0;
    related.forEach(function (item) {
      var row = document.createElement("li");
      var link = document.createElement("a");
      link.href = "paper.html?id=" + encodeURIComponent(String(item.id));
      link.textContent = titleLocal(item) + "（" + (item.year || "年份待核") + "）";
      row.appendChild(link);
      elements.related.appendChild(row);
    });
  }

  function renderPaper(paper) {
    var route = routeById.get(String(paper.primary_route)) || {
      id: String(paper.primary_route || "unclassified"),
      label: "未分类路线",
      color: "#137c78",
      text_color: "#135e5a"
    };
    var level = levelById.get(paperLevel(paper)) || { label: "未分类层级", short: "—" };
    var local = titleLocal(paper);
    var original = textOr(paper.title, local);
    var siteTitle = textOr(siteMeta.title, "研究地图");

    document.documentElement.lang = textOr(siteMeta.language, "zh-CN");
    document.documentElement.style.setProperty("--route-color", routeColor(route));
    document.documentElement.style.setProperty("--route-text", routeTextColor(route));
    document.title = original + "｜" + siteTitle;
    elements.footerTitle.textContent = siteTitle;
    elements.route.textContent = textOr(route.label, String(route.id)) + " · " + textOr(level.short) + " " + textOr(level.label);
    elements.title.textContent = original;
    elements.titleLocal.textContent = local === original ? "" : local;
    elements.titleLocal.hidden = local === original;
    elements.elevator.textContent = textOr(paper.elevator, "本条目尚缺少一句话定位。");
    elements.problem.textContent = textOr(paper.problem, "研究问题尚未说明。");
    elements.mechanism.textContent = textOr(paper.mechanism, "方法机制尚未说明。");
    elements.sourceNote.textContent = textOr(paper.source_note, "来源与核验范围尚未说明。");
    elements.versionNote.textContent = textOr(paper.version_note);
    elements.versionBlock.hidden = !elements.versionNote.textContent;

    elements.facts.replaceChildren();
    addFact("年份", paper.year || "待核");
    addFact("来源", textOr(paper.venue, "待核"));
    addFact("出版状态", statusLabel(paper));
    addFact("来源类型", textOr(paper.source_type, "待核"));
    addFact("阅读层级", tierLabel(paper.tier));
    addFact("证据等级", textOr(paper.evidence_level, "待核"));
    addFact("核验深度", verificationLabel(paper.verification_state));
    addFact("来源层级", textOr(paper.source_tier));
    addFact("证据向量", evidenceVectorLabel(paper.evidence_vector));
    addFact(textOr(siteMeta.axis_label, "层级"), textOr(level.label, "待核"));
    addFact("时间范围", textOr(paper.time_horizon));
    if (arrayOr(paper.tags).length) addFact("主题标签", paper.tags.join("、"));
    if (arrayOr(paper.authors).length) addFact("作者", paper.authors.join("、"));
    if (textOr(paper.doi)) addFact("DOI", paper.doi);

    var steps = arrayOr(paper.mechanism_steps).map(function (step) { return textOr(String(step)); }).filter(Boolean);
    renderDiagram(steps);
    fillList(elements.steps, steps, "机制步骤尚未提供。");
    fillList(elements.evidence, paper.evidence, "直接证据尚未提供。");
    renderEvidenceLocations(paper.evidence_locations);
    fillList(elements.limitations, paper.limitations, "局限尚未提供。");
    fillList(elements.implications, paper.implications, "地图意义尚未提供。");
    renderSources(paper);
    renderRelated(paper);

    elements.notFound.hidden = true;
    elements.article.hidden = false;
    elements.detailNav.hidden = false;
    elements.sectionNav.hidden = false;
  }

  function showNotFound(reason) {
    var title = textOr(siteMeta.title, "研究地图");
    document.title = "条目未找到｜" + title;
    elements.footerTitle.textContent = title;
    elements.notFoundReason.textContent = reason;
    elements.article.hidden = true;
    elements.notFound.hidden = false;
    elements.detailNav.hidden = true;
    elements.sectionNav.hidden = true;
  }

  var query = new URLSearchParams(window.location.search);
  var id = textOr(query.get("id"));
  if (!id) {
    showNotFound("链接缺少条目标识，请从文献索引重新进入。");
  } else if (!paperById.has(id)) {
    showNotFound("数据中没有 ID 为“" + id + "”的条目，可能尚未编译或链接已经失效。");
  } else {
    renderPaper(paperById.get(id));
  }
}());
