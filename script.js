const APP_STORE_URL = "macappstore://apps.apple.com/cn/app/findtext-pro/id6765620148?mt=12";
const STORAGE_KEY = "findtext.locale";
const DEFAULT_LOCALE = "en";
const SUPPORTED_LOCALES = ["zh-Hans", "zh-Hant", "en", "de", "es", "fr", "it", "ja", "ru"];
const GALLERY_SHOTS = ["plain", "regex", "export", "replace", "history"];
const GUIDED_SHOTS = ["goal", "traits", "boundaries", "structures", "options", "report"];

const galleryAssets = {
  plain: { image: "assets/screenshots/plain-search.png", width: 2400, height: 1484 },
  regex: { image: "assets/screenshots/regex-search.png", width: 2400, height: 1484 },
  export: { image: "assets/screenshots/export_result.png", width: 2800, height: 1802 },
  replace: { image: "assets/screenshots/replace-preview.png", width: 2400, height: 1484 },
  history: { image: "assets/screenshots/history.png", width: 2400, height: 1484 }
};

const guidedAssets = {
  goal: { image: "assets/screenshots/search_goal.png", width: 2800, height: 1802 },
  traits: { image: "assets/screenshots/text_traits.png", width: 2800, height: 1802 },
  boundaries: { image: "assets/screenshots/line_starts_and_ends.png", width: 2800, height: 1802 },
  structures: { image: "assets/screenshots/common_structs.png", width: 2800, height: 1802 },
  options: { image: "assets/screenshots/search_options.png", width: 2800, height: 1802 },
  report: { image: "assets/screenshots/text_trait_report.png", width: 2800, height: 1802 }
};

const translations = {
  "zh-Hans": {
    meta: {
      title: "FindText PRO - macOS 本地文件搜索与安全替换",
      description: "FindText PRO 是一款本地优先的 macOS 应用，可通过问答模式、正则、历史记录、导出和安全批量替换预览来搜索代码、日志、配置和文档。",
      ogTitle: "FindText PRO - macOS 本地文件搜索与安全替换",
      ogDescription: "在本机文件中搜索，查看精确匹配，预览替换，并让每一次查询都留在你的 Mac 上。"
    },
    skipLink: "跳转到正文",
    language: { label: "语言", aria: "选择语言" },
    header: {
      aria: "站点导航",
      brandAria: "FindText PRO 首页",
      navAria: "主要导航",
      download: "下载",
      nav: { guided: "问答模式", features: "功能", screenshots: "截图", privacy: "隐私", pricing: "价格" }
    },
    hero: {
      figureAria: "FindText PRO 搜索界面",
      imageAlt: "FindText PRO 问答搜索正在询问本地文件搜索条件",
      eyebrow: "macOS 本地优先搜索",
      title: "在每个本地文件里找到真正重要的内容。",
      lead: "FindText PRO 把日常文件搜索变成清爽的 Mac 界面：不会正则时用问答模式，处理笔记、Markdown、报告、配置、日志和代码时也能切换到精确控制。",
      actionsAria: "主要操作",
      primaryAction: "在 Mac App Store 下载",
      secondaryAction: "查看产品截图",
      factsAria: "产品信息",
      fact1Label: "免费使用",
      fact1Value: "包含 200 次",
      fact2Label: "解锁",
      fact2Value: "7 天试用后 US$1",
      fact3Label: "隐私",
      fact3Value: "文件留在本机"
    },
    proof: {
      aria: "核心工作流",
      askLabel: "提问",
      askText: "问答模式用自然语言带你完成搜索，不写正则也能找到文本。",
      reviewLabel: "查看",
      reviewText: "结果按文件分组，包含文件名、行号、高亮、历史记录和可导出的报告。",
      replaceLabel: "替换",
      replaceText: "批量编辑前可选择预览项，并带有文件变更检查和本次会话撤销快照。"
    },
    question: {
      eyebrow: "问答模式",
      title: "给不习惯正则的人使用的引导式规则生成器。",
      text: "问答模式不是聊天机器人，也不会上传文件。它会把几个清晰回答转换成本地确定性搜索：要包含哪类行、必须具备哪些文本特征、特征出现在哪里，以及结果如何限定范围和展示。",
      flowAria: "问答模式优势",
      cards: [
        { index: "01", title: "选择目标", text: "从匹配或不匹配的行开始，不用记命令行参数也能做反向搜索。" },
        { index: "02", title: "描述文本", text: "添加必须出现或必须排除的词语，并决定多个特征是全部需要、任意一个即可，还是必须按顺序出现。" },
        { index: "03", title: "加入结构", text: "继续细化行首、行尾、缩进，以及日期、邮箱、IP 地址、TODO 或错误词等常见结构。" },
        { index: "04", title: "搜索前确认", text: "运行前确认生成条件、范围、文件类型、跳过目录、大小写行为和输出格式。" }
      ]
    },
    guidedIntro: {
      eyebrow: "工作方式",
      title: "六个聚焦问题，生成一次精确搜索。",
      text: "流程会让搜索模型始终可见：每个回答都会变成搜索约束，最终报告会在 FindText PRO 扫描本地文件夹前展示完整规则。",
      tabsAria: "问答模式步骤"
    },
    guided: {
      goal: { label: "目标", step: "第 1/6 步", title: "选择搜索应包含还是排除匹配行。", text: "第一个决定会转换为正向或反向搜索。用户可以要求查找符合描述特征的行，也可以查找不符合这些特征的行，而不用记 grep 参数或正则语法。", alt: "FindText PRO 问答模式搜索目标步骤" },
      traits: { label: "特征", step: "第 2/6 步", title: "描述每一条匹配行必须包含什么。", text: "添加一个或多个词、短语、标识符或记得的片段。然后决定是所有特征都必须出现、任意一个即可，还是需要按顺序出现。", alt: "FindText PRO 问答模式文本特征步骤" },
      boundaries: { label: "边界", step: "第 3/6 步", title: "限定文本在行内出现的位置。", text: "可选的“开头是”和“结尾是”问题能把模糊线索变成更精确的按行搜索。代码、日志和 Markdown 列表仍可允许前导缩进。", alt: "FindText PRO 问答模式行首行尾步骤" },
      structures: { label: "结构", step: "第 4/6 步", title: "不用手写模式，也能加入常见结构。", text: "复选项覆盖 IP 地址、邮箱、日期、时间、十六进制数字、TODO 标记、错误词、英文字母、中文文本、端口和设备节点等可复用文本形态。", alt: "FindText PRO 问答模式常见结构步骤" },
      options: { label: "选项", step: "第 5/6 步", title: "设置范围、大小写、文件类型和输出格式。", text: "最后的选项会把生成的规则连接到实际搜索任务：精确大小写、跳过目录、包含扩展名，以及结果显示匹配行、仅匹配内容还是文件路径。", alt: "FindText PRO 问答模式搜索选项步骤" },
      report: { label: "报告", step: "第 6/6 步", title: "运行搜索前查看组装好的规则。", text: "报告让生成条件可审计。用户可以在开始本地扫描前检查目标、必需特征、大小写模式、跳过目录、文件类型和结果格式。", alt: "FindText PRO 问答模式文本特征报告步骤" }
    },
    features: {
      eyebrow: "为重复工作而建",
      title: "简单到适合文档，精确到足够处理代码。",
      text: "FindText PRO 让普通 Mac 用户可以通过问题和普通文本搜索，也为开发者、写作者、QA 团队和支持工程师提供更深入的控制项。",
      cards: [
        { index: "01", title: "友好的引导搜索", text: "当你知道要找什么，却不知道如何写成正则表达式时，可以使用问答模式。" },
        { index: "02", title: "易读的结果集", text: "按文件查看匹配项、行号和高亮；当大文件夹出现数百条结果时，也可以折叠噪声分组。" },
        { index: "03", title: "可复用的搜索记忆", text: "为月度文档、项目文件夹、支持案例或代码审计保存常用搜索，并无需重新执行即可打开历史快照。" },
        { index: "04", title: "更安全的批量替换", text: "按文件和出现位置预览每个候选项，只选择真正需要修改的内容，避免跨文件重命名时误改。" },
        { index: "05", title: "可分享的报告", text: "复制匹配文本、整行或带行号的文件位置，再导出报告给同事、客户或之后的自己。" },
        { index: "06", title: "保持干净的范围", text: "搜索一个或多个文件夹，只包含指定文件类型，跳过杂乱目录，并在 macOS 可读取时搜索提取出的 .docx 文本。" }
      ]
    },
    operator: {
      eyebrow: "减少上下文切换",
      title: "为“快速搜索变成真实工作”的时刻而建。",
      text: "FindText PRO 适合简单的“我在哪里写过这个？”查询，也适合需要证据的深入检查。当一次快速查找变成文档清理、变更清单、发布检查、支持调查或代码审查时，它尤其有用。",
      aria: "FindText PRO 优势",
      metrics: [
        { title: "本地", text: "搜索不需要账号、云端索引或远程上传文件。" },
        { title: "可审计", text: "历史快照会记录查询、范围和结果。" },
        { title: "可控", text: "写入前可选择替换预览项。" }
      ]
    },
    screenshots: {
      eyebrow: "产品截图",
      title: "用于搜索、查看和替换的 Mac 原生工作区。",
      text: "这些界面来自英文演示工作区，里面是合成的笔记、文档、配置、日志和代码。问答模式面向不熟悉正则表达式的用户；高级搜索仍可使用正则。"
    },
    gallery: {
      aria: "截图图库",
      plain: { label: "普通搜索", title: "用于直接查找的普通文本搜索。", text: "输入一个词、短语、标识符或错误信息，然后查看带高亮和文件上下文的分组匹配行。", alt: "FindText PRO 普通文本搜索结果与高亮匹配" },
      regex: { label: "正则预设", title: "适合重复模式的正则预设。", text: "使用正则表达式和内置预设查找诊断信息、邮箱、IP、日期、TODO 标记和其他结构化文本。", alt: "FindText PRO 使用诊断预设进行正则搜索" },
      export: { label: "导出结果", title: "将搜索结果导出为 Markdown、CSV、JSON 或纯文本。", text: "从结果工具栏打开导出菜单，选择适合分享、归档或继续处理的格式。", alt: "FindText PRO 导出菜单显示 Markdown、CSV、JSON 和纯文本格式" },
      replace: { label: "替换预览", title: "任何写入前都先预览替换。", text: "按文件和出现位置检查每个候选项，只选择目标修改，并让 FindText PRO 在应用前验证原始文本。", alt: "FindText PRO 带有可选文件和匹配项的替换预览" },
      history: { label: "历史记录", title: "为完成的调查保留历史快照。", text: "回到之前的查询时，原始选项、结果数量、文件路径和高亮匹配仍然保留。", alt: "FindText PRO 搜索历史显示此前的本地搜索结果" }
    },
    privacy: {
      eyebrow: "隐私与安全",
      title: "你的文件在你的 Mac 上处理。",
      text: "FindText PRO 采用本地优先设计。当前应用行为不会收集数据、跟踪用户、创建云端索引或上传文件内容。文件夹访问通过 macOS 沙盒授权，并以安全作用域书签保存。",
      cards: [
        { title: "不收集数据", text: "应用隐私清单声明不收集数据，也没有跟踪域名。" },
        { title: "写入前预览", text: "批量替换必须先预览，支持按文件和出现位置选择，并在应用修改前检查原始文本。" },
        { title: "本地状态，本地控制", text: "导入文件夹、书签、预设、历史和替换记录保存在这台 Mac 的应用数据中，并可由用户移除。" }
      ]
    },
    pricing: {
      eyebrow: "简单定价",
      title: "不购买也可免费使用 200 次，之后 7 天试用，US$1 永久解锁。",
      text: "FindText PRO 在不需要购买任何商品的情况下提供 200 次免费使用；之后可开启 7 天免费试用，最后 US$1 一次购买永久使用权。",
      label: "永久解锁",
      price: "US$1",
      panelText: "无需购买即可免费使用 200 次，之后可进行 7 天免费试用，再以 US$1 一次购买永久完整访问权。",
      bullets: [
        "不需要购买任何商品即可免费使用 200 次",
        "免费使用额度结束后可进行 7 天免费试用",
        "US$1 一次购买即可获得永久使用权",
        "无订阅，也不会自动扣费",
        "搜索、替换、历史记录和导出功能全部包含"
      ],
      button: "下载并免费开始"
    },
    faq: {
      eyebrow: "常见问题",
      title: "安装前的几个细节。",
      items: [
        { question: "FindText PRO 会上传我的文件吗？", answer: "不会。搜索在你的 Mac 本地运行。当前页面描述的功能不会把查询、文件路径或文件内容发送到服务器。" },
        { question: "我可以在多个文件中替换文本吗？", answer: "可以。先运行搜索，再准备替换预览，选择要修改的文件或出现位置，最后确认后才会写入。" },
        { question: "我需要懂正则表达式吗？", answer: "不需要。问答模式就是为不熟悉正则的用户设计的。它用普通提示引导搜索；当你需要高级模式匹配时，正则和预设仍然可用。" },
        { question: "支持哪些导出格式？", answer: "搜索结果可以导出为 Markdown、CSV、JSON 或纯文本。你也可以复制匹配文本、整行或带行号的文件路径。" },
        { question: "可以只搜索某些文件类型吗？", answer: "可以。添加包含扩展名，例如 .md、.txt、.log、.swift 或 .docx。如果列表为空，FindText PRO 会搜索未被规则跳过的可读文本文件。" }
      ]
    },
    footer: { text: "macOS 本地文件搜索与安全替换。", back: "返回顶部" }
  },
  "zh-Hant": {
    meta: {
      title: "FindText PRO - macOS 本機檔案搜尋與安全取代",
      description: "FindText PRO 是一款本機優先的 macOS App，可透過問答模式、正則、歷史記錄、匯出與安全批次取代預覽來搜尋程式碼、日誌、設定與文件。",
      ogTitle: "FindText PRO - macOS 本機檔案搜尋與安全取代",
      ogDescription: "在本機檔案中搜尋、檢視精確符合項、預覽取代，並讓每一次查詢都留在你的 Mac 上。"
    },
    skipLink: "跳至內容",
    language: { label: "語言", aria: "選擇語言" },
    header: {
      aria: "網站導覽",
      brandAria: "FindText PRO 首頁",
      navAria: "主要導覽",
      download: "下載",
      nav: { guided: "問答模式", features: "功能", screenshots: "截圖", privacy: "隱私", pricing: "價格" }
    },
    hero: {
      figureAria: "FindText PRO 搜尋介面",
      imageAlt: "FindText PRO 問答搜尋正在詢問本機檔案搜尋條件",
      eyebrow: "macOS 本機優先搜尋",
      title: "在每個本機檔案裡找到真正重要的內容。",
      lead: "FindText PRO 將日常檔案搜尋變成清爽的 Mac 介面：不會正則時用問答模式，處理筆記、Markdown、報告、設定、日誌與程式碼時也能切換到精確控制。",
      actionsAria: "主要操作",
      primaryAction: "在 Mac App Store 下載",
      secondaryAction: "查看產品截圖",
      factsAria: "產品資訊",
      fact1Label: "免費使用",
      fact1Value: "包含 200 次",
      fact2Label: "解鎖",
      fact2Value: "7 天試用後 US$1",
      fact3Label: "隱私",
      fact3Value: "檔案留在本機"
    },
    proof: {
      aria: "核心工作流程",
      askLabel: "提問",
      askText: "問答模式用自然語言帶你完成搜尋，不寫正則也能找到文字。",
      reviewLabel: "查看",
      reviewText: "結果依檔案分組，包含檔名、行號、高亮、歷史記錄與可匯出的報告。",
      replaceLabel: "取代",
      replaceText: "批次編輯前可選擇預覽項，並帶有檔案變更檢查與本次工作階段復原快照。"
    },
    question: {
      eyebrow: "問答模式",
      title: "給不習慣正則的人使用的引導式規則產生器。",
      text: "問答模式不是聊天機器人，也不會上傳檔案。它會把幾個清楚回答轉成本機確定性搜尋：要包含哪類行、必須具備哪些文字特徵、特徵出現在哪裡，以及結果如何限定範圍與顯示。",
      flowAria: "問答模式優勢",
      cards: [
        { index: "01", title: "選擇目標", text: "從符合或不符合的行開始，不用記命令列參數也能做反向搜尋。" },
        { index: "02", title: "描述文字", text: "加入必須出現或必須排除的詞語，並決定多個特徵是全部需要、任意一個即可，還是必須依序出現。" },
        { index: "03", title: "加入結構", text: "繼續細化行首、行尾、縮排，以及日期、電子郵件、IP 位址、TODO 或錯誤詞等常見結構。" },
        { index: "04", title: "搜尋前確認", text: "執行前確認產生條件、範圍、檔案類型、跳過資料夾、大小寫行為與輸出格式。" }
      ]
    },
    guidedIntro: {
      eyebrow: "運作方式",
      title: "六個聚焦問題，產生一次精確搜尋。",
      text: "流程會讓搜尋模型始終可見：每個回答都會變成搜尋限制，最終報告會在 FindText PRO 掃描本機資料夾前顯示完整規則。",
      tabsAria: "問答模式步驟"
    },
    guided: {
      goal: { label: "目標", step: "第 1/6 步", title: "選擇搜尋應包含還是排除符合行。", text: "第一個決定會轉為正向或反向搜尋。使用者可以要求查找符合描述特徵的行，也可以查找不符合這些特徵的行，而不用記 grep 參數或正則語法。", alt: "FindText PRO 問答模式搜尋目標步驟" },
      traits: { label: "特徵", step: "第 2/6 步", title: "描述每一條符合行必須包含什麼。", text: "加入一個或多個詞、短語、識別符或記得的片段。然後決定是所有特徵都必須出現、任意一個即可，還是需要依序出現。", alt: "FindText PRO 問答模式文字特徵步驟" },
      boundaries: { label: "邊界", step: "第 3/6 步", title: "限定文字在行內出現的位置。", text: "可選的「開頭是」與「結尾是」問題能把模糊線索變成更精確的逐行搜尋。程式碼、日誌與 Markdown 清單仍可允許前導縮排。", alt: "FindText PRO 問答模式行首行尾步驟" },
      structures: { label: "結構", step: "第 4/6 步", title: "不用手寫模式，也能加入常見結構。", text: "核取方塊涵蓋 IP 位址、電子郵件、日期、時間、十六進位數字、TODO 標記、錯誤詞、英文字母、中文文字、連接埠與裝置節點等可重複使用的文字形態。", alt: "FindText PRO 問答模式常見結構步驟" },
      options: { label: "選項", step: "第 5/6 步", title: "設定範圍、大小寫、檔案類型與輸出格式。", text: "最後的選項會把產生的規則連接到實際搜尋工作：精確大小寫、跳過資料夾、包含副檔名，以及結果顯示符合行、僅符合內容還是檔案路徑。", alt: "FindText PRO 問答模式搜尋選項步驟" },
      report: { label: "報告", step: "第 6/6 步", title: "執行搜尋前查看組裝好的規則。", text: "報告讓產生條件可稽核。使用者可以在開始本機掃描前檢查目標、必需特徵、大小寫模式、跳過資料夾、檔案類型與結果格式。", alt: "FindText PRO 問答模式文字特徵報告步驟" }
    },
    features: {
      eyebrow: "為重複工作而建",
      title: "簡單到適合文件，精確到足夠處理程式碼。",
      text: "FindText PRO 讓一般 Mac 使用者可以透過問題與普通文字搜尋，也為開發者、寫作者、QA 團隊與支援工程師提供更深入的控制項。",
      cards: [
        { index: "01", title: "友善的引導搜尋", text: "當你知道要找什麼，卻不知道如何寫成正則表示式時，可以使用問答模式。" },
        { index: "02", title: "易讀的結果集", text: "依檔案查看符合項、行號與高亮；當大資料夾出現數百條結果時，也可以摺疊雜訊分組。" },
        { index: "03", title: "可重複使用的搜尋記憶", text: "為月度文件、專案資料夾、支援案例或程式碼稽核儲存常用搜尋，並無需重新執行即可開啟歷史快照。" },
        { index: "04", title: "更安全的批次取代", text: "依檔案與出現位置預覽每個候選項，只選擇真正需要修改的內容，避免跨檔案重新命名時誤改。" },
        { index: "05", title: "可分享的報告", text: "複製符合文字、整行或帶行號的檔案位置，再匯出報告給同事、客戶或之後的自己。" },
        { index: "06", title: "保持乾淨的範圍", text: "搜尋一個或多個資料夾，只包含指定檔案類型，跳過雜亂資料夾，並在 macOS 可讀取時搜尋提取出的 .docx 文字。" }
      ]
    },
    operator: {
      eyebrow: "減少情境切換",
      title: "為「快速搜尋變成真實工作」的時刻而建。",
      text: "FindText PRO 適合簡單的「我在哪裡寫過這個？」查詢，也適合需要證據的深入檢查。當一次快速查找變成文件清理、變更清單、發布檢查、支援調查或程式碼審查時，它尤其有用。",
      aria: "FindText PRO 優勢",
      metrics: [
        { title: "本機", text: "搜尋不需要帳號、雲端索引或遠端上傳檔案。" },
        { title: "可稽核", text: "歷史快照會記錄查詢、範圍與結果。" },
        { title: "可控", text: "寫入前可選擇取代預覽項。" }
      ]
    },
    screenshots: {
      eyebrow: "產品截圖",
      title: "用於搜尋、查看與取代的 Mac 原生工作區。",
      text: "這些畫面來自英文示範工作區，裡面是合成的筆記、文件、設定、日誌與程式碼。問答模式面向不熟悉正則表示式的使用者；進階搜尋仍可使用正則。"
    },
    gallery: {
      aria: "截圖圖庫",
      plain: { label: "普通搜尋", title: "用於直接查找的普通文字搜尋。", text: "輸入一個詞、短語、識別符或錯誤訊息，然後查看帶高亮與檔案上下文的分組符合行。", alt: "FindText PRO 普通文字搜尋結果與高亮符合項" },
      regex: { label: "正則預設", title: "適合重複模式的正則預設。", text: "使用正則表示式與內建預設查找診斷資訊、電子郵件、IP、日期、TODO 標記與其他結構化文字。", alt: "FindText PRO 使用診斷預設進行正則搜尋" },
      export: { label: "匯出結果", title: "將搜尋結果匯出為 Markdown、CSV、JSON 或純文字。", text: "從結果工具列開啟匯出選單，選擇最適合分享、封存或後續處理的格式。", alt: "FindText PRO 匯出選單顯示 Markdown、CSV、JSON 與純文字格式" },
      replace: { label: "取代預覽", title: "任何寫入前都先預覽取代。", text: "依檔案與出現位置檢查每個候選項，只選擇目標修改，並讓 FindText PRO 在套用前驗證原始文字。", alt: "FindText PRO 帶有可選檔案與符合項的取代預覽" },
      history: { label: "歷史記錄", title: "為完成的調查保留歷史快照。", text: "回到之前的查詢時，原始選項、結果數量、檔案路徑與高亮符合項仍然保留。", alt: "FindText PRO 搜尋歷史顯示此前的本機搜尋結果" }
    },
    privacy: {
      eyebrow: "隱私與安全",
      title: "你的檔案在你的 Mac 上處理。",
      text: "FindText PRO 採用本機優先設計。當前 App 行為不會收集資料、追蹤使用者、建立雲端索引或上傳檔案內容。資料夾存取透過 macOS 沙盒授權，並以安全作用域書籤保存。",
      cards: [
        { title: "不收集資料", text: "App 隱私清單聲明不收集資料，也沒有追蹤網域。" },
        { title: "寫入前預覽", text: "批次取代必須先預覽，支援依檔案與出現位置選擇，並在套用修改前檢查原始文字。" },
        { title: "本機狀態，本機控制", text: "匯入資料夾、書籤、預設、歷史與取代記錄保存在這台 Mac 的 App 資料中，並可由使用者移除。" }
      ]
    },
    pricing: {
      eyebrow: "簡單定價",
      title: "不購買也可免費使用 200 次，之後 7 天試用，US$1 永久解鎖。",
      text: "FindText PRO 在不需要購買任何商品的情況下提供 200 次免費使用；之後可開啟 7 天免費試用，最後 US$1 一次購買永久使用權。",
      label: "永久解鎖",
      price: "US$1",
      panelText: "無需購買即可免費使用 200 次，之後可進行 7 天免費試用，再以 US$1 一次購買永久完整存取權。",
      bullets: [
        "不需要購買任何商品即可免費使用 200 次",
        "免費使用額度結束後可進行 7 天免費試用",
        "US$1 一次購買即可獲得永久使用權",
        "無訂閱，也不會自動扣費",
        "搜尋、取代、歷史記錄和匯出功能全部包含"
      ],
      button: "下載並免費開始"
    },
    faq: {
      eyebrow: "常見問題",
      title: "安裝前的幾個細節。",
      items: [
        { question: "FindText PRO 會上傳我的檔案嗎？", answer: "不會。搜尋在你的 Mac 本機執行。當前頁面描述的功能不會把查詢、檔案路徑或檔案內容傳送到伺服器。" },
        { question: "我可以在多個檔案中取代文字嗎？", answer: "可以。先執行搜尋，再準備取代預覽，選擇要修改的檔案或出現位置，最後確認後才會寫入。" },
        { question: "我需要懂正則表示式嗎？", answer: "不需要。問答模式就是為不熟悉正則的使用者設計的。它用普通提示引導搜尋；當你需要進階模式比對時，正則與預設仍然可用。" },
        { question: "支援哪些匯出格式？", answer: "搜尋結果可以匯出為 Markdown、CSV、JSON 或純文字。你也可以複製符合文字、整行或帶行號的檔案路徑。" },
        { question: "可以只搜尋某些檔案類型嗎？", answer: "可以。加入包含副檔名，例如 .md、.txt、.log、.swift 或 .docx。如果列表為空，FindText PRO 會搜尋未被規則跳過的可讀文字檔。" }
      ]
    },
    footer: { text: "macOS 本機檔案搜尋與安全取代。", back: "返回頂部" }
  },
  en: {
    meta: {
      title: "FindText PRO - Local file search and safe replacement for macOS",
      description: "FindText PRO is a local-first macOS app for searching code, logs, configs, and documents with Question Mode, regex, history, export, and safe batch replacement previews.",
      ogTitle: "FindText PRO - Local file search and safe replacement for macOS",
      ogDescription: "Search across local files, review exact matches, preview replacements, and keep every query on your Mac."
    },
    skipLink: "Skip to content",
    language: { label: "Language", aria: "Choose language" },
    header: {
      aria: "Site navigation",
      brandAria: "FindText PRO home",
      navAria: "Primary navigation",
      download: "Download",
      nav: { guided: "Question Mode", features: "Features", screenshots: "Screenshots", privacy: "Privacy", pricing: "Pricing" }
    },
    hero: {
      figureAria: "FindText PRO search interface",
      imageAlt: "FindText PRO Guided Search asking questions for a local file search",
      eyebrow: "Local-first search for macOS",
      title: "Find what matters across every local file.",
      lead: "FindText PRO gives everyday file search a calm Mac interface: use Question Mode when you do not know regex, or switch to precise controls for notes, Markdown, reports, configs, logs, and code.",
      actionsAria: "Primary actions",
      primaryAction: "Download on the Mac App Store",
      secondaryAction: "View product shots",
      factsAria: "Product facts",
      fact1Label: "Free use",
      fact1Value: "200 uses included",
      fact2Label: "Unlock",
      fact2Value: "7-day trial, then US$1",
      fact3Label: "Privacy",
      fact3Value: "Files stay local"
    },
    proof: {
      aria: "Core workflow",
      askLabel: "Ask",
      askText: "Question Mode walks you through a search in plain language, so you can find text without writing a regular expression.",
      reviewLabel: "Review",
      reviewText: "Grouped results with file names, line numbers, highlights, history, and exportable reports.",
      replaceLabel: "Replace",
      replaceText: "Selectable previews for careful bulk edits, with file-change checks and a session undo snapshot."
    },
    question: {
      eyebrow: "Question Mode",
      title: "A guided rule builder for people who do not think in regex.",
      text: "Question Mode is not a chatbot and it does not upload files. It turns a few clear answers into a deterministic local search: what kind of lines to include, which text traits they must contain, where those traits appear, and how the results should be scoped and displayed.",
      flowAria: "Question Mode benefits",
      cards: [
        { index: "01", title: "Choose the intent", text: "Start with matching or not matching lines, so inverse searches are available without memorizing command-line flags." },
        { index: "02", title: "Describe the text", text: "Add words or phrases that must appear, phrases that must be excluded, and whether multiple traits are all required, any one, or in order." },
        { index: "03", title: "Add structure", text: "Refine starts, endings, indentation, and common structures such as dates, emails, IP addresses, TODOs, or error terms." },
        { index: "04", title: "Review before search", text: "Confirm the generated criteria, scope, file types, skipped folders, case behavior, and output format before running the search." }
      ]
    },
    guidedIntro: {
      eyebrow: "How it works",
      title: "Six focused questions become one precise search.",
      text: "The flow keeps the mental model visible: every answer becomes a search constraint, and the final report shows the assembled rule before FindText PRO scans your local folders.",
      tabsAria: "Question Mode steps"
    },
    guided: {
      goal: { label: "Goal", step: "Step 1 of 6", title: "Choose whether the search should include or exclude matching lines.", text: "The first decision maps to positive or inverse search. Users can ask for lines matching described traits, or lines that do not match those traits, without needing grep flags or regex syntax.", alt: "FindText PRO Question Mode search goal step" },
      traits: { label: "Traits", step: "Step 2 of 6", title: "Describe what each matching line must contain.", text: "Add one or more words, phrases, identifiers, or remembered fragments. Then decide whether all traits are required, any one trait is enough, or the traits must appear in order.", alt: "FindText PRO Question Mode text traits step" },
      boundaries: { label: "Boundaries", step: "Step 3 of 6", title: "Limit where text appears inside a line.", text: "Optional starts-with and ends-with questions help turn a vague text clue into a tighter line-level search. Leading indentation can stay allowed for code, logs, and Markdown lists.", alt: "FindText PRO Question Mode line starts and ends step" },
      structures: { label: "Structures", step: "Step 4 of 6", title: "Add common structures without writing patterns by hand.", text: "Checkboxes cover reusable text shapes such as IP addresses, emails, dates, times, hex numbers, TODO markers, error terms, English letters, Chinese text, ports, and device nodes.", alt: "FindText PRO Question Mode common structures step" },
      options: { label: "Options", step: "Step 5 of 6", title: "Set scope, case behavior, file types, and output format.", text: "The final options connect the generated rule to the practical search job: exact case, skipped folders, included extensions, and whether results show matching lines, matches only, or file paths.", alt: "FindText PRO Question Mode search options step" },
      report: { label: "Report", step: "Step 6 of 6", title: "Review the assembled rule before running the search.", text: "The report makes the generated criteria auditable. Users can check the goal, required traits, case mode, skipped folders, file types, and result format before starting the local scan.", alt: "FindText PRO Question Mode text trait report step" }
    },
    features: {
      eyebrow: "Built for repeated work",
      title: "Simple enough for documents. Precise enough for code.",
      text: "FindText PRO helps ordinary Mac users search through questions and plain text, while giving developers, writers, QA teams, and support engineers the deeper controls they expect.",
      cards: [
        { index: "01", title: "Friendly guided search", text: "Use Question Mode when you know what you want to find but do not know how to express it as a regular expression." },
        { index: "02", title: "Readable result sets", text: "See matches grouped by file with line numbers and highlights, then collapse noisy groups when a large folder turns up hundreds of hits." },
        { index: "03", title: "Reusable search memory", text: "Save recurring searches for monthly documents, project folders, support cases, or code audits, and reopen history snapshots without running the search again." },
        { index: "04", title: "Safer batch replacement", text: "Preview every candidate by file and occurrence, select only what should change, and avoid accidental edits when renaming terms across many files." },
        { index: "05", title: "Reports that travel", text: "Copy matching text, whole lines, or file locations with line numbers, then export a report for a teammate, customer, or future self." },
        { index: "06", title: "Scope that stays clean", text: "Search one or many folders, include only selected file types, skip cluttered directories, and search extracted .docx text when macOS can read it." }
      ]
    },
    operator: {
      eyebrow: "Less context switching",
      title: "Built for the moment when a quick search becomes real work.",
      text: "FindText PRO works for simple \"where did I write that?\" searches and for deeper inspections that need proof. It is especially useful when a quick lookup turns into a document cleanup, change list, release check, support investigation, or code review.",
      aria: "FindText PRO strengths",
      metrics: [
        { title: "Local", text: "No account, cloud index, or remote file upload for search." },
        { title: "Auditable", text: "History snapshots capture the query, scope, and results." },
        { title: "Controlled", text: "Replacement previews are selectable before write." }
      ]
    },
    screenshots: {
      eyebrow: "Product screenshots",
      title: "A Mac-native workspace for search, review, and replacement.",
      text: "These views are captured from an English demo workspace with synthetic notes, docs, configs, logs, and code. Question Mode is designed for users who do not know regular expressions; regex remains available for advanced searches."
    },
    gallery: {
      aria: "Screenshot gallery",
      plain: { label: "Plain Search", title: "Plain text search for direct lookups.", text: "Type a word, phrase, identifier, or error message, then review grouped matching lines with highlights and file context.", alt: "FindText PRO plain text search results with highlighted matches" },
      regex: { label: "Regex Preset", title: "Regex presets for patterns that repeat.", text: "Use regular expressions and built-in presets for diagnostics, email addresses, IPs, dates, TODO markers, and other structured text.", alt: "FindText PRO regular expression search using a diagnostics preset" },
      export: { label: "Export Results", title: "Export search results as Markdown, CSV, JSON, or plain text.", text: "Open the export menu from the results toolbar and choose the format that best fits sharing, archiving, or further processing.", alt: "FindText PRO export menu showing Markdown, CSV, JSON, and plain text formats" },
      replace: { label: "Replace Preview", title: "Replacement previews before any write.", text: "Review each candidate by file and occurrence, select only the intended changes, and let FindText PRO verify the source text before applying.", alt: "FindText PRO replacement preview with selectable file and occurrence changes" },
      history: { label: "History", title: "History snapshots for finished investigations.", text: "Return to a previous query with its original options, result counts, file paths, and highlighted matches still intact.", alt: "FindText PRO search history showing previous local search results" }
    },
    privacy: {
      eyebrow: "Privacy and safety",
      title: "Your files are processed on your Mac.",
      text: "FindText PRO is local-first by design. The current app behavior does not collect data, track users, create cloud indexes, or upload file content. Folder access is granted through the macOS sandbox and stored as security-scoped bookmarks.",
      cards: [
        { title: "No collected data", text: "The app privacy manifest declares no collected data and no tracking domains." },
        { title: "Preview before write", text: "Batch replacement requires a preview, supports per-file and per-occurrence selection, and checks original text before applying changes." },
        { title: "Local state, local control", text: "Imported folders, bookmarks, presets, history, and replacement records stay in this Mac's app data and can be removed by the user." }
      ]
    },
    pricing: {
      eyebrow: "Simple pricing",
      title: "Use it 200 times free. Then try 7 days and unlock forever for US$1.",
      text: "Use FindText PRO 200 times without purchasing anything. After that, start a 7-day free trial, then pay once for permanent access.",
      label: "Permanent unlock",
      price: "US$1",
      panelText: "200 free uses without purchasing anything, then a 7-day free trial, then a US$1 one-time purchase for permanent full access.",
      bullets: [
        "200 free uses with no purchase required",
        "7-day free trial available after the free-use allowance",
        "US$1 one-time purchase for permanent full access",
        "No subscription and no automatic billing",
        "All search, replacement, history, and export features included"
      ],
      button: "Download and start free"
    },
    faq: {
      eyebrow: "FAQ",
      title: "A few details before you install.",
      items: [
        { question: "Does FindText PRO upload my files?", answer: "No. Search runs locally on your Mac. Queries, file paths, and file content are not sent to a server by the current app features described here." },
        { question: "Can I replace text in multiple files?", answer: "Yes. Run a search first, prepare a replacement preview, choose the files or occurrences to change, and confirm before anything is written." },
        { question: "Do I need to know regular expressions?", answer: "No. Question Mode is built for users who do not know regex. It guides the search with plain prompts, while regex and presets remain available when you want advanced pattern matching." },
        { question: "Which export formats are supported?", answer: "Search results can be exported as Markdown, CSV, JSON, or plain text. You can also copy matching text, whole lines, or file paths with line numbers." },
        { question: "Can I limit a search to certain file types?", answer: "Yes. Add included extensions such as .md, .txt, .log, .swift, or .docx. If the list is empty, FindText PRO searches readable text files that are not skipped by your rules." }
      ]
    },
    footer: { text: "Local file search and safe replacement for macOS.", back: "Back to top" }
  },
  de: {
    meta: {
      title: "FindText PRO - Lokale Dateisuche und sicheres Ersetzen für macOS",
      description: "FindText PRO ist eine lokal arbeitende macOS-App zum Durchsuchen von Code, Logs, Konfigurationen und Dokumenten mit Fragemodus, Regex, Verlauf, Export und sicheren Vorschauen für Stapelersetzungen.",
      ogTitle: "FindText PRO - Lokale Dateisuche und sicheres Ersetzen für macOS",
      ogDescription: "Durchsuche lokale Dateien, prüfe exakte Treffer, sieh Ersetzungen vorab an und behalte jede Suche auf deinem Mac."
    },
    skipLink: "Zum Inhalt springen",
    language: { label: "Sprache", aria: "Sprache auswählen" },
    header: {
      aria: "Seitennavigation",
      brandAria: "FindText PRO Startseite",
      navAria: "Hauptnavigation",
      download: "Download",
      nav: { guided: "Fragemodus", features: "Funktionen", screenshots: "Screenshots", privacy: "Datenschutz", pricing: "Preise" }
    },
    hero: {
      figureAria: "FindText PRO Suchoberfläche",
      imageAlt: "FindText PRO Guided Search stellt Fragen für eine lokale Dateisuche",
      eyebrow: "Lokale Suche zuerst für macOS",
      title: "Finde, was in deinen lokalen Dateien zählt.",
      lead: "FindText PRO gibt der alltäglichen Dateisuche eine ruhige Mac-Oberfläche: Nutze den Fragemodus, wenn du kein Regex kennst, oder wechsle zu präzisen Optionen für Notizen, Markdown, Berichte, Konfigurationen, Logs und Code.",
      actionsAria: "Primäre Aktionen",
      primaryAction: "Im Mac App Store laden",
      secondaryAction: "Produktbilder ansehen",
      factsAria: "Produktdaten",
      fact1Label: "Kostenlose Nutzung",
      fact1Value: "200 Nutzungen enthalten",
      fact2Label: "Freischaltung",
      fact2Value: "7 Tage testen, dann US$1",
      fact3Label: "Datenschutz",
      fact3Value: "Dateien bleiben lokal"
    },
    proof: {
      aria: "Kernablauf",
      askLabel: "Fragen",
      askText: "Der Fragemodus führt dich in normaler Sprache durch die Suche, damit du Text findest, ohne reguläre Ausdrücke zu schreiben.",
      reviewLabel: "Prüfen",
      reviewText: "Gruppierte Ergebnisse mit Dateinamen, Zeilennummern, Hervorhebungen, Verlauf und exportierbaren Berichten.",
      replaceLabel: "Ersetzen",
      replaceText: "Auswählbare Vorschauen für vorsichtige Stapelbearbeitung, mit Dateiänderungsprüfung und Undo-Schnappschuss der Sitzung."
    },
    question: {
      eyebrow: "Fragemodus",
      title: "Ein geführter Regelgenerator für alle, die nicht in Regex denken.",
      text: "Der Fragemodus ist kein Chatbot und lädt keine Dateien hoch. Er verwandelt wenige klare Antworten in eine deterministische lokale Suche: welche Zeilen einbezogen werden, welche Textmerkmale sie enthalten müssen, wo diese Merkmale stehen und wie Ergebnisse eingegrenzt und angezeigt werden.",
      flowAria: "Vorteile des Fragemodus",
      cards: [
        { index: "01", title: "Absicht wählen", text: "Beginne mit passenden oder nicht passenden Zeilen, damit inverse Suchen ohne Kommandozeilen-Flags möglich sind." },
        { index: "02", title: "Text beschreiben", text: "Füge Wörter oder Phrasen hinzu, die vorkommen müssen oder ausgeschlossen werden sollen, und entscheide, ob alle, eine beliebige oder die Reihenfolge zählt." },
        { index: "03", title: "Struktur ergänzen", text: "Verfeinere Anfang, Ende, Einrückung und gängige Strukturen wie Daten, E-Mails, IP-Adressen, TODOs oder Fehlerbegriffe." },
        { index: "04", title: "Vor Suche prüfen", text: "Bestätige generierte Kriterien, Bereich, Dateitypen, übersprungene Ordner, Groß-/Kleinschreibung und Ausgabeformat vor dem Start." }
      ]
    },
    guidedIntro: {
      eyebrow: "So funktioniert es",
      title: "Sechs gezielte Fragen werden zu einer präzisen Suche.",
      text: "Der Ablauf hält das Suchmodell sichtbar: Jede Antwort wird zu einer Suchbedingung, und der Abschlussbericht zeigt die zusammengesetzte Regel, bevor FindText PRO lokale Ordner scannt.",
      tabsAria: "Schritte des Fragemodus"
    },
    guided: {
      goal: { label: "Ziel", step: "Schritt 1 von 6", title: "Wähle, ob die Suche passende Zeilen ein- oder ausschließen soll.", text: "Die erste Entscheidung wird zu einer positiven oder inversen Suche. Nutzer können Zeilen finden, die Merkmale erfüllen, oder Zeilen, die sie nicht erfüllen, ohne grep-Flags oder Regex-Syntax zu kennen.", alt: "FindText PRO Fragemodus Schritt Suchziel" },
      traits: { label: "Merkmale", step: "Schritt 2 von 6", title: "Beschreibe, was jede Trefferzeile enthalten muss.", text: "Füge ein oder mehrere Wörter, Phrasen, Bezeichner oder erinnerte Fragmente hinzu. Danach legst du fest, ob alle Merkmale, ein beliebiges Merkmal oder die Reihenfolge erforderlich ist.", alt: "FindText PRO Fragemodus Schritt Textmerkmale" },
      boundaries: { label: "Grenzen", step: "Schritt 3 von 6", title: "Begrenze, wo Text innerhalb einer Zeile erscheint.", text: "Optionale Fragen zu Zeilenanfang und Zeilenende machen aus einem vagen Hinweis eine engere zeilenbasierte Suche. Führende Einrückung kann für Code, Logs und Markdown-Listen erlaubt bleiben.", alt: "FindText PRO Fragemodus Schritt Zeilenanfang und Zeilenende" },
      structures: { label: "Strukturen", step: "Schritt 4 von 6", title: "Füge häufige Strukturen hinzu, ohne Muster von Hand zu schreiben.", text: "Checkboxen decken wiederverwendbare Textformen ab, etwa IP-Adressen, E-Mails, Daten, Zeiten, Hexzahlen, TODO-Marker, Fehlerbegriffe, englische Buchstaben, chinesischen Text, Ports und Geräteknoten.", alt: "FindText PRO Fragemodus Schritt häufige Strukturen" },
      options: { label: "Optionen", step: "Schritt 5 von 6", title: "Lege Bereich, Groß-/Kleinschreibung, Dateitypen und Ausgabe fest.", text: "Die letzten Optionen verbinden die generierte Regel mit der praktischen Suche: exakte Groß-/Kleinschreibung, übersprungene Ordner, einbezogene Erweiterungen und ob Ergebnisse Zeilen, nur Treffer oder Dateipfade zeigen.", alt: "FindText PRO Fragemodus Schritt Suchoptionen" },
      report: { label: "Bericht", step: "Schritt 6 von 6", title: "Prüfe die zusammengesetzte Regel vor dem Start.", text: "Der Bericht macht die Kriterien nachvollziehbar. Nutzer prüfen Ziel, erforderliche Merkmale, Groß-/Kleinschreibung, übersprungene Ordner, Dateitypen und Ergebnisformat, bevor der lokale Scan beginnt.", alt: "FindText PRO Fragemodus Schritt Textmerkmal-Bericht" }
    },
    features: {
      eyebrow: "Für wiederkehrende Arbeit gebaut",
      title: "Einfach genug für Dokumente. Präzise genug für Code.",
      text: "FindText PRO hilft normalen Mac-Nutzern mit Fragen und Klartextsuche, bietet Entwicklern, Autorinnen, QA-Teams und Support-Fachleuten aber auch die tieferen Kontrollen, die sie erwarten.",
      cards: [
        { index: "01", title: "Freundliche geführte Suche", text: "Nutze den Fragemodus, wenn du weißt, was du finden willst, aber nicht weißt, wie du es als regulären Ausdruck formulierst." },
        { index: "02", title: "Lesbare Ergebnismengen", text: "Sieh Treffer nach Datei gruppiert mit Zeilennummern und Hervorhebungen und klappe laute Gruppen ein, wenn ein großer Ordner Hunderte Treffer liefert." },
        { index: "03", title: "Wiederverwendbare Sucherinnerung", text: "Speichere wiederkehrende Suchen für Monatsdokumente, Projektordner, Supportfälle oder Code-Audits und öffne Verlaufsschnappschüsse ohne erneuten Lauf." },
        { index: "04", title: "Sicherere Stapelersetzung", text: "Prüfe jeden Kandidaten nach Datei und Vorkommen, wähle nur beabsichtigte Änderungen und vermeide Fehler beim Umbenennen über viele Dateien." },
        { index: "05", title: "Berichte, die weitergegeben werden können", text: "Kopiere Treffertext, ganze Zeilen oder Dateipositionen mit Zeilennummern und exportiere einen Bericht für Teamkollegen, Kunden oder dein zukünftiges Ich." },
        { index: "06", title: "Sauberer Suchbereich", text: "Durchsuche einen oder mehrere Ordner, beziehe nur ausgewählte Dateitypen ein, überspringe unübersichtliche Ordner und suche extrahierten .docx-Text, wenn macOS ihn lesen kann." }
      ]
    },
    operator: {
      eyebrow: "Weniger Kontextwechsel",
      title: "Gebaut für den Moment, in dem eine schnelle Suche echte Arbeit wird.",
      text: "FindText PRO eignet sich für einfache Suchen wie „Wo habe ich das geschrieben?“ und für tiefere Prüfungen, die Belege brauchen. Besonders hilfreich ist es, wenn aus einem kurzen Nachschlagen eine Dokumentbereinigung, Änderungsliste, Release-Prüfung, Supportanalyse oder Code-Review wird.",
      aria: "Stärken von FindText PRO",
      metrics: [
        { title: "Lokal", text: "Kein Konto, kein Cloud-Index und kein Upload von Dateien für die Suche." },
        { title: "Nachvollziehbar", text: "Verlaufsschnappschüsse erfassen Abfrage, Bereich und Ergebnisse." },
        { title: "Kontrolliert", text: "Ersetzungsvorschauen sind vor dem Schreiben auswählbar." }
      ]
    },
    screenshots: {
      eyebrow: "Produkt-Screenshots",
      title: "Ein Mac-nativer Arbeitsbereich für Suche, Prüfung und Ersetzung.",
      text: "Diese Ansichten stammen aus einem englischen Demo-Arbeitsbereich mit synthetischen Notizen, Dokumenten, Konfigurationen, Logs und Code. Der Fragemodus ist für Nutzer gedacht, die keine regulären Ausdrücke kennen; Regex bleibt für erweiterte Suchen verfügbar."
    },
    gallery: {
      aria: "Screenshot-Galerie",
      plain: { label: "Klartextsuche", title: "Klartextsuche für direkte Nachschläge.", text: "Gib ein Wort, eine Phrase, einen Bezeichner oder eine Fehlermeldung ein und prüfe gruppierte Trefferzeilen mit Hervorhebungen und Dateikontext.", alt: "FindText PRO Klartextsuchergebnisse mit hervorgehobenen Treffern" },
      regex: { label: "Regex-Voreinstellung", title: "Regex-Voreinstellungen für wiederkehrende Muster.", text: "Nutze reguläre Ausdrücke und integrierte Voreinstellungen für Diagnosen, E-Mail-Adressen, IPs, Daten, TODO-Marker und andere strukturierte Texte.", alt: "FindText PRO Regex-Suche mit Diagnose-Voreinstellung" },
      export: { label: "Ergebnisse exportieren", title: "Exportiere Suchergebnisse als Markdown, CSV, JSON oder Klartext.", text: "Öffne das Exportmenü in der Ergebnisleiste und wähle das Format, das am besten zum Teilen, Archivieren oder Weiterverarbeiten passt.", alt: "FindText PRO Exportmenü mit Markdown-, CSV-, JSON- und Klartextformaten" },
      replace: { label: "Ersetzungsvorschau", title: "Ersetzungsvorschauen vor jedem Schreiben.", text: "Prüfe jeden Kandidaten nach Datei und Vorkommen, wähle nur beabsichtigte Änderungen und lass FindText PRO den Ausgangstext vor dem Anwenden prüfen.", alt: "FindText PRO Ersetzungsvorschau mit auswählbaren Dateien und Vorkommen" },
      history: { label: "Verlauf", title: "Verlaufsschnappschüsse für abgeschlossene Untersuchungen.", text: "Kehre zu einer früheren Abfrage zurück, bei der ursprüngliche Optionen, Ergebniszahlen, Dateipfade und Hervorhebungen erhalten bleiben.", alt: "FindText PRO Suchverlauf mit früheren lokalen Suchergebnissen" }
    },
    privacy: {
      eyebrow: "Datenschutz und Sicherheit",
      title: "Deine Dateien werden auf deinem Mac verarbeitet.",
      text: "FindText PRO ist lokal ausgerichtet. Die aktuellen App-Funktionen sammeln keine Daten, verfolgen keine Nutzer, erstellen keine Cloud-Indizes und laden keine Dateiinhalte hoch. Ordnerzugriff erfolgt über die macOS-Sandbox und wird als sicherheitsbezogenes Lesezeichen gespeichert.",
      cards: [
        { title: "Keine gesammelten Daten", text: "Das App-Datenschutzmanifest erklärt, dass keine Daten gesammelt und keine Tracking-Domains genutzt werden." },
        { title: "Vorschau vor dem Schreiben", text: "Stapelersetzung erfordert eine Vorschau, unterstützt Auswahl pro Datei und Vorkommen und prüft den Originaltext vor Änderungen." },
        { title: "Lokaler Zustand, lokale Kontrolle", text: "Importierte Ordner, Lesezeichen, Voreinstellungen, Verlauf und Ersetzungsdatensätze bleiben in den App-Daten dieses Macs und können vom Nutzer entfernt werden." }
      ]
    },
    pricing: {
      eyebrow: "Einfache Preise",
      title: "200 Mal kostenlos nutzen. Danach 7 Tage testen und für US$1 dauerhaft freischalten.",
      text: "Nutze FindText PRO 200 Mal, ohne etwas zu kaufen. Danach kannst du eine 7-tägige kostenlose Testphase starten und anschließend einmalig für dauerhaften Zugriff zahlen.",
      label: "Dauerhafte Freischaltung",
      price: "US$1",
      panelText: "200 kostenlose Nutzungen ohne Kauf, danach 7 Tage kostenlose Testphase und anschließend ein einmaliger Kauf von US$1 für dauerhaften Vollzugriff.",
      bullets: [
        "200 kostenlose Nutzungen ohne Kauf erforderlich",
        "7-tägige kostenlose Testphase nach dem kostenlosen Kontingent",
        "Einmaliger Kauf von US$1 für dauerhaften Vollzugriff",
        "Kein Abo und keine automatische Abbuchung",
        "Alle Such-, Ersetzungs-, Verlaufs- und Exportfunktionen enthalten"
      ],
      button: "Herunterladen und kostenlos starten"
    },
    faq: {
      eyebrow: "FAQ",
      title: "Ein paar Details vor der Installation.",
      items: [
        { question: "Lädt FindText PRO meine Dateien hoch?", answer: "Nein. Die Suche läuft lokal auf deinem Mac. Abfragen, Dateipfade und Dateiinhalte werden von den hier beschriebenen Funktionen nicht an einen Server gesendet." },
        { question: "Kann ich Text in mehreren Dateien ersetzen?", answer: "Ja. Führe zuerst eine Suche aus, erstelle eine Ersetzungsvorschau, wähle Dateien oder Vorkommen aus und bestätige, bevor etwas geschrieben wird." },
        { question: "Muss ich reguläre Ausdrücke kennen?", answer: "Nein. Der Fragemodus ist für Nutzer gebaut, die Regex nicht kennen. Er führt mit einfachen Fragen durch die Suche; Regex und Voreinstellungen bleiben verfügbar, wenn du erweitertes Muster-Matching möchtest." },
        { question: "Welche Exportformate werden unterstützt?", answer: "Suchergebnisse können als Markdown, CSV, JSON oder Klartext exportiert werden. Du kannst auch Treffertext, ganze Zeilen oder Dateipfade mit Zeilennummern kopieren." },
        { question: "Kann ich die Suche auf bestimmte Dateitypen beschränken?", answer: "Ja. Füge Erweiterungen wie .md, .txt, .log, .swift oder .docx hinzu. Ist die Liste leer, durchsucht FindText PRO lesbare Textdateien, die nicht durch deine Regeln übersprungen werden." }
      ]
    },
    footer: { text: "Lokale Dateisuche und sicheres Ersetzen für macOS.", back: "Zurück nach oben" }
  },
  es: {
    meta: {
      title: "FindText PRO - Búsqueda local de archivos y reemplazo seguro para macOS",
      description: "FindText PRO es una app de macOS local-first para buscar en código, registros, configuraciones y documentos con Modo Pregunta, regex, historial, exportación y vistas previas seguras de reemplazo por lotes.",
      ogTitle: "FindText PRO - Búsqueda local de archivos y reemplazo seguro para macOS",
      ogDescription: "Busca en archivos locales, revisa coincidencias exactas, previsualiza reemplazos y conserva cada consulta en tu Mac."
    },
    skipLink: "Saltar al contenido",
    language: { label: "Idioma", aria: "Elegir idioma" },
    header: {
      aria: "Navegación del sitio",
      brandAria: "Inicio de FindText PRO",
      navAria: "Navegación principal",
      download: "Descargar",
      nav: { guided: "Modo Pregunta", features: "Funciones", screenshots: "Capturas", privacy: "Privacidad", pricing: "Precio" }
    },
    hero: {
      figureAria: "Interfaz de búsqueda de FindText PRO",
      imageAlt: "FindText PRO Guided Search haciendo preguntas para una búsqueda local de archivos",
      eyebrow: "Búsqueda local-first para macOS",
      title: "Encuentra lo importante en cada archivo local.",
      lead: "FindText PRO convierte la búsqueda diaria de archivos en una interfaz Mac tranquila: usa el Modo Pregunta si no sabes regex, o cambia a controles precisos para notas, Markdown, informes, configuraciones, registros y código.",
      actionsAria: "Acciones principales",
      primaryAction: "Descargar en Mac App Store",
      secondaryAction: "Ver capturas del producto",
      factsAria: "Datos del producto",
      fact1Label: "Uso gratis",
      fact1Value: "200 usos incluidos",
      fact2Label: "Desbloqueo",
      fact2Value: "7 días de prueba, luego US$1",
      fact3Label: "Privacidad",
      fact3Value: "Archivos locales"
    },
    proof: {
      aria: "Flujo principal",
      askLabel: "Preguntar",
      askText: "El Modo Pregunta te guía en lenguaje claro para encontrar texto sin escribir una expresión regular.",
      reviewLabel: "Revisar",
      reviewText: "Resultados agrupados con nombres de archivo, números de línea, resaltados, historial e informes exportables.",
      replaceLabel: "Reemplazar",
      replaceText: "Vistas previas seleccionables para ediciones masivas cuidadosas, con comprobaciones de cambios y una instantánea de deshacer de la sesión."
    },
    question: {
      eyebrow: "Modo Pregunta",
      title: "Un generador guiado de reglas para quienes no piensan en regex.",
      text: "El Modo Pregunta no es un chatbot y no sube archivos. Convierte unas pocas respuestas claras en una búsqueda local determinista: qué líneas incluir, qué rasgos de texto deben contener, dónde aparecen esos rasgos y cómo acotar y mostrar los resultados.",
      flowAria: "Ventajas del Modo Pregunta",
      cards: [
        { index: "01", title: "Elige la intención", text: "Empieza con líneas que coinciden o que no coinciden, para hacer búsquedas inversas sin memorizar flags de línea de comandos." },
        { index: "02", title: "Describe el texto", text: "Agrega palabras o frases que deben aparecer, frases que deben excluirse y decide si varios rasgos son todos necesarios, cualquiera basta o deben ir en orden." },
        { index: "03", title: "Añade estructura", text: "Refina inicios, finales, sangría y estructuras comunes como fechas, correos, direcciones IP, TODOs o términos de error." },
        { index: "04", title: "Revisa antes de buscar", text: "Confirma criterios generados, alcance, tipos de archivo, carpetas omitidas, mayúsculas y formato de salida antes de ejecutar." }
      ]
    },
    guidedIntro: {
      eyebrow: "Cómo funciona",
      title: "Seis preguntas concretas se convierten en una búsqueda precisa.",
      text: "El flujo mantiene visible el modelo mental: cada respuesta se vuelve una restricción de búsqueda, y el informe final muestra la regla ensamblada antes de que FindText PRO escanee tus carpetas locales.",
      tabsAria: "Pasos del Modo Pregunta"
    },
    guided: {
      goal: { label: "Objetivo", step: "Paso 1 de 6", title: "Elige si la búsqueda debe incluir o excluir líneas coincidentes.", text: "La primera decisión se traduce en búsqueda positiva o inversa. Puedes pedir líneas que coincidan con los rasgos descritos, o líneas que no coincidan, sin flags de grep ni sintaxis regex.", alt: "Paso de objetivo de búsqueda en el Modo Pregunta de FindText PRO" },
      traits: { label: "Rasgos", step: "Paso 2 de 6", title: "Describe qué debe contener cada línea coincidente.", text: "Agrega una o más palabras, frases, identificadores o fragmentos recordados. Luego decide si todos los rasgos son obligatorios, si basta cualquiera o si deben aparecer en orden.", alt: "Paso de rasgos de texto en el Modo Pregunta de FindText PRO" },
      boundaries: { label: "Límites", step: "Paso 3 de 6", title: "Limita dónde aparece el texto dentro de una línea.", text: "Las preguntas opcionales sobre inicio y final de línea convierten una pista vaga en una búsqueda por línea más estrecha. La sangría inicial puede seguir permitida para código, registros y listas Markdown.", alt: "Paso de inicios y finales de línea en el Modo Pregunta de FindText PRO" },
      structures: { label: "Estructuras", step: "Paso 4 de 6", title: "Añade estructuras comunes sin escribir patrones a mano.", text: "Las casillas cubren formas reutilizables como IPs, correos, fechas, horas, números hex, TODOs, términos de error, letras inglesas, texto chino, puertos y nodos de dispositivo.", alt: "Paso de estructuras comunes en el Modo Pregunta de FindText PRO" },
      options: { label: "Opciones", step: "Paso 5 de 6", title: "Define alcance, mayúsculas, tipos de archivo y salida.", text: "Las opciones finales conectan la regla generada con el trabajo real: coincidencia exacta de mayúsculas, carpetas omitidas, extensiones incluidas y si se muestran líneas, solo coincidencias o rutas.", alt: "Paso de opciones de búsqueda en el Modo Pregunta de FindText PRO" },
      report: { label: "Informe", step: "Paso 6 de 6", title: "Revisa la regla ensamblada antes de buscar.", text: "El informe vuelve auditables los criterios. Puedes revisar objetivo, rasgos requeridos, mayúsculas, carpetas omitidas, tipos de archivo y formato antes del escaneo local.", alt: "Paso de informe de rasgos de texto en el Modo Pregunta de FindText PRO" }
    },
    features: {
      eyebrow: "Diseñado para trabajo repetido",
      title: "Suficientemente simple para documentos. Suficientemente preciso para código.",
      text: "FindText PRO ayuda a usuarios cotidianos de Mac a buscar con preguntas y texto simple, mientras da a desarrolladores, redactores, QA y soporte los controles profundos que esperan.",
      cards: [
        { index: "01", title: "Búsqueda guiada amable", text: "Usa el Modo Pregunta cuando sabes qué quieres encontrar pero no sabes expresarlo como expresión regular." },
        { index: "02", title: "Resultados legibles", text: "Ve coincidencias agrupadas por archivo con números de línea y resaltados, y colapsa grupos ruidosos cuando una carpeta grande devuelve cientos de hits." },
        { index: "03", title: "Memoria de búsqueda reutilizable", text: "Guarda búsquedas recurrentes para documentos mensuales, carpetas de proyecto, casos de soporte o auditorías de código, y reabre instantáneas sin buscar de nuevo." },
        { index: "04", title: "Reemplazo por lotes más seguro", text: "Previsualiza cada candidato por archivo y aparición, selecciona solo lo que debe cambiar y evita ediciones accidentales al renombrar en muchos archivos." },
        { index: "05", title: "Informes que viajan", text: "Copia texto coincidente, líneas completas o ubicaciones con número de línea, y exporta un informe para un compañero, cliente o tu yo futuro." },
        { index: "06", title: "Alcance limpio", text: "Busca en una o varias carpetas, incluye solo ciertos tipos de archivo, omite directorios ruidosos y busca texto .docx extraído cuando macOS pueda leerlo." }
      ]
    },
    operator: {
      eyebrow: "Menos cambios de contexto",
      title: "Hecho para cuando una búsqueda rápida se convierte en trabajo real.",
      text: "FindText PRO sirve para búsquedas simples como “¿dónde escribí eso?” y para inspecciones profundas que necesitan prueba. Es especialmente útil cuando una consulta rápida se vuelve limpieza de documentos, lista de cambios, revisión de release, investigación de soporte o revisión de código.",
      aria: "Fortalezas de FindText PRO",
      metrics: [
        { title: "Local", text: "Sin cuenta, índice en la nube ni subida remota de archivos para buscar." },
        { title: "Auditable", text: "Las instantáneas de historial capturan consulta, alcance y resultados." },
        { title: "Controlado", text: "Las vistas previas de reemplazo se seleccionan antes de escribir." }
      ]
    },
    screenshots: {
      eyebrow: "Capturas del producto",
      title: "Un espacio Mac nativo para buscar, revisar y reemplazar.",
      text: "Estas vistas se capturaron en un espacio de demo en inglés con notas, documentos, configuraciones, registros y código sintéticos. El Modo Pregunta está pensado para usuarios que no conocen expresiones regulares; regex sigue disponible para búsquedas avanzadas."
    },
    gallery: {
      aria: "Galería de capturas",
      plain: { label: "Texto simple", title: "Búsqueda de texto simple para consultas directas.", text: "Escribe una palabra, frase, identificador o mensaje de error y revisa líneas agrupadas con resaltados y contexto de archivo.", alt: "Resultados de búsqueda de texto simple en FindText PRO con coincidencias resaltadas" },
      regex: { label: "Preset regex", title: "Presets regex para patrones que se repiten.", text: "Usa expresiones regulares y presets integrados para diagnósticos, correos, IPs, fechas, marcadores TODO y otros textos estructurados.", alt: "Búsqueda regex de FindText PRO usando un preset de diagnóstico" },
      export: { label: "Exportar resultados", title: "Exporta resultados como Markdown, CSV, JSON o texto plano.", text: "Abre el menú de exportación desde la barra de resultados y elige el formato ideal para compartir, archivar o procesar después.", alt: "Menú de exportación de FindText PRO con formatos Markdown, CSV, JSON y texto plano" },
      replace: { label: "Vista previa", title: "Vistas previas de reemplazo antes de escribir.", text: "Revisa cada candidato por archivo y aparición, selecciona solo los cambios previstos y deja que FindText PRO verifique el texto original antes de aplicar.", alt: "Vista previa de reemplazo de FindText PRO con cambios seleccionables por archivo y aparición" },
      history: { label: "Historial", title: "Instantáneas de historial para investigaciones terminadas.", text: "Vuelve a una consulta anterior con sus opciones originales, recuentos, rutas y coincidencias resaltadas intactas.", alt: "Historial de búsqueda de FindText PRO con resultados locales anteriores" }
    },
    privacy: {
      eyebrow: "Privacidad y seguridad",
      title: "Tus archivos se procesan en tu Mac.",
      text: "FindText PRO está diseñado local-first. El comportamiento actual de la app no recopila datos, no rastrea usuarios, no crea índices en la nube ni sube contenido de archivos. El acceso a carpetas se concede con el sandbox de macOS y se guarda como marcadores con alcance de seguridad.",
      cards: [
        { title: "Sin datos recopilados", text: "El manifiesto de privacidad de la app declara que no recopila datos ni usa dominios de rastreo." },
        { title: "Vista previa antes de escribir", text: "El reemplazo por lotes requiere vista previa, permite selección por archivo y aparición, y comprueba el texto original antes de aplicar cambios." },
        { title: "Estado local, control local", text: "Carpetas importadas, marcadores, presets, historial y registros de reemplazo quedan en los datos de la app en este Mac y pueden eliminarse." }
      ]
    },
    pricing: {
      eyebrow: "Precio simple",
      title: "Úsalo 200 veces gratis. Luego prueba 7 días y desbloquea para siempre por US$1.",
      text: "Usa FindText PRO 200 veces sin comprar nada. Después, inicia una prueba gratuita de 7 días y paga una sola vez para acceso permanente.",
      label: "Desbloqueo permanente",
      price: "US$1",
      panelText: "200 usos gratuitos sin comprar nada, luego una prueba gratuita de 7 días y después una compra única de US$1 para acceso completo permanente.",
      bullets: [
        "200 usos gratuitos sin compra requerida",
        "Prueba gratuita de 7 días después del cupo gratis",
        "Compra única de US$1 para acceso completo permanente",
        "Sin suscripción y sin cobro automático",
        "Incluye búsqueda, reemplazo, historial y exportación"
      ],
      button: "Descargar y empezar gratis"
    },
    faq: {
      eyebrow: "FAQ",
      title: "Algunos detalles antes de instalar.",
      items: [
        { question: "¿FindText PRO sube mis archivos?", answer: "No. La búsqueda se ejecuta localmente en tu Mac. Las consultas, rutas y contenido de archivos no se envían a un servidor con las funciones descritas aquí." },
        { question: "¿Puedo reemplazar texto en varios archivos?", answer: "Sí. Ejecuta primero una búsqueda, prepara una vista previa de reemplazo, elige archivos o apariciones y confirma antes de que se escriba nada." },
        { question: "¿Necesito saber expresiones regulares?", answer: "No. El Modo Pregunta está hecho para usuarios que no conocen regex. Guía la búsqueda con preguntas simples, mientras regex y presets siguen disponibles para patrones avanzados." },
        { question: "¿Qué formatos de exportación admite?", answer: "Los resultados pueden exportarse como Markdown, CSV, JSON o texto plano. También puedes copiar texto coincidente, líneas completas o rutas con números de línea." },
        { question: "¿Puedo limitar la búsqueda a ciertos tipos de archivo?", answer: "Sí. Añade extensiones como .md, .txt, .log, .swift o .docx. Si la lista está vacía, FindText PRO busca archivos de texto legibles que tus reglas no omitan." }
      ]
    },
    footer: { text: "Búsqueda local de archivos y reemplazo seguro para macOS.", back: "Volver arriba" }
  },
  fr: {
    meta: {
      title: "FindText PRO - Recherche locale de fichiers et remplacement sûr pour macOS",
      description: "FindText PRO est une app macOS locale d’abord pour rechercher dans le code, les journaux, les configurations et les documents avec le mode Questions, regex, historique, export et aperçus sûrs de remplacement en lot.",
      ogTitle: "FindText PRO - Recherche locale de fichiers et remplacement sûr pour macOS",
      ogDescription: "Recherchez dans vos fichiers locaux, vérifiez les correspondances exactes, prévisualisez les remplacements et gardez chaque requête sur votre Mac."
    },
    skipLink: "Aller au contenu",
    language: { label: "Langue", aria: "Choisir la langue" },
    header: {
      aria: "Navigation du site",
      brandAria: "Accueil FindText PRO",
      navAria: "Navigation principale",
      download: "Télécharger",
      nav: { guided: "Mode Questions", features: "Fonctions", screenshots: "Captures", privacy: "Confidentialité", pricing: "Prix" }
    },
    hero: {
      figureAria: "Interface de recherche FindText PRO",
      imageAlt: "FindText PRO Guided Search pose des questions pour une recherche locale de fichiers",
      eyebrow: "Recherche locale d’abord pour macOS",
      title: "Trouvez l’essentiel dans chaque fichier local.",
      lead: "FindText PRO donne à la recherche de fichiers quotidienne une interface Mac calme : utilisez le mode Questions si vous ne connaissez pas les regex, ou passez à des contrôles précis pour notes, Markdown, rapports, configs, journaux et code.",
      actionsAria: "Actions principales",
      primaryAction: "Télécharger sur le Mac App Store",
      secondaryAction: "Voir les captures produit",
      factsAria: "Informations produit",
      fact1Label: "Usage gratuit",
      fact1Value: "200 utilisations incluses",
      fact2Label: "Déblocage",
      fact2Value: "7 jours d'essai, puis US$1",
      fact3Label: "Confidentialité",
      fact3Value: "Fichiers locaux"
    },
    proof: {
      aria: "Flux principal",
      askLabel: "Demander",
      askText: "Le mode Questions vous guide en langage simple pour trouver du texte sans écrire d’expression régulière.",
      reviewLabel: "Examiner",
      reviewText: "Résultats groupés avec noms de fichiers, numéros de ligne, surlignages, historique et rapports exportables.",
      replaceLabel: "Remplacer",
      replaceText: "Aperçus sélectionnables pour les modifications en lot, avec vérification des fichiers et instantané d’annulation de session."
    },
    question: {
      eyebrow: "Mode Questions",
      title: "Un générateur de règles guidé pour celles et ceux qui ne pensent pas en regex.",
      text: "Le mode Questions n’est pas un chatbot et ne téléverse pas vos fichiers. Il transforme quelques réponses claires en recherche locale déterministe : quelles lignes inclure, quels traits de texte elles doivent contenir, où ces traits apparaissent et comment limiter et afficher les résultats.",
      flowAria: "Avantages du mode Questions",
      cards: [
        { index: "01", title: "Choisir l’intention", text: "Commencez par des lignes qui correspondent ou non, afin d’obtenir des recherches inverses sans mémoriser de drapeaux de ligne de commande." },
        { index: "02", title: "Décrire le texte", text: "Ajoutez des mots ou phrases requis, des phrases à exclure, puis indiquez si tous les traits sont nécessaires, si un seul suffit ou s’ils doivent être dans l’ordre." },
        { index: "03", title: "Ajouter la structure", text: "Affinez débuts, fins, indentation et structures courantes comme dates, e-mails, adresses IP, TODO ou termes d’erreur." },
        { index: "04", title: "Vérifier avant recherche", text: "Confirmez critères générés, portée, types de fichiers, dossiers ignorés, casse et format de sortie avant de lancer." }
      ]
    },
    guidedIntro: {
      eyebrow: "Fonctionnement",
      title: "Six questions ciblées deviennent une recherche précise.",
      text: "Le flux garde le modèle mental visible : chaque réponse devient une contrainte de recherche, et le rapport final montre la règle assemblée avant que FindText PRO analyse vos dossiers locaux.",
      tabsAria: "Étapes du mode Questions"
    },
    guided: {
      goal: { label: "Objectif", step: "Étape 1 sur 6", title: "Choisissez si la recherche doit inclure ou exclure les lignes correspondantes.", text: "La première décision devient une recherche positive ou inverse. Vous pouvez demander les lignes qui correspondent aux traits décrits, ou celles qui n’y correspondent pas, sans connaître les drapeaux grep ni la syntaxe regex.", alt: "Étape objectif de recherche du mode Questions de FindText PRO" },
      traits: { label: "Traits", step: "Étape 2 sur 6", title: "Décrivez ce que chaque ligne correspondante doit contenir.", text: "Ajoutez un ou plusieurs mots, phrases, identifiants ou fragments mémorisés. Décidez ensuite si tous les traits sont requis, si n’importe lequel suffit, ou s’ils doivent apparaître dans l’ordre.", alt: "Étape traits de texte du mode Questions de FindText PRO" },
      boundaries: { label: "Limites", step: "Étape 3 sur 6", title: "Limitez l’endroit où le texte apparaît dans une ligne.", text: "Les questions optionnelles sur le début et la fin de ligne transforment un indice vague en recherche ligne par ligne plus stricte. L’indentation de début peut rester autorisée pour code, journaux et listes Markdown.", alt: "Étape débuts et fins de ligne du mode Questions de FindText PRO" },
      structures: { label: "Structures", step: "Étape 4 sur 6", title: "Ajoutez des structures courantes sans écrire de motifs à la main.", text: "Les cases couvrent des formes réutilisables comme adresses IP, e-mails, dates, heures, nombres hexadécimaux, TODO, termes d’erreur, lettres anglaises, texte chinois, ports et nœuds de périphérique.", alt: "Étape structures courantes du mode Questions de FindText PRO" },
      options: { label: "Options", step: "Étape 5 sur 6", title: "Réglez portée, casse, types de fichiers et sortie.", text: "Les dernières options relient la règle générée au travail réel : casse exacte, dossiers ignorés, extensions incluses et résultats sous forme de lignes, de correspondances seules ou de chemins.", alt: "Étape options de recherche du mode Questions de FindText PRO" },
      report: { label: "Rapport", step: "Étape 6 sur 6", title: "Examinez la règle assemblée avant de lancer la recherche.", text: "Le rapport rend les critères auditables. Vous pouvez vérifier objectif, traits requis, casse, dossiers ignorés, types de fichiers et format avant le scan local.", alt: "Étape rapport des traits de texte du mode Questions de FindText PRO" }
    },
    features: {
      eyebrow: "Conçu pour le travail répété",
      title: "Assez simple pour les documents. Assez précis pour le code.",
      text: "FindText PRO aide les utilisateurs Mac ordinaires à chercher avec des questions et du texte simple, tout en donnant aux développeurs, rédacteurs, équipes QA et support les contrôles plus profonds attendus.",
      cards: [
        { index: "01", title: "Recherche guidée accessible", text: "Utilisez le mode Questions quand vous savez quoi trouver sans savoir l’exprimer en expression régulière." },
        { index: "02", title: "Résultats lisibles", text: "Voyez les correspondances groupées par fichier avec numéros de ligne et surlignages, puis repliez les groupes bruyants si un grand dossier produit des centaines de résultats." },
        { index: "03", title: "Mémoire de recherche réutilisable", text: "Enregistrez des recherches récurrentes pour documents mensuels, dossiers de projet, cas support ou audits de code, et rouvrez des instantanés sans relancer la recherche." },
        { index: "04", title: "Remplacement en lot plus sûr", text: "Prévisualisez chaque candidat par fichier et occurrence, sélectionnez seulement ce qui doit changer et évitez les erreurs lors de renommages sur de nombreux fichiers." },
        { index: "05", title: "Rapports partageables", text: "Copiez le texte correspondant, des lignes entières ou des emplacements avec numéros de ligne, puis exportez un rapport pour un collègue, un client ou votre futur vous." },
        { index: "06", title: "Portée propre", text: "Recherchez dans un ou plusieurs dossiers, incluez seulement certains types de fichiers, ignorez les dossiers encombrants et cherchez le texte .docx extrait quand macOS peut le lire." }
      ]
    },
    operator: {
      eyebrow: "Moins de changements de contexte",
      title: "Pensé pour le moment où une recherche rapide devient un vrai travail.",
      text: "FindText PRO fonctionne pour les recherches simples comme « où ai-je écrit ça ? » et pour les inspections plus profondes qui exigent des preuves. Il est particulièrement utile quand une recherche rapide devient nettoyage de documents, liste de changements, vérification de release, enquête support ou revue de code.",
      aria: "Forces de FindText PRO",
      metrics: [
        { title: "Local", text: "Aucun compte, index cloud ni téléversement distant de fichiers pour chercher." },
        { title: "Auditable", text: "Les instantanés d’historique capturent requête, portée et résultats." },
        { title: "Contrôlé", text: "Les aperçus de remplacement sont sélectionnables avant écriture." }
      ]
    },
    screenshots: {
      eyebrow: "Captures produit",
      title: "Un espace de travail natif Mac pour chercher, vérifier et remplacer.",
      text: "Ces vues proviennent d’un espace de démonstration anglais avec notes, documents, configs, journaux et code synthétiques. Le mode Questions est conçu pour les personnes qui ne connaissent pas les expressions régulières ; les regex restent disponibles pour les recherches avancées."
    },
    gallery: {
      aria: "Galerie de captures",
      plain: { label: "Texte simple", title: "Recherche de texte simple pour les consultations directes.", text: "Saisissez un mot, une phrase, un identifiant ou un message d’erreur, puis examinez les lignes groupées avec surlignages et contexte de fichier.", alt: "Résultats de recherche texte simple de FindText PRO avec correspondances surlignées" },
      regex: { label: "Préréglage regex", title: "Préréglages regex pour les motifs répétés.", text: "Utilisez expressions régulières et préréglages intégrés pour diagnostics, e-mails, IP, dates, marqueurs TODO et autres textes structurés.", alt: "Recherche regex FindText PRO avec préréglage de diagnostic" },
      export: { label: "Exporter les résultats", title: "Exportez les résultats en Markdown, CSV, JSON ou texte brut.", text: "Ouvrez le menu d’export dans la barre des résultats et choisissez le format adapté au partage, à l’archivage ou au traitement ultérieur.", alt: "Menu d’export FindText PRO affichant les formats Markdown, CSV, JSON et texte brut" },
      replace: { label: "Aperçu remplacement", title: "Aperçus de remplacement avant toute écriture.", text: "Examinez chaque candidat par fichier et occurrence, sélectionnez seulement les changements voulus et laissez FindText PRO vérifier le texte source avant application.", alt: "Aperçu de remplacement FindText PRO avec changements sélectionnables par fichier et occurrence" },
      history: { label: "Historique", title: "Instantanés d’historique pour les enquêtes terminées.", text: "Revenez à une requête précédente avec options originales, nombres de résultats, chemins et correspondances surlignées toujours intacts.", alt: "Historique de recherche FindText PRO montrant des résultats locaux précédents" }
    },
    privacy: {
      eyebrow: "Confidentialité et sécurité",
      title: "Vos fichiers sont traités sur votre Mac.",
      text: "FindText PRO est local d’abord par conception. Les fonctions actuelles ne collectent pas de données, ne suivent pas les utilisateurs, ne créent pas d’index cloud et ne téléversent pas le contenu des fichiers. L’accès aux dossiers est accordé par le sandbox macOS et stocké comme signets à portée de sécurité.",
      cards: [
        { title: "Aucune donnée collectée", text: "Le manifeste de confidentialité de l’app déclare aucune donnée collectée et aucun domaine de suivi." },
        { title: "Aperçu avant écriture", text: "Le remplacement en lot exige un aperçu, prend en charge la sélection par fichier et occurrence, et vérifie le texte original avant les changements." },
        { title: "État local, contrôle local", text: "Dossiers importés, signets, préréglages, historique et enregistrements de remplacement restent dans les données de l’app sur ce Mac et peuvent être supprimés." }
      ]
    },
    pricing: {
      eyebrow: "Prix simple",
      title: "Utilisez-le 200 fois gratuitement. Puis 7 jours d'essai et déblocage à vie pour US$1.",
      text: "Utilisez FindText PRO 200 fois sans rien acheter. Ensuite, démarrez un essai gratuit de 7 jours, puis payez une seule fois pour un accès permanent.",
      label: "Déblocage permanent",
      price: "US$1",
      panelText: "200 utilisations gratuites sans achat, puis essai gratuit de 7 jours, puis achat unique de US$1 pour un accès complet permanent.",
      bullets: [
        "200 utilisations gratuites sans achat requis",
        "Essai gratuit de 7 jours après le quota gratuit",
        "Achat unique de US$1 pour un accès complet permanent",
        "Aucun abonnement ni facturation automatique",
        "Recherche, remplacement, historique et export inclus"
      ],
      button: "Télécharger et commencer gratuitement"
    },
    faq: {
      eyebrow: "FAQ",
      title: "Quelques détails avant l’installation.",
      items: [
        { question: "FindText PRO téléverse-t-il mes fichiers ?", answer: "Non. La recherche s’exécute localement sur votre Mac. Les requêtes, chemins et contenus de fichiers ne sont pas envoyés à un serveur par les fonctions décrites ici." },
        { question: "Puis-je remplacer du texte dans plusieurs fichiers ?", answer: "Oui. Lancez d’abord une recherche, préparez un aperçu de remplacement, choisissez les fichiers ou occurrences à modifier, puis confirmez avant toute écriture." },
        { question: "Dois-je connaître les expressions régulières ?", answer: "Non. Le mode Questions est conçu pour les utilisateurs qui ne connaissent pas les regex. Il guide la recherche avec des invites simples, tandis que regex et préréglages restent disponibles pour les motifs avancés." },
        { question: "Quels formats d’export sont pris en charge ?", answer: "Les résultats peuvent être exportés en Markdown, CSV, JSON ou texte brut. Vous pouvez aussi copier le texte correspondant, des lignes entières ou des chemins avec numéros de ligne." },
        { question: "Puis-je limiter une recherche à certains types de fichiers ?", answer: "Oui. Ajoutez des extensions comme .md, .txt, .log, .swift ou .docx. Si la liste est vide, FindText PRO recherche les fichiers texte lisibles qui ne sont pas ignorés par vos règles." }
      ]
    },
    footer: { text: "Recherche locale de fichiers et remplacement sûr pour macOS.", back: "Retour en haut" }
  },
  it: {
    meta: {
      title: "FindText PRO - Ricerca locale nei file e sostituzione sicura per macOS",
      description: "FindText PRO è un’app macOS local-first per cercare in codice, log, configurazioni e documenti con Modalità Domande, regex, cronologia, esportazione e anteprime sicure di sostituzione in batch.",
      ogTitle: "FindText PRO - Ricerca locale nei file e sostituzione sicura per macOS",
      ogDescription: "Cerca nei file locali, controlla le corrispondenze esatte, visualizza le sostituzioni in anteprima e tieni ogni query sul tuo Mac."
    },
    skipLink: "Vai al contenuto",
    language: { label: "Lingua", aria: "Scegli lingua" },
    header: {
      aria: "Navigazione del sito",
      brandAria: "Home FindText PRO",
      navAria: "Navigazione principale",
      download: "Scarica",
      nav: { guided: "Modalità Domande", features: "Funzioni", screenshots: "Schermate", privacy: "Privacy", pricing: "Prezzi" }
    },
    hero: {
      figureAria: "Interfaccia di ricerca FindText PRO",
      imageAlt: "FindText PRO Guided Search pone domande per una ricerca locale nei file",
      eyebrow: "Ricerca local-first per macOS",
      title: "Trova ciò che conta in ogni file locale.",
      lead: "FindText PRO trasforma la ricerca quotidiana nei file in un’interfaccia Mac ordinata: usa la Modalità Domande se non conosci le regex, oppure passa a controlli precisi per note, Markdown, report, configurazioni, log e codice.",
      actionsAria: "Azioni principali",
      primaryAction: "Scarica dal Mac App Store",
      secondaryAction: "Vedi schermate del prodotto",
      factsAria: "Dati del prodotto",
      fact1Label: "Uso gratuito",
      fact1Value: "200 utilizzi inclusi",
      fact2Label: "Sblocco",
      fact2Value: "7 giorni di prova, poi US$1",
      fact3Label: "Privacy",
      fact3Value: "File sempre locali"
    },
    proof: {
      aria: "Flusso principale",
      askLabel: "Chiedi",
      askText: "La Modalità Domande ti guida in linguaggio semplice, così puoi trovare testo senza scrivere espressioni regolari.",
      reviewLabel: "Rivedi",
      reviewText: "Risultati raggruppati con nomi file, numeri di riga, evidenziazioni, cronologia e report esportabili.",
      replaceLabel: "Sostituisci",
      replaceText: "Anteprime selezionabili per modifiche in batch attente, con controlli sui cambiamenti dei file e snapshot di annullamento della sessione."
    },
    question: {
      eyebrow: "Modalità Domande",
      title: "Un generatore guidato di regole per chi non pensa in regex.",
      text: "La Modalità Domande non è un chatbot e non carica file. Trasforma poche risposte chiare in una ricerca locale deterministica: quali righe includere, quali tratti di testo devono contenere, dove appaiono e come restringere e mostrare i risultati.",
      flowAria: "Vantaggi della Modalità Domande",
      cards: [
        { index: "01", title: "Scegli l’intento", text: "Parti da righe che corrispondono o non corrispondono, così le ricerche inverse sono disponibili senza memorizzare flag da terminale." },
        { index: "02", title: "Descrivi il testo", text: "Aggiungi parole o frasi richieste, frasi da escludere e decidi se più tratti sono tutti necessari, se ne basta uno o se devono essere in ordine." },
        { index: "03", title: "Aggiungi struttura", text: "Raffina inizi, finali, indentazione e strutture comuni come date, email, indirizzi IP, TODO o termini di errore." },
        { index: "04", title: "Rivedi prima di cercare", text: "Conferma criteri generati, ambito, tipi di file, cartelle saltate, maiuscole/minuscole e formato di output prima di avviare." }
      ]
    },
    guidedIntro: {
      eyebrow: "Come funziona",
      title: "Sei domande mirate diventano una ricerca precisa.",
      text: "Il flusso mantiene visibile il modello mentale: ogni risposta diventa un vincolo di ricerca e il report finale mostra la regola assemblata prima che FindText PRO analizzi le cartelle locali.",
      tabsAria: "Passaggi della Modalità Domande"
    },
    guided: {
      goal: { label: "Obiettivo", step: "Passaggio 1 di 6", title: "Scegli se la ricerca deve includere o escludere le righe corrispondenti.", text: "La prima decisione diventa una ricerca positiva o inversa. Puoi chiedere righe che corrispondono ai tratti descritti, o righe che non corrispondono, senza flag grep o sintassi regex.", alt: "Passaggio obiettivo di ricerca nella Modalità Domande di FindText PRO" },
      traits: { label: "Tratti", step: "Passaggio 2 di 6", title: "Descrivi cosa deve contenere ogni riga corrispondente.", text: "Aggiungi una o più parole, frasi, identificatori o frammenti ricordati. Poi decidi se tutti i tratti sono richiesti, se ne basta uno o se devono apparire in ordine.", alt: "Passaggio tratti di testo nella Modalità Domande di FindText PRO" },
      boundaries: { label: "Confini", step: "Passaggio 3 di 6", title: "Limita dove appare il testo dentro una riga.", text: "Le domande opzionali su inizio e fine riga aiutano a trasformare un indizio vago in una ricerca per riga più stretta. L’indentazione iniziale può restare permessa per codice, log e liste Markdown.", alt: "Passaggio inizio e fine riga nella Modalità Domande di FindText PRO" },
      structures: { label: "Strutture", step: "Passaggio 4 di 6", title: "Aggiungi strutture comuni senza scrivere pattern a mano.", text: "Le caselle coprono forme riutilizzabili come indirizzi IP, email, date, orari, numeri esadecimali, TODO, termini di errore, lettere inglesi, testo cinese, porte e nodi dispositivo.", alt: "Passaggio strutture comuni nella Modalità Domande di FindText PRO" },
      options: { label: "Opzioni", step: "Passaggio 5 di 6", title: "Imposta ambito, maiuscole/minuscole, tipi di file e output.", text: "Le opzioni finali collegano la regola generata al lavoro pratico: maiuscole esatte, cartelle saltate, estensioni incluse e risultati come righe, sole corrispondenze o percorsi file.", alt: "Passaggio opzioni di ricerca nella Modalità Domande di FindText PRO" },
      report: { label: "Report", step: "Passaggio 6 di 6", title: "Rivedi la regola assemblata prima di cercare.", text: "Il report rende verificabili i criteri. Puoi controllare obiettivo, tratti richiesti, maiuscole/minuscole, cartelle saltate, tipi di file e formato prima della scansione locale.", alt: "Passaggio report dei tratti di testo nella Modalità Domande di FindText PRO" }
    },
    features: {
      eyebrow: "Creato per il lavoro ripetuto",
      title: "Abbastanza semplice per i documenti. Abbastanza preciso per il codice.",
      text: "FindText PRO aiuta gli utenti Mac di tutti i giorni a cercare con domande e testo semplice, offrendo a sviluppatori, writer, QA e supporto i controlli più profondi che si aspettano.",
      cards: [
        { index: "01", title: "Ricerca guidata amichevole", text: "Usa la Modalità Domande quando sai cosa vuoi trovare ma non sai esprimerlo come espressione regolare." },
        { index: "02", title: "Risultati leggibili", text: "Vedi corrispondenze raggruppate per file con numeri di riga ed evidenziazioni, poi comprimi gruppi rumorosi quando una cartella grande produce centinaia di risultati." },
        { index: "03", title: "Memoria di ricerca riutilizzabile", text: "Salva ricerche ricorrenti per documenti mensili, cartelle progetto, casi supporto o audit del codice e riapri snapshot senza rieseguire la ricerca." },
        { index: "04", title: "Sostituzione in batch più sicura", text: "Anteprima ogni candidato per file e occorrenza, seleziona solo ciò che deve cambiare ed evita modifiche accidentali rinominando termini in molti file." },
        { index: "05", title: "Report condivisibili", text: "Copia testo corrispondente, intere righe o posizioni file con numeri di riga, poi esporta un report per un collega, cliente o te stesso in futuro." },
        { index: "06", title: "Ambito pulito", text: "Cerca in una o più cartelle, includi solo tipi di file selezionati, salta directory confuse e cerca testo .docx estratto quando macOS può leggerlo." }
      ]
    },
    operator: {
      eyebrow: "Meno cambi di contesto",
      title: "Creato per quando una ricerca veloce diventa lavoro vero.",
      text: "FindText PRO funziona per semplici ricerche “dove l’ho scritto?” e per controlli più profondi che richiedono prove. È particolarmente utile quando una ricerca rapida diventa pulizia documenti, lista modifiche, controllo release, indagine supporto o code review.",
      aria: "Punti di forza di FindText PRO",
      metrics: [
        { title: "Locale", text: "Nessun account, indice cloud o caricamento remoto di file per cercare." },
        { title: "Verificabile", text: "Gli snapshot della cronologia catturano query, ambito e risultati." },
        { title: "Controllato", text: "Le anteprime di sostituzione sono selezionabili prima della scrittura." }
      ]
    },
    screenshots: {
      eyebrow: "Schermate del prodotto",
      title: "Uno spazio Mac nativo per cercare, rivedere e sostituire.",
      text: "Queste viste sono catturate da un workspace demo in inglese con note, documenti, config, log e codice sintetici. La Modalità Domande è progettata per utenti che non conoscono le espressioni regolari; regex resta disponibile per ricerche avanzate."
    },
    gallery: {
      aria: "Galleria schermate",
      plain: { label: "Testo semplice", title: "Ricerca di testo semplice per consultazioni dirette.", text: "Digita una parola, frase, identificatore o messaggio di errore, poi rivedi righe corrispondenti raggruppate con evidenziazioni e contesto file.", alt: "Risultati di ricerca testo semplice in FindText PRO con corrispondenze evidenziate" },
      regex: { label: "Preset regex", title: "Preset regex per pattern ricorrenti.", text: "Usa espressioni regolari e preset integrati per diagnostica, email, IP, date, marker TODO e altri testi strutturati.", alt: "Ricerca regex di FindText PRO con preset diagnostico" },
      export: { label: "Esporta risultati", title: "Esporta i risultati come Markdown, CSV, JSON o testo semplice.", text: "Apri il menu di esportazione dalla barra dei risultati e scegli il formato più adatto a condivisione, archivio o elaborazione successiva.", alt: "Menu di esportazione FindText PRO con formati Markdown, CSV, JSON e testo semplice" },
      replace: { label: "Anteprima sostituzione", title: "Anteprime di sostituzione prima di ogni scrittura.", text: "Rivedi ogni candidato per file e occorrenza, seleziona solo le modifiche previste e lascia che FindText PRO verifichi il testo sorgente prima di applicare.", alt: "Anteprima sostituzione di FindText PRO con modifiche selezionabili per file e occorrenza" },
      history: { label: "Cronologia", title: "Snapshot della cronologia per indagini concluse.", text: "Torna a una query precedente con opzioni originali, conteggi, percorsi e corrispondenze evidenziate ancora intatti.", alt: "Cronologia di ricerca FindText PRO con risultati locali precedenti" }
    },
    privacy: {
      eyebrow: "Privacy e sicurezza",
      title: "I tuoi file vengono elaborati sul tuo Mac.",
      text: "FindText PRO è local-first per progettazione. Le funzioni attuali non raccolgono dati, non tracciano utenti, non creano indici cloud e non caricano contenuti dei file. L’accesso alle cartelle avviene tramite sandbox macOS e viene salvato come bookmark con ambito di sicurezza.",
      cards: [
        { title: "Nessun dato raccolto", text: "Il manifesto privacy dell’app dichiara nessun dato raccolto e nessun dominio di tracciamento." },
        { title: "Anteprima prima di scrivere", text: "La sostituzione in batch richiede anteprima, supporta selezione per file e occorrenza e controlla il testo originale prima di applicare modifiche." },
        { title: "Stato locale, controllo locale", text: "Cartelle importate, bookmark, preset, cronologia e record di sostituzione restano nei dati app di questo Mac e possono essere rimossi dall’utente." }
      ]
    },
    pricing: {
      eyebrow: "Prezzo semplice",
      title: "Usalo 200 volte gratis. Poi prova 7 giorni e sblocca per sempre a US$1.",
      text: "Usa FindText PRO 200 volte senza acquistare nulla. Poi avvia una prova gratuita di 7 giorni e paga una sola volta per l'accesso permanente.",
      label: "Sblocco permanente",
      price: "US$1",
      panelText: "200 utilizzi gratuiti senza acquistare nulla, poi prova gratuita di 7 giorni e acquisto una tantum da US$1 per accesso completo permanente.",
      bullets: [
        "200 utilizzi gratuiti senza acquisto richiesto",
        "Prova gratuita di 7 giorni dopo il limite gratuito",
        "Acquisto una tantum da US$1 per accesso completo permanente",
        "Nessun abbonamento e nessun addebito automatico",
        "Ricerca, sostituzione, cronologia ed esportazione incluse"
      ],
      button: "Scarica e inizia gratis"
    },
    faq: {
      eyebrow: "FAQ",
      title: "Qualche dettaglio prima di installare.",
      items: [
        { question: "FindText PRO carica i miei file?", answer: "No. La ricerca viene eseguita localmente sul tuo Mac. Query, percorsi e contenuti dei file non vengono inviati a un server dalle funzioni descritte qui." },
        { question: "Posso sostituire testo in più file?", answer: "Sì. Esegui prima una ricerca, prepara un’anteprima di sostituzione, scegli file o occorrenze da modificare e conferma prima che venga scritto qualcosa." },
        { question: "Devo conoscere le espressioni regolari?", answer: "No. La Modalità Domande è creata per utenti che non conoscono regex. Guida la ricerca con prompt semplici, mentre regex e preset restano disponibili per pattern avanzati." },
        { question: "Quali formati di esportazione sono supportati?", answer: "I risultati possono essere esportati come Markdown, CSV, JSON o testo semplice. Puoi anche copiare testo corrispondente, righe intere o percorsi file con numeri di riga." },
        { question: "Posso limitare la ricerca ad alcuni tipi di file?", answer: "Sì. Aggiungi estensioni come .md, .txt, .log, .swift o .docx. Se l’elenco è vuoto, FindText PRO cerca nei file di testo leggibili non esclusi dalle tue regole." }
      ]
    },
    footer: { text: "Ricerca locale nei file e sostituzione sicura per macOS.", back: "Torna su" }
  },
  ja: {
    meta: {
      title: "FindText PRO - macOS のローカルファイル検索と安全な置換",
      description: "FindText PRO は、質問モード、正規表現、履歴、書き出し、安全な一括置換プレビューでコード、ログ、設定、ドキュメントを検索できるローカル優先の macOS アプリです。",
      ogTitle: "FindText PRO - macOS のローカルファイル検索と安全な置換",
      ogDescription: "ローカルファイルを検索し、正確な一致を確認し、置換をプレビューし、すべての検索を Mac 上に保ちます。"
    },
    skipLink: "本文へ移動",
    language: { label: "言語", aria: "言語を選択" },
    header: {
      aria: "サイトナビゲーション",
      brandAria: "FindText PRO ホーム",
      navAria: "メインナビゲーション",
      download: "ダウンロード",
      nav: { guided: "質問モード", features: "機能", screenshots: "スクリーンショット", privacy: "プライバシー", pricing: "価格" }
    },
    hero: {
      figureAria: "FindText PRO の検索インターフェイス",
      imageAlt: "FindText PRO Guided Search がローカルファイル検索の条件を質問している画面",
      eyebrow: "macOS のローカル優先検索",
      title: "すべてのローカルファイルから大事な内容を見つける。",
      lead: "FindText PRO は日常のファイル検索を落ち着いた Mac インターフェイスにします。正規表現がわからないときは質問モードを使い、ノート、Markdown、レポート、設定、ログ、コードには精密なコントロールへ切り替えられます。",
      actionsAria: "主な操作",
      primaryAction: "Mac App Store でダウンロード",
      secondaryAction: "製品画面を見る",
      factsAria: "製品情報",
      fact1Label: "無料利用",
      fact1Value: "200 回分を含む",
      fact2Label: "解除",
      fact2Value: "7 日間試用後 US$1",
      fact3Label: "プライバシー",
      fact3Value: "ファイルはローカル"
    },
    proof: {
      aria: "基本ワークフロー",
      askLabel: "質問",
      askText: "質問モードは自然な言葉で検索を案内するので、正規表現を書かずにテキストを見つけられます。",
      reviewLabel: "確認",
      reviewText: "ファイル名、行番号、ハイライト、履歴、書き出し可能なレポートを含むグループ化された結果。",
      replaceLabel: "置換",
      replaceText: "慎重な一括編集のための選択可能なプレビュー、ファイル変更チェック、セッションの取り消しスナップショット。"
    },
    question: {
      eyebrow: "質問モード",
      title: "正規表現で考えない人のためのガイド付きルールビルダー。",
      text: "質問モードはチャットボットではなく、ファイルをアップロードしません。いくつかの明確な回答を、どの行を含めるか、どんなテキスト特性を含むべきか、その特性がどこに現れるか、結果をどう絞り込んで表示するかという決定的なローカル検索に変換します。",
      flowAria: "質問モードの利点",
      cards: [
        { index: "01", title: "目的を選ぶ", text: "一致する行または一致しない行から始められるため、コマンドラインのフラグを覚えなくても逆検索できます。" },
        { index: "02", title: "テキストを説明", text: "含める語句、除外する語句を追加し、複数の特性をすべて必要にするか、どれか一つでよいか、順序を守るかを決めます。" },
        { index: "03", title: "構造を追加", text: "行頭、行末、インデント、日付、メール、IP アドレス、TODO、エラー語などの一般的な構造で絞り込みます。" },
        { index: "04", title: "検索前に確認", text: "生成された条件、範囲、ファイルタイプ、除外フォルダ、大文字小文字、出力形式を実行前に確認します。" }
      ]
    },
    guidedIntro: {
      eyebrow: "仕組み",
      title: "6 つの焦点を絞った質問が、1 つの精密検索になります。",
      text: "この流れでは検索モデルが常に見えます。各回答は検索条件になり、最終レポートは FindText PRO がローカルフォルダをスキャンする前に組み立てたルールを示します。",
      tabsAria: "質問モードの手順"
    },
    guided: {
      goal: { label: "目的", step: "ステップ 1 / 6", title: "一致する行を含めるか、除外するかを選びます。", text: "最初の選択は通常検索または逆検索になります。grep のフラグや正規表現の構文を知らなくても、指定した特性に一致する行、または一致しない行を探せます。", alt: "FindText PRO 質問モードの検索目的ステップ" },
      traits: { label: "特性", step: "ステップ 2 / 6", title: "各一致行に含まれるべき内容を説明します。", text: "単語、フレーズ、識別子、覚えている断片を 1 つ以上追加します。その後、すべて必要か、どれか 1 つでよいか、順序が必要かを決めます。", alt: "FindText PRO 質問モードのテキスト特性ステップ" },
      boundaries: { label: "境界", step: "ステップ 3 / 6", title: "テキストが行のどこに現れるかを限定します。", text: "任意の行頭・行末の質問で、曖昧な手がかりをより狭い行単位の検索にできます。コード、ログ、Markdown リストでは先頭インデントを許可したままにできます。", alt: "FindText PRO 質問モードの行頭と行末ステップ" },
      structures: { label: "構造", step: "ステップ 4 / 6", title: "手書きのパターンなしで一般的な構造を追加します。", text: "チェックボックスで IP アドレス、メール、日付、時刻、16 進数、TODO、エラー語、英字、中国語テキスト、ポート、デバイスノードなどの再利用可能な形を指定できます。", alt: "FindText PRO 質問モードの一般構造ステップ" },
      options: { label: "オプション", step: "ステップ 5 / 6", title: "範囲、大文字小文字、ファイルタイプ、出力形式を設定します。", text: "最後のオプションで生成ルールを実際の検索に接続します。大文字小文字の完全一致、除外フォルダ、対象拡張子、結果を一致行・一致部分のみ・ファイルパスのどれで表示するかを選びます。", alt: "FindText PRO 質問モードの検索オプションステップ" },
      report: { label: "レポート", step: "ステップ 6 / 6", title: "検索前に組み立てたルールを確認します。", text: "レポートにより生成条件を確認できます。ローカルスキャンを始める前に、目的、必須特性、大文字小文字、除外フォルダ、ファイルタイプ、結果形式をチェックできます。", alt: "FindText PRO 質問モードのテキスト特性レポートステップ" }
    },
    features: {
      eyebrow: "繰り返す作業のために",
      title: "ドキュメントには簡単に。コードには十分に正確に。",
      text: "FindText PRO は一般的な Mac ユーザーには質問とプレーンテキスト検索を、開発者、ライター、QA、サポート担当者には必要な深いコントロールを提供します。",
      cards: [
        { index: "01", title: "やさしいガイド検索", text: "何を探したいかはわかるけれど正規表現で表せないとき、質問モードを使えます。" },
        { index: "02", title: "読みやすい結果", text: "一致をファイルごとに行番号とハイライト付きで確認し、大きなフォルダで多数の結果が出たときは不要なグループを折りたためます。" },
        { index: "03", title: "再利用できる検索履歴", text: "月次文書、プロジェクトフォルダ、サポート案件、コード監査の検索を保存し、再実行せずに履歴スナップショットを開けます。" },
        { index: "04", title: "より安全な一括置換", text: "候補をファイルと出現箇所ごとにプレビューし、本当に変更するものだけを選んで、多数のファイルでの誤編集を避けられます。" },
        { index: "05", title: "共有できるレポート", text: "一致テキスト、行全体、行番号付きのファイル位置をコピーし、同僚、顧客、未来の自分のためにレポートを書き出せます。" },
        { index: "06", title: "整理された検索範囲", text: "1 つまたは複数のフォルダを検索し、指定したファイルタイプだけを含め、不要なディレクトリを飛ばし、macOS が読める場合は抽出された .docx テキストも検索できます。" }
      ]
    },
    operator: {
      eyebrow: "コンテキスト切替を減らす",
      title: "短い検索が本格的な作業になる瞬間のために。",
      text: "FindText PRO は「どこに書いたっけ？」という簡単な検索にも、証拠が必要な深い調査にも使えます。短い検索が文書整理、変更リスト、リリース確認、サポート調査、コードレビューに変わるとき特に役立ちます。",
      aria: "FindText PRO の強み",
      metrics: [
        { title: "ローカル", text: "検索にアカウント、クラウドインデックス、ファイルのリモートアップロードは不要です。" },
        { title: "検証可能", text: "履歴スナップショットはクエリ、範囲、結果を記録します。" },
        { title: "制御可能", text: "置換プレビューは書き込み前に選択できます。" }
      ]
    },
    screenshots: {
      eyebrow: "製品スクリーンショット",
      title: "検索、確認、置換のための Mac ネイティブなワークスペース。",
      text: "これらの画面は、合成されたノート、文書、設定、ログ、コードを含む英語のデモワークスペースから取得しています。質問モードは正規表現を知らないユーザー向けで、高度な検索には引き続き regex を使えます。"
    },
    gallery: {
      aria: "スクリーンショットギャラリー",
      plain: { label: "通常検索", title: "直接探すためのプレーンテキスト検索。", text: "単語、フレーズ、識別子、エラーメッセージを入力し、ハイライトとファイル文脈付きでグループ化された一致行を確認します。", alt: "FindText PRO のプレーンテキスト検索結果とハイライトされた一致" },
      regex: { label: "正規表現プリセット", title: "繰り返すパターンのための正規表現プリセット。", text: "正規表現と内蔵プリセットで、診断情報、メールアドレス、IP、日付、TODO マーカー、その他の構造化テキストを検索します。", alt: "診断プリセットを使った FindText PRO の正規表現検索" },
      export: { label: "結果を書き出し", title: "検索結果を Markdown、CSV、JSON、プレーンテキストで書き出し。", text: "結果ツールバーから書き出しメニューを開き、共有、保存、後処理に合う形式を選べます。", alt: "Markdown、CSV、JSON、プレーンテキスト形式を表示する FindText PRO の書き出しメニュー" },
      replace: { label: "置換プレビュー", title: "書き込む前に必ず置換をプレビュー。", text: "各候補をファイルと出現箇所ごとに確認し、意図した変更だけを選択して、適用前に FindText PRO が元テキストを検証します。", alt: "ファイルと出現箇所を選択できる FindText PRO の置換プレビュー" },
      history: { label: "履歴", title: "完了した調査のための履歴スナップショット。", text: "以前の検索に戻っても、元のオプション、結果数、ファイルパス、ハイライトされた一致が保持されています。", alt: "以前のローカル検索結果を表示する FindText PRO の検索履歴" }
    },
    privacy: {
      eyebrow: "プライバシーと安全性",
      title: "ファイルはあなたの Mac 上で処理されます。",
      text: "FindText PRO はローカル優先で設計されています。現在のアプリ機能はデータ収集、ユーザー追跡、クラウドインデックス作成、ファイル内容のアップロードを行いません。フォルダアクセスは macOS サンドボックスで許可され、セキュリティスコープ付きブックマークとして保存されます。",
      cards: [
        { title: "収集データなし", text: "アプリのプライバシーマニフェストは、収集データなし、追跡ドメインなしと宣言しています。" },
        { title: "書き込み前にプレビュー", text: "一括置換にはプレビューが必要で、ファイルと出現箇所ごとの選択をサポートし、変更前に元テキストを確認します。" },
        { title: "ローカル状態、ローカル制御", text: "インポートしたフォルダ、ブックマーク、プリセット、履歴、置換記録はこの Mac のアプリデータに残り、ユーザーが削除できます。" }
      ]
    },
    pricing: {
      eyebrow: "シンプルな価格",
      title: "購入なしで 200 回無料利用。その後 7 日間試用し、US$1 で永久解除。",
      text: "FindText PRO は何も購入しなくても 200 回無料で利用できます。その後 7 日間の無料試用を開始し、最後に一回購入で永久アクセスできます。",
      label: "永久解除",
      price: "US$1",
      panelText: "購入なしで 200 回無料利用、その後 7 日間無料試用、さらに US$1 の一回購入で永久フルアクセスできます。",
      bullets: [
        "購入不要で 200 回無料利用",
        "無料利用枠の後に 7 日間無料試用",
        "US$1 の一回購入で永久フルアクセス",
        "サブスクリプションなし、自動課金なし",
        "検索、置換、履歴、書き出し機能をすべて含む"
      ],
      button: "ダウンロードして無料で開始"
    },
    faq: {
      eyebrow: "FAQ",
      title: "インストール前のいくつかの確認。",
      items: [
        { question: "FindText PRO はファイルをアップロードしますか？", answer: "いいえ。検索は Mac 上でローカルに実行されます。ここで説明している機能では、クエリ、ファイルパス、ファイル内容はサーバーへ送信されません。" },
        { question: "複数ファイルのテキストを置換できますか？", answer: "はい。まず検索を実行し、置換プレビューを作成し、変更するファイルまたは出現箇所を選んで、確認後にのみ書き込みます。" },
        { question: "正規表現を知っている必要がありますか？", answer: "いいえ。質問モードは正規表現を知らないユーザー向けです。通常の質問で検索を案内し、高度なパターン検索が必要なときは正規表現とプリセットも使えます。" },
        { question: "対応している書き出し形式は？", answer: "検索結果は Markdown、CSV、JSON、プレーンテキストとして書き出せます。一致テキスト、行全体、行番号付きファイルパスもコピーできます。" },
        { question: "特定のファイルタイプだけを検索できますか？", answer: "はい。.md、.txt、.log、.swift、.docx などの拡張子を追加できます。リストが空の場合、FindText PRO はルールで除外されていない読み取り可能なテキストファイルを検索します。" }
      ]
    },
    footer: { text: "macOS のローカルファイル検索と安全な置換。", back: "トップへ戻る" }
  },
  ru: {
    meta: {
      title: "FindText PRO - Локальный поиск по файлам и безопасная замена для macOS",
      description: "FindText PRO — локальное приложение macOS для поиска по коду, логам, конфигам и документам с режимом вопросов, regex, историей, экспортом и безопасными предпросмотрами пакетной замены.",
      ogTitle: "FindText PRO - Локальный поиск по файлам и безопасная замена для macOS",
      ogDescription: "Ищите по локальным файлам, проверяйте точные совпадения, просматривайте замены заранее и оставляйте каждый запрос на своем Mac."
    },
    skipLink: "Перейти к содержимому",
    language: { label: "Язык", aria: "Выбрать язык" },
    header: {
      aria: "Навигация сайта",
      brandAria: "Главная FindText PRO",
      navAria: "Основная навигация",
      download: "Скачать",
      nav: { guided: "Режим вопросов", features: "Функции", screenshots: "Скриншоты", privacy: "Приватность", pricing: "Цена" }
    },
    hero: {
      figureAria: "Интерфейс поиска FindText PRO",
      imageAlt: "FindText PRO Guided Search задает вопросы для локального поиска по файлам",
      eyebrow: "Локальный поиск для macOS",
      title: "Находите важное в каждом локальном файле.",
      lead: "FindText PRO превращает повседневный поиск по файлам в спокойный Mac-интерфейс: используйте режим вопросов, если не знаете regex, или переходите к точным настройкам для заметок, Markdown, отчетов, конфигов, логов и кода.",
      actionsAria: "Основные действия",
      primaryAction: "Скачать в Mac App Store",
      secondaryAction: "Посмотреть скриншоты",
      factsAria: "Сведения о продукте",
      fact1Label: "Бесплатно",
      fact1Value: "200 использований включено",
      fact2Label: "Разблокировка",
      fact2Value: "7 дней, затем US$1",
      fact3Label: "Приватность",
      fact3Value: "Файлы остаются локально"
    },
    proof: {
      aria: "Основной процесс",
      askLabel: "Спросить",
      askText: "Режим вопросов ведет поиск простым языком, чтобы вы находили текст без написания регулярных выражений.",
      reviewLabel: "Проверить",
      reviewText: "Результаты сгруппированы по файлам, с именами, номерами строк, подсветкой, историей и экспортируемыми отчетами.",
      replaceLabel: "Заменить",
      replaceText: "Выбираемые предпросмотры для аккуратных пакетных правок, с проверками изменений файлов и снимком отмены для сессии."
    },
    question: {
      eyebrow: "Режим вопросов",
      title: "Пошаговый конструктор правил для тех, кто не мыслит regex.",
      text: "Режим вопросов — не чат-бот и не загружает файлы. Он превращает несколько ясных ответов в детерминированный локальный поиск: какие строки включать, какие признаки текста они должны содержать, где эти признаки появляются и как ограничивать и показывать результаты.",
      flowAria: "Преимущества режима вопросов",
      cards: [
        { index: "01", title: "Выберите цель", text: "Начните со строк, которые совпадают или не совпадают, чтобы обратный поиск был доступен без запоминания флагов командной строки." },
        { index: "02", title: "Опишите текст", text: "Добавьте слова или фразы, которые должны присутствовать, фразы для исключения и выберите: нужны все признаки, любой один или порядок." },
        { index: "03", title: "Добавьте структуру", text: "Уточните начало, конец, отступы и частые структуры вроде дат, email, IP-адресов, TODO или слов ошибок." },
        { index: "04", title: "Проверьте перед поиском", text: "Подтвердите критерии, область, типы файлов, пропускаемые папки, регистр и формат вывода перед запуском." }
      ]
    },
    guidedIntro: {
      eyebrow: "Как это работает",
      title: "Шесть точных вопросов становятся одним точным поиском.",
      text: "Процесс держит модель поиска видимой: каждый ответ становится ограничением, а итоговый отчет показывает собранное правило до того, как FindText PRO просканирует локальные папки.",
      tabsAria: "Шаги режима вопросов"
    },
    guided: {
      goal: { label: "Цель", step: "Шаг 1 из 6", title: "Выберите, должен ли поиск включать или исключать совпадающие строки.", text: "Первое решение превращается в прямой или обратный поиск. Можно искать строки с описанными признаками или строки без них, не зная флагов grep и синтаксиса regex.", alt: "Шаг цели поиска в режиме вопросов FindText PRO" },
      traits: { label: "Признаки", step: "Шаг 2 из 6", title: "Опишите, что должна содержать каждая совпадающая строка.", text: "Добавьте одно или несколько слов, фраз, идентификаторов или запомненных фрагментов. Затем решите, нужны ли все признаки, достаточно любого одного или важен порядок.", alt: "Шаг признаков текста в режиме вопросов FindText PRO" },
      boundaries: { label: "Границы", step: "Шаг 3 из 6", title: "Ограничьте, где текст появляется внутри строки.", text: "Необязательные вопросы о начале и конце строки помогают превратить смутную подсказку в более точный построчный поиск. Начальные отступы можно оставить разрешенными для кода, логов и списков Markdown.", alt: "Шаг начала и конца строки в режиме вопросов FindText PRO" },
      structures: { label: "Структуры", step: "Шаг 4 из 6", title: "Добавьте частые структуры без ручного написания шаблонов.", text: "Флажки покрывают повторяемые формы текста: IP-адреса, email, даты, время, hex-числа, TODO, слова ошибок, английские буквы, китайский текст, порты и узлы устройств.", alt: "Шаг частых структур в режиме вопросов FindText PRO" },
      options: { label: "Опции", step: "Шаг 5 из 6", title: "Задайте область, регистр, типы файлов и формат вывода.", text: "Финальные опции связывают созданное правило с практическим поиском: точный регистр, пропускаемые папки, включенные расширения и показ строк, только совпадений или путей файлов.", alt: "Шаг параметров поиска в режиме вопросов FindText PRO" },
      report: { label: "Отчет", step: "Шаг 6 из 6", title: "Проверьте собранное правило перед запуском поиска.", text: "Отчет делает критерии проверяемыми. Перед локальным сканированием можно проверить цель, обязательные признаки, режим регистра, пропускаемые папки, типы файлов и формат результата.", alt: "Шаг отчета о признаках текста в режиме вопросов FindText PRO" }
    },
    features: {
      eyebrow: "Для повторяющейся работы",
      title: "Достаточно просто для документов. Достаточно точно для кода.",
      text: "FindText PRO помогает обычным пользователям Mac искать через вопросы и обычный текст, а разработчикам, авторам, QA и поддержке дает более глубокие настройки.",
      cards: [
        { index: "01", title: "Дружелюбный пошаговый поиск", text: "Используйте режим вопросов, когда знаете, что хотите найти, но не знаете, как выразить это регулярным выражением." },
        { index: "02", title: "Читаемые результаты", text: "Смотрите совпадения по файлам с номерами строк и подсветкой, а шумные группы сворачивайте, если большая папка дает сотни результатов." },
        { index: "03", title: "Повторно используемая память поиска", text: "Сохраняйте регулярные поиски для месячных документов, папок проекта, обращений поддержки или аудита кода и открывайте снимки истории без повторного запуска." },
        { index: "04", title: "Более безопасная пакетная замена", text: "Просматривайте каждый кандидат по файлу и вхождению, выбирайте только нужные изменения и избегайте случайных правок при переименовании во многих файлах." },
        { index: "05", title: "Отчеты, которыми можно делиться", text: "Копируйте совпавший текст, целые строки или позиции файлов с номерами строк и экспортируйте отчет для коллеги, клиента или себя в будущем." },
        { index: "06", title: "Чистая область поиска", text: "Ищите в одной или нескольких папках, включайте только выбранные типы файлов, пропускайте шумные директории и ищите извлеченный .docx-текст, когда macOS может его прочитать." }
      ]
    },
    operator: {
      eyebrow: "Меньше переключения контекста",
      title: "Для момента, когда быстрый поиск становится настоящей работой.",
      text: "FindText PRO подходит для простых поисков вроде «где я это писал?» и для более глубоких проверок, которым нужны доказательства. Особенно полезен, когда быстрый поиск превращается в чистку документов, список изменений, проверку релиза, расследование поддержки или code review.",
      aria: "Сильные стороны FindText PRO",
      metrics: [
        { title: "Локально", text: "Без аккаунта, облачного индекса и удаленной загрузки файлов для поиска." },
        { title: "Проверяемо", text: "Снимки истории сохраняют запрос, область и результаты." },
        { title: "Под контролем", text: "Предпросмотры замены выбираются до записи." }
      ]
    },
    screenshots: {
      eyebrow: "Скриншоты продукта",
      title: "Нативное Mac-пространство для поиска, проверки и замены.",
      text: "Эти виды сняты из английского демо-пространства с синтетическими заметками, документами, конфигами, логами и кодом. Режим вопросов создан для пользователей, которые не знают регулярные выражения; regex остается доступным для продвинутого поиска."
    },
    gallery: {
      aria: "Галерея скриншотов",
      plain: { label: "Обычный поиск", title: "Поиск обычного текста для прямых запросов.", text: "Введите слово, фразу, идентификатор или сообщение об ошибке и просмотрите сгруппированные строки с подсветкой и контекстом файла.", alt: "Результаты поиска обычного текста FindText PRO с подсвеченными совпадениями" },
      regex: { label: "Regex-пресет", title: "Regex-пресеты для повторяющихся шаблонов.", text: "Используйте регулярные выражения и встроенные пресеты для диагностики, email, IP, дат, TODO-маркеров и другого структурированного текста.", alt: "Regex-поиск FindText PRO с диагностическим пресетом" },
      export: { label: "Экспорт результатов", title: "Экспортируйте результаты как Markdown, CSV, JSON или обычный текст.", text: "Откройте меню экспорта на панели результатов и выберите формат для отправки, архивации или дальнейшей обработки.", alt: "Меню экспорта FindText PRO с форматами Markdown, CSV, JSON и обычный текст" },
      replace: { label: "Предпросмотр замены", title: "Предпросмотр замен перед любой записью.", text: "Проверяйте каждый кандидат по файлу и вхождению, выбирайте только нужные изменения и дайте FindText PRO проверить исходный текст перед применением.", alt: "Предпросмотр замены FindText PRO с выбираемыми изменениями по файлам и вхождениям" },
      history: { label: "История", title: "Снимки истории для завершенных расследований.", text: "Возвращайтесь к прежнему запросу с исходными настройками, числами результатов, путями файлов и подсвеченными совпадениями.", alt: "История поиска FindText PRO с предыдущими локальными результатами" }
    },
    privacy: {
      eyebrow: "Приватность и безопасность",
      title: "Ваши файлы обрабатываются на вашем Mac.",
      text: "FindText PRO спроектирован как локальный инструмент. Текущие функции не собирают данные, не отслеживают пользователей, не создают облачные индексы и не загружают содержимое файлов. Доступ к папкам выдается через sandbox macOS и хранится как security-scoped bookmarks.",
      cards: [
        { title: "Нет собираемых данных", text: "Манифест приватности приложения заявляет отсутствие собираемых данных и доменов отслеживания." },
        { title: "Предпросмотр перед записью", text: "Пакетная замена требует предпросмотра, поддерживает выбор по файлам и вхождениям и проверяет исходный текст перед изменениями." },
        { title: "Локальное состояние, локальный контроль", text: "Импортированные папки, закладки, пресеты, история и записи замен остаются в данных приложения на этом Mac и могут быть удалены пользователем." }
      ]
    },
    pricing: {
      eyebrow: "Простая цена",
      title: "200 использований бесплатно. Затем 7 дней пробного периода и постоянная разблокировка за US$1.",
      text: "Используйте FindText PRO 200 раз без покупки. Затем начните 7-дневный бесплатный пробный период и заплатите один раз за постоянный доступ.",
      label: "Постоянная разблокировка",
      price: "US$1",
      panelText: "200 бесплатных использований без покупки, затем 7-дневный пробный период и разовая покупка за US$1 для постоянного полного доступа.",
      bullets: [
        "200 бесплатных использований без необходимости покупки",
        "7-дневный бесплатный пробный период после бесплатного лимита",
        "Разовая покупка за US$1 для постоянного полного доступа",
        "Без подписки и автоматических списаний",
        "Поиск, замена, история и экспорт включены"
      ],
      button: "Скачать и начать бесплатно"
    },
    faq: {
      eyebrow: "FAQ",
      title: "Несколько деталей перед установкой.",
      items: [
        { question: "FindText PRO загружает мои файлы?", answer: "Нет. Поиск выполняется локально на вашем Mac. Запросы, пути файлов и содержимое файлов не отправляются на сервер функциями, описанными здесь." },
        { question: "Можно заменить текст в нескольких файлах?", answer: "Да. Сначала выполните поиск, подготовьте предпросмотр замены, выберите файлы или вхождения и подтвердите перед записью." },
        { question: "Нужно знать регулярные выражения?", answer: "Нет. Режим вопросов создан для пользователей, которые не знают regex. Он ведет поиск простыми подсказками, а regex и пресеты остаются доступными для сложного сопоставления." },
        { question: "Какие форматы экспорта поддерживаются?", answer: "Результаты можно экспортировать как Markdown, CSV, JSON или обычный текст. Также можно копировать совпавший текст, целые строки или пути с номерами строк." },
        { question: "Можно ограничить поиск определенными типами файлов?", answer: "Да. Добавьте расширения вроде .md, .txt, .log, .swift или .docx. Если список пуст, FindText PRO ищет читаемые текстовые файлы, которые не пропущены правилами." }
      ]
    },
    footer: { text: "Локальный поиск по файлам и безопасная замена для macOS.", back: "Наверх" }
  }
};

let currentLocale = DEFAULT_LOCALE;
let currentGalleryShot = "plain";
let currentGuidedShot = "goal";

function getPath(source, path) {
  return path.split(".").reduce((value, part) => (value == null ? undefined : value[part]), source);
}

function text(path, locale = currentLocale) {
  const value = getPath(translations[locale], path);
  if (typeof value === "string") return value;

  const fallback = getPath(translations[DEFAULT_LOCALE], path);
  return typeof fallback === "string" ? fallback : "";
}

function normalizeLocaleTag(tag) {
  if (!tag) return null;

  const normalized = String(tag).trim().replace("_", "-");
  const lower = normalized.toLowerCase();
  if (!lower) return null;

  if (lower === "zh" || lower === "zh-cn" || lower === "zh-sg" || lower === "zh-my" || lower.startsWith("zh-hans")) {
    return "zh-Hans";
  }

  if (lower === "zh-tw" || lower === "zh-hk" || lower === "zh-mo" || lower.startsWith("zh-hant")) {
    return "zh-Hant";
  }

  const exact = SUPPORTED_LOCALES.find((locale) => locale.toLowerCase() === lower);
  if (exact) return exact;

  const primary = lower.split("-")[0];
  return SUPPORTED_LOCALES.includes(primary) ? primary : null;
}

function getStoredLocale() {
  try {
    return normalizeLocaleTag(localStorage.getItem(STORAGE_KEY));
  } catch {
    return null;
  }
}

function storeLocale(locale) {
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Ignore storage failures in private browsing or locked-down browsers.
  }
}

function getUrlLocale() {
  return normalizeLocaleTag(new URL(window.location.href).searchParams.get("lang"));
}

function getBrowserLocale() {
  const candidates = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
  for (const candidate of candidates) {
    const locale = normalizeLocaleTag(candidate);
    if (locale) return locale;
  }
  return null;
}

function resolveInitialLocale() {
  return getUrlLocale() || getStoredLocale() || getBrowserLocale() || DEFAULT_LOCALE;
}

function updateUrlLocale(locale) {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", locale);
  window.history.replaceState({}, "", url);
}

function updateMeta(locale) {
  const meta = translations[locale].meta || translations[DEFAULT_LOCALE].meta;
  document.title = meta.title;
  document.documentElement.lang = locale;

  const description = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');

  if (description) description.content = meta.description;
  if (ogTitle) ogTitle.content = meta.ogTitle;
  if (ogDescription) ogDescription.content = meta.ogDescription;
}

function applyStaticTranslations(locale) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = text(element.dataset.i18n, locale);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", text(element.dataset.i18nAria, locale));
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.alt = text(element.dataset.i18nAlt, locale);
  });
}

function wireStoreLinks() {
  document.querySelectorAll(".app-store-link").forEach((link) => {
    link.href = APP_STORE_URL;
  });
}

function getGalleryItem(shot) {
  const safeShot = GALLERY_SHOTS.includes(shot) ? shot : "plain";
  return {
    ...galleryAssets[safeShot],
    ...getPath(translations[currentLocale], `gallery.${safeShot}`)
  };
}

function updateGallery(shot) {
  currentGalleryShot = GALLERY_SHOTS.includes(shot) ? shot : "plain";
  const item = getGalleryItem(currentGalleryShot);
  const gallery = document.querySelector("[data-gallery]");
  if (!gallery) return;

  const title = gallery.querySelector("[data-gallery-title]");
  const copy = gallery.querySelector("[data-gallery-text]");
  const image = gallery.querySelector("[data-gallery-image]");

  if (title) title.textContent = item.title;
  if (copy) copy.textContent = item.text;
  if (image) {
    image.src = item.image;
    image.alt = item.alt;
    image.width = item.width;
    image.height = item.height;
  }

  gallery.querySelectorAll(".gallery-tab").forEach((tab) => {
    const isActive = tab.dataset.shot === currentGalleryShot;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
}

function getGuidedItem(shot) {
  const safeShot = GUIDED_SHOTS.includes(shot) ? shot : "goal";
  return {
    ...guidedAssets[safeShot],
    ...getPath(translations[currentLocale], `guided.${safeShot}`)
  };
}

function updateGuidedGallery(shot) {
  currentGuidedShot = GUIDED_SHOTS.includes(shot) ? shot : "goal";
  const item = getGuidedItem(currentGuidedShot);
  const gallery = document.querySelector("[data-guided-gallery]");
  if (!gallery) return;

  const step = gallery.querySelector("[data-guided-step]");
  const title = gallery.querySelector("[data-guided-title]");
  const copy = gallery.querySelector("[data-guided-text]");
  const image = gallery.querySelector("[data-guided-image]");

  if (step) step.textContent = item.step;
  if (title) title.textContent = item.title;
  if (copy) copy.textContent = item.text;
  if (image) {
    image.src = item.image;
    image.alt = item.alt;
    image.width = item.width;
    image.height = item.height;
  }

  gallery.querySelectorAll(".guided-tab").forEach((tab) => {
    const isActive = tab.dataset.guidedShot === currentGuidedShot;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
}

function applyLocale(locale, { persist = false, updateUrl = false } = {}) {
  currentLocale = locale;
  updateMeta(locale);
  applyStaticTranslations(locale);
  updateGallery(currentGalleryShot);
  updateGuidedGallery(currentGuidedShot);

  const picker = document.getElementById("language-select");
  if (picker) picker.value = locale;

  if (persist) storeLocale(locale);
  if (updateUrl) updateUrlLocale(locale);
}

function wireLanguagePicker() {
  const picker = document.getElementById("language-select");
  if (!picker) return;

  picker.addEventListener("change", () => {
    const locale = normalizeLocaleTag(picker.value) || DEFAULT_LOCALE;
    applyLocale(locale, { persist: true, updateUrl: true });
  });
}

document.querySelectorAll(".gallery-tab").forEach((tab) => {
  tab.addEventListener("click", () => updateGallery(tab.dataset.shot));
});

document.querySelectorAll(".guided-tab").forEach((tab) => {
  tab.addEventListener("click", () => updateGuidedGallery(tab.dataset.guidedShot));
});

wireStoreLinks();
wireLanguagePicker();
applyLocale(resolveInitialLocale());
