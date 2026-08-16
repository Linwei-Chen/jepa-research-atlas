# JEPA研究地图

<!-- generated-complete-readme:v1 -->
> 从潜在空间预测到可规划世界模型的可审计全景

**完整文字版综述：** 本 README 已直接收录领域全貌、综合报告、检索与证据审计，以及全部 50 项工作的逐篇解读。无需打开网页即可阅读全部研究内容；[在线地图](https://linwei-chen.github.io/jepa-research-atlas/)仅提供可选的可视化筛选与机制图。

[在线地图](https://linwei-chen.github.io/jepa-research-atlas/) · [结构化真源](https://github.com/Linwei-Chen/jepa-research-atlas/blob/main/atlas.json) · [原始综合报告](docs/REPORT.md) · [原始检索审计](docs/SEARCH_AUDIT.md)

## 阅读导航

1. [研究全貌](#研究全貌)
2. [路线与层级](#路线与层级)
3. [综合报告](#综合报告)
4. [全部研究工作](#全部研究工作)
5. [检索与证据审计](#检索与证据审计)
6. [复现与使用边界](#复现与使用边界)

<a id="研究全貌"></a>
## 研究全貌

**领域概览：** JEPA把学习目标从像素或离散符号重建移到表示空间：编码上下文，预测目标表示，并通过非对称教师、显式正则或结构约束避免坍塌。领域已从图像遮挡预测扩展到视频动态、动作条件规划和多模态语义，但可预测性不等于因果性，表征质量也不自动保证长期闭环控制。地图用六条主路线和五级自主性阶梯区分这些进展。

**研究领域：** JEPA

**范围与纳排边界：** 覆盖截至2026-08-12可从一手入口核验的JEPA理论、图像、视频、动作条件世界模型、跨域迁移与评测反证；正式发表优先，关键预印本单列。不声称穷尽所有未使用JEPA名称的潜在预测方法。

**目标读者：** 研究人员与具备机器学习基础的专业读者

**内容语言：** zh-CN

| 维度 | 数值 |
|---|---|
| 纳入成果 | 50 项 |
| 年份范围 | 2022—2026 |
| 研究路线 | 6 条 |
| 分析层级 | 5 个 |
| 覆盖等级 | L2 |
| 资料截止 | 2026-08-12 |
| 第二轴 | 预测对象与系统自主性 |

<a id="路线与层级"></a>
## 路线与层级

| 路线（ID） | 收录 | 判定问题 | 说明 |
|---|---:|---|---|
| 理论与目标函数 / 理论（`theory-objectives`） | 7 | 这项工作是否主要解释JEPA为什么学习、何时失效或如何稳定训练？ | 定义JEPA原则、分析潜在预测的归纳偏置、坍塌条件及与重建范式的差异。 |
| 图像与静态表征 / 图像（`image-representation`） | 8 | 主要贡献是否发生在单幅图像或静态视图的表示预测？ | 从图像上下文预测被遮挡区域或变换后视图的潜在表示，服务于通用视觉表征。 |
| 视频与时空动力学 / 视频（`video-spatiotemporal`） | 5 | 工作是否主要从视频或连续观测学习时空预测，而非直接闭环控制？ | 利用时序遮挡、连续视图或长视频结构学习动作无关或弱动作条件的动态表示。 |
| 动作条件与控制 / 控制（`action-control`） | 9 | 动作是否进入预测模型，且模型是否支持规划、策略学习或闭环行为？ | 显式以动作或策略为条件预测未来潜在状态，并用于规划、强化学习或机器人控制。 |
| 多模态与跨域迁移 / 跨域（`cross-domain`） | 15 | 主要创新是否是针对非通用自然视觉数据重构上下文、目标或掩码？ | 把联合嵌入预测迁移到音频、表格、图、点云、遥感、生理信号、语言或视觉语言。 |
| 评测、反证与边界 / 评测（`evaluation-evidence`） | 6 | 首要贡献是否是比较、诊断或证伪，而不是提出新的主干JEPA？ | 直接比较JEPA与重建、生成或其他潜在模型，或揭示鲁棒性、几何、长期规划和评测缺口。 |

| 层级 | 说明 |
|---|---|
| 架构与目标原则 / 原则（`0`） | 回答预测什么、如何避免坍塌，以及潜在预测相对重建的归纳偏置。 |
| 静态表征预测 / 静态（`1`） | 从图像、表格、图或多模态静态上下文预测目标表示。 |
| 无动作时空动力学 / 时空（`2`） | 从视频或时间序列预测未来或被遮挡表示，但不依赖可执行动作。 |
| 动作条件潜在动力学 / 动作（`3`） | 以动作、变换或策略为条件预测未来潜在状态。 |
| 闭环规划与控制 / 闭环（`4`） | 把潜在预测接入目标代价、搜索或策略，产生可执行行为并接受闭环评测。 |

<a id="综合报告"></a>
## 综合报告

### JEPA：领域全貌与路线地图

> 检索截止：2026-08-12；完成等级：L2；收录50个规范工作族。

#### 范围合同

本地图回答三个问题：JEPA的共同机制是什么；它如何从静态图像表示扩展到视频、动作条件世界模型和闭环控制；各路线的直接证据、失败边界和研究空白是什么。受众为具备机器学习基础的研究人员。

纳入对象以Joint Embedding Predictive Architectures为核心，并允许少量不可替代的机制桥接、评测和反证工作。严格判据是存在从上下文表征到目标表征的预测器，主要学习目标位于联合嵌入或潜在空间，并能说明抗坍塌机制。仅复用JEPA编码器、只做像素重建、纯对比学习、普通潜在动力学或与缩写同名但机制无关的工作不进入核心地图。正式论文集、期刊、DOI、OpenReview、arXiv和官方项目页是一手证据；通用搜索只用于发现。

“全面”采用可操作定义：六条路线均覆盖奠基或代表工作、前沿入口及评测或反证；完成工作族去重、前后向引用补漏、两轮低于5%的边际新增检查、核心条目深读和关键主张审计。它不意味着穷尽所有未使用JEPA名称的潜在预测长尾。

#### 一句话结论

JEPA是一类“在表示空间预测”的训练架构，而不是单一模型或能力保证。它已经形成从图像语义表征、视频时空建模到动作条件规划和跨域迁移的完整研究谱系；但可预测性不自动等于语义、因果、长期滚动稳定性或真实闭环安全。

#### 领域全貌

典型JEPA包含四个功能部件：上下文编码器提取已见信息，目标编码器产生要预测的表示，预测器由上下文及可选条件推断目标表示，抗坍塌机制防止所有输入映射为常数。不同工作真正分歧的不是是否使用“JEPA”名称，而是预测目标是什么、条件变量是否包含时间和动作、目标编码器如何更新、如何处理一对多未来，以及评价是否进入决策闭环。

数据集共50项：32项同行评议成果、17项预印本、1份官方报告；19项为核心锚点、26项为桥接工作、5项为背景或边界条目。35项完成正文级核验，15项完成摘要和元数据核验。年份分布为2022年2项、2023年3项、2024年7项、2025年17项、2026年21项，显示研究在2025年以后迅速分化。

证据向量用V/D/P/Q四维表达核验深度、主张直接性、出版状态和研究设计质量。它用于限定主张强度，不用于把不同任务的论文压成单一排行榜。详情页同时给出问题、机制步骤、证据、限制、影响和一手入口。

#### 路线与层级

主要路线按论文的首要贡献互斥归类；`atlas.json`中的关联路线只用于展示交叉影响，不重复计数。

| 路线 | 数量 | 核心问题 | 代表锚点 | 当前边界 |
|---|---:|---|---|---|
| 理论与目标函数 | 7 | 为什么潜在预测能学习、何时坍塌、该匹配何种分布 | JEPA蓝图、慢特征反例、高影响特征偏置、LeJEPA、SALT | 理论多依赖线性或分布假设，不能直接保证语义和非线性可识别性 |
| 图像与静态表征 | 8 | 如何用局部上下文预测静态目标表示 | I-JEPA、C-JEPA、StoP、CAPI、TC-JEPA | 不包含时间与动作；语言条件或聚类目标会引入额外监督和偏差 |
| 视频与时空动力学 | 5 | 如何从视频块学习运动和时序表示 | MC-JEPA、V-JEPA、seq-JEPA、V-JEPA 2.1 | 最强V-JEPA配方主要是非因果掩码补全，长期未来滚动证据有限 |
| 动作条件与控制 | 9 | 如何预测候选动作后的潜在状态并用于规划 | DINO-WM、无奖励离线规划、V-JEPA 2、TD-JEPA、HWM | 离线、仿真和实机证据不可互换；目标图、短视距和训练支持限制明显 |
| 多模态与跨域迁移 | 15 | 结构化遮挡和潜在目标能否迁移到新模态 | AnySat、Graph-JEPA、VL-JEPA、PhysioJEPA、NeuroVFM | 机制差异大，常与对比、生成或任务监督混合；真实部署证据不均 |
| 评测、反证与边界 | 6 | 哪个组件真正有效，在哪些任务或协议下失效 | JEPA-WM设计审计、JEDi、分层规划反例、机器人潜在空间审计 | 独立复现仍少，统一协议、预算核算和多种子报告不足 |

第二轴是五级“预测对象与系统自主性”，不是成熟度排行：

| 层级 | 数量 | 操作定义 | 典型误读 |
|---|---:|---|---|
| 0 架构与目标原则 | 5 | 概念蓝图、目标函数、可识别性或抗坍塌分析 | 理论解释被写成真实系统验证 |
| 1 静态表征预测 | 17 | 在同一样本或结构中预测缺失目标表示 | 静态语义表征被称为完整世界模型 |
| 2 无动作时空动力学 | 13 | 预测序列或时空结构，但不以智能体动作作为条件 | 视频掩码补全被写成因果未来模拟 |
| 3 动作条件潜在动力学 | 2 | 明确以动作或变换参数预测潜在状态变化 | 一步动作条件被写成可靠长期规划 |
| 4 闭环规划与控制 | 13 | 模型进入反复感知、规划、执行和再感知流程 | 仿真、离线得分和真实机器人成功率被混为一谈 |

#### 时间线与阶段转折

- 2022年：LeCun的官方报告提出JEPA和分层自主智能蓝图；慢特征实验同时给出最早的捷径反例。前者是研究纲领，不是实验论文或潜在预测优先权证明。
- 2023年：I-JEPA在CVPR建立静态图像主干，A-JEPA和MC-JEPA把潜在预测扩展到音频与运动内容。此阶段的中心仍是表征学习。
- 2024年：V-JEPA把联合嵌入预测系统化扩展到视频，并由TMLR正式接收；C-JEPA、噪声特征理论、StoP和Brain-JEPA分别推进坍塌、归纳偏置、空间不确定性与跨域验证。
- 2025年：研究明显分叉。DINO-WM和无奖励离线规划把潜在动力学接入决策；AnySat、M3-JEPA、Graph-JEPA、ECG-JEPA等形成结构化和跨模态正式分支；V-JEPA 2把大规模视频预训练与动作条件后训练连接起来。
- 2026年：正式成果覆盖TD-JEPA、VL-JEPA、LLM-JEPA、PhysioJEPA、X-JEPA、NeuroVFM和AD-L-JEPA；HWM、LeWorldModel、V-JEPA 2.1等预印本探索分层实机规划、长时程模型和更大视频模型。与此同时，JEPA-WM审计、分层规划反例和SIGReg反例使评价重心从“能否工作”转向“为何工作、何时失效”。

#### 各路线的机制与证据

##### 理论与抗坍塌

[JEPA蓝图](https://openreview.net/forum?id=BZ5a1r-kVsf)把联合嵌入预测置于能量模型、记忆、代价和层级规划体系中。它奠定了问题框架，但没有受控实验。[高影响特征偏置](https://proceedings.neurips.cc/paper_files/paper/2024/hash/a600f0f740605205133553cb74a1c107-Abstract-Conference.html)与[联合嵌入对照重建](https://openreview.net/forum?id=UOaLsgn5wb)从理论和受控实验解释潜在预测为何可能忽略高幅值无关特征；结论仍依赖模型与增强假设。

抗坍塌并无唯一解。C-JEPA加入方差和协方差约束；LeJEPA用随机投影分布正则尝试移除EMA与停止梯度；SALT使用冻结的像素重建教师训练视频潜在预测学生。这些结果说明“EMA天然解决坍塌”或“JEPA天然不依赖生成信息”都过于绝对。

##### 图像与静态表征

[I-JEPA](https://openaccess.thecvf.com/content/CVPR2023/html/Assran_Self-Supervised_Learning_From_Images_With_a_Joint-Embedding_Predictive_Architecture_CVPR_2023_paper.html)从分布式可见上下文预测多个较大目标块的教师表示，不依赖像素重建和手工强增强。它确立了语义潜在目标的工程范式，但仍是静态空间补全。StoP把位置编码改为随机分布以减弱对精确坐标的过拟合；CAPI通过在线聚类把连续目标改为局部语义类别；TC-JEPA用文本条件缓解被遮挡内容的一对多不确定性。后两者同时引入聚类或语言先验，因此不再是纯视觉、纯连续目标的直接同类比较。

##### 视频与时空

[V-JEPA](https://openreview.net/forum?id=QaCCuDfBk2)用视频块上下文预测被遮挡时空块的教师表示，在动作识别、运动理解和图像任务上提供强冻结评估证据。正式论文的最佳训练配方主要是非因果掩码补全，因而更准确的名称是“视频时空表示模型”，而不是已经验证的长期因果模拟器。seq-JEPA引入顺序预测，V-JEPA 2.1扩大规模和训练资料，P-JEPA探索概率目标；它们对多未来、长滚动与不确定性问题的覆盖仍有限。

##### 动作条件世界模型与控制

[DINO-WM](https://proceedings.mlr.press/v267/zhou25t.html)表明冻结视觉表示配合动作条件潜在动力学和交叉熵方法，可在多类仿真环境中执行目标图规划；它虽不以JEPA命名，却是机制和评价不可替代的桥接锚点。[V-JEPA 2](https://arxiv.org/abs/2506.09985)在大规模视频预训练后，用机器人轨迹训练2-AC动作条件模型并进行短视距实机规划。其“零样本”只表示部署场景未收集本地任务数据，不表示没有使用机器人动作资料。

[JEPA-WM设计审计](https://openreview.net/forum?id=cHZn5Gdh8e)显示编码器、预测器、目标代价和规划器强耦合，并报告生成V-JEPA 2-AC结果的二步滚动损失实现错误；这使它成为解释复现与组件归因的关键正式证据。[HWM](https://arxiv.org/abs/2604.03208)进一步在真实机器人中研究非贪心分层规划，但仍是预印本，并依赖离线数据训练高层模型。朴素分层并非必然更好：分层规划反例显示搜索分布偏离训练支持时，层级模型可能弱于平坦模型。

##### 多模态与跨域

跨域路线的共同思想是根据模态结构设计上下文、目标和条件变量，而不是照搬图像矩形掩码。A-JEPA与音频设计审计说明时间频率掩码和音频增强需要重新选择；T-JEPA、Point-JEPA和Graph-JEPA分别把目标扩展到表格、点云和图结构；AnySat用统一模型处理多传感器、多分辨率地球观测，但同时包含InfoNCE目标，说明JEPA与对比学习并非严格互斥。

医学证据中，[NeuroVFM](https://doi.org/10.1038/s41591-026-04497-1)提供卫生系统规模三维神经影像的正式回顾性验证，PhysioJEPA和ECG-JEPA覆盖长时生理信号与心电图；这些成果支持跨域可行性，却不能直接推出前瞻临床效益。语言和视觉语言中，LLM-JEPA保留下一词元目标，VL-JEPA预测连续文本语义并按需解码；它们更像联合目标或混合架构，而不是生成训练的普遍替代品。

#### 负面证据、争议与研究空白

1. **可预测性与语义性**：慢特征反例表明稳定背景可能成为捷径。可证伪问题是：在背景与任务因素可独立干预的真实数据上，JEPA是否仍优先编码因果相关因素？
2. **非生成与生成的边界**：D-JEPA、SALT和VL-JEPA表明两者可以联合或串联。需要按训练总成本比较教师预训练、数据处理、解码器和下游适配，不能只报告主干迭代数。
3. **一对多未来**：确定性均方误差预测容易平均化多模态未来。概率目标、离散目标和条件输入尚未在统一长期控制基准上比较。
4. **表征与控制失配**：语义特征可能提升策略泛化，却丢失接触、深度和精细几何；像素或局部特征则可能保留控制细节。需要同时报告语义、几何、动力学和闭环成功率。
5. **长期与层级规划**：滚动误差、搜索分布偏移和中间目标质量会使层级规划失败。需要报告不同规划视距、重规划频率和训练支持距离，而非单一最终成功率。
6. **独立复现**：JEPA-WM设计审计已经证明实现细节可改变结论，但类似的多种子、跨代码库和匹配预算复现仍稀少。
7. **外部分布与安全**：目前缺少系统的传感器故障、对抗扰动、异常检测、校准、碰撞和力约束、隐私与危险长尾评测。没有安全评测不等于模型已被证明不安全，也绝不能写成安全保证。
8. **名称膨胀**：部分论文只在题名中使用JEPA，或只复用预训练特征。后续综述必须继续以机制判据而不是缩写匹配纳入。

#### 推荐阅读路径

建议按“定义—表征—视频—动作—审计—跨域”阅读：

1. [JEPA蓝图](https://openreview.net/forum?id=BZ5a1r-kVsf)：理解研究纲领，但保留其非实验性质。
2. [I-JEPA](https://openaccess.thecvf.com/content/CVPR2023/html/Assran_Self-Supervised_Learning_From_Images_With_a_Joint-Embedding_Predictive_Architecture_CVPR_2023_paper.html)：掌握上下文、目标教师和潜在预测器。
3. [慢特征反例](https://arxiv.org/abs/2211.10831)与[高影响特征偏置](https://proceedings.neurips.cc/paper_files/paper/2024/hash/a600f0f740605205133553cb74a1c107-Abstract-Conference.html)：同时理解直觉和边界。
4. [V-JEPA](https://openreview.net/forum?id=QaCCuDfBk2)：查看视频掩码设计、冻结评价和因果掩码差异。
5. [DINO-WM](https://proceedings.mlr.press/v267/zhou25t.html)与[无奖励离线规划](https://proceedings.neurips.cc/paper_files/paper/2025/hash/3e7cf447f21cd11c846463affefce665-Abstract-Conference.html)：理解潜在动力学进入规划的最小组件。
6. [V-JEPA 2](https://arxiv.org/abs/2506.09985)、[TD-JEPA](https://openreview.net/forum?id=SzXDuBN8M1)与[HWM](https://arxiv.org/abs/2604.03208)：比较短视距规划、长期策略条件目标和分层实机控制。
7. [JEPA-WM设计审计](https://openreview.net/forum?id=cHZn5Gdh8e)：理解复现错误、组件耦合和评价协议。
8. [AnySat](https://openaccess.thecvf.com/content/CVPR2025/html/Astruc_AnySat_One_Earth_Observation_Model_for_Many_Resolutions_Scales_and_CVPR_2025_paper.html)、[VL-JEPA](https://openreview.net/forum?id=tjimrqc2BU)与[NeuroVFM](https://doi.org/10.1038/s41591-026-04497-1)：比较跨域时目标、结构和验证标准如何改变。

#### 覆盖与限制

最后两个独立查询家族分别筛选21项和24项，新增0项与1项，边际新增率为0%和4.2%，且均未产生新一级路线。六条路线均完成前向与后向追踪，19个核心锚点全部完成正文级核验，34条关键主张有证据位置和审计状态，因此达到本项目定义的L2。

限制包括：arXiv官方API连接超时，故检索依赖网页入口和正式论文集；题名不含JEPA的潜在预测长尾、非英文区域性成果和窄域应用不可能完全覆盖；15个桥接或前沿条目只完成摘要级核验；2026年临近截止日的预印本状态仍会变化。后续更新应先重查预印本正式状态和撤回记录，再重复两个收敛查询家族。

<a id="全部研究工作"></a>
## 全部研究工作（50 项）

以下条目严格保持 `atlas.json` 的策展顺序，并在 README 内直接列出问题、机制、证据、局限、启示、核验边界与全部可用来源。

<a id="paper-lecun-2022-ami"></a>
**1. 通向自主机器智能的路径｜A Path Towards Autonomous Machine Intelligence（2022 · OpenReview技术报告）**

**作者：** Yann LeCun

**书目：** 年份 2022；载体 OpenReview技术报告；状态 官方报告或标准；来源类型 official-report

**分类：** 主路线 理论与目标函数；相关路线 理论与目标函数、动作条件与控制；层级 架构与目标原则；阅读层级 核心；证据等级 B；简称 JEPA蓝图

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V1 / D=D0 / P=P1 / Q=Q1

**定位：** 提出以能量模型、JEPA、分层世界模型和内在目标构成自主智能系统的研究纲领。

**问题：** 像素生成和纯奖励驱动学习难以高效表示世界中的不确定性、抽象层级与常识。

**机制：** 用编码器把观测映射到表示空间，预测器在给定上下文与动作时约束兼容目标表示；分层JEPA在不同时间尺度上组合感知、记忆、代价与规划。

**步骤：**

1. 编码当前观测与上下文
2. 在潜在空间预测兼容未来
3. 用能量或代价评价候选状态
4. 在分层时间尺度上选择动作

**证据：**

- 报告给出JEPA、分层JEPA及配置器等组件的完整概念架构
- 后续I-JEPA、V-JEPA和动作条件世界模型可被该框架统一解释

**局限：**

- 属于研究纲领而非受控实验论文，不能单独证明系统可行性
- 长期记忆、层次规划和可扩展不确定性建模仍主要停留在蓝图层面

**意义：**

- JEPA应被理解为架构族而非单一损失
- 判断后续工作时需区分表征学习、动力学建模与真正闭环自主性

**边界：** 主入口为作者公开的OpenReview技术报告；非同行评议论文，地图仅把其作为概念源头。

**资源：** [一手入口](<https://openreview.net/forum?id=BZ5a1r-kVsf>)

---

<a id="paper-sobal-2022-slow-features"></a>
**2. 联合嵌入预测架构偏向慢变化特征｜Joint Embedding Predictive Architectures Focus on Slow Features（2022 · NeurIPS 2022自监督学习研讨会）**

**作者：** Vlad Sobal、Jyothir S. V.、Siddhartha Jalagam、Nicolas Carion、Kyunghyun Cho、Yann LeCun

**书目：** 年份 2022；载体 NeurIPS 2022自监督学习研讨会；状态 预印本；来源类型 preprint

**分类：** 主路线 理论与目标函数；相关路线 理论与目标函数、评测、反证与边界；层级 架构与目标原则；阅读层级 核心；证据等级 B；简称 慢特征反例

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V2 / D=D1 / P=P1 / Q=Q2

**定位：** 用受控合成实验揭示JEPA偏向跨视图稳定的慢特征，并可能忽略变化更快但语义重要的因素。

**问题：** “潜在预测自动聚焦语义”缺少对数据视图与噪声结构的边界分析。

**机制：** 比较联合嵌入预测在静态与变化干扰因素下选择的特征，展示预测目标由跨视图可预测性塑造。

**步骤：**

1. 构造语义与干扰因素可控的数据
2. 改变干扰因素跨视图的变化速度
3. 测量表征保留的因素

**证据：**

- 作者报告固定干扰因素会被模型学习，而快速变化噪声更易被舍弃
- 实验直接反驳了JEPA无条件忽略低层细节的强说法

**局限：**

- 证据主要来自合成设置和短篇研讨会版本
- 慢特征偏置在大型真实世界视频中的强度仍需系统测量

**意义：**

- 上下文—目标采样规则是目标函数的一部分
- 必须报告背景、纹理和相机变化等潜在捷径

**边界：** 以arXiv为稳定主入口；曾发表于NeurIPS 2022相关研讨会，未按正式主会论文标注。

**标识：** arXiv 2211.10831

**资源：** [一手入口](<https://arxiv.org/abs/2211.10831>)

---

<a id="paper-littwin-2024-noisy-features"></a>
**3. JEPA如何避开噪声特征：深线性自蒸馏网络的隐式偏置｜How JEPA Avoids Noisy Features: The Implicit Bias of Deep Linear Self Distillation Networks（2024 · NeurIPS 2024）**

**作者：** Etai Littwin、Omid Saremi、Madhu Advani、Vimal Thilak、Preetum Nakkiran、Chen Huang、Joshua Susskind

**书目：** 年份 2024；载体 NeurIPS 2024；状态 同行评议；来源类型 paper

**分类：** 主路线 理论与目标函数；相关路线 理论与目标函数、评测、反证与边界；层级 架构与目标原则；阅读层级 核心；证据等级 A；简称 高影响特征偏置

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V2 / D=D1 / P=P3 / Q=Q3

**定位：** 在深线性模型中证明，JEPA即使与重建学习相似子空间，也会优先学习对目标回归影响更大的特征。

**问题：** 潜在预测为何比输入重建更少追逐不可预测细节，缺少可分析机制。

**机制：** 对自蒸馏式JEPA的梯度动力学进行线性化分析，把特征选择归因于高回归系数带来的隐式优化偏置。

**步骤：**

1. 建立联合嵌入与重建的线性模型
2. 推导深线性训练动力学
3. 比较不同特征的学习速率与最终权重

**证据：**

- 理论给出高影响特征优先学习的条件
- 合成实验验证推导的动力学趋势

**局限：**

- 深线性设定不能完整刻画Transformer、掩码和教师动量的相互作用
- 高影响不必然等同于下游语义或因果因素

**意义：**

- JEPA优势更准确地说是条件性隐式偏置，而非自动语义抽象
- 视图设计与优化动力学应共同审计

**边界：** 主入口为NeurIPS正式论文页；理论结论适用于论文明确给出的深线性设定。

**资源：** [一手入口](<https://proceedings.neurips.cc/paper_files/paper/2024/hash/a600f0f740605205133553cb74a1c107-Abstract-Conference.html>)

---

<a id="paper-van-assel-2025-joint-vs-reconstruction"></a>
**4. 联合嵌入与重建：潜在空间预测的可证明优势｜Joint-Embedding vs Reconstruction: Provable Benefits of Latent Space Prediction for Self-Supervised Learning（2025 · NeurIPS 2025）**

**作者：** Hugues Van Assel、Mark Ibrahim、Tommaso Biancalani、Aviv Regev、Randall Balestriero

**书目：** 年份 2025；载体 NeurIPS 2025；状态 同行评议；来源类型 paper

**分类：** 主路线 理论与目标函数；相关路线 理论与目标函数、评测、反证与边界；层级 架构与目标原则；阅读层级 核心；证据等级 A；简称 联合嵌入对照重建

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V2 / D=D1 / P=P3 / Q=Q3

**定位：** 用闭式分析说明在高幅值无关特征存在时，联合嵌入达到最优表示所需的增强对齐条件弱于重建。

**问题：** 实践者缺少在重建与联合嵌入之间选择的可验证条件。

**机制：** 把两类自监督目标写成可求解模型，分析视图生成、无关特征幅值和下游最优性的关系。

**步骤：**

1. 建立重建与联合嵌入闭式模型
2. 刻画增强与无关特征的对齐条件
3. 在高幅值噪声下比较渐近表现

**证据：**

- 论文证明两类目标都依赖视图与无关因素的最小对齐
- 在高幅值无关特征下，联合嵌入满足更弱条件

**局限：**

- 结论依赖分析模型与视图生成假设
- 不能推出联合嵌入在所有真实任务上优于重建

**意义：**

- 范式选择应依据噪声幅值和增强可控性
- 真实基准应增加可控干扰和分布外测试

**边界：** OpenReview记录标注为NeurIPS 2025 spotlight；地图仅外推论文明确分析的条件。

**资源：** [一手入口](<https://openreview.net/forum?id=UOaLsgn5wb>)

---

<a id="paper-balestriero-2025-gaussian-embeddings"></a>
**5. 高斯嵌入：JEPA如何隐式学习数据密度｜Gaussian Embeddings: How JEPAs Secretly Learn Your Data Density（2025 · arXiv）**

**作者：** Randall Balestriero、Yann LeCun

**书目：** 年份 2025；载体 arXiv；状态 预印本；来源类型 preprint

**分类：** 主路线 理论与目标函数；相关路线 理论与目标函数；层级 架构与目标原则；阅读层级 桥接；证据等级 B；简称 高斯嵌入

**核验：** 来源层级 T1；核验状态 abstract-checked；V/D/P/Q V=V2 / D=D1 / P=P1 / Q=Q2

**定位：** 把JEPA表征与高斯化及数据密度估计联系起来，为显式分布正则提供理论动机。

**问题：** 传统防坍塌技巧缺少统一的分布解释。

**机制：** 分析联合嵌入目标对表示分布的约束，并把各向同性高斯目标视为兼顾信息与稳定性的可操作原则。

**步骤：**

1. 分析表示分布与数据密度关系
2. 施加高斯分布约束
3. 检验表示与训练稳定性

**证据：**

- 作者给出JEPA表示与密度学习之间的理论联系
- 实验展示显式分布约束可替代部分启发式技巧

**局限：**

- 当前为预印本，理论与大规模复现仍需独立检验
- 高斯化是否适合多峰、离散或强层次语义尚不明确

**意义：**

- 防坍塌可从局部技巧转向全局分布约束
- 为LeJEPA和端到端世界模型提供理论桥梁

**边界：** 主入口为arXiv预印本；结论按作者主张表述。

**标识：** arXiv 2510.05949

**资源：** [一手入口](<https://arxiv.org/abs/2510.05949>)

---

<a id="paper-balestriero-2025-lejepa"></a>
**6. LeJEPA：无需启发式技巧的可证明可扩展自监督学习｜LeJEPA: Provable and Scalable Self-Supervised Learning Without the Heuristics（2025 · arXiv）**

**作者：** Randall Balestriero、Yann LeCun

**书目：** 年份 2025；载体 arXiv；状态 预印本；来源类型 preprint

**分类：** 主路线 理论与目标函数；相关路线 理论与目标函数、图像与静态表征；层级 静态表征预测；阅读层级 核心；证据等级 B；简称 LeJEPA

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V3 / D=D2 / P=P1 / Q=Q2

**定位：** 用各向同性高斯正则统一防坍塌与表征均衡，尝试去除动量教师、停止梯度等经验组件。

**问题：** 经典JEPA训练依赖动量教师、非对称更新和复杂超参数，机制与扩展性难以分离。

**机制：** 预测配对视图的潜在表示，同时用SIGReg把批次表征推向各向同性高斯，从分布层面阻止总坍塌和维度坍塌。

**步骤：**

1. 双视图编码与潜在预测
2. 估计表征投影的分布统计
3. 用SIGReg约束各向同性
4. 端到端联合优化

**证据：**

- 作者报告无需EMA和停止梯度仍可稳定训练
- 在图像自监督规模实验中展示与强基线竞争的精度和扩展趋势

**局限：**

- 正式同行评议和跨团队复现尚不足
- 分布正则引入的新计算与超参数成本需在不同模态量化

**意义：**

- JEPA的核心可能是预测加可验证分布约束，而非特定教师配方
- 为小型端到端世界模型降低工程门槛

**边界：** 以arXiv与作者代码为一手入口；截至截止日仍按预印本标注。

**标识：** arXiv 2511.08544

**资源：** [一手入口](<https://arxiv.org/abs/2511.08544>) · [代码](<https://github.com/galilai-group/lejepa>)

---

<a id="paper-assran-2023-ijepa"></a>
**7. 基于联合嵌入预测架构的图像自监督学习｜Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture（2023 · CVPR 2023）**

**作者：** Mahmoud Assran、Quentin Duval、Ishan Misra、Piotr Bojanowski、Pascal Vincent、Michael Rabbat、Yann LeCun、Nicolas Ballas

**书目：** 年份 2023；载体 CVPR 2023；状态 同行评议；来源类型 paper

**分类：** 主路线 图像与静态表征；相关路线 图像与静态表征、理论与目标函数；层级 静态表征预测；阅读层级 核心；证据等级 A；简称 I-JEPA

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V3 / D=D2 / P=P3 / Q=Q3

**定位：** 把上下文块映射为多个目标块的潜在表示，建立无需像素重建和强人工增强的图像JEPA基线。

**问题：** 像素重建浪费容量在低层细节，对比学习又依赖增强和负样本设计。

**机制：** 上下文编码器只看未遮挡区域，预测器结合位置标记预测目标块表示；目标编码器由在线编码器的指数滑动平均更新。

**步骤：**

1. 从图像采样大上下文与多个目标块
2. 分别编码上下文和完整图像目标
3. 按位置预测目标块潜在表示
4. 用动量更新目标编码器

**证据：**

- CVPR论文在ImageNet及多项下游任务报告强线性探测和微调结果
- 消融显示块状多目标掩码与语义尺度对性能关键

**局限：**

- 主要证据集中在自然图像和ViT，未证明学习了可用于行动的世界状态
- 动量教师不能从理论上保证避免所有形式的维度坍塌

**意义：**

- 确立了现代JEPA的标准编码器—预测器—目标编码器模板
- 为V-JEPA、跨域掩码和动作条件预测提供直接起点

**边界：** 主入口为CVF正式论文页；代码为作者机构公开仓库。

**资源：** [一手入口](<https://openaccess.thecvf.com/content/CVPR2023/html/Assran_Self-Supervised_Learning_From_Images_With_a_Joint-Embedding_Predictive_Architecture_CVPR_2023_paper.html>) · [代码](<https://github.com/facebookresearch/ijepa>)

---

<a id="paper-garrido-2024-iwm"></a>
**8. 在视觉表征学习中学习并利用世界模型｜Learning and Leveraging World Models in Visual Representation Learning（2024 · arXiv）**

**作者：** Quentin Garrido、Mahmoud Assran、Nicolas Ballas、Adrien Bardes、Laurent Najman、Yann LeCun

**书目：** 年份 2024；载体 arXiv；状态 预印本；来源类型 preprint

**分类：** 主路线 图像与静态表征；相关路线 图像与静态表征、动作条件与控制；层级 动作条件潜在动力学；阅读层级 桥接；证据等级 B；简称 IWM

**核验：** 来源层级 T1；核验状态 abstract-checked；V/D/P/Q V=V2 / D=D2 / P=P1 / Q=Q2

**定位：** 把已知图像变换参数作为动作输入，显式学习表征中的不变部分与可预测等变变化。

**问题：** 普通图像自监督倾向强制不变性，可能丢失姿态、颜色等下游需要的变化信息。

**机制：** 编码初始视图，以光度或几何变换参数为条件预测变换后视图表示，并把预测器复用于变换推断或数据效率提升。

**步骤：**

1. 生成带已知参数的视图序列
2. 编码初始视图
3. 以变换参数条件预测目标表示
4. 评测不变与等变任务

**证据：**

- 作者在多种视觉变换和下游任务报告等变信息保留收益
- 预测器可作为显式图像世界模型分析

**局限：**

- 动作是人工图像变换而非真实物理控制
- 预印本结果尚缺正式同行评议与复杂场景验证

**意义：**

- JEPA可从遮挡恢复扩展到可控变换建模
- 为seq-JEPA和动作条件世界模型提供概念桥梁

**边界：** 主入口为arXiv；地图把其视为从静态表征到动作条件预测的桥接工作。

**标识：** arXiv 2403.00504

**资源：** [一手入口](<https://arxiv.org/abs/2403.00504>)

---

<a id="paper-mo-2024-cjepa"></a>
**9. 连接联合嵌入预测架构与对比自监督学习｜Connecting Joint-Embedding Predictive Architecture with Contrastive Self-supervised Learning（2024 · NeurIPS 2024）**

**作者：** Shentong Mo、Shengbang Tong

**书目：** 年份 2024；载体 NeurIPS 2024；状态 同行评议；来源类型 paper

**分类：** 主路线 图像与静态表征；相关路线 图像与静态表征、理论与目标函数；层级 静态表征预测；阅读层级 桥接；证据等级 A；简称 C-JEPA

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V3 / D=D2 / P=P3 / Q=Q3

**定位：** 将VICReg的方差、协方差与不变性约束并入I-JEPA，针对总坍塌和均值预测不足。

**问题：** 仅依赖EMA目标编码器不能保证表示方差与维度利用。

**机制：** 保留块级潜在预测，同时对跨视图全局表示施加VICReg项，显式维护方差、去相关并对齐均值。

**步骤：**

1. 执行I-JEPA块级预测
2. 计算两视图全局表示
3. 施加方差与协方差正则
4. 联合优化预测与不变性

**证据：**

- NeurIPS论文报告ImageNet预训练的收敛和下游性能改善
- 理论与实验共同显示EMA本身不足以排除总坍塌

**局限：**

- 增加损失权重和批次统计依赖
- 结果主要针对图像，未验证动态世界模型中的长期稳定性

**意义：**

- 防坍塌应被显式审计而非默认由教师机制解决
- 连接了JEPA与联合嵌入正则化方法族

**边界：** 主入口为NeurIPS正式论文页。

**资源：** [一手入口](<https://proceedings.neurips.cc/paper_files/paper/2024/hash/04a80267ad46fc730011f8760f265054-Abstract-Conference.html>)

---

<a id="paper-chen-2025-djepa"></a>
**10. 使用联合嵌入预测架构进行去噪｜Denoising with a Joint-Embedding Predictive Architecture（2025 · ICLR 2025）**

**作者：** Dengsheng Chen、Jie Hu、Xiaoming Wei、Enhua Wu

**书目：** 年份 2025；载体 ICLR 2025；状态 同行评议；来源类型 paper

**分类：** 主路线 图像与静态表征；相关路线 图像与静态表征、理论与目标函数；层级 静态表征预测；阅读层级 桥接；证据等级 A；简称 D-JEPA

**核验：** 来源层级 T1；核验状态 abstract-checked；V/D/P/Q V=V3 / D=D2 / P=P3 / Q=Q3

**定位：** 把噪声状态间的潜在预测用于连接JEPA与扩散、流式去噪，拓宽非生成式与生成式目标的边界。

**问题：** JEPA通常被视为与生成式建模割裂，潜在预测是否能服务去噪生成缺少系统验证。

**机制：** 对不同噪声水平的样本编码，在条件噪声日程下预测较干净目标表示，并连接到去噪或流匹配过程。

**步骤：**

1. 对数据施加分级噪声
2. 编码噪声上下文与目标
3. 预测更干净潜在表示
4. 将预测接入去噪推断

**证据：**

- ICLR论文在图像去噪和表征任务报告可行性
- 对比实验显示潜在去噪可兼顾表征与生成目标

**局限：**

- 生成质量和计算优势依赖具体解码器与噪声日程
- 不能据此把所有JEPA等同于概率生成模型

**意义：**

- 潜在预测与生成建模不是绝对互斥
- 评测应分别报告表示质量、生成质量和推断成本

**边界：** OpenReview记录标注为ICLR 2025 poster。

**资源：** [一手入口](<https://openreview.net/forum?id=d4njmzM7jf>)

---

<a id="paper-bardes-2023-mcjepa"></a>
**11. MC-JEPA：联合学习运动与内容特征｜MC-JEPA: A Joint-Embedding Predictive Architecture for Self-Supervised Learning of Motion and Content Features（2023 · arXiv）**

**作者：** Adrien Bardes、Jean Ponce、Yann LeCun

**书目：** 年份 2023；载体 arXiv；状态 预印本；来源类型 preprint

**分类：** 主路线 视频与时空动力学；相关路线 视频与时空动力学、图像与静态表征；层级 无动作时空动力学；阅读层级 桥接；证据等级 B；简称 MC-JEPA

**核验：** 来源层级 T1；核验状态 abstract-checked；V/D/P/Q V=V2 / D=D2 / P=P1 / Q=Q2

**定位：** 在同一JEPA中联合预测光流与图像内容表示，显式补足静态语义与运动线索。

**问题：** 只学内容的图像表征难以捕获运动，只学光流又可能缺少语义。

**机制：** 共享编码器处理视频帧，内容分支预测被遮挡潜在表示，运动分支学习光流相关目标并联合训练。

**步骤：**

1. 采样相邻帧与空间掩码
2. 编码可见内容
3. 预测目标块表示与运动信号
4. 联合优化内容和光流任务

**证据：**

- 作者在图像与视频下游任务报告联合训练收益
- 消融显示运动和内容目标提供互补信息

**局限：**

- 依赖光流目标及其估计质量
- 截至截止日未核验到正式接收版本，按预印本处理

**意义：**

- 视频JEPA需要区分外观与运动的监督来源
- 为纯特征预测的V-JEPA提供早期对照

**边界：** 主入口为arXiv；未把投稿记录误标为正式同行评议。

**标识：** arXiv 2307.12698

**资源：** [一手入口](<https://arxiv.org/abs/2307.12698>)

---

<a id="paper-bardes-2024-vjepa"></a>
**12. 重新审视用于视频视觉表征学习的特征预测｜Revisiting Feature Prediction for Learning Visual Representations from Video（2024 · Transactions on Machine Learning Research）**

**作者：** Adrien Bardes、Quentin Garrido、Jean Ponce、Xinlei Chen、Michael Rabbat、Yann LeCun、Mido Assran、Nicolas Ballas

**书目：** 年份 2024；载体 Transactions on Machine Learning Research；状态 同行评议；来源类型 paper

**分类：** 主路线 视频与时空动力学；相关路线 视频与时空动力学、图像与静态表征；层级 无动作时空动力学；阅读层级 核心；证据等级 A；简称 V-JEPA

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V4 / D=D3 / P=P3 / Q=Q3

**定位：** 证明仅靠视频潜在特征预测、无需文本或像素重建，也能训练兼顾动作与外观的冻结视觉编码器。

**问题：** 视频自监督常混入图像预训练、文本监督或重建目标，难以隔离特征预测本身的贡献。

**机制：** 时空上下文编码器观察稀疏可见视频块，预测器恢复被遮挡时空区域的目标编码器表示，并用动量教师提供稳定目标。

**步骤：**

1. 对视频施加时空块掩码
2. 编码可见时空上下文
3. 预测多个被遮挡区域的潜在表示
4. 用冻结主干评测图像与视频任务

**证据：**

- TMLR论文报告在约两百万公开视频上预训练
- 冻结ViT-H在Kinetics-400、Something-Something-v2和ImageNet上分别报告81.9%、72.2%和77.9%

**局限：**

- 强冻结探测不等于长期未来预测或物理可控性
- 数据规模与训练成本使小规模独立复现较难

**意义：**

- 确立了动作无关视频JEPA的核心基线
- 为V-JEPA 2的理解、预测与规划统一模型提供预训练基础

**边界：** OpenReview记录显示已被TMLR接收；数值取自论文摘要，代码入口为作者机构仓库。

**资源：** [一手入口](<https://openreview.net/forum?id=QaCCuDfBk2>) · [代码](<https://github.com/facebookresearch/jepa>)

---

<a id="paper-ghaemi-2025-seq-jepa"></a>
**13. seq-JEPA：自回归预测学习不变—等变世界模型｜seq-JEPA: Autoregressive Predictive Learning of Invariant-Equivariant World Models（2025 · NeurIPS 2025）**

**作者：** Hafez Ghaemi、Eilif B. Muller、Shahab Bakhtiari

**书目：** 年份 2025；载体 NeurIPS 2025；状态 同行评议；来源类型 paper

**分类：** 主路线 视频与时空动力学；相关路线 视频与时空动力学、动作条件与控制、理论与目标函数；层级 动作条件潜在动力学；阅读层级 核心；证据等级 A；简称 seq-JEPA

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V3 / D=D2 / P=P3 / Q=Q3

**定位：** 用带动作的视图序列和分离表示，同时保留分类所需不变性与路径积分所需等变性。

**问题：** 两视图自监督通常在不变任务和细粒度等变任务之间产生权衡。

**机制：** 编码连续视图与相对变换，聚合历史后以下一步动作条件预测后续表示，并在架构中分离不变与等变通道。

**步骤：**

1. 编码视图—动作序列
2. 聚合历史上下文
3. 条件于下一动作预测目标表示
4. 分别读出不变与等变特征

**证据：**

- NeurIPS论文报告分类与等变任务兼顾
- 序列聚合在路径积分和眼动预测等任务上带来优势

**局限：**

- 动作多为已知视图变换，与复杂物理接触存在距离
- 分离通道的通用性仍需真实机器人和自然视频检验

**意义：**

- 不变性与动力学信息可通过结构而非单一损失权衡
- 为动作条件视觉世界模型提供中间层级

**边界：** 主入口为NeurIPS 2025正式论文页。

**资源：** [一手入口](<https://proceedings.neurips.cc/paper_files/paper/2025/hash/2f63d2963526bdd9ff1b8bcc2dc9905a-Abstract-Conference.html>)

---

<a id="paper-mur-labadia-2026-vjepa21"></a>
**14. V-JEPA 2.1：释放视频自监督学习中的稠密特征｜V-JEPA 2.1: Unlocking Dense Features in Video Self-Supervised Learning（2026 · arXiv）**

**作者：** Lorenzo Mur-Labadia、Mahmoud Assran、Adrien Bardes、Nicolas Ballas

**书目：** 年份 2026；载体 arXiv；状态 预印本；来源类型 preprint

**分类：** 主路线 视频与时空动力学；相关路线 视频与时空动力学、动作条件与控制；层级 无动作时空动力学；阅读层级 桥接；证据等级 B；简称 V-JEPA 2.1

**核验：** 来源层级 T1；核验状态 abstract-checked；V/D/P/Q V=V4 / D=D3 / P=P1 / Q=Q2

**定位：** 通过稠密预测损失、深层监督和多模态标记器改善V-JEPA在定位与机器人抓取所需的空间细节。

**问题：** 全局语义强的视频表示可能牺牲稠密空间对应与小物体定位。

**机制：** 在多层特征上加入稠密目标预测，并用更丰富目标标记器提高空间分辨率和局部语义。

**步骤：**

1. 提取多层视频特征
2. 构造稠密目标标记
3. 在中间层施加预测监督
4. 评测定位、检索与机器人迁移

**证据：**

- 作者报告Ego4D和EPIC-KITCHENS等稠密任务提升
- 摘要报告真实机器人抓取相对V-JEPA 2动作条件基线有显著增益

**局限：**

- 结果为作者预印本，机器人收益受具体平台与任务影响
- 额外目标标记器和深监督提高训练复杂度

**意义：**

- 纯全局语义不是物理交互的充分表示
- 未来JEPA需同时报告语义、几何和接触敏感性

**边界：** 主入口为arXiv，代码为作者机构仓库；截至截止日按预印本标注。

**标识：** arXiv 2603.14482

**资源：** [一手入口](<https://arxiv.org/abs/2603.14482>) · [代码](<https://github.com/facebookresearch/vjepa2>)

---

<a id="paper-tristram-2026-pjepa"></a>
**15. P-JEPA：面向流程视频的联合嵌入预测表征学习｜P-JEPA: Procedural Video Representation Learning via Joint Embedding Predictive Architecture（2026 · arXiv）**

**作者：** Felix Tristram、Stefano Gasperini、Benjamin Killeen、Marcel Walch、Christian Benz、Nassir Navab、Ghazal Ghazaei

**书目：** 年份 2026；载体 arXiv；状态 预印本；来源类型 preprint

**分类：** 主路线 视频与时空动力学；相关路线 视频与时空动力学；层级 无动作时空动力学；阅读层级 背景；证据等级 B；简称 P-JEPA

**核验：** 来源层级 T1；核验状态 abstract-checked；V/D/P/Q V=V2 / D=D2 / P=P1 / Q=Q1

**定位：** 把长达半小时以上的流程视频压缩到帧对齐动作空间，再预测池化潜在目标以建模长程步骤。

**问题：** 标准视频Transformer的二次复杂度和局部掩码难以覆盖长流程依赖。

**机制：** 先提取帧级主干特征并映射到紧凑动作空间，再对长序列的池化目标执行遮挡潜在预测。

**步骤：**

1. 提取长视频帧特征
2. 构建帧对齐动作空间
3. 遮挡并预测池化潜在片段
4. 评测步骤分割与流式识别

**证据：**

- 作者在EgoExo4D、EgoProceL和Assembly101报告线性可分性及分割收益
- 方法可处理超过三十分钟视频并支持实时推断

**局限：**

- 依赖现成视频特征，未完全端到端验证
- 截至截止日为近期预印本，复现与正式评议尚不足

**意义：**

- JEPA的预测粒度可从局部块扩展到流程步骤
- 长程效率和局部细节需要共同评估

**边界：** 主入口为arXiv预印本；作为长视频方向代表，而非成熟主干方法。

**标识：** arXiv 2606.23256

**资源：** [一手入口](<https://arxiv.org/abs/2606.23256>)

---

<a id="paper-zhou-2025-dino-wm"></a>
**16. DINO-WM：基于预训练视觉特征的世界模型实现零样本规划｜DINO-WM: World Models on Pre-trained Visual Features enable Zero-shot Planning（2025 · ICML 2025）**

**作者：** Gaoyue Zhou、Hengkai Pan、Yann LeCun、Lerrel Pinto

**书目：** 年份 2025；载体 ICML 2025；状态 同行评议；来源类型 paper

**分类：** 主路线 动作条件与控制；相关路线 动作条件与控制、评测、反证与边界；层级 闭环规划与控制；阅读层级 核心；证据等级 A；简称 DINO-WM

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V4 / D=D3 / P=P3 / Q=Q3

**定位：** 在冻结DINOv2块特征上学习动作条件未来预测，并用目标特征距离优化动作序列，实现离线零样本规划。

**问题：** 视觉世界模型常依赖像素生成、在线策略学习或任务专用奖励。

**机制：** 编码当前与目标图像的空间块特征，动作条件动力学预测未来特征，规划器搜索使预测终点接近目标的动作序列。

**步骤：**

1. 用冻结DINOv2编码当前与目标
2. 训练动作条件块特征动力学
3. 滚动预测候选动作序列
4. 按潜在目标距离选择并执行动作

**证据：**

- ICML论文在六类环境报告无需专家示范、奖励模型或逆模型的零样本规划
- 覆盖迷宫、推物和多粒子任务，比较多类先前方法

**局限：**

- 冻结编码器可能忽略接触、深度或任务相关细节
- 多数评测仍在受控环境，真实闭环鲁棒性有限

**意义：**

- 强语义编码器可与小型动作动力学分离训练
- 规划性能取决于表征几何、动力学误差和搜索器三者

**边界：** 主入口为PMLR正式ICML论文页；该工作虽以DINO命名，但机制属于JEPA式潜在动作预测。

**资源：** [一手入口](<https://proceedings.mlr.press/v267/zhou25t.html>) · [项目页](<https://dino-wm.github.io/>)

---

<a id="paper-sobal-2025-reward-free-planning"></a>
**17. 从无奖励离线数据学习：潜在动力学规划的案例｜Learning from Reward-Free Offline Data: A Case for Planning with Latent Dynamics Models（2025 · NeurIPS 2025）**

**作者：** Uladzislau Sobal、Wancong Zhang、Kyunghyun Cho、Randall Balestriero、Tim G. J. Rudner、Yann LeCun

**书目：** 年份 2025；载体 NeurIPS 2025；状态 同行评议；来源类型 paper

**分类：** 主路线 动作条件与控制；相关路线 动作条件与控制、评测、反证与边界；层级 闭环规划与控制；阅读层级 核心；证据等级 A；简称 无奖励离线规划

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V4 / D=D3 / P=P3 / Q=Q3

**定位：** 在无奖励离线数据上系统比较模型式JEPA规划与模型无关方法，指出前者在新布局和次优数据上更具数据效率。

**问题：** 无奖励离线场景中，何时应学习可规划动力学而非直接行为表示尚缺公平比较。

**机制：** 训练动作条件潜在动力学模型，在测试时用目标条件代价规划；与多种目标条件及零样本强化学习方法按数据质量比较。

**步骤：**

1. 收集不同质量的无奖励轨迹
2. 学习JEPA潜在动力学
3. 测试时优化动作序列
4. 跨布局与数据质量比较方法族

**证据：**

- NeurIPS论文报告模型式规划对未见布局泛化更好且数据效率更高
- 在次优离线数据上仍能进行轨迹拼接并保持竞争力

**局限：**

- 结论集中在导航类环境和给定目标设定
- 规划搜索成本与模型误差会随时域增长

**意义：**

- 不能只用单一高质量数据集比较模型式与模型无关方法
- 数据多样性和轨迹质量应成为JEPA规划标准评测轴

**边界：** 主入口为NeurIPS 2025正式论文页；比较结论限于论文评测范围。

**资源：** [一手入口](<https://proceedings.neurips.cc/paper_files/paper/2025/hash/3e7cf447f21cd11c846463affefce665-Abstract-Conference.html>)

---

<a id="paper-assran-2025-vjepa2"></a>
**18. V-JEPA 2：自监督视频模型实现理解、预测与规划｜V-JEPA 2: Self-Supervised Video Models Enable Understanding, Prediction and Planning（2025 · arXiv）**

**作者：** Mido Assran、Adrien Bardes、David Fan、Quentin Garrido、Nicolas Ballas、Yann LeCun

**书目：** 年份 2025；载体 arXiv；状态 预印本；来源类型 preprint

**分类：** 主路线 动作条件与控制；相关路线 动作条件与控制、视频与时空动力学；层级 闭环规划与控制；阅读层级 核心；证据等级 B；简称 V-JEPA 2

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V4 / D=D3 / P=P1 / Q=Q2

**定位：** 先用百万小时量级视频训练动作无关编码器，再用少量机器人轨迹训练动作条件预测器，连接理解、预测和真实规划。

**问题：** 视频表征、物理预测和机器人规划通常由不同模型承担，迁移成本高。

**机制：** 大规模动作无关V-JEPA预训练提供视觉状态；V-JEPA 2-AC用机器人动作条件预测未来潜在状态，并通过模型预测控制选择动作。

**步骤：**

1. 大规模视频潜在预测预训练
2. 用少量机器人视频进行动作条件后训练
3. 滚动预测候选动作结果
4. 按视觉目标代价闭环执行

**证据：**

- 作者报告在多项动作理解与预测基准取得强结果
- 使用不足62小时DROID机器人视频，在两个实验室的Franka平台完成零样本抓取放置演示

**局限：**

- 截至截止日仍为预印本，真实机器人评测任务和平台范围有限
- 模型规模、数据治理与训练成本较高，长期闭环安全未建立

**意义：**

- 动作无关预训练与动作条件后训练是可扩展分工
- 真实规划仍需独立验证几何、接触和故障恢复

**边界：** 主入口为arXiv与作者机构代码库；所有大规模与机器人结果均按作者报告表述。

**标识：** arXiv 2506.09985

**资源：** [一手入口](<https://arxiv.org/abs/2506.09985>) · [代码](<https://github.com/facebookresearch/vjepa2>)

---

<a id="paper-bagatella-2026-td-jepa"></a>
**19. TD-JEPA：面向零样本强化学习的潜在预测表征｜TD-JEPA: Latent-predictive Representations for Zero-Shot Reinforcement Learning（2026 · ICLR 2026）**

**作者：** Marco Bagatella、Matteo Pirotta、Ahmed Touati、Alessandro Lazaric、Andrea Tirinzoni

**书目：** 年份 2026；载体 ICLR 2026；状态 同行评议；来源类型 paper

**分类：** 主路线 动作条件与控制；相关路线 动作条件与控制、理论与目标函数；层级 闭环规划与控制；阅读层级 核心；证据等级 A；简称 TD-JEPA

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V3 / D=D3 / P=P3 / Q=Q3

**定位：** 用时序差分潜在预测学习跨策略长期动力学与后继特征，使离线无奖励数据支持测试时零样本奖励优化。

**问题：** 既有潜在预测多为单任务、单步或同策略数据，难以形成跨任务行为基础模型。

**机制：** 联合训练状态编码器、任务编码器、策略条件多步预测器和策略族，以时序差分目标逼近长期策略动力学。

**步骤：**

1. 编码状态与任务
2. 按策略条件预测长期潜在占用
3. 用时序差分自举更新
4. 测试时按新奖励选择或优化策略

**证据：**

- ICLR记录标注为2026 oral
- 论文在ExoRL与OGBench共13个数据集报告与强零样本强化学习基线竞争或更优

**局限：**

- 理论防坍塌结论依赖理想化条件和初始化
- 零样本奖励适应不等于开放世界安全部署

**意义：**

- JEPA可从短期世界模型扩展到策略条件长期占用表示
- 应区分规划式零样本控制与后继特征式零样本强化学习

**边界：** OpenReview官方列表标注为ICLR 2026 oral；与2026年同名的Temporal-Distance JEPA不是同一工作。

**标识：** arXiv 2510.00739

**资源：** [一手入口](<https://openreview.net/forum?id=SzXDuBN8M1>) · [代码](<https://github.com/facebookresearch/td_jepa>)

---

<a id="paper-maes-2026-leworldmodel"></a>
**20. LeWorldModel：从像素端到端稳定训练联合嵌入预测世界模型｜LeWorldModel: Stable End-to-End Joint-Embedding Predictive Architecture from Pixels（2026 · arXiv）**

**作者：** Lucas Maes、Randall Balestriero、Yann LeCun

**书目：** 年份 2026；载体 arXiv；状态 预印本；来源类型 preprint

**分类：** 主路线 动作条件与控制；相关路线 动作条件与控制、理论与目标函数；层级 闭环规划与控制；阅读层级 核心；证据等级 B；简称 LeWorldModel

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V3 / D=D2 / P=P1 / Q=Q2

**定位：** 以显式分布正则和动作预测从像素端到端训练小型JEPA世界模型，强调单卡稳定性与规划效率。

**问题：** 冻结大编码器或使用动量教师的世界模型难以端到端适应控制，训练成本也高。

**机制：** 联合优化像素编码器、动作条件潜在动力学与高斯式防坍塌正则，再用潜在目标距离进行模型预测控制。

**步骤：**

1. 端到端编码像素状态
2. 预测动作后的目标潜在状态
3. 用分布正则稳定表示
4. 滚动搜索并执行动作

**证据：**

- 作者报告约一千五百万参数、单GPU训练和多环境规划
- 摘要报告相对若干基线最高约48倍规划速度差异

**局限：**

- 正式评议和跨团队复现尚缺
- 较小模型的效率结果依赖实现、搜索预算与任务难度

**意义：**

- 冻结基础编码器并非JEPA控制的必要条件
- 训练稳定性与规划速度可作为独立设计轴

**边界：** 主入口为arXiv预印本；效率数字均为作者在其设置下的报告。

**标识：** arXiv 2603.19312

**资源：** [一手入口](<https://arxiv.org/abs/2603.19312>)

---

<a id="paper-terver-2025-jepa-wm-drivers"></a>
**21. 联合嵌入预测世界模型的物理规划成功由什么驱动？｜What Drives Success in Physical Planning with Joint-Embedding Predictive World Models?（2025 · Transactions on Machine Learning Research）**

**作者：** Basile Terver、Tsung-Yen Yang、Jean Ponce、Adrien Bardes、Yann LeCun

**书目：** 年份 2025；载体 Transactions on Machine Learning Research；状态 同行评议；来源类型 paper

**分类：** 主路线 评测、反证与边界；相关路线 评测、反证与边界、动作条件与控制；层级 闭环规划与控制；阅读层级 核心；证据等级 A；简称 JEPA-WM设计审计

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V4 / D=D3 / P=P3 / Q=Q3

**定位：** 系统拆分编码器、预测目标、数据和规划器选择，审计物理规划成功究竟来自哪一环。

**问题：** 不同JEPA世界模型同时改变多项组件，单看最终成功率无法定位因果贡献。

**机制：** 在统一评测框架中替换视觉编码器、动作动力学、目标距离与搜索策略，并覆盖模拟和真实数据。

**步骤：**

1. 统一数据与规划协议
2. 逐项替换表示和动力学组件
3. 比较预测误差与任务成功
4. 定位交互效应与失败模式

**证据：**

- 作者提供DINO-WM、V-JEPA 2动作条件模型等统一实现和对比
- 实验显示表示、预测器和规划器之间存在不可忽略的交互

**局限：**

- 统一基准仍不能覆盖开放世界感知和安全故障
- 真实机器人数据分析不能替代新增实机闭环试验

**意义：**

- 只比较端到端成功率会掩盖失效来源
- 应联合报告表征诊断、单步与多步误差、搜索预算和闭环成功率

**边界：** OpenReview记录显示该工作于2026年被TMLR正式接收，并获得复现认证；arXiv为同一工作族的早期版本。

**标识：** arXiv 2512.24497

**资源：** [一手入口](<https://openreview.net/forum?id=cHZn5Gdh8e>) · [代码](<https://github.com/facebookresearch/jepa-wms>)

---

<a id="paper-zhang-2026-geoworld"></a>
**22. GeoWorld：几何世界模型｜GeoWorld: Geometric World Models（2026 · CVPR 2026）**

**作者：** Zeyu Zhang、Danning Li、Ian Reid、Richard Hartley

**书目：** 年份 2026；载体 CVPR 2026；状态 同行评议；来源类型 paper

**分类：** 主路线 动作条件与控制；相关路线 动作条件与控制、理论与目标函数；层级 闭环规划与控制；阅读层级 桥接；证据等级 A；简称 GeoWorld

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V3 / D=D2 / P=P3 / Q=Q3

**定位：** 把JEPA潜在状态映射到双曲流形，并在该几何中学习与优化长程规划。

**问题：** 欧氏潜在空间可能不能保留状态层次结构，多步滚动误差又会快速累积。

**机制：** 通过双曲JEPA保留几何与层次关系，再用几何强化学习稳定多步能量优化。

**步骤：**

1. 编码并映射到双曲表示
2. 动作条件预测未来状态
3. 在双曲距离上定义目标能量
4. 用几何强化学习优化多步规划

**证据：**

- CVPR论文在CrossTask与COIN报告三步和四步规划成功率提升
- 正式论文给出相对V-JEPA 2的多步比较

**局限：**

- 流程基准中的离散步骤不等同于连续机器人接触控制
- 双曲几何收益可能依赖数据层次结构

**意义：**

- 潜在空间几何是规划器设计的一部分
- 多步评测不应只依赖单步表示质量

**边界：** 主入口为CVF正式CVPR 2026论文页。

**资源：** [一手入口](<https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_GeoWorld_Geometric_World_Models_CVPR_2026_paper.html>)

---

<a id="paper-lanji-2026-unijepa"></a>
**23. UniJEPA：面向任务无关视觉世界建模的统一联合嵌入预测架构｜UniJEPA: A Unified Joint-Embedding Predictive Architecture for Task-Agnostic Visual World Modeling（2026 · arXiv）**

**作者：** An Lanji、Yann LeCun

**书目：** 年份 2026；载体 arXiv；状态 预印本；来源类型 preprint

**分类：** 主路线 动作条件与控制；相关路线 动作条件与控制、视频与时空动力学、理论与目标函数；层级 闭环规划与控制；阅读层级 背景；证据等级 B；简称 UniJEPA

**核验：** 来源层级 T1；核验状态 abstract-checked；V/D/P/Q V=V2 / D=D2 / P=P1 / Q=Q1

**定位：** 统一光度变换、时间预测与动作条件后训练，并用高斯正则稳定端到端视觉世界模型。

**问题：** 静态不变性、视频动力学和控制通常分阶段且目标不一致。

**机制：** 同一编码器—预测器体系联合学习光度与时间目标，随后加入动作条件数据，在统一潜在空间完成任务无关建模。

**步骤：**

1. 联合构造光度和时间预测任务
2. 用分布正则稳定表示
3. 以动作数据后训练动力学
4. 在多类下游任务评测

**证据：**

- 作者报告单一架构横跨表征、预测和控制任务
- 近期预印本提供多任务消融和动作条件评测

**局限：**

- 提交距截止日仅数日，复现和正式评议尚不存在
- 统一目标的负迁移风险需要更广泛独立基准

**意义：**

- 统一训练是前沿方向但证据成熟度低
- 多目标冲突和计算预算应成为核心审计项

**边界：** 2026-08-07提交的近期arXiv预印本；仅作为截止日前沿信号。

**标识：** arXiv 2608.07409

**资源：** [一手入口](<https://arxiv.org/abs/2608.07409>)

---

<a id="paper-toso-2026-invariant-planning"></a>
**24. 为联合嵌入预测世界模型规划学习不变视觉表征｜Learning Invariant Visual Representations for Planning with Joint-Embedding Predictive World Models（2026 · arXiv）**

**作者：** Leonardo F. Toso、Basile Terver

**书目：** 年份 2026；载体 arXiv；状态 预印本；来源类型 preprint

**分类：** 主路线 动作条件与控制；相关路线 动作条件与控制、评测、反证与边界、理论与目标函数；层级 闭环规划与控制；阅读层级 桥接；证据等级 B；简称 双模拟不变JEPA

**核验：** 来源层级 T1；核验状态 abstract-checked；V/D/P/Q V=V2 / D=D2 / P=P1 / Q=Q2

**定位：** 以双模拟约束抑制与控制无关的慢背景特征，直接回应JEPA在规划中的捷径敏感性。

**问题：** 慢变化但与任务无关的视觉因素可能主导潜在距离并误导规划。

**机制：** 在动作条件JEPA上增加双模拟式等价约束，使具有相似奖励与转移的状态在潜在空间接近。

**步骤：**

1. 训练视觉动作动力学
2. 估计控制相关状态等价
3. 施加双模拟不变约束
4. 在背景分布外场景规划

**证据：**

- 作者在导航和背景变化设置报告更强分布外规划
- 摘要报告可用更小潜在维度保持或改善任务表现

**局限：**

- 依赖任务或奖励相关信号，削弱完全无任务预训练的主张
- 目前为预印本且环境较简单

**意义：**

- 可预测性和可控性不是同一目标
- 规划表征可能需要显式行为等价约束

**边界：** 主入口为arXiv；把结果视为针对慢特征问题的前沿回应。

**标识：** arXiv 2602.18639

**资源：** [一手入口](<https://arxiv.org/abs/2602.18639>)

---

<a id="paper-caselli-2026-mind-the-gap"></a>
**25. 注意训练—搜索差距：LeWorldModel分层规划的潜力与陷阱｜Mind the Gap: Promises and Pitfalls of Hierarchical Planning in LeWorldModel（2026 · arXiv）**

**作者：** Niccolo Caselli、Lucas Maes

**书目：** 年份 2026；载体 arXiv；状态 预印本；来源类型 preprint

**分类：** 主路线 评测、反证与边界；相关路线 评测、反证与边界、动作条件与控制；层级 闭环规划与控制；阅读层级 桥接；证据等级 B；简称 分层规划反例

**核验：** 来源层级 T1；核验状态 abstract-checked；V/D/P/Q V=V2 / D=D2 / P=P1 / Q=Q2

**定位：** 展示分层规划并非自动优于平坦搜索：搜索分布偏离训练分布时，抽象层级反而会放大误差。

**问题：** JEPA蓝图常把层次结构视为长程规划的自然解，但缺少失败条件。

**机制：** 在LeWorldModel上比较平坦与分层搜索，诊断高层候选造成的分布外潜在状态，并用受约束搜索缩小差距。

**步骤：**

1. 训练基础潜在世界模型
2. 构造平坦与分层搜索
3. 测量搜索分布和预测误差
4. 约束高层候选并重新评测

**证据：**

- 作者报告朴素层次化可降低部分任务表现
- 限制搜索分布后可恢复部分层次收益

**局限：**

- 结论绑定LeWorldModel和所选环境
- 近期预印本尚无正式评议

**意义：**

- 层次结构必须与训练分布和模型误差共同设计
- 地图中的自主性层级不代表性能单调增加

**边界：** 主入口为arXiv；作为反证条目，强调作者设置下的训练—搜索分布差距。

**标识：** arXiv 2607.12547

**资源：** [一手入口](<https://arxiv.org/abs/2607.12547>)

---

<a id="paper-bar-2024-stop"></a>
**26. 随机位置嵌入改善掩码图像建模｜Stochastic Positional Embeddings Improve Masked Image Modeling（2024 · ICML 2024）**

**作者：** Amir Bar、Florian Bordes、Assaf Shocher、Mahmoud Assran、Pascal Vincent、Nicolas Ballas、Trevor Darrell、Amir Globerson、Yann LeCun

**书目：** 年份 2024；载体 ICML 2024；状态 同行评议；来源类型 paper

**分类：** 主路线 图像与静态表征；相关路线 图像与静态表征、理论与目标函数；层级 静态表征预测；阅读层级 桥接；证据等级 A；简称 StoP

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V3 / D=D2 / P=P3 / Q=Q3

**定位：** 用随机位置分布替代确定性目标坐标，使I-JEPA不必对被遮挡区域的位置进行过度精确猜测。

**问题：** 确定性位置嵌入会把目标位置当成捷径，并低估遮挡区域的不确定性。

**机制：** 为目标位置构造高斯分布，训练时采样随机位置嵌入条件化预测器，使邻近位置的潜在预测更平滑。

**步骤：**

1. 参数化目标位置分布
2. 采样随机位置嵌入
3. 条件化潜在目标预测
4. 评测掩码与迁移鲁棒性

**证据：**

- ICML论文给出位置随机化的理论说明和图像实验
- 消融报告随机位置条件相对确定性位置的收益

**局限：**

- 只处理空间位置不确定性，不能表达多个语义上不同的合理目标
- 复现配方与原始I-JEPA并非所有细节完全一致

**意义：**

- 预测条件本身决定JEPA学到的抽象层级
- 不确定性可在条件变量而非像素解码器中建模

**边界：** 主入口为PMLR正式ICML论文页。

**资源：** [一手入口](<https://proceedings.mlr.press/v235/bar24a.html>) · [代码](<https://github.com/amirbar/StoP>)

---

<a id="paper-darcet-2025-capi"></a>
**27. 聚类并预测潜在图块以改进掩码图像建模｜Cluster and Predict Latent Patches for Improved Masked Image Modeling（2025 · Transactions on Machine Learning Research）**

**作者：** Timothee Darcet、Federico Baldassarre、Maxime Oquab、Julien Mairal、Piotr Bojanowski

**书目：** 年份 2025；载体 Transactions on Machine Learning Research；状态 同行评议；来源类型 paper

**分类：** 主路线 图像与静态表征；相关路线 图像与静态表征、理论与目标函数；层级 静态表征预测；阅读层级 桥接；证据等级 A；简称 CAPI

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V3 / D=D2 / P=P3 / Q=Q3

**定位：** 把连续逐点潜目标改成在线聚类的离散类别分配，增强局部语义并连接JEPA与离散掩码建模。

**问题：** 连续潜在回归可能平滑局部语义，导致稠密任务读出不足。

**机制：** 目标网络编码完整图像并在线聚类，掩码上下文网络预测缺失图块的原型分配，聚类与预测共同更新。

**步骤：**

1. 编码完整图像图块
2. 在线聚类形成潜在原型
3. 从掩码上下文预测类别分配
4. 联合更新目标结构

**证据：**

- TMLR论文在ImageNet分类和ADE20K分割报告收益
- 消融比较连续回归与离散潜目标

**局限：**

- 目标质量依赖聚类和原型平衡
- 论文属于JEPA直接邻接分支，不能把所有离散潜目标都追溯改名为JEPA

**意义：**

- 目标表示的离散性是独立设计轴
- 稠密语义可通过目标构造而非更大编码器改善

**边界：** OpenReview记录显示被TMLR接收；作为潜在目标建模的邻接桥梁纳入。

**资源：** [一手入口](<https://openreview.net/forum?id=Ycmz7qJxUQ>)

---

<a id="paper-kalapos-2026-cnn-jepa"></a>
**28. 探索用于卷积神经网络预训练的联合嵌入预测架构｜Exploring Joint Embedding Predictive Architectures for Pretraining Convolutional Neural Networks（2026 · Computer Vision and Image Understanding）**

**作者：** Andras Kalapos、Balint Gyires-Toth

**书目：** 年份 2026；载体 Computer Vision and Image Understanding；状态 同行评议；来源类型 paper

**分类：** 主路线 图像与静态表征；相关路线 图像与静态表征；层级 静态表征预测；阅读层级 背景；证据等级 A；简称 CNN-JEPA

**核验：** 来源层级 T1；核验状态 abstract-checked；V/D/P/Q V=V2 / D=D2 / P=P3 / Q=Q2

**定位：** 把I-JEPA迁移到卷积网络，并处理卷积感受野造成的遮挡信息泄漏。

**问题：** I-JEPA的稀疏可见图块流程为ViT设计，直接套用卷积会泄漏遮挡邻域。

**机制：** 用稀疏卷积编码可见区域，以掩码令牌填充潜在特征图，再由深度可分离卷积预测目标表示并用EMA更新目标网络。

**步骤：**

1. 构造稀疏遮挡输入
2. 卷积编码可见区域
3. 填充潜在掩码令牌
4. 卷积预测目标表示

**证据：**

- 期刊论文扩展早期CNN-JEPA预印本并提供ImageNet规模比较
- 实验分析局部与全局预测头的作用

**局限：**

- 主要围绕ResNet-50和中等规模图像设置
- 跨架构比较同时混入归纳偏置与训练预算差异

**意义：**

- JEPA不是Transformer专属
- 遮挡机制必须适配主干的感受野和信息传播方式

**边界：** 以期刊DOI为主入口；2024年的CNN-JEPA预印本视为同一工作族前序版本。

**资源：** [一手入口](<https://doi.org/10.1016/j.cviu.2025.104595>)

---

<a id="paper-huang-2026-text-conditional-jepa"></a>
**29. 文本条件JEPA学习语义丰富的视觉表征｜Text-Conditional JEPA for Learning Semantically Rich Visual Representations（2026 · ICML 2026）**

**作者：** Chen Huang、Xianhang Li、Vimal Thilak、Etai Littwin、Josh Susskind

**书目：** 年份 2026；载体 ICML 2026；状态 同行评议；来源类型 paper

**分类：** 主路线 图像与静态表征；相关路线 图像与静态表征、多模态与跨域迁移；层级 静态表征预测；阅读层级 桥接；证据等级 A；简称 TC-JEPA

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V3 / D=D2 / P=P3 / Q=Q3

**定位：** 用图像描述条件化I-JEPA预测器，减少单幅上下文对被遮挡语义目标的一对多歧义。

**问题：** 仅凭可见图像区域无法唯一确定遮挡目标，点预测可能趋向平均。

**机制：** 文本编码器产生词元，在预测器多层以稀疏交叉注意力调制图块预测；目标仍是EMA视觉表示而非文本生成。

**步骤：**

1. 编码图像上下文和描述文本
2. 跨注意力调制预测器
3. 预测遮挡视觉目标表示
4. 下游仅保留视觉编码器

**证据：**

- ICML论文在分类和稠密视觉任务报告语言条件收益
- 受控实验区分纯潜在预测与额外图文对比目标

**局限：**

- 不再是纯图像自监督，收益可能来自语言监督和文本编码器先验
- 描述可能带偏差或幻觉

**意义：**

- 条件信息可降低JEPA目标不确定性
- 跨模态信息可在训练期进入预测器而不必成为推断输入

**边界：** 主入口为论文预印本和作者机构页面；正式状态按ICML 2026核验。

**资源：** [一手入口](<https://arxiv.org/abs/2605.03245>) · [项目页](<https://machinelearning.apple.com/research/text-conditional-jepa-visual-representations>)

---

<a id="paper-zhang-2026-hwm"></a>
**30. 使用潜在世界模型进行分层规划｜Hierarchical Planning with Latent World Models（2026 · arXiv）**

**作者：** Wancong Zhang、Basile Terver、Artem Zholus、Soham Chitnis、Harsh Sutaria、Mido Assran、Randall Balestriero、Adrien Bardes、Yann LeCun、Nicolas Ballas

**书目：** 年份 2026；载体 arXiv；状态 预印本；来源类型 preprint

**分类：** 主路线 动作条件与控制；相关路线 动作条件与控制、评测、反证与边界；层级 闭环规划与控制；阅读层级 核心；证据等级 B；简称 HWM

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V4 / D=D3 / P=P1 / Q=Q3

**定位：** 在共享潜在空间训练长短时间尺度世界模型和宏动作编码器，首次直接验证只给最终目标图的实机非贪心分层规划。

**问题：** 短视距MPC依赖人工中间目标，难以完成需要先偏离终点的长程任务。

**机制：** 高层模型生成潜在子目标和宏动作，低层动作条件模型逐步执行；两层都随新观察重新规划。

**步骤：**

1. 训练短期与长期潜在动力学
2. 把动作块压缩为宏动作
3. 高层生成潜在子目标
4. 低层闭环执行并重规划

**证据：**

- 作者在Franka拾放与抽屉任务报告真实闭环提升
- 在DINO-WM Push-T和PLDM未见迷宫上报告长时域收益

**局限：**

- 仍需离线机器人数据训练高层预测器和动作编码器
- 任务越长表现仍退化，高层子目标可能丢失精细深度

**意义：**

- 层次规划可减少人工子目标，但不是免训练插件
- 应与Mind the Gap的搜索分布反例共同阅读

**边界：** 截至截止日为arXiv预印本；实机结论按正文试验范围表述。

**标识：** arXiv 2604.03208

**资源：** [一手入口](<https://arxiv.org/abs/2604.03208>) · [项目页](<https://kevinghst.github.io/HWM/>)

---

<a id="paper-fei-2023-ajepa"></a>
**31. A-JEPA：联合嵌入预测架构也能聆听｜A-JEPA: Joint-Embedding Predictive Architecture Can Listen（2023 · arXiv）**

**作者：** Zhengcong Fei、Mingyuan Fan、Junshi Huang

**书目：** 年份 2023；载体 arXiv；状态 预印本；来源类型 preprint

**分类：** 主路线 多模态与跨域迁移；相关路线 多模态与跨域迁移；层级 无动作时空动力学；阅读层级 桥接；证据等级 B；简称 A-JEPA

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V3 / D=D2 / P=P1 / Q=Q2

**定位：** 把I-JEPA式潜在块预测迁移到梅尔谱，并用时间—频率课程掩码适配音频结构。

**问题：** 图像块掩码未必适合强时间与频率结构的音频信号。

**机制：** 上下文编码器处理可见谱图块，预测器恢复EMA目标编码器在遮挡时频区域的表示，并逐步调整掩码难度。

**步骤：**

1. 切分梅尔谱时频块
2. 按课程遮挡上下文
3. 预测目标潜在块
4. 迁移到音频与语音分类

**证据：**

- 作者在AudioSet等分类任务报告可行性
- 消融分析时间和频率掩码策略

**局限：**

- 截至截止日未核验到正式发表版本
- 主要证据为分类，尚非通用音频生成或因果动力学

**意义：**

- 模态迁移需要重设掩码几何
- A表示Audio而非Action，需与动作条件分支消歧

**边界：** 主入口为arXiv预印本；未把未核验投稿升级为正式论文。

**标识：** arXiv 2311.15830

**资源：** [一手入口](<https://arxiv.org/abs/2311.15830>)

---

<a id="paper-riou-2024-audio-design"></a>
**32. 通用音频表征学习中JEPA设计选择研究｜Investigating Design Choices in Joint-Embedding Predictive Architectures for General Audio Representation Learning（2024 · ICASSP Workshops 2024）**

**作者：** Alain Riou、Stefan Lattner、Gaetan Hadjeres、Geoffroy Peeters

**书目：** 年份 2024；载体 ICASSP Workshops 2024；状态 同行评议；来源类型 paper

**分类：** 主路线 多模态与跨域迁移；相关路线 多模态与跨域迁移、评测、反证与边界；层级 无动作时空动力学；阅读层级 桥接；证据等级 A；简称 音频设计审计

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V3 / D=D2 / P=P2 / Q=Q2

**定位：** 以系统消融表明图像JEPA有效的上下文、目标与掩码选择在音频上可能失效。

**问题：** 跨模态直接复制I-JEPA配方会忽略谱图的时间与频率非对称性。

**机制：** 在统一音频JEPA中改变上下文跨度、目标几何和掩码比例，比较冻结表征的通用音频迁移。

**步骤：**

1. 固定音频编码与评测协议
2. 改变上下文和目标布局
3. 训练潜在预测模型
4. 跨音频任务比较

**证据：**

- 正式研讨会论文提供多项音频设计消融
- 结果直接显示图像经验不能无条件迁移

**局限：**

- 短篇研讨会论文，规模和任务覆盖有限
- 尚未形成大规模原始波形统一基准

**意义：**

- 跨域JEPA的关键不是改输入维度，而是重建可预测关系
- 负面设计结果应与正向榜单同等展示

**边界：** 正式发表于ICASSP Workshops 2024；主入口使用作者预印本以便离线索引。

**标识：** arXiv 2405.08679

**资源：** [一手入口](<https://arxiv.org/abs/2405.08679>)

---

<a id="paper-dong-2024-brain-jepa"></a>
**33. Brain-JEPA：基于梯度定位与时空掩码的脑动力学基础模型｜Brain-JEPA: Brain Dynamics Foundation Model with Gradient Positioning and Spatiotemporal Masking（2024 · NeurIPS 2024）**

**作者：** Zijian Dong、Ruilin Li、Yilei Wu、Thuan Tinh Nguyen、Juan Helen Zhou

**书目：** 年份 2024；载体 NeurIPS 2024；状态 同行评议；来源类型 paper

**分类：** 主路线 多模态与跨域迁移；相关路线 多模态与跨域迁移、视频与时空动力学；层级 无动作时空动力学；阅读层级 桥接；证据等级 A；简称 Brain-JEPA

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V3 / D=D3 / P=P3 / Q=Q3

**定位：** 用脑功能梯度作为区域坐标，并设计跨脑区、跨时间和双重时空掩码学习fMRI动力学表示。

**问题：** 规则图像位置编码和掩码不能表达脑区功能坐标及异质时间序列。

**机制：** 以功能梯度编码ROI位置，构造三类时空目标块，预测EMA目标编码器的脑活动表示。

**步骤：**

1. 按ROI与时间切分fMRI
2. 编码脑功能梯度位置
3. 施加三类时空掩码
4. 预测目标脑活动表示

**证据：**

- NeurIPS论文在疾病、人口属性和认知特征任务报告迁移结果
- 提供跨族群泛化与多种掩码消融

**局限：**

- 依赖静息态fMRI与既定ROI分区
- 临床结论来自回顾性下游适配，缺少前瞻验证

**意义：**

- 位置坐标应遵循领域结构
- 时空目标可从规则视频块推广到功能网络

**边界：** 主入口为NeurIPS正式论文页。

**资源：** [一手入口](<https://proceedings.neurips.cc/paper_files/paper/2024/hash/9c3828adf1500f5de3c56f6550dfe43c-Abstract-Conference.html>) · [代码](<https://github.com/Eric-LRL/Brain-JEPA>)

---

<a id="paper-thimonier-2025-tjepa"></a>
**34. T-JEPA：无需数据增强的表格自监督学习｜T-JEPA: Augmentation-Free Self-Supervised Learning for Tabular Data（2025 · ICLR 2025）**

**作者：** Hugo Thimonier、Jose Lucas De Melo Costa、Fabrice Popineau、Arpad Rimmel、Bich-Lien Doan

**书目：** 年份 2025；载体 ICLR 2025；状态 同行评议；来源类型 paper

**分类：** 主路线 多模态与跨域迁移；相关路线 多模态与跨域迁移、图像与静态表征；层级 静态表征预测；阅读层级 桥接；证据等级 A；简称 T-JEPA

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V3 / D=D2 / P=P3 / Q=Q3

**定位：** 把列组遮挡后的潜在预测用于无统一增强策略的异质表格数据。

**问题：** 通用表格数据缺少像图像裁剪那样可靠的语义保持增强。

**机制：** 把特征列划分为上下文与目标集合，编码上下文并预测目标列组的教师表示，避免原始数值重建。

**步骤：**

1. 划分表格列组
2. 遮挡目标特征组
3. 预测目标潜在表示
4. 线性探测与微调评测

**证据：**

- ICLR论文在多类表格数据集报告无需增强的竞争结果
- 消融比较列分组、掩码和目标设计

**局限：**

- 表格列语义和尺度高度数据集特定
- 与同名轨迹T-JEPA不是同一工作

**意义：**

- JEPA可绕开难以定义的输入增强
- 缩写不能作为工作族去重键

**边界：** 主入口为ICLR 2025正式论文；明确与其他同名T-JEPA消歧。

**资源：** [一手入口](<https://openreview.net/pdf?id=gx3LMRB15C>)

---

<a id="paper-saito-2025-point-jepa"></a>
**35. Point-JEPA：面向点云自监督学习的联合嵌入预测架构｜Point-JEPA: A Joint Embedding Predictive Architecture for Self-Supervised Learning on Point Cloud（2025 · WACV 2025）**

**作者：** Ayumu Saito、Prachi Kudeshia、Jiju Poovvancheri

**书目：** 年份 2025；载体 WACV 2025；状态 同行评议；来源类型 paper

**分类：** 主路线 多模态与跨域迁移；相关路线 多模态与跨域迁移、图像与静态表征；层级 静态表征预测；阅读层级 桥接；证据等级 A；简称 Point-JEPA

**核验：** 来源层级 T1；核验状态 abstract-checked；V/D/P/Q V=V2 / D=D2 / P=P3 / Q=Q2

**定位：** 从可见点云局部块预测被遮挡三维块的潜在表示，避免直接坐标重建。

**问题：** 点坐标重建容易聚焦局部采样细节而非物体语义。

**机制：** 把点云分组为局部块，编码可见组并利用空间位置预测目标组的教师表示。

**步骤：**

1. 分组与编码局部点块
2. 采样上下文和目标组
3. 预测目标潜在表示
4. 评测三维分类与分割

**证据：**

- WACV论文在点云识别与分割基准报告迁移结果
- 对比坐标重建和多种掩码设置

**局限：**

- 集中于静态三维基准
- 不包含时间动力学或跨传感器校准

**意义：**

- 潜在预测可推广到非规则几何
- 三维位置与分组策略成为新的归纳偏置

**边界：** 主入口为CVF正式WACV论文页。

**资源：** [一手入口](<https://openaccess.thecvf.com/content/WACV2025/html/Saito_Point-JEPA_A_Joint_Embedding_Predictive_Architecture_for_Self-Supervised_Learning_on_WACV_2025_paper.html>)

---

<a id="paper-skenderi-2025-graph-jepa"></a>
**36. 使用联合嵌入预测架构学习图级表示｜Graph-level Representation Learning with Joint-Embedding Predictive Architectures（2025 · Transactions on Machine Learning Research）**

**作者：** Geri Skenderi、Hang Li、Jiliang Tang、Marco Cristani

**书目：** 年份 2025；载体 Transactions on Machine Learning Research；状态 同行评议；来源类型 paper

**分类：** 主路线 多模态与跨域迁移；相关路线 多模态与跨域迁移、理论与目标函数；层级 静态表征预测；阅读层级 桥接；证据等级 A；简称 Graph-JEPA

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V3 / D=D3 / P=P3 / Q=Q3

**定位：** 从上下文子图预测被遮挡子图表示，并探索双曲目标以编码图级层次。

**问题：** 规则网格掩码不能直接表达图的非规则拓扑和隐含层次。

**机制：** 对图进行空间分区，编码上下文子图，预测目标子图连续表示或其双曲坐标。

**步骤：**

1. 划分图为上下文与目标子图
2. 编码拓扑和位置
3. 预测目标子图表示
4. 评测分类、回归与结构区分

**证据：**

- TMLR论文覆盖图分类、回归和非同构图区分
- 修订版增加长程图任务和公开代码

**局限：**

- 主要是图级表征基准
- 尚未证明可作为真实科学动力学模型

**意义：**

- JEPA可在非欧氏结构上定义目标区域
- 潜在空间几何可编码层次先验

**边界：** OpenReview记录显示2025年被TMLR接收；2023年预印本属于同一工作族。

**资源：** [一手入口](<https://openreview.net/forum?id=v47f4DwYZb>) · [代码](<https://github.com/geriskenderi/graph-jepa>)

---

<a id="paper-astruc-2025-anysat"></a>
**37. AnySat：适配多分辨率、多尺度和多模态的统一地球观测模型｜AnySat: One Earth Observation Model for Many Resolutions, Scales, and Modalities（2025 · CVPR 2025）**

**作者：** Guillaume Astruc、Nicolas Gonthier、Clement Mallet、Loic Landrieu

**书目：** 年份 2025；载体 CVPR 2025；状态 同行评议；来源类型 paper

**分类：** 主路线 多模态与跨域迁移；相关路线 多模态与跨域迁移、图像与静态表征；层级 静态表征预测；阅读层级 核心；证据等级 A；简称 AnySat

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V4 / D=D3 / P=P3 / Q=Q3

**定位：** 用尺度自适应编码和多传感器潜在预测，在一个模型中统一十一类地球观测传感器。

**问题：** 遥感数据在分辨率、尺度、波段和传感器组合上高度异质。

**机制：** 学生编码被模态与时间遮挡的多传感器块，预测EMA教师在完整输入上的多模态块表示，并加入跨模态对齐。

**步骤：**

1. 按传感器和尺度分词
2. 遮挡模态、时间与空间块
3. 预测完整多模态目标表示
4. 跨数据集微调与探测

**证据：**

- CVPR论文构建五数据集、十一传感器GeoPlex并联合预训练
- 在六个外部数据集和多类环境监测任务报告迁移结果

**局限：**

- 同时包含跨模态InfoNCE，不是纯潜在回归
- 训练地域分布仍偏欧美，全球泛化需继续检验

**意义：**

- 跨域JEPA可把异质传感器对齐为预测问题
- 模态缺失鲁棒性应成为多模态地图标准维度

**边界：** 主入口为CVF正式CVPR论文页。

**资源：** [一手入口](<https://openaccess.thecvf.com/content/CVPR2025/html/Astruc_AnySat_One_Earth_Observation_Model_for_Many_Resolutions_Scales_and_CVPR_2025_paper.html>) · [代码](<https://github.com/gastruc/AnySat>)

---

<a id="paper-lei-2025-m3-jepa"></a>
**38. M3-JEPA：基于多门控专家混合的多模态潜在对齐｜M3-JEPA: Multimodal Alignment via Multi-gate MoE based on the Joint-Embedding Predictive Architecture（2025 · ICML 2025）**

**作者：** Hongyang Lei、Xiaolong Cheng、Qi Qin、Dan Wang、Huazhen Huang、Qingqing Gu、Yetao Wu、Luo Ji

**书目：** 年份 2025；载体 ICML 2025；状态 同行评议；来源类型 paper

**分类：** 主路线 多模态与跨域迁移；相关路线 多模态与跨域迁移、理论与目标函数；层级 静态表征预测；阅读层级 桥接；证据等级 A；简称 M3-JEPA

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V3 / D=D3 / P=P3 / Q=Q3

**定位：** 用多门控专家预测器把输入模态嵌入映射到目标模态空间，分离共享与模态特有信息。

**问题：** 直接在原始词元空间对齐多模态容易造成模态坍塌和负迁移。

**机制：** 多门控专家预测器完成跨模态映射，并与对比、方差正则及任务间交替梯度共同优化。

**步骤：**

1. 编码多模态输入
2. 门控路由共享与专属专家
3. 预测目标模态嵌入
4. 联合对齐与正则化

**证据：**

- PMLR正式论文覆盖多种模态和任务
- 作者报告未见域迁移及训练、推断效率比较

**局限：**

- 大量依赖预训练编码器与对比项
- 与典型EMA遮挡JEPA存在机制距离

**意义：**

- JEPA可与对比目标共存
- 多模态预测器的路由结构可显式建模共享与专属信息

**边界：** 主入口为PMLR正式ICML论文页；其混合损失属性在地图中显式标注。

**资源：** [一手入口](<https://proceedings.mlr.press/v267/lei25b.html>)

---

<a id="paper-huang-2026-llm-jepa"></a>
**39. LLM-JEPA：大语言模型与联合嵌入预测架构相遇｜LLM-JEPA: Large Language Models Meet Joint Embedding Predictive Architectures（2026 · ICLR 2026）**

**作者：** Hai Huang、Yann LeCun、Randall Balestriero

**书目：** 年份 2026；载体 ICLR 2026；状态 同行评议；来源类型 paper

**分类：** 主路线 多模态与跨域迁移；相关路线 多模态与跨域迁移、理论与目标函数；层级 静态表征预测；阅读层级 桥接；证据等级 A；简称 LLM-JEPA

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V3 / D=D2 / P=P3 / Q=Q3

**定位：** 在下一词元目标之外加入跨天然配对文本视图的隐藏表示预测，把JEPA引入语言预训练与微调。

**问题：** 语言目标多解，简单遮挡潜在回归容易平均化或坍塌。

**机制：** 对文本—代码等互补视图分别编码，预测器将一侧最终隐藏表示映射到另一侧，同时保留自回归语言损失。

**步骤：**

1. 构造互补文本视图
2. 分别编码两侧隐藏表示
3. 跨视图预测目标表示
4. 与下一词元损失联合训练

**证据：**

- ICLR 2026记录标注为poster
- 论文覆盖推理、文本到SQL和分类等多类任务及多个模型族

**局限：**

- 需要信息互补且非平凡的配对视图
- 额外前向计算明显，不能推出纯文本遮挡JEPA普遍有效

**意义：**

- 语言JEPA目前更像混合目标而非生成目标替代品
- 多解性是跨模态迁移的核心障碍

**边界：** 正式状态按ICLR 2026官方OpenReview列表核验；arXiv为稳定主入口。

**标识：** arXiv 2509.14252

**资源：** [一手入口](<https://arxiv.org/abs/2509.14252>) · [代码](<https://github.com/rbalestr-lab/llm-jepa>)

---

<a id="paper-chen-2026-vl-jepa"></a>
**40. VL-JEPA：面向视觉语言的联合嵌入预测架构｜VL-JEPA: Joint Embedding Predictive Architecture for Vision-language（2026 · ICLR 2026）**

**作者：** Delong Chen、Mustafa Shukor、Theo Moutakanni、Willy Chung、Jade Yu、Yann LeCun、Pascale Fung

**书目：** 年份 2026；载体 ICLR 2026；状态 同行评议；来源类型 paper

**分类：** 主路线 多模态与跨域迁移；相关路线 多模态与跨域迁移、视频与时空动力学；层级 无动作时空动力学；阅读层级 核心；证据等级 A；简称 VL-JEPA

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V4 / D=D3 / P=P3 / Q=Q3

**定位：** 从视觉输入和文本查询直接预测目标文本的连续语义表示，只在需要时调用轻量解码器。

**问题：** 视觉语言模型在训练时重建每个词元，且流式视频中固定密集解码成本高。

**机制：** 冻结或初始化强视觉与文本编码器，预测器把视觉表示和查询映射到目标文本嵌入；分类、检索可直接用潜在空间，生成时选择性解码。

**步骤：**

1. 编码视觉流和文本查询
2. 预测目标文本嵌入
3. 直接完成检索或分类
4. 按需把嵌入解码为文本

**证据：**

- ICLR正式论文在分类、检索和VQA上进行受控比较
- 作者报告选择性解码可减少约2.85倍解码操作

**局限：**

- 依赖V-JEPA 2与强文本编码器初始化，并使用对比正则和后续监督微调
- 潜在预测并未消除所有语言解码需求

**意义：**

- 连续语义目标可支持多种读出方式
- 非生成式主目标与可选生成解码可以共存

**边界：** 主入口为ICLR 2026正式OpenReview记录；作者名单以正式稿为准。

**资源：** [一手入口](<https://openreview.net/forum?id=tjimrqc2BU>)

---

<a id="paper-choudhury-2026-xjepa"></a>
**41. X-JEPA：面向遥感图像检索的跨模态预测对齐｜X-JEPA: A Novel Joint Learning Cross-Modal Predictive Alignment Framework for Remote Sensing Image Retrieval（2026 · WACV 2026）**

**作者：** Shabnam Choudhury、Yash Salunkhe、Vaibhav Rajan、Subhasis Chaudhuri、Biplab Banerjee

**书目：** 年份 2026；载体 WACV 2026；状态 同行评议；来源类型 paper

**分类：** 主路线 多模态与跨域迁移；相关路线 多模态与跨域迁移、图像与静态表征；层级 静态表征预测；阅读层级 桥接；证据等级 A；简称 X-JEPA

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V3 / D=D2 / P=P3 / Q=Q3

**定位：** 从一种遥感传感器上下文预测另一模态的遮挡语义表示，并约束预测空间几何。

**问题：** 跨传感器检索受分辨率、成像物理和语义错位影响。

**机制：** 模态专用编码器提取上下文与目标，跨模态预测器恢复潜在目标，并用预测空间对齐约束检索几何。

**步骤：**

1. 编码不同传感器模态
2. 遮挡目标语义区域
3. 跨模态预测目标表示
4. 在预测空间执行检索对齐

**证据：**

- WACV正式论文在多类遥感跨模态检索基准报告结果
- 方法消融区分预测与对齐组件

**局限：**

- 任务集中于遥感检索
- 无配对需求等宣传需结合具体训练数据关系谨慎解释

**意义：**

- 跨模态关系可由条件预测而非仅相似度对齐表示
- 正式遥感分支已从单模态扩展到传感器互预测

**边界：** 主入口为CVF正式WACV 2026论文页。

**资源：** [一手入口](<https://openaccess.thecvf.com/content/WACV2026/html/Choudhury_X-JEPA_A_Novel_Joint_Learning_Cross-Modal_Predictive_Alignment_Framework_for_WACV_2026_paper.html>)

---

<a id="paper-fox-2026-physiojepa"></a>
**42. PhysioJEPA：生理信号联合嵌入用于重症监护实时风险估计｜PhysioJEPA: Joint Embedding Representations of Physiological Signals for Real Time Risk Estimation in the Intensive Care Unit（2026 · Machine Learning for Health Symposium）**

**作者：** Benjamin Fox、Dung Hoang、Joy Jiang、Pushkala Jayaraman、Ankit Parekh、Girish N. Nadkarni、Ankit Sakhuja

**书目：** 年份 2026；载体 Machine Learning for Health Symposium；状态 同行评议；来源类型 paper

**分类：** 主路线 多模态与跨域迁移；相关路线 多模态与跨域迁移、视频与时空动力学；层级 无动作时空动力学；阅读层级 桥接；证据等级 A；简称 PhysioJEPA

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V3 / D=D3 / P=P3 / Q=Q3

**定位：** 在动脉压、心电与光电容积三路床旁信号上学习潜在时序表示，用于短期低血压与休克风险估计。

**问题：** 多路高频生理信号标注昂贵，设备噪声和采样差异又限制监督模型。

**机制：** 把三十分钟多通道信号切为秒级块，随机选择目标位置，由预测器恢复EMA全序列编码器表示。

**步骤：**

1. 同步三类床旁信号
2. 切分秒级时间块
3. 随机遮挡并预测目标表示
4. 冻结表征估计短期风险

**证据：**

- PMLR论文使用超过一千万分钟、2631名患者数据
- 报告五分钟低血压和休克指数风险，并与ECG-JEPA及监督基线比较

**局限：**

- 仅三类信号和两个短期终点
- 回顾性队列不能证明临床部署收益或安全性

**意义：**

- 连续生理信号是时序JEPA的重要非视觉验证
- 临床外部验证与校准应和AUROC同等重要

**边界：** 主入口为PMLR正式论文页；年份按论文集2026记录。

**资源：** [一手入口](<https://proceedings.mlr.press/v297/fox26a.html>)

---

<a id="paper-kondepudi-2026-neurovfm"></a>
**43. 卫生系统学习推动通用神经影像模型｜Health System Learning Enables Generalist Neuroimaging Models（2026 · Nature Medicine）**

**作者：** Akhil Kondepudi、Akshay Rao、Chenhui Zhao

**书目：** 年份 2026；载体 Nature Medicine；状态 同行评议；来源类型 paper

**分类：** 主路线 多模态与跨域迁移；相关路线 多模态与跨域迁移、图像与静态表征；层级 静态表征预测；阅读层级 核心；证据等级 A；简称 NeuroVFM／Vol-JEPA

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V4 / D=D3 / P=P3 / Q=Q3

**定位：** 以三维体积JEPA在卫生系统规模MRI和CT上训练通用神经影像模型，是跨域JEPA最强的正式临床规模证据之一。

**问题：** 三维神经影像标注稀缺，扫描协议和病种分布跨机构变化显著。

**机制：** 三维学生ViT观察小上下文体块，位置条件预测器恢复EMA教师的大目标体块表示，再用于多类临床任务适配。

**步骤：**

1. 标准化三维MRI与CT
2. 采样小上下文和大目标体块
3. 预测目标体积表示
4. 跨任务和外部队列适配

**证据：**

- Nature Medicine正式论文报告卫生系统规模训练与多任务验证
- 方法部分明确给出Vol-JEPA的三维掩码和smooth-L1潜在目标

**局限：**

- 训练数据由单一卫生系统主导且多为私有
- 主要为回顾性验证，缺少多系统前瞻临床试验

**意义：**

- JEPA可扩展到大规模三维医学体积
- 临床有效性不能只由回顾性下游分数替代

**边界：** 主入口为Nature Medicine DOI；临床主张限定于论文报告的回顾性和外部验证范围。

**资源：** [一手入口](<https://doi.org/10.1038/s41591-026-04497-1>)

---

<a id="paper-weimann-2025-ecg-jepa"></a>
**44. 使用JEPA自监督预训练提升心电分类性能｜Self-Supervised Pre-Training with JEPA Boosts ECG Classification Performance（2025 · Computers in Biology and Medicine）**

**作者：** Kuba Weimann、Tim O. F. Conrad

**书目：** 年份 2025；载体 Computers in Biology and Medicine；状态 同行评议；来源类型 paper

**分类：** 主路线 多模态与跨域迁移；相关路线 多模态与跨域迁移、视频与时空动力学；层级 无动作时空动力学；阅读层级 桥接；证据等级 A；简称 ECG-JEPA

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V3 / D=D3 / P=P3 / Q=Q3

**定位：** 在十个公开心电库、百万级记录上预训练时间块潜在预测器，建立正式的大规模ECG证据。

**问题：** 心电标签昂贵且跨数据集、设备和病种差异大。

**机制：** 上下文ViT编码可见心电块，窄预测器最小化被遮挡目标块的教师特征L1误差。

**步骤：**

1. 汇总与标准化多库心电
2. 遮挡时间块
3. 预测目标心电表示
4. 下游分类与跨库迁移

**证据：**

- 正式期刊论文覆盖十个公开数据库和超过百万条记录
- 作者公开ECG-JEPA代码并比较监督及自监督基线

**局限：**

- 重点仍是分类而非连续风险或临床决策
- 缺少真实部署、跨设备校准和临床影响评估

**意义：**

- 跨库规模验证比单一医学数据集更有说服力
- 医学JEPA仍需前瞻、安全和隐私评测

**边界：** 主入口为期刊DOI和作者代码；不与被拒稿的同名投稿记录混淆。

**资源：** [一手入口](<https://doi.org/10.1016/j.compbiomed.2025.110809>) · [代码](<https://github.com/kweimann/ECG-JEPA>)

---

<a id="paper-luo-2025-jedi"></a>
**45. 超越FVD：增强视频生成质量评测指标｜Beyond FVD: Enhanced Evaluation Metrics for Video Generation Quality（2025 · ICLR 2025）**

**作者：** Ge Ya Luo、Xuan Long Do、Feng Liu

**书目：** 年份 2025；载体 ICLR 2025；状态 同行评议；来源类型 paper

**分类：** 主路线 评测、反证与边界；相关路线 评测、反证与边界、视频与时空动力学；层级 无动作时空动力学；阅读层级 桥接；证据等级 A；简称 JEDi

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V3 / D=D3 / P=P3 / Q=Q3

**定位：** 用V-JEPA特征构造视频生成距离JEDi，检验潜在表征能否比传统FVD更贴近时空质量。

**问题：** 基于旧分类网络的FVD对内容和运动失真敏感性有限。

**机制：** 提取真实与生成视频的V-JEPA表示，比较其分布距离，并用受控失真和人类判断校准指标。

**步骤：**

1. 提取视频潜在特征
2. 估计真实与生成分布
3. 计算JEDi距离
4. 与受控失真和人工偏好比较

**证据：**

- ICLR论文在多种视频生成模型和扰动上比较指标
- 结果显示JEPA特征可提供不同于FVD的时空敏感性

**局限：**

- 指标质量继承V-JEPA表征偏差
- 生成评测相关性不能反向证明V-JEPA是准确世界模拟器

**意义：**

- JEPA也可作为评测表示而非训练目标
- 表征基准与生成质量指标需避免循环验证

**边界：** 主入口为ICLR 2025正式OpenReview记录。

**资源：** [一手入口](<https://openreview.net/forum?id=cC3LxGZasH>)

---

<a id="paper-alrasheed-2026-latent-video-prediction"></a>
**46. 潜在视频预测学习到更好的世界模型｜Latent Video Prediction Learns Better World Models（2026 · arXiv）**

**作者：** Ali J. Alrasheed

**书目：** 年份 2026；载体 arXiv；状态 预印本；来源类型 preprint

**分类：** 主路线 评测、反证与边界；相关路线 评测、反证与边界、视频与时空动力学；层级 无动作时空动力学；阅读层级 桥接；证据等级 B；简称 潜在视频模型对照

**核验：** 来源层级 T1；核验状态 abstract-checked；V/D/P/Q V=V2 / D=D3 / P=P1 / Q=Q2

**定位：** 直接比较V-JEPA 2、2.1、VideoPrism和VideoMAE等视频基础模型的世界模型与鲁棒性属性。

**问题：** 动作识别榜单不能回答表示是否保留对象、运动、物理和分布外信息。

**机制：** 冻结多类视频编码器，在统一探针与扰动协议下评测预测、物理、对象和鲁棒性。

**步骤：**

1. 选择匹配视频编码器
2. 统一冻结探针
3. 施加时空与分布外扰动
4. 比较多类世界模型属性

**证据：**

- 作者提供跨模型统一比较而非单方法宣传
- 结果揭示潜在预测模型的优势与任务相关失效

**局限：**

- 截至截止日为预印本
- 探针可读性不等于闭环可控性或因果表征

**意义：**

- 视频基础模型需要多维世界模型审计
- 榜单平均分不能替代失败模式分解

**边界：** 主入口为arXiv预印本；比较结论按作者统一协议范围表述。

**标识：** arXiv 2605.15618

**资源：** [一手入口](<https://arxiv.org/abs/2605.15618>)

---

<a id="paper-nilaksh-2026-reconstruction-semantics"></a>
**47. 重建还是语义？什么样的潜在空间适合机器人世界模型｜Reconstruction or Semantics? What Makes a Latent Space Useful for Robotic World Models（2026 · arXiv）**

**作者：** Nilaksh

**书目：** 年份 2026；载体 arXiv；状态 预印本；来源类型 preprint

**分类：** 主路线 评测、反证与边界；相关路线 评测、反证与边界、动作条件与控制；层级 闭环规划与控制；阅读层级 桥接；证据等级 B；简称 机器人潜在空间审计

**核验：** 来源层级 T1；核验状态 abstract-checked；V/D/P/Q V=V2 / D=D3 / P=P1 / Q=Q2

**定位：** 在机器人世界模型中比较重建与语义编码器，显示V-JEPA 2.1整体策略强，但语义表征可能遗漏几何和接触细节。

**问题：** 高语义下游分数是否足以保证机器人控制所需几何与接触信息尚不明确。

**机制：** 在统一动作动力学和策略协议中替换重建型与语义型编码器，分别评测预测和控制。

**步骤：**

1. 冻结不同潜在编码器
2. 训练匹配动作动力学
3. 比较几何与接触探针
4. 评测机器人策略表现

**证据：**

- 作者报告V-JEPA 2.1语义特征的整体策略优势
- 同时记录几何和接触敏感任务中的缺失信息

**局限：**

- 截至截止日为预印本
- 结论依赖特定机器人任务和动力学模型

**意义：**

- 语义与可控几何之间存在真实权衡
- 机器人JEPA应加入接触、深度和故障恢复评测

**边界：** 主入口为arXiv预印本；作者信息按当前一手记录保守保存。

**标识：** arXiv 2605.06388

**资源：** [一手入口](<https://arxiv.org/abs/2605.06388>)

---

<a id="paper-liu-2026-temporally-centered-sigreg"></a>
**48. 时间中心化SIGReg改善多任务LeWorldModel学习｜Temporally Centered SIGReg Improves Multi-Task LeWorldModel Learning: From Analysis to Method（2026 · arXiv）**

**作者：** Chang Liu、Fei Suo、Yanzhou Jin、Yusuke Iwasawa、Yutaka Matsuo、Yaonan Zhu

**书目：** 年份 2026；载体 arXiv；状态 预印本；来源类型 preprint

**分类：** 主路线 评测、反证与边界；相关路线 评测、反证与边界、理论与目标函数、动作条件与控制；层级 闭环规划与控制；阅读层级 背景；证据等级 B；简称 多任务SIGReg反例

**核验：** 来源层级 T1；核验状态 abstract-checked；V/D/P/Q V=V2 / D=D2 / P=P1 / Q=Q1

**定位：** 揭示全局高斯化在多任务世界模型中会压缩任务簇间距，并以时间中心化残差正则缓解表征混叠。

**问题：** LeWorldModel的边际高斯先验在单任务稳定，但可能破坏多任务潜在结构。

**机制：** 把SIGReg从完整潜在边际移到相邻时间的中心化残差，保留防坍塌作用而不直接挤压任务簇中心。

**步骤：**

1. 诊断多任务潜在簇混叠
2. 计算时间中心化残差
3. 对残差施加SIGReg
4. 在LIBERO多任务套件评测

**证据：**

- 作者报告原始边际高斯化导致任务簇分离受损和视觉扰动敏感
- 近期预印本在四套LIBERO任务报告平均成功率改善

**局限：**

- 截至截止日为两周内发布的预印本
- 结果集中于LIBERO行为克隆，尚无独立复现和实机评测

**意义：**

- 防坍塌先验可能与任务结构冲突
- 正则化对象应从全局边际转向任务或动力学相关统计

**边界：** 主入口为近期arXiv预印本；作为第二轮反证检索新增的低成熟度边界证据。

**标识：** arXiv 2607.26924

**资源：** [一手入口](<https://arxiv.org/abs/2607.26924>)

---

<a id="paper-li-2026-salt"></a>
**49. 重新思考JEPA：使用冻结教师的计算高效视频自监督学习｜Rethinking JEPA: Compute-Efficient Video SSL with Frozen Teachers（2026 · ICLR 2026）**

**作者：** Xianhang Li、Chen Huang、Chun-Liang Li、Eran Malach、Josh Susskind、Vimal Thilak、Etai Littwin

**书目：** 年份 2026；载体 ICLR 2026；状态 同行评议；来源类型 paper

**分类：** 主路线 理论与目标函数；相关路线 理论与目标函数、视频与时空动力学、评测、反证与边界；层级 无动作时空动力学；阅读层级 核心；证据等级 A；简称 SALT

**核验：** 来源层级 T1；核验状态 full-text-checked；V/D/P/Q V=V4 / D=D3 / P=P3 / Q=Q3

**定位：** 先用像素重建训练并冻结教师，再训练学生预测教师潜在表示，证明共演化EMA教师不是视频JEPA的必要条件。

**问题：** EMA师生共同演化带来坍塌解、模型选择耦合和不透明的计算扩展规律。

**机制：** SALT把训练拆为静态教师预训练和无正则潜在学生预测两阶段，使教师架构与学生解耦。

**步骤：**

1. 用视频像素重建训练目标教师
2. 冻结教师参数
3. 遮挡输入并预测教师潜在目标
4. 按匹配FLOPs评测学生扩展

**证据：**

- ICLR正式论文报告匹配预训练FLOPs时的冻结探测优势
- 作者发现学生质量对小型、次优教师具有较强鲁棒性

**局限：**

- 教师本身依赖像素重建，因此不是纯粹去除生成式目标
- 冻结探测优势不等同于动作条件世界模型或长期规划

**意义：**

- JEPA的关键可从教师更新配方中解耦
- 计算核算应包含教师训练成本并区分一次性与每个学生成本

**边界：** 主入口为ICLR 2026正式OpenReview记录；作为视频JEPA教师机制的直接反证纳入。

**标识：** arXiv 2509.24317

**资源：** [一手入口](<https://openreview.net/forum?id=3cB9243E9i>)

---

<a id="paper-zhu-2026-ad-l-jepa"></a>
**50. 使用联合嵌入预测架构进行车载激光雷达目标检测自监督表征学习｜Self-Supervised Representation Learning with Joint Embedding Predictive Architecture for Automotive LiDAR Object Detection（2026 · AAAI 2026）**

**作者：** Haoran Zhu、Zhenyuan Dong、Kristi Topollai、Beiyao Sha、Anna Ewa Choromanska

**书目：** 年份 2026；载体 AAAI 2026；状态 同行评议；来源类型 paper

**分类：** 主路线 多模态与跨域迁移；相关路线 多模态与跨域迁移、图像与静态表征；层级 静态表征预测；阅读层级 背景；证据等级 A；简称 AD-L-JEPA

**核验：** 来源层级 T1；核验状态 abstract-checked；V/D/P/Q V=V2 / D=D2 / P=P3 / Q=Q2

**定位：** 在鸟瞰激光雷达嵌入空间预测被遮挡区域，并用显式方差正则避免坍塌。

**问题：** 体素或占用重建计算昂贵，且可能对车载三维检测产生负迁移。

**机制：** 把点云投影为鸟瞰表示，遮挡局部区域后预测目标嵌入，并以方差约束维持表示多样性。

**步骤：**

1. 构造鸟瞰激光雷达表示
2. 遮挡空间区域
3. 预测目标鸟瞰嵌入
4. 用方差正则与下游检测评测

**证据：**

- AAAI正式论文在KITTI3D、Waymo和ONCE报告一致检测提升
- 作者同时报告相对Occupancy-MAE的GPU时长与显存比较

**局限：**

- 首要任务是车载三维检测，不含时序驾驶规划
- 效率优势依赖具体体素化、主干和训练预算

**意义：**

- JEPA可扩展到稀疏三维传感器
- 下游检测收益不能直接外推为闭环驾驶安全

**边界：** 主入口为AAAI正式DOI；作为第四轮跨域补漏唯一新增条目。

**资源：** [一手入口](<https://doi.org/10.1609/aaai.v40i16.38402>)

---

<a id="检索与证据审计"></a>
## 检索与证据审计

<details>
<summary><strong>展开完整检索、纳排、去重、证据分级与覆盖限制</strong></summary>

### JEPA检索与证据审计

#### 范围与截止日期

- 截止日期：2026-08-12。
- 规范名：Joint Embedding Predictive Architectures，缩写JEPA，中文为联合嵌入预测架构。
- 研究问题：JEPA如何从联合嵌入空间预测发展为图像表示、视频动态、动作条件世界模型与闭环控制；各路线的直接证据、适用边界和未解决问题是什么？
- 对象与任务：以视觉和具身智能为主，纳入音频、语言、表格、图、点云、医学和遥感中机制直接的代表工作。
- 时间与语言：从历史前驱到2026-08-12；检索英文和中文线索，结论只依赖可核验一手来源。
- 成果类型：正式会议或期刊论文、官方报告、前沿预印本；项目页、代码与数据只补充机制、资源和复现边界。
- 明确排除：同名缩写、只复用JEPA编码器的下游应用、纯像素重建、纯对比学习、普通潜在动力学、无法定位一手入口的二手摘要，以及被正式版本取代且无独立信息的重复记录。

同义词与变体包括`joint-embedding predictive architecture`、`joint embedding predictive architecture`、`I-JEPA`、`V-JEPA`、`A-JEPA`、`JEPA world model`、`action-conditioned JEPA`和`JEPA-inspired`。发现阶段还使用具体分支名、论文题名和负面词组，以避免只靠缩写召回。

#### 来源层级与核验规则

所有50个纳入条目的核心入口均标为T1：正式论文集、期刊或DOI、OpenReview正式记录、arXiv论文页、作者或机构官方项目页。通用网页搜索只用于定位这些入口，不直接支撑性能主张。

核验分两层：19个核心锚点全部阅读到正文、方法、表格或附录；其余桥接和边界条目根据重要性完成正文或摘要与元数据核验。最终为35项正文级核验、15项摘要级核验。每个条目记录`source_tier`、`verification_state`和V/D/P/Q证据向量；主张不能超过其最弱维度。

#### 查询矩阵与执行记录

完整逐条日志位于`planning/search_ledger.jsonl`。17次查询执行合计产生284次候选筛查动作，其中包含跨来源重复；规范化后纳入50个唯一工作族，筛选表另保留19个有解释价值的明确排除项。搜索接口无法提供稳定总命中量时，`hits`记为`null`，不伪造数值。

| 阶段 | 来源或查询家族 | 筛查 | 当轮纳入 | 新一级路线 | 目的 |
|---|---|---:|---:|---:|---|
| 发现 | arXiv网页、OpenReview | 28 | 17 | 6 | 建立主干题名、正式状态和稳定标识符 |
| 核验 | CVF、PMLR、正式会刊 | 32 | 12 | 0 | 核对会议、页码、DOI和正式版本 |
| 理论反证 | 噪声、重建、坍塌、分布约束 | 12 | 6 | 0 | 寻找机制条件和失败边界 |
| 视频核验 | V-JEPA工作族、序列与概率目标 | 15 | 5 | 0 | 区分掩码补全、未来预测和版本关系 |
| 动作补漏 | 世界模型、机器人、规划、控制 | 18 | 8 | 0 | 区分动作条件、离线规划和真实闭环 |
| 跨域补漏 | 音频、语言、医学、遥感、图、点云 | 24 | 11 | 0 | 验证跨域路线是否具有独立机制代表 |
| 负面审计 | 失败、复现、鲁棒性、分布偏移、安全 | 20 | 7 | 0 | 主动检索反例和缺失证据 |
| 扩展1 | 2026正式状态与跨域补漏 | 25 | 2 | 0 | 新增PhysioJEPA与X-JEPA，纳入率8.0% |
| 扩展2 | NeurIPS、OpenReview、PMLR | 23 | 3 | 0 | 补入正式控制工作并修正图分支状态，纳入率13.0% |
| 状态核验 | ICLR 2026精确题名 | 18 | 3 | 0 | 核验TD-JEPA、VL-JEPA与LLM-JEPA正式状态 |
| 扩展3 | 坍塌、实现错误、层级失败 | 24 | 2 | 0 | 新增SALT和SIGReg反例，纳入率8.3% |
| 收敛3 | 正式会刊前向追踪 | 21 | 0 | 0 | 只有重复版本和应用长尾，纳入率0% |
| 收敛4 | 跨域DOI与会刊反向补漏 | 24 | 1 | 0 | 仅新增AD-L-JEPA，纳入率4.2% |

arXiv官方API单独执行一次，因沙箱内域名解析失败、允许联网后仍连接超时而没有完成筛查；该失败保留在日志中，未纳入上表筛查量。

#### 纳入、排除与去重

纳入需要同时满足：机制与范围直接相关；一手入口可核验；贡献对路线代表、前沿、评测或反证不可替代；时间不晚于截止日期。桥接工作即使不以JEPA命名，也只有在能说明动作条件潜在动力学、世界模型评测或关键边界时才纳入，例如DINO-WM。

规范键优先级为正式DOI、arXiv或OpenReview标识符、正式论文网址、规范化题名加第一作者。预印本、投稿记录、会议版、期刊扩展、项目页和代码视为同一工作族的不同来源，默认使用正式且元数据最完整的版本作为主入口。论文内部子方法不重复计数，例如V-JEPA 2与2-AC归为同一项；LOCATE 3D中的3D-JEPA组件也不另立论文。

代表性排除包括：CPC、BYOL和data2vec作为历史前驱；MAE和VideoMAE作为重建对照；Dreamer与MuZero作为相邻世界模型；只使用冻结特征的DINO-world和DINO-Foresight；机制增量或窄域应用PiJEPA、JHU-VPT、Seg-JEPA和S-JEPA；撤回投稿WavJEPA；与表格T-JEPA同名的轨迹T-JEPA。排除不等于价值判断，而是控制主图边界和重复计数。

#### 版本与出版状态审计

- I-JEPA以CVPR 2023正式版本为主，arXiv和官方代码不重复计数。
- V-JEPA的正式状态为TMLR接收，不是ECCV；预印本、OpenReview和代码属于同一工作族。
- V-JEPA 2和2-AC属于同一篇2025年预印本；2-AC是动作条件阶段，不另计文献。
- V-JEPA 2.1截至截止日仍为预印本。
- JEPA-WM设计审计已由TMLR正式接收，并带有复现认证；不再标为普通预印本。
- LeWorldModel和HWM截至截止日仍为预印本。
- LeJEPA未核验到正式接收记录，保留预印本状态。
- VL-JEPA、LLM-JEPA和TD-JEPA按OpenReview正式记录标为ICLR 2026成果。
- NeuroVFM以Nature Medicine DOI为正式入口；Graph-JEPA以TMLR接收版本为主；CNN-JEPA以期刊扩展版为主。
- WavJEPA的相关投稿已撤回，因此没有升级为同行评议成果。

#### 前向与后向引用追踪

- 理论与目标：从JEPA蓝图、I-JEPA向后追踪BYOL、data2vec、MAE和早期潜在预测；向前追踪C-JEPA、LeJEPA、SALT和SIGReg。
- 图像：从I-JEPA向后追踪掩码自编码与自蒸馏；向前追踪StoP、CAPI、CNN-JEPA和TC-JEPA。
- 视频：从V-JEPA向后追踪VideoMAE、data2vec和I-JEPA；向前追踪V-JEPA 2、V-JEPA 2.1、P-JEPA和SALT。
- 动作与控制：从DINO-WM、无奖励离线规划和V-JEPA 2向前追踪JEPA-WM设计审计、GeoWorld、HWM和分层规划反例；向后追踪冻结视觉编码器、潜在规划和模型式强化学习。
- 跨域：以I-JEPA的结构化遮挡为出发点，追踪音频、表格、点云、图、遥感、医学、语言与视觉语言；反向检查每项是否真的存在目标表征预测器。
- 评测与反证：从慢特征、C-JEPA、JEPA-WM设计审计、JEDi、机器人潜在空间审计和时间中心SIGReg交叉追踪实现错误、几何语义失配、多种子与长时程失败。

#### 反证与负面结果检索

主动组合`failure`、`limitation`、`negative result`、`collapse`、`instability`、`seed`、`bug`、`reproduction`、`benchmark`、`robustness`、`out-of-distribution`、`safety`、`planning horizon`和`hierarchy`等词。获得的主要负面证据包括：慢背景捷径；EMA不能理论排除所有坍塌；V-JEPA最佳配方偏向非因果补全；V-JEPA 2-AC二步滚动损失实现错误；确定性预测器在多未来下平均化；朴素分层搜索受训练支持外分布影响；语义表示与机器人几何接触细节存在权衡；边际高斯化在多任务控制中可能混叠任务簇。

对安全、隐私、校准、碰撞约束、传感器故障和危险长尾的搜索主要得到“未系统评测”的缺失证据。审计将其标为综合推断，而非把没有证据写成负面实验证明。

#### L2五道闸门

| 闸门 | 证据 | 判定 |
|---|---|---|
| 1 范围与来源 | 研究合同定义问题、对象、时间、语言、来源和纳排；17条查询日志含失败记录 | 通过 |
| 2 分支代表性 | 50项覆盖六条路线、五个能力层级；每条路线有代表和边界工作，最终轮无新一级路线 | 通过 |
| 3 边际收敛 | 两个独立查询家族新增率分别为0%和4.2%，均低于5%；六条路线完成前后向追踪 | 通过 |
| 4 核心深读 | 19个核心锚点全部正文级核验；每项含问题、机制步骤、证据、限制和来源说明 | 通过 |
| 5 证据审计 | 34条主张记录V/D/P/Q、证据位置、核验状态和限定语；版本、复现、安全与外部分布冲突已处理 | 通过 |

#### 覆盖限制与更新规则

- arXiv官方API不可用降低了批量召回的可重复性，但网页、正式论文集和多轮不同查询家族提供了替代覆盖；失败被透明记录。
- 15个桥接或前沿条目只做摘要与元数据核验，因此不能支撑精细数值对比。
- 题名不含JEPA的潜在预测、非英文区域性成果和正文中短暂使用JEPA的应用长尾仍可能遗漏。
- 2026年临近截止日的预印本、撤回和正式接收状态可能变化。更新时应先复核所有预印本，再重跑收敛3与收敛4查询家族；若连续两轮新增率重新超过5%或出现新一级路线，应撤销覆盖冻结并恢复扩展检索。

</details>

<a id="复现与使用边界"></a>
## 复现与使用边界

- `atlas.json` 是人工维护的结构化研究真源；`data/`、网页与本 README 是确定性派生阅读层。
- 页面可离线打开；论文、代码、数据集与官方图表等一手外部入口需要联网。
- 机制步骤与网页机制图是依据一手文字证据形成的解释性整理，不替代原论文图表或独立复核。
- 出版状态、阅读优先级、证据等级与展示层级是不同维度，不能互相替代。
- 本综述有明确截止日期和纳入边界，不声称穷尽互联网中的全部长尾资料。

生成与验证工具：[`build-research-atlas`](https://github.com/Linwei-Chen/build-research-atlas)。
