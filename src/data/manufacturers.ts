export interface MultiLangField { zh: string; en: string; hi: string; }

export interface Reference {
  url: string;
  label: string;
}

export interface ManufacturerData {
  id: string;
  name: string;
  logo: string;
  bootloaderUnlock: 'supported' | 'limited' | 'unsupported' | 'unknown';
  kernelSource: 'open' | 'partial' | 'closed' | 'unknown';
  warrantyAfterUnlock: 'maintained' | 'voided' | 'partial' | 'unknown';
  unlockMethod: MultiLangField;
  notes: MultiLangField;
  lastUpdated: string;
  officialPolicy: string;
  /** 解锁等待时长，多语对象 */
  unlockWaitTime?: MultiLangField;
  /** 解锁名额/次数限制，多语对象 */
  unlockQuota?: MultiLangField;
  /** SIM 卡要求，多语对象 */
  simCardRequirement?: MultiLangField;
  /** 账号要求，多语对象 */
  accountLimit?: MultiLangField;
  /** 地区限制，多语对象 */
  regionLimit?: MultiLangField;
  /** 回锁支持，多语对象 */
  relockSupport?: MultiLangField;
  references?: Reference[];
}

export const manufacturersData: ManufacturerData[] = [
  {
    id: 'xiaomi-cn',
    name: 'Xiaomi (CN)',
    logo: '/logos/xiaomi.png',
    bootloaderUnlock: 'limited',
    kernelSource: 'open',
    warrantyAfterUnlock: 'voided',
    unlockMethod: {
      zh: '小米社区App申请 + 官方解锁工具，需要完成实名认证和社区任务',
      en: 'Official unlock tool + Community App with real-name authentication, community level, quiz, and 180 days registration',
      hi: 'आधिकारिक अनलॉक टूल + कम्युनिटी ऐप, असली नाम सत्यापन, कम्युनिटी लेवल, क्विज़, 180 दिन पुराना खाता'
    },
    unlockWaitTime: {
      zh: 'HyperOS版本：3天等待；MIUI版本：1-30天不等',
      en: 'HyperOS: 72h; MIUI: 168/360-2880h',
      hi: 'HyperOS: 72 घंटे; MIUI: 168/360-2880 घंटे'
    },
    unlockQuota: {
      zh: '每个账户一年内最多解锁4台设备（所有版本统一计算）',
      en: 'Up to 4 devices per account per year (HyperOS & MIUI combined)',
      hi: 'प्रति खाता प्रति वर्ष अधिकतम 4 डिवाइस (HyperOS और MIUI संयुक्त)'
    },
    simCardRequirement: {
      zh: '必须插卡',
      en: 'Required',
      hi: 'आवश्यक'
    },
    accountLimit: {
      zh: '需要：实名验证 + 社区5级 + 答题通过 + 账户满半年',
      en: 'CN models require real-name authentication, community level 5, quiz passed, account registered for 180 days',
      hi: 'चीनी मॉडल के लिए असली नाम सत्यापन, कम्युनिटी लेवल 5, क्विज़ पास, 180 दिन पुराना खाता आवश्यक'
    },
    regionLimit: {
      zh: '仅限国行机型使用',
      en: 'Applies to CN models only',
      hi: 'केवल चीनी मॉडल के लिए'
    },
    relockSupport: {
      zh: '可重新上锁',
      en: 'Supported',
      hi: 'समर्थित'
    },
    notes: {
      zh: '⚠️ 风险提示：解锁将失去保修，部分功能可能异常。申请通过后需在14天内完成解锁，否则权限过期。建议解锁前充分了解刷机风险，做好数据备份。（HyperOS2需要社区答题，HyperOS1&MIUI理论可绕过该限制） *理论来说可以使用跑路法解锁，但是极为不推荐，该方法可能导致工作人员被扣1000元工资）',
      en: 'CN models require application via Mi Community App, unlock permission valid for 14 days, warranty void after unlock, some models not supported, strict risk control, violating accounts permanently banned. SIM card required and binding, wait time starts from binding. Some models not open source or unusable.',
      hi: 'चीनी मॉडल के लिए Mi Community App से आवेदन आवश्यक, 14 दिन के लिए अनलॉक अनुमति, अनलॉक के बाद वारंटी समाप्त, कुछ मॉडल समर्थित नहीं, सख्त जोखिम नियंत्रण, उल्लंघन करने वाले खाते स्थायी रूप से प्रतिबंधित। सिम कार्ड आवश्यक, बाइंडिंग से प्रतीक्षा समय शुरू। कुछ मॉडल ओपन सोर्स नहीं हैं या उपयोग योग्य नहीं हैं।'
    },
    lastUpdated: '2025-07-27',
    officialPolicy: 'https://www.miui.com/unlock/',
    references: [
      { url: 'https://github.com/melontini/bootloader-unlock-wall-of-shame', label: 'Wall of Shame' },
      { url: 'https://android.fandom.com/wiki/Bootloader_unlocking', label: 'Android Wiki' },
      {
        "url": "https://www.gizmochina.com/2025/01/20/xiaomi-2025-bootloader-unlock-policy-explained/",
        "label": "Xiaomi 2025 Bootloader Unlock Policy Explained"
      },
      {
        "url": "https://www.mi.com/global/support/faq/details/KA-533394",
        "label": "Safety Instructions and Precautions of Unlocking Bootloader - Xiaomi"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Xiaomi_HyperOS",
        "label": "Xiaomi HyperOS - Wikipedia"
      }
    ]
  },
  {
    id: 'xiaomi-global',
    name: 'Xiaomi (Global)',
    logo: '/logos/xiaomi.png',
    bootloaderUnlock: 'supported',
    kernelSource: 'open',
    warrantyAfterUnlock: 'partial',
    unlockMethod: {
      zh: '官网直接申请，流程简化，无需社区等级和答题环节',
      en: 'Official unlock tool, apply directly on the website, no Community App, no real-name, quiz, or level required',
      hi: 'आधिकारिक अनलॉक टूल, वेबसाइट पर सीधे आवेदन, कम्युनिटी ऐप, असली नाम, क्विज़ या लेवल की आवश्यकता नहीं'
    },
    unlockWaitTime: {
      zh: '通常72小时，新机型可能立即生效',
      en: 'Usually 72h, some new models may have no waiting period',
      hi: 'आमतौर पर 72 घंटे, कुछ नए मॉडल में प्रतीक्षा अवधि नहीं होती'
    },
    unlockQuota: {
      zh: '每账户每年仅限1台设备，覆盖全球市场（欧洲、印度、东南亚等）',
      en: 'Only one device per Mi account per year, applicable to global markets including Europe, India, Southeast Asia, etc.',
      hi: 'प्रति वर्ष केवल एक डिवाइस प्रति मि खाता, विश्व बाजार में लागू, यूरोप, इंडिया, सूथ-एशिया आदि शामिल'
    },
    simCardRequirement: {
      zh: '需要插卡',
      en: 'Required',
      hi: 'आवश्यक'
    },
    accountLimit: {
      zh: '仅需小米账户（国际版注册满30天），无其他额外要求',
      en: 'Only Mi account (registered for 30 days in Global) required, no community level, real-name, or quiz',
      hi: 'केवल Mi खाता (ग्लोबल में 30 दिन पुराना) आवश्यक, कम्युनिटी लेवल, असली नाम या क्विज़ की आवश्यकता नहीं'
    },
    regionLimit: {
      zh: '限国际版机型使用\n💡欧盟法规：根据1999/44/EC指令，正常系统修改不影响法定保修\n💡印度政策：小米官方确认BL解锁不自动取消硬件保修',
      en: 'Applies to Global models only \n According to European Directive 1999/44/EC, unless the seller can prove that the modification caused a defect, replacing the original operating system will not void the statutory warranty. \n Xiaomi India official statement: unlocking the bootloader will not automatically void the hardware warranty. However, if the device is damaged and cannot be repaired through software, the warranty will be void.',
      hi: 'केवल ग्लोबल मॉडल के लिए \n यूरोपीय निर्देश 1999/44/EC के अनुसार, यदि विक्रेता सिफारिश नहीं कर सकता कि संशोधन एक दोष का कारण बना है, मूल ऑपरेटिंग सिस्टम को बदलने से विधिवादी वारंटी अवश्य हो जाएगी। \n इंडिया मियो आधिकारिक दावा: बूटलोडर अनलॉक करने से हार्डवेयर वारंटी स्वयं अवश्य हो जाएगी। लेकिन यदि उपकरण को सॉफ़्टवेयर के माध्यम से ठीक करने में असमर्थ हो जाता है, तो वारंटी अवश्य हो जाएगी।'
    },
    relockSupport: {
      zh: '支持重新上锁（Mi Unlock工具选择"锁定"）',
      en: 'Supported, select "Lock" option in Mi Unlock tool',
      hi: 'समर्थित, Mi Unlock टूल में "लॉक" विकल्प चुनें'
    },
    notes: {
      zh: '✅ 相对友好：申请流程简单，等待时间短，大部分机型支持。不同地区保修政策可能有差异，建议了解当地法律规定。',
      en: 'Global models apply directly via the official unlock tool, short waiting period, most models supported, relaxed risk control. Some regions (e.g. India custom models) have special restrictions. Warranty policy after unlock depends on local law.',
      hi: 'ग्लोबल मॉडल आधिकारिक अनलॉक टूल के माध्यम से सीधे आवेदन करते हैं, प्रतीक्षा अवधि कम है, अधिकांश मॉडल समर्थित हैं, जोखिम नियंत्रण ढीला है। कुछ क्षेत्रों (जैसे भारत के कस्टम मॉडल) में विशेष प्रतिबंध हैं। अनलॉक के बाद वारंटी नीति स्थानीय कानून पर निर्भर करती है।'
    },
    lastUpdated: '2025-06-29',
    officialPolicy: 'https://www.miui.com/unlock/',
    references: [
      {
        "url": "https://www.xda-developers.com/xiaomi-india-clarifies-bootloader-unlocking-does-not-void-warranty/",
        "label": "Xiaomi India Clarifies Bootloader Unlocking Does Not Void Warranty"
      },
      {
        "url": "https://xiaomi.eu/community/threads/free-official-hyperos-unlock-bootloader.71323/",
        "label": "Free Official HyperOS Unlock Bootloader"
      },
      {
        "url": "https://fossbytes.com/xiaomi-unlock-bootloader-doesnt-void-warranty/",
        "label": "Unlocking Bootloader Won't Void Warranty, Says Xiaomi"
      },
      {
        "url": "https://www.mi.com/global/support/faq/details/KA-533394",
        "label": "Safety Instructions and Precautions of Unlocking Bootloader - Xiaomi"
      },
      {
        "url": "https://github.com/MiCode/Xiaomi_Kernel_OpenSource",
        "label": "Xiaomi Kernel Open Source"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rooting_%28Android%29",
        "label": "Rooting (Android) - Wikipedia"
      }
    ]
  },
  {
    id: 'oneplus',
    name: 'OnePlus',
    logo: '/logos/oneplus.png',
    bootloaderUnlock: 'limited',
    kernelSource: 'open',
    warrantyAfterUnlock: 'maintained',
    unlockMethod: {
      zh: '旧设备：Fastboot指令解锁；新设备（ColorOS 16）：需申请深度测试名额',
      en: 'Legacy devices: Fastboot command; New devices (ColorOS 16): Deep testing application required',
      hi: 'पुराने डिवाइस: फास्टबूट कमांड; नए डिवाइस (ColorOS 16): गहरा जांच आवेदन आवश्यक'
    },
    unlockWaitTime: {
      zh: '旧设备：即时解锁；新设备（ColorOS 16）：1-2个工作日',
      en: 'Legacy devices: None; New devices (ColorOS 16): 1-2 business days',
      hi: 'पुराने डिवाइस: कोई नहीं; नए डिवाइस (ColorOS 16): 1-2 कार्य दिवस'
    },
    unlockQuota: {
      zh: '新设备需申请深度测试名额，配额有限，申请难度未知',
      en: 'New devices require deep testing application with limited quota, difficulty unknown',
      hi: 'नए डिवाइस को सीमित कोटा के साथ गहरा जांच आवेदन की आवश्यकता, कठिनाई अज्ञात'
    },
    simCardRequirement: {
      zh: '新设备可能需要插卡（具体要求待确认）',
      en: 'New devices may require SIM card (requirements TBD)',
      hi: 'नए डिवाइस को सिम कार्ड की आवश्यकता हो सकती है (आवश्यकताएं TBD)'
    },
    relockSupport: {
      zh: '可重新上锁',
      en: 'Supported',
      hi: 'समर्थित'
    },
    notes: {
      zh: '⚠️ 政策变化：旧设备仍保持友好的解锁政策，无需申请码。但搭载ColorOS 16的新设备将收紧政策，需要申请深度测试名额，等待时长1-2个工作日，申请难度未知，未来可能会像OPPO、小米一样解锁困难。解锁后部分安全功能暂停，重新上锁后恢复。一加9及更早机型支持自定义证书。',
      en: '⚠️ Policy Change: Legacy devices maintain friendly unlock policy with no unlock code required. However, new devices with ColorOS 16 will have tightened policies requiring deep testing applications, 1-2 business day wait times, unknown application difficulty. Future unlock may become as difficult as OPPO/Xiaomi. TEE functions temporarily disabled after unlock, restored after relock. OnePlus 9 and earlier support custom trust root.',
      hi: '⚠️ नीति परिवर्तन: पुराने डिवाइस अनुकूल अनलॉक नीति बनाए रखते हैं, अनलॉक कोड की आवश्यकता नहीं। हालांकि, ColorOS 16 वाले नए डिवाइस में सख्त नीतियां होंगी जिनमें गहरा जांच आवेदन, 1-2 कार्य दिवस प्रतीक्षा समय, अज्ञात आवेदन कठिनाई शामिल है। भविष्य में अनलॉक OPPO/Xiaomi जितना कठिन हो सकता है। अनलॉक के बाद TEE कार्य अस्थायी रूप से अक्षम, पुनर्लॉक के बाद बहाल। OnePlus 9 और पुराने कस्टम ट्रस्ट रूट का समर्थन करते हैं।'
    },
    lastUpdated: '2025-08-14',
    officialPolicy: 'https://www.oneplus.com/support',
    references: [
      { url: 'https://android.fandom.com/wiki/Bootloader_unlocking', label: 'Android Wiki' },
      { url: 'https://github.com/melontini/bootloader-unlock-wall-of-shame', label: 'Wall of Shame' },
      { url: 'https://bbs.oneplus.com/thread/1926504022886318086', label: 'OnePlus Official Policy Update - ColorOS 16 Bootloader Unlock Changes' }
    ]
  },
  {
    id: 'google',
    name: 'Google Pixel',
    logo: '/logos/google.png',
    bootloaderUnlock: 'supported',
    kernelSource: 'open',
    warrantyAfterUnlock: 'maintained',
    unlockMethod: {
      zh: 'Fastboot指令直接解锁',
      en: 'Fastboot OEM unlock',
      hi: 'फास्टबूट OEM अनलॉक'
    },
    unlockWaitTime: {
      zh: '立即生效',
      en: 'None',
      hi: 'अगर'
    },
    unlockQuota: {
      zh: '无限制',
      en: 'None',
      hi: 'कोई नहीं'
    },
    regionLimit: {
      zh: 'Verizon运营商版本不支持解锁',
      en: 'US Verizon Pixel models do not support OEM unlock',
      hi: 'US Verizon Pixel मॉडल समर्थित नहीं'
    },
    notes: {
      zh: '🚀 开发者首选：Google Pixel系列对开发者最友善。解锁需要设备联网并登录Google账户，如遇问题可通过拨号 *#*#2432546#*#* 强制登录。',
      en: 'OEM unlock requires being connected to the internet and signed in to Google (even if the device was recently connected to the internet, it may still not be signed in to Google). To force sign in, enter *#*#2432546#*#* in the dialer.',
      hi: 'OEM अनलॉक के लिए इंटरनेट से कनेक्ट होना और जीएन में साइन इन करना आवश्यक है (भले ही उपकरण कुछ समय पहले इंटरनेट से कनेक्ट हो चुका हो, यह जीएन में साइन इन नहीं हो सकता हो)। साइन इन करने के लिए डायलर में *#*#2432546#*#* दर्ज करें।'
    },
    lastUpdated: '2025-06-25',
    officialPolicy: 'https://developers.google.com/android',
    references: [
      { url: 'https://android.fandom.com/wiki/Bootloader_unlocking', label: 'Android Wiki' }
    ]
  },
  {
    id: 'samsung',
    name: 'Samsung',
    logo: '/logos/samsung.png',
    bootloaderUnlock: 'limited',
    kernelSource: 'partial',
    warrantyAfterUnlock: 'voided',
    unlockMethod: { 
      zh: '下载模式解锁（仅部分机型支持）', 
      en: 'Download mode (limited models)', 
      hi: 'डाउनलोड मोड (सीमित मॉडल)' 
    },
    unlockWaitTime: { 
      zh: '即时生效', 
      en: 'None', 
      hi: 'कोई नहीं' 
    },
    unlockQuota: { 
      zh: '无限制', 
      en: '', 
      hi: '' 
    },
    simCardRequirement: { 
      zh: '无需插卡', 
      en: '', 
      hi: '' 
    },
    accountLimit: { 
      zh: '无账户要求', 
      en: '', 
      hi: '' 
    },
    regionLimit: { 
      zh: '仅特定地区和机型可解锁', 
      en: 'Only some regions/models', 
      hi: 'केवल कुछ क्षेत्र/मॉडल' 
    },
    relockSupport: { 
      zh: '可重新上锁', 
      en: 'Supported', 
      hi: 'समर्थित' 
    },
    notes: { 
      zh: '⚠️ 严重影响：解锁会触发KNOX熔断，导致Samsung Pay、健康监测等功能永久失效，保修立即失效。部分机型解锁后相机可能无法正常工作。美版机型完全不支持解锁。', 
      en: 'Unlocking will trigger KNOX fuse, wallet, health and other functions will be disabled, warranty void, some TEE functions lost. Some models may lose camera permanently. US models not supported.', 
      hi: 'अनलॉक करने से KNOX फ्यूज ट्रिगर होगा, वॉलेट, स्वास्थ्य आदि कार्य अक्षम होंगे, वारंटी समाप्त, कुछ TEE कार्य खो सकते हैं। कुछ मॉडल में कैमरा स्थायी रूप से काम नहीं करेगा। US मॉडल समर्थित नहीं।' 
    },
    lastUpdated: '2025-06-25',
    officialPolicy: 'https://developer.samsung.com/',
    references: [
      { url: 'https://android.fandom.com/wiki/Bootloader_unlocking', label: 'Android Wiki' },
      { url: 'https://github.com/melontini/bootloader-unlock-wall-of-shame', label: 'Wall of Shame' }
    ]
  },
  {
    id: 'huawei',
    name: 'Huawei',
    logo: '/logos/huawei.png',
    bootloaderUnlock: 'unsupported',
    kernelSource: 'partial',
    warrantyAfterUnlock: 'voided',
    unlockMethod: {
      zh: '已停止官方解锁支持',
      en: 'No official method (discontinued)',
      hi: 'आधिकारिक तरीका नहीं (अधिकृत नहीं)'
    },
    notes: {
      zh: '❌ 已停止：2018年起华为停止提供BL解锁服务，现有设备无官方解锁方案。',
      en: 'Stopped providing unlock codes since 2018',
      hi: '2018 से लेकर अनलॉक कोड प्रदान नहीं कर रहा'
    },
    lastUpdated: '2025-06-25',
    officialPolicy: 'https://consumer.huawei.com/en/',
    references: [
      { url: 'https://github.com/melontini/bootloader-unlock-wall-of-shame', label: 'Wall of Shame' },
      { url: 'https://github.com/openharmony', label: 'GitHub OpenHarmony' }
    ]
  },
  {
    id: 'oppo',
    name: 'OPPO',
    logo: '/logos/oppo.png',
    bootloaderUnlock: 'limited',
    kernelSource: 'partial',
    warrantyAfterUnlock: 'voided',
    unlockMethod: { zh: '深度测试权限申请', en: 'Deep testing application', hi: 'गहरा जांच आवेदन' },
    unlockWaitTime: { zh: '30天等待期', en: '720 hours (1 month)', hi: '720 घंटे (1 महीना)' },
    unlockQuota: { zh: '特定机型有月度配额限制', en: 'Monthly quota for some models', hi: 'कुछ मॉडल के लिए मासिक क्षमता' },
    simCardRequirement: { zh: '需要插卡', en: 'Required', hi: 'आवश्यक' },
    accountLimit: { zh: '必须有欢太账户，仅限支持机型', en: 'Oppo account required, some models supported', hi: 'ओप्पो खाता आवश्यक, कुछ मॉडल समर्थित' },
    regionLimit: { zh: '机型和地区支持有限', en: 'Only some regions/models', hi: 'केवल कुछ क्षेत्र/मॉडल' },
    relockSupport: { zh: '支持重新上锁', en: 'Supported', hi: 'समर्थित' },
    notes: { zh: '📝 申请制：通过欢太账户申请深度测试资格，等待期较长。解锁后部分安全功能会暂停，重新上锁可恢复。如能恢复原系统，保修继续有效。', en: 'Deep testing application required with Oppo account. TEE temporarily disabled after unlock, restored after relock (except SOTER key). If rooted and flashed back to official system, warranty is normal, otherwise only repair, no return.', hi: 'ओप्पो खाता के साथ गहरा जांच आवेदन आवश्यक, अनलॉक के बाद TEE कार्य अल्पकालिक रूप से अक्षम हो जाता है, वापसी के बाद पुनर्स्थापित हो जाता है (SOTER कुंजी को छोड़कर)। रूट के बाद यदि फ़्लश करके फिर से आधिकारिक सिस्टम में फ़्लश किया जा सकता है, तो वारंटी सामान्य है, अन्यथा केवल रिपेयर, वापसी और विनिमय सेवा लागू नहीं होती।' },
    lastUpdated: '2025-06-25',
    officialPolicy: 'https://www.oppo.com/en/',
    references: [
      { url: 'https://github.com/melontini/bootloader-unlock-wall-of-shame', label: 'Wall of Shame' }
    ]
  },
  {
    id: 'vivo',
    name: 'Vivo',
    logo: '/logos/vivo.png',
    bootloaderUnlock: 'limited',
    kernelSource: 'partial',
    warrantyAfterUnlock: 'voided',
    unlockMethod: { zh: '开发者内测计划（极少数机型）', en: 'Developer program (very few models)', hi: 'गहरा जांच आवेदन' },
    regionLimit: { zh: '仅个别机型可申请', en: 'Very few models supported', hi: 'बहुत कम मॉडल समर्थित' },
    relockSupport: { zh: '不支持重新上锁', en: 'Not supported', hi: 'समर्थित नहीं' },
    notes: { zh: '🚫 几乎不可用：vivo官方基本不提供解锁服务，仅极个别机型通过内部渠道开放。多数机型内核代码不完整。', en: 'No official unlock, very few models can apply via special channels. Most models not open source or incomplete.', hi: 'आधिकारिक अनलॉक नहीं, बहुत कम मॉडल विशेष चैनल के माध्यम से लागू कर सकते हैं। अधिकतर मॉडल ओपन सोर्स नहीं है या सोर्स कोड अधूरा है।' },
    lastUpdated: '2025-06-25',
    officialPolicy: 'https://www.vivo.com/en/',
    references: [
      { url: 'https://github.com/melontini/bootloader-unlock-wall-of-shame', label: 'Wall of Shame' }
    ]
  },
  {
    id: 'realme',
    name: 'Realme',
    logo: '/logos/realme.png',
    bootloaderUnlock: 'limited',
    kernelSource: 'partial',
    warrantyAfterUnlock: 'voided',
    unlockMethod: { zh: '深度测试资格申请', en: 'Deep testing application', hi: 'गहरा जांच आवेदन' },
    unlockWaitTime: { zh: '7天审核期', en: '168 hours (7 days)', hi: '168 घंटे (7 दिन)' },
    unlockQuota: { zh: 'GT系列：首月300个名额，后续每月200个；其他系列：每月200个名额', en: 'GT series: 300 in first month, 200 per month after; others: 200 in first month, 200 per month after', hi: 'GT श्रृंखला: पहले महीने में 300, अगले महीने से 200 प्रति महीना; अन्य: पहले महीने में 200, अगले महीने से 200 प्रति महीना' },
    simCardRequirement: { zh: '需要插卡', en: 'Required', hi: 'आवश्यक' },
    accountLimit: { zh: '需要欢太账户，获得资格后7天内有效', en: 'Oppo account required, qualification valid for 7 days', hi: 'ओप्पो खाता आवश्यक, 7 दिन के लिए अधिकृत' },
    relockSupport: { zh: '支持重新上锁', en: 'Supported', hi: 'समर्थित' },
    notes: { zh: '✅ 相对开放：通过欢太账户申请测试资格，有名额限制但相对容易获得。获得资格后需在一周内完成解锁。解锁后可恢复官方系统保修。', en: 'Deep testing application required with Oppo account, valid for 7 days. If rooted and flashed back to official system, warranty is normal, otherwise only repair, no return. TEE temporarily disabled after unlock, restored after relock (except SOTER key).', hi: 'ओप्पो खाता के साथ गहरा जांच आवेदन आवश्यक, 7 दिन के लिए वैध। रूट के बाद यदि फ़्लश करके फिर से आधिकारिक सिस्टम में फ़्लश किया जा सकता है, तो वारंटी सामान्य है, अन्यथा केवल रिपेयर, वापसी और विनिमय सेवा लागू नहीं होती। अनलॉक के बाद TEE कार्य अल्पकालिक रूप से अक्षम हो जाता है, वापसी के बाद पुनर्स्थापित हो जाता है (SOTER कुंजी को छोड़कर)।' },
    lastUpdated: '2025-06-25',
    officialPolicy: 'https://www.realme.com/support',
    references: [
      { url: 'https://github.com/melontini/bootloader-unlock-wall-of-shame', label: 'Wall of Shame' }
    ]
  },
  {
    id: 'motorola',
    name: 'Motorola',
    logo: '/logos/motorola.png',
    bootloaderUnlock: 'supported',
    kernelSource: 'open',
    warrantyAfterUnlock: 'voided',
    unlockMethod: { zh: '官方解锁网站申请', en: 'Official unlock portal', hi: 'आधिकारिक अनलॉक पोर्टल' },
    notes: { zh: '✅ 良好支持：摩托罗拉对解锁和自定义ROM有良好的支持政策', en: 'Good support for unlocking and custom ROMs', hi: 'अनलॉक और कस्टम रोम के लिए अच्छा समर्थन' },
    lastUpdated: '2025-06-25',
    officialPolicy: 'https://motorola-global-portal.custhelp.com/',
    references: [
      { url: 'https://android.fandom.com/wiki/Bootloader_unlocking', label: 'Android Wiki' }
    ]
  },
  {
    id: 'sony',
    name: 'Sony',
    logo: '/logos/sony.png',
    bootloaderUnlock: 'supported',
    kernelSource: 'open',
    warrantyAfterUnlock: 'voided',
    regionLimit: {
      zh: '日本市场版本不支持解锁',
      en: 'Japan models do not support unlock',
      hi: 'जापान मॉडल अनलॉक समर्थित नहीं'
    },
    unlockMethod: { zh: '官网申请解锁码', en: 'Unlock code required', hi: 'अनलॉक कोड आवश्यक' },
    notes: { zh: '🎯 开源友好：索尼对AOSP支持优秀，但解锁后部分相机功能可能受限', en: 'Excellent AOSP support, camera features may be lost after unlock', hi: 'अच्छा AOSP समर्थन, अनलॉक के बाद कैमरा सुविधाएं संभवतः खो जाएंगी' },
    lastUpdated: '2025-06-25',
    officialPolicy: 'https://developer.sony.com/open-source/aosp-on-xperia-open-devices/get-started/unlock-bootloader/how-to-unlock-bootloader',
    references: [
      { url: 'https://android.fandom.com/wiki/Bootloader_unlocking', label: 'Android Wiki' }
    ]
  },
  {
    id: 'htc',
    name: 'HTC',
    logo: '/logos/htc.png',
    bootloaderUnlock: 'limited',
    kernelSource: 'partial',
    warrantyAfterUnlock: 'maintained',
    unlockMethod: { zh: '官方HTCdev平台申请', en: 'Official unlock portal', hi: 'आधिकारिक अनलॉक पोर्टल' },
    notes: { zh: '⚠️ 支持有限：需注册HTCdev账户申请，审核通过后解锁文件会发送至邮箱', en: 'Unlock requires HTCdev account, unlock file will be sent to email within minutes', hi: 'अनलॉक के लिए HTCdev खाता आवश्यक है, अनलॉक फ़ाइल को ईमेल में कुछ मिनट में भेजा जाएगा' },
    lastUpdated: '2025-06-25',
    officialPolicy: 'https://www.htc.com/support',
    references: [
      { url: 'https://xdaforums.com/t/coolpad-toolkit-utility-open-source.3609653/', label: 'XDA Forums' },
      { url: 'https://www.htcdev.com/bootloader%20unlock', label: 'HTCdev' },
      { url: 'https://www.htcdev.com/DevCenter', label: 'HTCdev DevCenter' }
    ]
  },
  {
    id: 'transsion',
    name: 'Transsion',
    logo: '/logos/transsion.png',
    bootloaderUnlock: 'limited',
    kernelSource: 'partial',
    warrantyAfterUnlock: 'partial',
    unlockMethod: { zh: '暂无官方方案', en: 'Unknown', hi: 'अज्ञात' },
    notes: { zh: '❓ 信息不明：Transsion集团旗下品牌解锁政策和方法尚不明确', en: 'Unknown', hi: 'अज्ञात' },
    lastUpdated: '2025-06-25',
    officialPolicy: 'https://www.transsion.com/',
    references: [
      { url: 'https://github.com/Transsion-MT6789-Resources', label: 'GitHub Transsion-MT6789-Resources' },
    ]
  },
  {
    id: 'Meizu',
    name: 'Meizu',
    logo: '/logos/meizu.png',
    bootloaderUnlock: 'limited',
    kernelSource: 'partial',
    warrantyAfterUnlock: 'partial',
    unlockMethod: { 
      zh: '旧型号（16/17/18 系列）：通过fastboot + FRP dump编辑方式解锁，用户可自行操作；魅族20系列：必须在9008端口下解锁BL才会完美，传统fastboot界面解锁会出现非法解锁BL提示，彻底变砖不能启动；魅族21开始：真正需要进9008模式解锁，需要工程线进9008模式', 
      en: 'Legacy models (16/17/18 series): Unlock via fastboot + FRP dump editing, user-operable; Meizu 20 series: Must unlock BL in 9008 port mode for perfect results, traditional fastboot unlock triggers illegal unlock detection and causes permanent brick; Meizu 21 onwards: Requires 9008 mode unlock with engineering cable', 
      hi: 'पुराने मॉडल (16/17/18 सीरीज): fastboot + FRP dump संपादन के माध्यम से अनलॉक, उपयोगकर्ता द्वारा संचालित; मेजू 20 सीरीज: पूर्ण परिणामों के लिए 9008 पोर्ट मोड में BL अनलॉक आवश्यक, पारंपरिक fastboot अनलॉक अवैध अनलॉक का पता लगाता है और स्थायी ब्रिक का कारण बनता है; मेजू 21 से आगे: इंजीनियरिंग केबल के साथ 9008 मोड अनलॉक आवश्यक' 
    },
    notes: { 
      zh: '魅族联发科时代机型靠联发科漏洞解锁；高通时代，代工(ODM)机型(如16t,18x)修改FRP分区，数字旗舰修改private分区；非法解锁检测是魅族20系发售几个月后在daily(内测)中加入并同步给正式版，本质检测private分区的解锁原因字符串；魅族20系仍可fastboot解锁，在未加入检测机制的版本解锁后修改分区字符串即可；魅族21开始才真正要求9008模式解锁，需工程线进入9008模式', 
      en: 'MediaTek era Meizu devices relied on MediaTek vulnerabilities; Qualcomm era ODM models (16t, 18x) modified FRP partition while flagship models modified private partition; Illegal unlock detection was added to Meizu 20 series months after release in daily builds then synced to stable, essentially detecting unlock reason strings in private partition; Meizu 20 series can still be unlocked via fastboot on versions without detection mechanism by modifying partition strings post-unlock; Meizu 21 onwards truly requires 9008 mode unlock with engineering cable', 
      hi: 'मीडियाटेक युग के मेजू डिवाइस मीडियाटेक की कमजोरियों पर निर्भर थे; क्वालकॉम युग में ODM मॉडल (16t, 18x) ने FRP पार्टीशन को संशोधित किया जबकि फ्लैगशिप मॉडल ने प्राइवेट पार्टीशन को संशोधित किया; अवैध अनलॉक का पता लगाना मेजू 20 सीरीज में रिलीज के महीनों बाद डेली बिल्ड में जोड़ा गया फिर स्थिर में सिंक किया गया, मूल रूप से प्राइवेट पार्टीशन में अनलॉक कारण स्ट्रिंग्स का पता लगाना; मेजू 20 सीरीज को अभी भी fastboot के माध्यम से बिना डिटेक्शन मैकेनिज्म वाले संस्करणों पर अनलॉक-पोस्ट पार्टीशन स्ट्रिंग्स को संशोधित करके अनलॉक किया जा सकता है; मेजू 21 से आगे वास्तव में इंजीनियरिंग केबल के साथ 9008 मोड अनलॉक की आवश्यकता है' 
    },
    lastUpdated: '2025-08-14',
    officialPolicy: 'https://mroot.flyme.cn/',
    references: [
      { url: 'https://github.com/meizuosc', label: 'GitHub meizuosc' },
      { url: 'https://firmwarespro.com/bootloader/meizu-16-detail', label: 'Firmwarespro' },
      { url: 'https://www.meizu.com/support/unlock', label: 'Meizu Support' },
      { url: 'https://xdaforums.com/t/tutorial-unlock-the-meizu-m5-note-bootloader.3940000/', label: '[TUTORIAL] Unlock the Meizu M5 Note bootloader' },
      { url: 'https://xdaforums.com/t/guide-to-unlock-your-meizu-16-series-bootloader.4008217', label: 'XDA: Guide to unlock your Meizu 16 series bootloader' },
      { url: 'https://github-wiki-see.page/m/sukanka/MEIZU16S_unlock_tutorial/wiki/%E8%A7%A3%E9%94%81BL', label: 'MEIZU16S unlock tutorial wiki' }
    ]
  },
  {
    "id": "Asus",
    "name": "Asus",
    "logo": "/logos/asus.png",
    "bootloaderUnlock": "limited",
    "kernelSource": "partial",
    "warrantyAfterUnlock": "voided",
    "unlockMethod": {
      "zh": "部分老设备支持官方解锁工具",
      "en": "Official unlock tool available for some devices",
      "hi": "कुछ उपकरणों के लिए आधिकारिक अनलॉक टूल उपलब्ध है"
    },
    "notes": {
      "zh": "⚠️ 政策变更：华硕自2023年起停止提供新设备的解锁工具，现有工具仅支持部分旧机型",
      "en": "Since 2023, Asus has removed the official unlock tool; some devices cannot be unlocked",
      "hi": "2023 से, Asus ने आधिकारिक अनलॉक टूल हटा दिया है; कुछ उपकरणों को अनलॉक नहीं किया जा सकता"
    },
    "lastUpdated": "2025-06-25",
    "officialPolicy": "https://zentalk.asus.com/t5/rog-phone-5/official-bootloader-unlock-os-rollback-support/td-p/254324",
    "references": [
      {
        "url": "https://www.androidpolice.com/thread/asus-wont-support-bootloader-unlocking-anymore/",
        "label": "Android Police"
      },
      {
        "url": "https://www.xda-developers.com/asus-zenfone-9-bootloader-unlock-tool-kernel-sources-firmware/",
        "label": "XDA Developers"
      },
      {
        "url": "https://github.com/asus-development",
        "label": "Asus Development on GitHub"
      },
      {
        "url": "https://xdaforums.com/t/universal-asus-guide-unlock-the-bootloader-of-any-asus-device.3567280/",
        "label": "XDA Forums"
      }
    ]
  },
  {
    id: "Nothing",
    name: "Nothing",
    logo: "/logos/nothing.png",
    bootloaderUnlock: "supported",
    kernelSource: "open",
    warrantyAfterUnlock: "maintained",
    unlockMethod: {
      zh: "Fastboot命令解锁（无需申请码）",
      en: "No unlock code required",
      hi: "अनलॉक कोड की आवश्यकता नहीं"
    },
    notes: {
      zh: "🆕 新兴品牌：Nothing设备解锁简单，但会暂时禁用TEE功能。可通过特定方法恢复TEE，但操作存在风险且不可逆。",
      en: "After unlocking, TEE will be temporarily disabled and restored after relocking (TEE function can be repaired using OPPO/OnePlus/Realme methods). The TEE function can be repaired by installing an attestation key, making it work again. This method is also used on Qualcomm platform devices from brands like OPPO, OnePlus, and Realme. However, it is important to note that installing an attestation key is an irreversible process and carries risks. Additionally, extracting an attestation key from the device's original key store is not possible, and keys circulating on the network may have been revoked by Google.",
      hi: "अनलॉक करने के बाद, TEE कार्य अल्पकालिक रूप से अक्षम हो जाता है और पुनर्लॉक करने के बाद पुनर्स्थापित हो जाता है (अनलॉक के बाद TEE कार्य को OPPO/OnePlus/Realme के तरीकों का उपयोग करके सुधारा जा सकता है)।अनलॉक के बाद TEE कार्य को सुधारने के लिए प्रमाणीकरण कुंजी स्थापित की जा सकती है, इसे पुनर्स्थापित करने के लिए विभाजित किया जा सकता है। इस विधि का उपयोग OPPO, OnePlus, और Realme जैसे ब्रांडों के Qualcomm प्लेटफॉर्म उपकरणों पर भी किया जाता है। हालांकि, यह ध्यान रखना महत्वपूर्ण है कि प्रमाणीकरण कुंजी स्थापित करना एक अविवर्तनीय प्रक्रिया है और जोखिम उठाती है। इसके अलावा, उपकरण के मूल कुंजी स्टोर से प्रमाणीकरण कुंजी निकालना संभव नहीं है, और नेटवर्क पर प्रसारित कुंजी को Google द्वारा वापस लिया जा सकता है।"
    },
    lastUpdated: "2025-06-25",
    officialPolicy: "https://nothing.tech/pages/glyph-developer-kit",
    references: [
      {
        "url": "https://nothing.community/d/6047-policies-for-rootingunlocking-boot-loader",
        "label": "Nothing Community - Bootloader Unlock Policies"
      },
      {
        "url": "https://github.com/NothingOSS",
        "label": "NothingOSS GitHub Repository"
      },
      {
        "url": "https://www.xda-developers.com/nothing-phone-1-kernel-source-code/",
        "label": "XDA Developers - Nothing Phone 1 Kernel Source Code"
      },
      {
        "url": "https://xdaforums.com/t/fix-widevine-l1-unlocked-bootloader.4731374/",
        "label": "XDA Forums - Fix Widevine L1 Unlocked Bootloader"
      }
    ]
  },
  {
    id: "Nubia",
    name: "Nubia",
    logo: "/logos/nubia.png",
    bootloaderUnlock: "limited",
    kernelSource: "partial",
    warrantyAfterUnlock: "voided",
    unlockMethod: {
      zh: "官方已停止提供解锁服务",
      en: "Nubia does not provide unlocking",
      hi: "नुबिया अनलॉक प्रदान नहीं करता"
    },
    notes: {
      zh: "❌ 已停止：努比亚红魔9系列起不再提供解锁，旧设备升级后也会失去解锁支持",
      en: "Red Magic 9 series and subsequent products do not provide unlocking; Red Magic 8 and other old products do not provide unlocking after updating the system",
      hi: "रेड मैजिक 9 सीरीज और उसके बाद के उत्पाद अनलॉक प्रदान नहीं करते; रेड मैजिक 8 और अन्य पुराने उत्पाद सिस्टम अपडेट करने के बाद अनलॉक प्रदान नहीं करते"
    },
    lastUpdated: "2025-06-29",
    officialPolicy: "https://www.nubia.com/",
    references: [
      {
        "url": "https://github.com/ztemt",
        "label": "Nubia on GitHub"
      },
      {
        "url": "https://opensource.ztedevices.com/",
        "label": "Nubia Open Source"
      },
      {
        "url": "https://github.com/DoganM95/Red-Magic",
        "label": "Red Magic Unlock"
      },
      {
        "url": "https://github.com/nubia-development",
        "label": "Unofficial | Nubia Custom Kernel & Rom Projectt"
      },
      {
        "url": "https://help.redmagic.gg/hc/en-us/articles/360030687292-Will-rooting-or-unlocking-the-bootloader-void-my-warranty",
        "label": "Red Magic - Will rooting or unlocking the bootloader void my warranty?"
      },
      {
        "url": "https://global.redmagic.gg/blogs/faq/reddit-faq-we-answer-the-latest-questions-for-redmagic",
        "label": "Red Magic - Reddit FAQ"
      },
      {
        "url": "https://wiki.lineageos.org/devices/",
        "label": "LineageOS Device Database"
      }
    ]
  },
  {
    id: "MediaTek",
    name: "MediaTek",
    logo: "/logos/mediatek.png",
    bootloaderUnlock: "limited",
    kernelSource: "partial",
    warrantyAfterUnlock: "partial",
    unlockMethod: {
      zh: "多位开发者成功利用奇美拉工具（Chimera Tool）通过BROM模式对搭载天玑9300芯片的Vivo和iQOO设备进行BL解锁和获取Root权限。工具如MTK_UNIVERSAL_V5和mtkclient.gui被广泛用于强制解锁联发科设备的BL锁。",
      en: "Multiple developers have successfully used the Chimera Tool to unlock the bootloader and gain root access on Vivo and iQOO devices with MediaTek Dimensity 9300 chipsets using BROM mode. Tools like MTK_UNIVERSAL_V5 and mtkclient.gui are widely used to force unlock the BL lock of MediaTek devices.",
      hi: "कई डेवलपर्स ने सफल रहे हैं कि वे चिमेरा टूल का उपयोग करके BROM मोड के माध्यम से मीडियाटेक डाइमेंसिटी 9300 चिपसेट वाले वीवो और आईक्यूओ डिवाइसेस के बूटलोडर को अनलॉक किया और रूट एक्सेस प्राप्त किया। टूल्स जैसे MTK_UNIVERSAL_V5 और mtkclient.gui का उपयोग मीडियाटेक डिवाइसेस के बीएल लॉक को फोर्स अनलॉक करने के लिए किया जाता है।"
    },
    notes: {
      zh: "截至目前，关于天玑9400系列设备的BL解锁方法仍在研究中，尚未有公开的、广泛适用的解锁方案。由于新一代芯片可能引入了更严格的安全机制，解锁难度可能增加。建议关注相关技术社区和论坛的最新动态，以获取最新的解锁信息。", 
      en: "As of now, there is no public, widely applicable solution for unlocking the bootloader of MediaTek Dimensity 9400 series devices. Given the introduction of more stringent security mechanisms in the new generation of chips, the difficulty of unlocking may increase. It is recommended to follow the latest developments in relevant technical communities and forums to obtain the latest information on unlocking.",
      hi: "वर्तमान में, मीडियाटेक डाइमेंसिटी 9400 सीरीज डिवाइसेस के बूटलोडर को अनलॉक करने के लिए कोई सार्वजनिक, व्यापक रूप से लागू होने वाला समाधान नहीं है। नए पीढ़ी के चिप्स में अधिक सख्त सुरक्षा तंत्र के परिचय के कारण, अनलॉक करने की कठिनाई बढ़ सकती है। संबंधित तकनीकी समुदायों और मंचों के नवीनतम विकास का पालन करने की सलाह दी जाती है, ताकि अनलॉक करने की नवीनतम जानकारी प्राप्त की जा सके।"
    },
    lastUpdated: "2025-06-25",
    officialPolicy: "https://www.mediatek.com/",
    references: [ 
      {
        "url": "https://www.bilibili.com/video/BV1SGQXYKEXQ",
        "label": "Bilibili - 联发科天玑9300 BL解锁教程"
      },
      {
        "url": "https://onfix.cn/course/4650",
        "label": "联发科MTK方案手机，保留数据强制解BL锁（BootLoader）图文教程"
      },
      {
        "url": "https://zhuanlan.zhihu.com/p/609572545",
        "label": "知乎 - 联发科通用解锁工具流程分析"
      },
      {
        "url": "https://forum.gsmhosting.com/vbb/f475/chimera-major-mtk-bl-unlock-improvement-new-programmers-3368525/",
        "label": "GSMHosting - Chimera Major MTK BL Unlock Improvement - New Programmers"
      },
      {
        "url": "https://github.com/MTK-Dimensity-Tool",
        "label": "MTK Dimensity Tool Unlock Flash And Repair MediaTek Devices [Latest Version]"
      },
      {
        "url": "https://xdaforums.com/t/mtk-unlock-bootloader-without-waiting-a-week.4523431/",
        "label": "XDA Forums - MTK Unlock Bootloader Without Waiting a Week"
      }
    ]
  }
]

export const getStatusColor = (status: string) => {
  switch (status) {
    case 'supported':
    case 'open':
    case 'maintained':
      return 'bg-android-500 text-white';
    case 'limited':
    case 'partial':
      return 'bg-yellow-500 text-white';
    case 'unsupported':
    case 'closed':
    case 'voided':
      return 'bg-red-500 text-white';
    default:
      return 'bg-gray-400 text-white';
  }
};

export const getStatusIcon = (status: string) => {
  switch (status) {
    case 'supported':
    case 'open':
    case 'maintained':
      return '✅';
    case 'limited':
    case 'partial':
      return '⚠️';
    case 'unsupported':
    case 'closed':
    case 'voided':
      return '❌';
    default:
      return '❓';
  }
};
