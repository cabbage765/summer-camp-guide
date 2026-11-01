// 各國夏令營資料。費用單位：新台幣「萬元」，均為粗估區間，實際以各營隊公告為準。
// weekly：每週費用（含食宿、課程，不含機票）；flight：台灣來回機票
// scores：language 語言 / fun 玩樂體驗 / academic 學術，1–5 分
// soloAge：建議可獨自參加住宿營的最低年齡；minLevel：0 初學、1 基礎、2 中等、3 流利

const COUNTRIES = [
  {
    id: "us", name: "美國", en: "United States", flag: "🇺🇸", group: "english",
    scene: "canyon",
    nature: { icons: ["🦅", "🌵"], caption: "白頭海鵰．大峽谷" },
    tagline: "選擇最多，傳統戶外營到名校學術營都有",
    features: "營隊數量與種類全球最多。傳統住宿營（Sleepaway Camp）多在湖邊或森林，划船、露營、營火是日常；大學辦的學術營則有 STEM、寫作、辯論、領導力等主題。",
    suitFor: "想體驗美式文化、活動量大，或對特定學科有濃厚興趣的孩子",
    campTypes: ["傳統住宿營（湖邊、森林）", "名校學術營（STEM、寫作、辯論）", "主題營（程式、太空、運動、藝術）", "ESL 語言營"],
    weekly: [5, 10], flight: [3, 5],
    flightTime: "西岸約 11–12 小時、東岸約 15 小時以上（多需轉機）",
    timeDiff: "慢 12–15 小時",
    climate: "7–8 月為夏季，多數地區 25–35°C，各地差異大",
    visa: "台灣護照適用免簽計畫，需事先線上申請 ESTA。短期營隊（不取得學分）通常可用 ESTA 入境，取得學分的課程可能需要學生簽證，請先向營隊確認。",
    soloAge: 10, minLevel: 1,
    scores: { language: 4, fun: 5, academic: 5 },
    parentFriendly: false,
    asianRatio: "名校學術營亞洲學生比例常偏高，傳統營則以美國本地孩子為主",
    channels: [
      { name: "美國營隊協會 ACA", desc: "可依地區、年齡、主題搜尋經過認證的營隊，認證代表通過安全與營運標準。", url: "https://www.acacamps.org/" },
      { name: "大學官網直接報名", desc: "名校學術營通常在大學 Summer Program 頁面公告，多數 1–3 月開放申請，部分要求成績單、推薦信或作文。" },
      { name: "台灣遊學代辦", desc: "協助選營、報名、機票與送機，部分有領隊陪同團體出發，適合第一次出國。" },
      { name: "ESTA 官方申請網站", desc: "請只用官方網站申請，避免付費給代辦網站。", url: "https://esta.cbp.dhs.gov/" }
    ],
    tips: ["熱門營隊常在前一年秋冬就額滿", "美國醫療費用很高，務必確認保險涵蓋範圍", "注意營隊是否提供機場接送（Unaccompanied Minor 服務）"]
  },
  {
    id: "uk", name: "英國", en: "United Kingdom", flag: "🇬🇧", group: "english",
    scene: "hills",
    nature: { icons: ["🦌", "🌹"], caption: "紅鹿．英格蘭丘陵與玫瑰" },
    tagline: "寄宿學校與牛津劍橋，學術氛圍濃厚",
    features: "營隊多在寄宿學校或牛津、劍橋等大學城舉辦，上午上課、下午活動、週末出遊（倫敦、古堡、巨石陣）的安排很常見，管理嚴謹。",
    suitFor: "重視學術氛圍、想學英式英語、喜歡歷史文化參訪的家庭",
    campTypes: ["寄宿學校語言營", "牛津、劍橋學術營", "英語加運動營（足球、騎馬）", "升學準備營"],
    weekly: [5, 9], flight: [3, 5],
    flightTime: "約 14–16 小時（有直飛）",
    timeDiff: "夏令時間慢 7 小時",
    climate: "涼爽多變，約 15–23°C，要帶外套與雨具",
    visa: "台灣護照短期停留免簽，但須事先申請電子旅行許可 ETA。6 個月以下的短期課程可用訪客身分就讀。",
    soloAge: 8, minLevel: 0,
    scores: { language: 5, fun: 3, academic: 5 },
    parentFriendly: false,
    asianRatio: "同學多來自歐洲、中東與亞洲，國籍分布較平均",
    channels: [
      { name: "English UK", desc: "英國語言學校協會，可查詢經認證的青少年課程。", url: "https://www.englishuk.com/" },
      { name: "British Council 認證查詢", desc: "選擇有 British Council 認證的學校，教學與照顧品質較有保障。", url: "https://www.britishcouncil.org/education/accreditation" },
      { name: "學校或主辦機構官網報名", desc: "多數可直接線上報名並刷卡付訂金。" },
      { name: "英國 ETA 官方申請", desc: "只用官方網站或官方 App 申請。", url: "https://www.gov.uk/eta" }
    ],
    tips: ["留意是否為「Closed Campus」（全程有人監護）", "倫敦週邊住宿營費用最高", "8 歲起就有招生，但建議 10 歲以上較能適應"]
  },
  {
    id: "ca", name: "加拿大", en: "Canada", flag: "🇨🇦", group: "english",
    scene: "lake",
    nature: { icons: ["🍁", "🦫"], caption: "楓葉．河狸．洛磯山脈湖泊" },
    tagline: "安全友善、自然環境好，費用比美國親民",
    features: "多元文化社會，對外國學生友善。溫哥華、多倫多、維多利亞是熱門城市，常結合湖泊、國家公園等戶外活動，口音接近美式英語。",
    suitFor: "第一次出國、家長比較在意安全，又想要英語環境的家庭",
    campTypes: ["語言學校青少年營", "寄宿家庭加課程", "戶外探險營", "公私立學校夏季課程"],
    weekly: [4, 6.5], flight: [3, 4.5],
    flightTime: "溫哥華約 11 小時直飛",
    timeDiff: "溫哥華慢 15 小時、多倫多慢 12 小時",
    climate: "舒適，約 20–27°C，早晚溫差大",
    visa: "台灣護照（有身分證字號）免簽，需事先申請 eTA。6 個月以下短期課程不需學生簽證。",
    soloAge: 10, minLevel: 0,
    scores: { language: 4, fun: 4, academic: 3 },
    parentFriendly: true,
    asianRatio: "溫哥華華人多，若想多說英文可考慮東岸或較小城市",
    channels: [
      { name: "Languages Canada", desc: "加拿大語言教育協會，可查詢經認證的語言學校。", url: "https://www.languagescanada.ca/" },
      { name: "教育局國際學生課程", desc: "部分學區辦有國際學生夏季課程，費用較透明。" },
      { name: "台灣遊學代辦", desc: "常見有領隊陪同的團體梯次。" },
      { name: "加拿大 eTA 官方申請", desc: "只用加拿大政府網站申請。", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html" }
    ],
    tips: ["溫哥華直飛方便，適合第一次出國", "寄宿家庭品質差異大，可要求看家庭介紹", "有親子遊學方案，家長可同行"]
  },
  {
    id: "au", name: "澳洲", en: "Australia", flag: "🇦🇺", group: "english",
    scene: "outback",
    nature: { icons: ["🦘", "🐨"], caption: "袋鼠．無尾熊．烏魯魯紅岩" },
    tagline: "南半球冬季，以插班遊學、寄宿家庭為主",
    features: "台灣暑假時澳洲是冬天、學校正常上課，常見形式是到當地中小學「插班」，和澳洲學生一起上課，再加上動物園、海岸等週末活動。",
    suitFor: "想真正融入當地學校生活、英文有一定基礎的孩子",
    campTypes: ["中小學插班遊學", "寄宿家庭加語言課", "親子遊學"],
    weekly: [3, 5], flight: [2.5, 4],
    flightTime: "布里斯本、雪梨約 9 小時",
    timeDiff: "快 2 小時（幾乎沒有時差）",
    climate: "冬季，雪梨約 8–18°C，布里斯本較溫暖",
    visa: "台灣護照需申請 ETA（用官方 Australian ETA App），3 個月以內的短期課程可就讀。",
    soloAge: 10, minLevel: 1,
    scores: { language: 5, fun: 3, academic: 3 },
    parentFriendly: true,
    asianRatio: "插班時同學多是當地學生，英語環境好",
    channels: [
      { name: "Study Australia", desc: "澳洲政府官方留學資訊網站。", url: "https://www.studyaustralia.gov.au/" },
      { name: "English Australia", desc: "澳洲英語教育機構協會，可查詢認證語言學校。", url: "https://www.englishaustralia.com.au/" },
      { name: "州政府教育廳國際學生計畫", desc: "昆士蘭、新南威爾斯等州有公立學校短期插班方案。" },
      { name: "澳洲 ETA 說明", desc: "官方說明頁，申請請用官方 App。", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601" }
    ],
    tips: ["沒有時差，孩子比較好適應", "冬天要準備保暖衣物", "插班名額有限，最好提早 4–6 個月申請"]
  },
  {
    id: "nz", name: "紐西蘭", en: "New Zealand", flag: "🇳🇿", group: "english",
    scene: "fjord",
    nature: { icons: ["🐑", "🌿"], caption: "綿羊牧場．銀蕨．米佛峽灣" },
    tagline: "純樸自然、步調慢，適合插班與寄宿家庭",
    features: "和澳洲一樣暑假是冬天，以插班遊學與寄宿家庭為主。人口少、步調慢，城市安全，自然教育與戶外活動是特色。",
    suitFor: "喜歡大自然、個性較內向，需要溫和環境的孩子",
    campTypes: ["中小學插班遊學", "寄宿家庭加語言課", "親子遊學"],
    weekly: [3, 5], flight: [3, 4.5],
    flightTime: "奧克蘭約 11 小時",
    timeDiff: "快 4 小時",
    climate: "冬季，約 5–15°C，南島更冷",
    visa: "台灣護照免簽，但須申請 NZeTA（並繳交國際旅客保育與觀光稅 IVL），3 個月以內短期課程可就讀。",
    soloAge: 10, minLevel: 1,
    scores: { language: 5, fun: 3, academic: 3 },
    parentFriendly: true,
    asianRatio: "插班以當地學生為主，華人比例低",
    channels: [
      { name: "Study with New Zealand", desc: "紐西蘭政府官方留學資訊網站。", url: "https://www.studywithnewzealand.govt.nz/en" },
      { name: "English New Zealand", desc: "紐西蘭認證語言學校協會。", url: "https://www.englishnewzealand.co.nz/" },
      { name: "學校國際部直接申請", desc: "許多中小學設有國際學生部門，可直接 email 詢問短期插班。" },
      { name: "紐西蘭移民局", desc: "NZeTA 官方資訊與申請。", url: "https://www.immigration.govt.nz/" }
    ],
    tips: ["冬天濕冷，室內暖氣不一定充足", "寄宿家庭多在郊區，通勤需要時間", "親子同行可體驗農場與健行"]
  },
  {
    id: "ie", name: "愛爾蘭", en: "Ireland", flag: "🇮🇪", group: "english",
    scene: "cliffs",
    nature: { icons: ["☘️", "🐑"], caption: "三葉草．莫赫懸崖" },
    tagline: "歐洲英語遊學新選擇，同學多來自歐洲",
    features: "歐洲各國孩子暑假學英文的熱門地點，華人比例低。都柏林、高威等地有大量青少年語言營，搭配城堡、懸崖等戶外行程。",
    suitFor: "想多接觸不同國籍同學、避開華人圈的家庭",
    campTypes: ["寄宿學校語言營", "寄宿家庭加語言課", "英語加運動營"],
    weekly: [3, 5], flight: [3.5, 5],
    flightTime: "需轉機，約 16–20 小時",
    timeDiff: "夏令時間慢 7 小時",
    climate: "涼爽多雨，約 13–20°C",
    visa: "台灣護照免簽入境（愛爾蘭不屬申根區，停留天數另計），短期課程可就讀。",
    soloAge: 10, minLevel: 0,
    scores: { language: 5, fun: 3, academic: 3 },
    parentFriendly: false,
    asianRatio: "以西班牙、義大利、法國學生為主，華人比例低",
    channels: [
      { name: "Marketing English in Ireland (MEI)", desc: "愛爾蘭認證英語學校協會。", url: "https://mei.ie/" },
      { name: "Education in Ireland", desc: "愛爾蘭政府留學推廣網站。", url: "https://www.educationinireland.com/" },
      { name: "台灣遊學代辦", desc: "代辦數量較少，可直接向學校報名。" }
    ],
    tips: ["同學國籍多元，但西班牙、義大利學生可能成群", "需要轉機，建議選有機場接送的營隊"]
  },
  {
    id: "mt", name: "馬爾他", en: "Malta", flag: "🇲🇹", group: "english",
    scene: "coast",
    nature: { icons: ["🐬", "🐦"], caption: "地中海海豚．藍磯鶇．石灰岩海岸" },
    tagline: "地中海島國，英語遊學兼度假",
    features: "英語是官方語言之一，地中海氣候、海水清澈。語言學校密集，下午常安排游泳、浮潛、古城參訪，度假感強。",
    suitFor: "喜歡海邊活動、想在度假中學英文的孩子",
    campTypes: ["語言學校青少年營", "寄宿家庭加語言課", "英語加水上活動"],
    weekly: [2.5, 4.5], flight: [3.5, 5],
    flightTime: "需轉機，約 17–20 小時",
    timeDiff: "夏令時間慢 6 小時",
    climate: "炎熱乾燥，約 25–33°C",
    visa: "屬申根區，台灣護照免簽 90 天。歐盟 ETIAS 電子旅行授權預計上路，出發前請確認是否需申請。",
    soloAge: 11, minLevel: 0,
    scores: { language: 4, fun: 4, academic: 2 },
    parentFriendly: true,
    asianRatio: "以歐洲學生為主，華人比例低",
    channels: [
      { name: "FELTOM", desc: "馬爾他英語教學機構聯合會，可查詢會員學校。", url: "https://www.feltom.com/" },
      { name: "學校官網直接報名", desc: "多數學校有中文或英文線上報名。" }
    ],
    tips: ["日曬強，防曬與補水很重要", "整體費用低於英國、愛爾蘭"]
  },
  {
    id: "sg", name: "新加坡", en: "Singapore", flag: "🇸🇬", group: "asia",
    scene: "garden",
    nature: { icons: ["🦦", "🌺"], caption: "水獺．熱帶花園與胡姬花" },
    tagline: "華語加英語，近、安全、時差小",
    features: "飛行時間短、治安好，華語與英語都通。營隊多由國際學校或教育機構舉辦，常結合 STEM、科學館、動物園等主題。",
    suitFor: "年紀較小、第一次出國，或希望親子同行的家庭",
    campTypes: ["國際學校夏令營", "STEM 科學營", "英語加城市探索", "親子營"],
    weekly: [3, 5], flight: [1, 1.5],
    flightTime: "約 4.5 小時",
    timeDiff: "沒有時差",
    climate: "炎熱潮濕，約 26–32°C，常有午後雷陣雨",
    visa: "台灣護照免簽 30 天，入境前需上網填寫 SG Arrival Card。",
    soloAge: 9, minLevel: 0,
    scores: { language: 3, fun: 4, academic: 4 },
    parentFriendly: true,
    asianRatio: "華人環境，英語沉浸程度不如英語系國家",
    channels: [
      { name: "新加坡移民與關卡局 ICA", desc: "SG Arrival Card 官方填寫入口。", url: "https://www.ica.gov.sg/" },
      { name: "國際學校官網", desc: "許多國際學校暑期開放外部學生報名。" },
      { name: "台灣遊學代辦／親子營團", desc: "常見 1–2 週親子方案。" }
    ],
    tips: ["英語環境不如歐美，主要目的是體驗與拓展視野", "物價高，住宿費用不低"]
  },
  {
    id: "ph", name: "菲律賓", en: "Philippines", flag: "🇵🇭", group: "asia",
    scene: "beach",
    nature: { icons: ["🐢", "🌴"], caption: "海龜．巧克力山．熱帶海灘" },
    tagline: "一對一密集英文課，CP 值最高",
    features: "宿霧、碧瑤的語言學校以一對一課程聞名，一天可上 6–8 堂，費用是歐美的三分之一左右。也有不少親子遊學方案。",
    suitFor: "想在短時間大量練口說、預算有限的家庭",
    campTypes: ["一對一密集英語課", "親子遊學", "英語加度假村活動"],
    weekly: [1.5, 3], flight: [0.8, 1.2],
    flightTime: "馬尼拉約 2 小時、宿霧約 3 小時",
    timeDiff: "沒有時差",
    climate: "雨季，約 25–32°C，7–8 月颱風較多",
    visa: "台灣護照目前有免簽試行措施（天數與期限常有變動）。在語言學校上課通常需另辦特別學習許可 SSP，多由學校代辦。",
    soloAge: 12, minLevel: 0,
    scores: { language: 5, fun: 2, academic: 2 },
    parentFriendly: true,
    asianRatio: "同學多為台灣、日本、韓國學生，老師為菲律賓籍",
    channels: [
      { name: "菲律賓移民局", desc: "免簽與 SSP 相關官方資訊。", url: "https://immigration.gov.ph/" },
      { name: "語言學校官網或台灣代理", desc: "多數學校有台灣代理，可比較課程與宿舍。" },
      { name: "親子遊學團", desc: "家長可同住學校宿舍或附近飯店。" }
    ],
    tips: ["選擇有 24 小時保全與封閉校園的學校", "暑假是颱風季，留意航班異動", "小學生建議親子同行"]
  },
  {
    id: "my", name: "馬來西亞", en: "Malaysia", flag: "🇲🇾", group: "asia",
    scene: "rainforest",
    nature: { icons: ["🦧", "🌺"], caption: "紅毛猩猩．扶桑花．婆羅洲雨林" },
    tagline: "國際學校夏令營，費用低、適合親子",
    features: "吉隆坡、檳城有大量英式國際學校，暑期營隊費用低，華語也通。很多台灣家庭選擇親子同行，家長順便度假。",
    suitFor: "年紀較小、預算有限、希望親子同行的家庭",
    campTypes: ["國際學校夏令營", "親子遊學", "雨林生態營"],
    weekly: [1.5, 3], flight: [1, 1.5],
    flightTime: "吉隆坡約 4.5 小時",
    timeDiff: "沒有時差",
    climate: "炎熱潮濕，約 25–33°C",
    visa: "台灣護照免簽 30 天，入境前需上網填寫數位入境卡 MDAC。",
    soloAge: 10, minLevel: 0,
    scores: { language: 3, fun: 4, academic: 3 },
    parentFriendly: true,
    asianRatio: "華人比例高，日常生活容易用到華語",
    channels: [
      { name: "馬來西亞移民局", desc: "入境規定與 MDAC 官方資訊。", url: "https://www.imi.gov.my/" },
      { name: "國際學校官網", desc: "暑期營通常 1–4 週，可直接報名。" },
      { name: "親子遊學團", desc: "常包含住宿、接送與週末旅遊。" }
    ],
    tips: ["國際學校多採英式學制，暑假時間可能與台灣不同", "親子遊學的公寓式住宿 CP 值高"]
  },
  {
    id: "jp", name: "日本", en: "Japan", flag: "🇯🇵", group: "asia",
    scene: "fuji",
    nature: { icons: ["🌸", "🦌"], caption: "櫻花．奈良鹿．富士山" },
    tagline: "文化與自然體驗為主，也有日語營",
    features: "以自然體驗、文化交流、日語學習為主，例如農村體驗、露營、科學營。英語營較少，適合以「體驗」為目的的家庭。",
    suitFor: "喜歡日本文化、想學日語，或以生活體驗為主的孩子",
    campTypes: ["自然體驗營（露營、農村）", "日語營", "國際學校英語營", "文化交流營"],
    weekly: [2, 4], flight: [1, 1.5],
    flightTime: "約 3 小時",
    timeDiff: "快 1 小時",
    climate: "炎熱潮濕，約 28–35°C，北海道較涼爽",
    visa: "台灣護照免簽 90 天，可預先登錄 Visit Japan Web 加速通關。",
    soloAge: 10, minLevel: 0,
    scores: { language: 2, fun: 5, academic: 2 },
    parentFriendly: true,
    asianRatio: "以日本當地孩子為主，主要使用日語",
    channels: [
      { name: "Visit Japan Web", desc: "入境與海關申報的官方線上服務。", url: "https://services.digital.go.jp/en/visit-japan-web/" },
      { name: "日本國家旅遊局 JNTO", desc: "官方旅遊資訊。", url: "https://www.japan.travel/" },
      { name: "日語學校短期課程／台灣代辦", desc: "部分日語學校有青少年暑期班。" }
    ],
    tips: ["若目標是英文，日本不是首選", "夏天非常熱，戶外活動要注意中暑"]
  },
  {
    id: "ch", name: "瑞士", en: "Switzerland", flag: "🇨🇭", group: "premium",
    scene: "alps",
    nature: { icons: ["🐐", "🐄"], caption: "阿爾卑斯山羊．乳牛．雪山湖泊" },
    tagline: "國際寄宿學校夏令營，頂級國際化",
    features: "由國際寄宿學校舉辦，語言課（英語或法語）加上登山、滑翔傘、水上運動等戶外活動，同學來自數十個國家，師生比與設施都是頂級。",
    suitFor: "預算充足、重視國際社交與多語環境的家庭",
    campTypes: ["國際寄宿學校夏令營", "英語或法語加戶外運動", "領導力營"],
    weekly: [13, 20], flight: [3.5, 5],
    flightTime: "蘇黎世約 15–18 小時（多需轉機）",
    timeDiff: "夏令時間慢 6 小時",
    climate: "舒適，約 15–25°C，山區較涼",
    visa: "屬申根區，台灣護照免簽 90 天。歐盟 ETIAS 電子旅行授權預計上路，出發前請確認是否需申請。",
    soloAge: 8, minLevel: 0,
    scores: { language: 4, fun: 5, academic: 4 },
    parentFriendly: false,
    asianRatio: "同學來自世界各地，國籍分布非常平均",
    channels: [
      { name: "學校官網直接申請", desc: "例如 Le Rosey 等知名寄宿學校的夏令營，多需填寫申請表並面談，名額有限。", url: "https://www.rosey.ch/" },
      { name: "高端遊學顧問", desc: "協助比較各校營隊與申請文件。" }
    ],
    tips: ["通常前一年秋天就開放申請，熱門梯次很快額滿", "部分營隊要求最少參加 2–3 週"]
  }
];

const GROUPS = {
  english: "英語系國家",
  asia: "亞洲近程（CP 值高）",
  premium: "高階選擇"
};

const LEVELS = ["初學", "基礎", "中等", "流利"];
