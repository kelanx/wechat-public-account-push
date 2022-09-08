export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID 
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  // APP_ID: "wx331625b8886d31a1",

  // 公众号APP_SECRET 
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  // APP_SECRET: "6a27451e35f692c2061c7ee5235e93f8",

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
   * [klswy1218
   *  {
   *    // 想要发送的人的名字
   *    name: "宝",
   *    // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
   *    id: "oQIB75sFZvor0dyl9Ixb8D8oFY0A",
   *    // 你想对他发送的模板消息的模板ID
   *    useTemplateId: "zjVglIuCXo4CsraXWEio1iP7sZJ7IQEES9lDsgc4yOU",
   *    // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
   *    openUrl: "https://wangxinleo.cn"
   *   }, 
   * ]
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "宝",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "wxid_bn9lkj7papqm22"
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "Wue80GrtY1nAi5a4tam4FDxZF59WNx9pwcBc06LMpANnu8",
      // 所在省份
      province: "江西",
      // 所在城市
      city: "南昌",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://wangxinleo.cn"
    }, 
    {
      name: "老婆1", 
      id: "",
      useTemplateId: "",
      province: "",
      city: "",
      openUrl: "https://wangxinleo.cn"
    }, 
    {
      name: "老婆2",
      id: "",
      useTemplateId: "",
      province: "",
      city: "",
      openUrl: "https://wangxinleo.cn"
    }, 
    {
      name: "老婆3", 
      id: "",
      useTemplateId: "",
      province: "",
      city: "",
      openUrl: "https://wangxinleo.cn"
    }, 
  ],

  /**
   * 回调消息 相关，主要用来展示发送是否成功/失败的数据
   */

  // 回调消息模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "zjV1glIuCXo4Csr23aXWEio1iP74sZJ7IQEES95lDsg6c4yOU",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "自己",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "wxid_bn9lkj7papqm22",
    }, 
  ],
    
  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "江西",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "南昌",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
   * tpye必须填！ 只能 “生日” 和 “节日” 二选一!
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   */
  FESTIVALS: [
    {"type": "生日", "name": "最最喜欢的肖新华", "year": "2004", "date": "10-14"},
    {"type": "节日", "name": "在一起的日子", "year": "2022", "date": "06-03"},
    {"type": "生日", "name": "你唯一的小柯", "year": "2003", "date": "12-18"},
    {"type": "节日", "name": "公众号诞生日", "year": "2022", "date": "09-08"},
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字; 
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 4,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }} 
    * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    {"keyword": "love_day", date: "2022-06-03"},
    // 
    {"keyword": "", date: ""},
    // 
    {"keyword": "", date: ""},
    // 
    // {"keyword": "", date: ""},
    // ... 
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }} 
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    {"keyword": "encourage_oneself", contents: "你主要的问题在于读书太少而想得太多"},
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "因为太喜欢你，所以看谁都像是情敌。",
      "申请成为你爱里的永久居民。",
      "你很傻，你很笨，可我还是很羡慕你，因为你有我",
      "遇见你，就好像捡到了100斤的运气",
      " 春早秋晚，岁岁平安"
      "前途坦荡，来日方长"
      "玫瑰到了花期，我很想你"
      "祝我们好在春夏秋冬"
      "往事暗沉不可追，来日之路光明灿烂"
      "我一直在"
      "极光会有的，并肩于雪山之巅"
      "平安喜乐，万事胜意"
      "一支真心准备的花，胜过千朵玫瑰"
      "双手合十的愿望里永远有你"
      "以你为主，我不胜荣幸"
      "也许世界上有五千朵和你一模一样的花，但只有你是我独一无二的玫瑰
      "永远热恋，永远没有完结篇"
      "永远是你的最佳听众"
      "世中逢尔，雨中逢花"
      "彼方尚有荣光在"
      "你不像任何人，因为我爱你"
      "夜晚潮湿，地面潮湿，空气寂静，树林沉默"
      "我们走的每一步，都是信仰"
      "遇见即是上上签"
      "天上没有不散的筵席，而我永远不会离开你"
    ]},
  ],

  /** 每日一言 */

  // 好文节选的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: "动画，漫画，游戏，小说，电影，电视剧"


}
