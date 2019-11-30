// ==UserScript==
// @name         斗鱼薅羊毛神器(日进万丸+概率红包)
// @namespace    https://github.com/wolf-scream
// @version      0.8.1
// @description  这里有斗鱼真正全自动搜索🧐火力全开+自动发AI智能弹幕=抢鱼丸红包二合一的神级😇脚本，您安装脚本后，需要做的只需要两步，一是功能选择💥弹幕轰炸，二是打开鱼吧右侧的二合一开关，然后就不需要您的任何操作了，自动参与火力全开发弹幕抢丸子红包的事情都交给脚本帮你搞定。进来体验下土豪玩家💰😎💰的感脚吧，让您做一个真正有牌面的斗鱼白嫖看客，幻神弹幕特效-有撒，满级粉丝牌子-有撒，顶级车队logo-有撒，极速签到手速王-还是有撒，茫茫人海一眼就相中这个主播，大手🖐一挥，鱼丸万两——💲赏💲！睥睨水友、笑傲鱼塘、彪炳平台全都有撒🐷~！
// @author       lvlanxing
// @supportURL   https://github.com/wolf-scream/FirePowerSeek
// @icon         https://rawcdn.githack.com/popzoo/pop/9d4121eed5cbb035e55203b8a9e56a73dcf2e6bf/images/favicon.ico
// @icon64URL    https://rawcdn.githack.com/popzoo/pop/9d4121eed5cbb035e55203b8a9e56a73dcf2e6bf/images/favicon-64.ico
// @include      https://www.douyu.com/0*
// @include      https://www.douyu.com/1*
// @include      https://www.douyu.com/2*
// @include      https://www.douyu.com/3*
// @include      https://www.douyu.com/4*
// @include      https://www.douyu.com/5*
// @include      https://www.douyu.com/6*
// @include      https://www.douyu.com/7*
// @include      https://www.douyu.com/8*
// @include      https://www.douyu.com/9*
// @include      https://www.douyu.com/topic/*
// @include      https://www.douyu.com/*?rid=*
// @match        https://yuba.douyu.com/*
// @match        https://msg.douyu.com/*
// @mail         lvlanxing@gmail.com
// @copyright    JadeBone
// @run-at       document-end
// @grant        GM_openInTab
// @grant        GM_xmlhttpRequest
// @connect      coding.net
// @note         本脚本包含主要功能：自动搜索火力全开房间+自动随机发送AI与云端弹幕+极速签到手速王+幻神弹幕特效+不绑定手机发弹幕+房间自动签到+房间在线人数+当日跳转次数+主播信用值+主播开播时长+是否自动播放(记忆上次操作)+关闭滚屏弹幕(记忆上次操作)等功能 && Main Function of Script：Auto Fire Power Seek + Auto Barrage Bombing + Royal Barrage Effect + Sent Barrage Without Binding Phone + Room Assign + Online People Number + Jumping Page Times + Anchor Credit + Anchor Living Time and so forth;
// @note         本脚本完全由原生的JS写成，且好多函数代码模块可以独立使用（比如非绑定手机发弹幕函数），用户完全可以不装tampermokey或violentmonkey,直接复制代码在控制台执行,但部分功能会受限或异常；
// @note         欢迎大家使用、参考、研究和引用本脚本，但在引用脚本的时候，希望您能标注出处，这也是对博主的认可和尊重，也是自我修养的体现，如果有什么意见欢迎加入我们的薅羊毛大军的QQ交流群；
// @note         需要警惕😱的是，当自动搜素🌐跳转房间超过100次时，您处于高危状态，随时会被斗鱼系统屏蔽🚫弹幕发言，不过不要紧哈，当自动跳转超100次会限制自动跳转页面功能，用户可以自行手动跳转；
// @note         V0.1.0 根据斗鱼鱼塘任务的接口，实现手动按钮火力房间搜索并跳转;
// @note         V0.1.1 火力搜寻的网址跳转计数，按日期形式序列化到localStorage中，方便用户统计查看;
// @note         V0.1.2 清理localStorage中无用的信息，同时也防止斗鱼收集用户行为信息;
// @note         V0.1.3 增加火力全开房间的筛选，热度筛选，当房间热度太高>50W 弹幕中奖几率低则跳过;
// @note         V0.1.4 奖品种类筛选，只有符合鱼丸和红包奖励才参与，鱼丸奖品份数要大于2，每个不低于100丸子，红包过滤常见无效的金额数目（0.01,0.1,0.2,0.5元）
// @note         V0.1.5 参与条件筛选，是否需要成为粉丝才可以参与，如需要粉丝，则跳过;
// @note         V0.1.6 禁言判断，如果之前被正浏览的房间禁言，则自动跳转;
// @note         V0.1.7 增加画质调整，因为是抢丸子，所以默认为最低画质，函数中也带了最高画质的代码，可自行注掉更换，该方法参考greaseFork中wah0713大神的方法实现，在此拜谢！
// @note         V0.2.0 增加自动按钮的UI按钮和样式radio,实现手动自动自由切换的方案，由你喜好决定;
// @note         V0.2.1 增加复选框radio的记录功能，序列化localStorage,记录上次跳转的操作，如果是自动，则一直会筛选到符合的房间为之，如果错过房间想停止，你在程序初始化显示界面后有3s的时间选择，点击⛔火力停止单选框，即可停留界面;
// @note         V0.2.2 添加满足筛选条件的当前房间自动关注与房间签到功能，毕竟都抢人红包或丸子了，给个关注应该的，也方便以后继续抢哈……
// @note         V0.2.3 添加默认关闭滚屏弹幕方法，用户可按需要在尾部主函数中注掉或打开此方法;
// @note         V0.2.4 添加默认关闭自动视频播放的方法，用户可按需要在尾部主函数中注掉或打开此方法;
// @note         V0.2.5 增加获取用户ID和用户昵称的函数，并序列化localStorage中，方便标识不同用户数据统计;
// @note         V0.2.6 增加获取当前房间的roomId,方便后续的json的URL请求和粉丝牌的logo寻找提供条件;
// @note         V0.2.7 添加显示当前直播间在线人数，这个功能也是挺不错了，但也有不准的地方，仅供参考，该方法参考greaseFork中qianjiachun大佬公布的斗鱼API接口实现的，在此拜谢！
// @note         V0.2.8 添加显示当前房间的信用值，满为12，最低为4，当信用<4,水友们无法送礼物给主播了;
// @note         V0.2.9 添加不绑定手机号发弹幕(前提是必须是其他账号登陆状态，非登陆状态不行)，这个功能还是挺不错，如果想搞小号抢丸子，这个挺方便的，看来斗鱼还是给手机号不足的用户留条后路的;
// @note         V0.3.0 增加超级皇帝的聊天弹幕特效：包括帝王图标，当前房间的满级粉丝牌30，等级满级120，当前房间满级16，炫酷车队logo-皇,签到手气王;
// @note         V0.3.1 增加超级皇帝的滚屏弹幕特效，绑定键盘回车和鼠标点击弹幕发送按钮，当用户发弹幕会自动触发，延迟300ms后自动改为皇帝弹幕特效，网络好可以改成200ms,或150ms
// @note         V0.3.2 增加抓捕幻神弹幕特效的自动方法，如果朋友您在localStorage方法看到两个🍅🥦🍅打头的键值，如果数据可用，或者您是前端大神，希望您把抓获的野生纯种幻神弹幕特效邮件发给博主，虽然不能享受RMB的幻神待遇，但本机满足下幻神的体验还是很棒的事情;
// @note         V0.3.3 添加皇帝弹幕王者神豪的动态logo特效，修正了一些log的日志级别，增加了房间签到时间延迟，防止出现没关注就签到的无效情景;
// @note         V0.3.4 增加了网址跳转前的房间过滤功能，自动过滤掉二次元、看电影和人数>2500的房间，提高搜索效率，增加topic/*专题房间的网址匹配;
// @note         V0.3.5 增加了当前直播间主播已经开启直播时间的计时，单位/分钟，增加了当前浏览器弹幕系统（包含竞猜的实时赔率显示）的延迟时间显示，单位/毫秒，增加了鼠标悬浮此区域的文字提示tip说明;
// @note         V0.3.6 修改了脚本加载的固定时间，改为根据用户端的网络的页面加载进度自动执行脚本初始化，去除了上方弹幕延迟数据90ms(无意义)，增加了当前房间的签到排行显示，便于用户抢签到手气王，需要注意处于开火仍执行自动房间签到，停火才能手动签到，最多显示签到人数100+;
// @note         V0.3.7 增加弹幕轰炸功能，当前房间符合火力全开搜索条件时，则自动发送弹幕抢奖品，弹幕发送时间算法是当前房间的自己已经发送弹幕间隔数和房间的热度值段联合决定的，不需要用户自定义，弹幕内容为普通候选弹幕。待完成：后期会增加联网云弹幕，自动判定当前房间类型有针对发送合适弹幕！
// @note         V0.3.8 增加云端弹幕功能，根据当前房间的二级分类标题，选取符合房间类别的弹幕，随机选取后自动发送.修复自动火力搜索火力按钮无法跳转的bug，增加云弹幕json接口的访问频次统计，暂时没有限定云弹幕的访问,如果频次过高，则后续做本地缓存处理;去除签到手气王标志，与王者神豪不协调;
// @note         V0.3.9 增加滚屏弹幕和自动播放的记忆功能，即如果用户关闭过滚屏弹幕，则用户跳转新直播间，滚屏弹幕仍保持关闭状态，自动播放功能也如此。这样方便满足大家在不同场景的需要，也避免了增加按钮开关的繁琐操作;
// @note         V0.4.0 优化房间自动签到的功能，初始化脚本后即可自动签到，修复在无火力全开情况下无自动签到的问题;
// @note         V0.4.1 新增arrPoetry精选弹幕，与云精选弹幕混合使用，精选弹幕的随机使用比例为1/5，普通弹幕的随机使用比例为4/5，大家可以F12在控制台查看是普通弹幕还是精选弹幕类型；
// @note         V0.4.2 新增极速签到功能，直接调用签到API接口，检测到主播开播后极速签到，延迟为ms级别，使用此功能记住一定要将主播加入特别关注，否则无法获取主播开播状态，由于此功能对服务器压力较大，建议最好在主播开播前几分钟使用；
// @note         V0.4.3 修复鱼丸筛选丸子>1000时自动跳转的bug, 新增斗鱼车队条件筛选功能，方便大家去低门槛车队去周转丸子。修改礼物展示的界面，增加下拉加载功能等；
// @note         V0.4.4 新增鱼吧自动签到鱼吧收藏列表的所有鱼吧，没有上限，只要是你收藏的鱼吧就可以，使用方法soEasy,可以在任意直播间下拉，等待下面的鱼吧帖子自动加载上就可以自动签到了，也可直接进入鱼吧主界面签到，签到完成后会有弹窗提示，每天只执行一次；
// @note         V0.4.5 修复极速自动签到cookie为空引发的无法签到的问题，大家这回不用去其他任意直播间签到了，脚本自动设置签到cookie参数直接赋值就可以，又方便了大家，哈哈；
// @note         V0.4.6 新增幻神弹幕功能，含泪呀，拖了二个多月，别人家都做出来，博主一直懒得搞，这回好了，直接抓特效就好了，以后大家都是幻神大大了；
// @note         V0.4.7 新增车队一键签到，只要是打开车队的界面，就可以自动签到了！又解放了大家的双手，懒人都笑了有木有;
// @note         V0.4.8 去除了签到排行的排名显示功能， 因为这个接口的数据是被斗鱼延迟处理的，不是实时的数据，所以没有太大的意义，以后签到全部改为自动签到（包括在⛔火力停止的时候也自动签到）;
// @note         V0.5.0 增加智能聊天机器人-小思，拥有亿级别的实体属性关系，机器人具备的功能有：中文分词、词性标注、命名实体识别、关键词提取、文本摘要、新词发现、情感分析等。缺点是应对某些词汇还是无法识别（如不理解‘吃鸡’等），容易暴露自己，目前在适用，后期要进行特定场景的语义训练；
// @note         V0.5.1 修改了界面UI提示效果，增加用户体验的友好性，之前一直没时间做界面优化，这回有时间一并优化改好，大家这回也不用总开控制台查看程序运行的状态了！
// @note         V0.5.2 增加了全平台车队的数目统计，点击可以进入车队入口，每天自动执行一次页面签到，大家可以通过礼物的入口查看"车队展"来找不限制的车队加入，领取车队加油卡；
// @note         V0.5.3 二合一脚本和安全脚本统一放到一个脚本中了，开启二合一功能开关且停留💥弹幕轰炸处，会自动搜索火力全开并发送弹幕，每天跳转页面超过100次后，则停止自动跳转，但可手动🧐或自动🔥开火跳转，温馨提示:频繁跳转(100+次)+频繁发弹幕=容易被封；
// @note         V0.5.4 填了好多的坑，之前时间匆忙上线，然后有些逻辑没来得及测试，这回一一都填了，欢迎大家随时反馈新的bug；
// @note         V0.5.5 过滤了机器人一些弱智的聊天对话，限制回答弹幕的识别长度，修复了toast若提示闪屏的问题，增加二合一开关的粉丝成员抽奖过滤；
// @note         V0.5.6 新增一键打卡所有粉丝牌房间送荧光棒续牌子功能，每个有牌子的房间自动赠送一个荧光棒，防止亲密度下降,点击按钮在界面鱼丸的左侧；
// @note         V0.5.7 修改增加了一些个性的云弹幕，增大火力重开的等待时间为2min，过滤了AI的一些弱智回答，修复innerText为null的bug报错问题；
// @note         V0.5.8 新增感谢弹幕，感谢赠送礼物的人，新增中奖弹幕回复，随机抽取发表中奖感言，新增房间过滤功能，可以过滤不友好的房间，自动跳过此类房间；
// @note         V0.5.9 新增自动领取鱼所有鱼粮的功能，包括上面的泡泡区鱼粮和下面的每日任务与每周任务鱼粮，当刷新页面或跳转网页时自动领取, 也可手动点击鱼丸旁边的鱼粮按钮，可以一键领取鱼丸并自动参与一次小礼物抽奖；
// @note         V0.6.0 新增天威幻神和年度神豪动态弹幕logo，新增房管图标，增加弹幕负载均衡方案，过滤一些AI小白回答，修改了由于斗鱼升级导致的聊天区部分logo图标不显示的问题；
// @note         V0.6.1 增加cdn加速云弹幕接口，由于之前访问github接口太过于频繁，被github限制接口访问速度，所以更新额云弹幕接口为cdn加速，这样可以加速接口访问速度，防止出现不能访问的情况；
// @note         V0.6.2 去除谢礼弹幕，感谢自己的情况，优化log的语言格式，修改车队签到为非聚焦模式Tab打开，不影响用户前台的正常操作,修改@icon的cdn缓存，增设@icon64位图标；
// @note         V0.6.3 增加主播礼物收益显示，增加直播间弹幕数量统计，修改房间真实人数在主播未开播时候的统计,修改直播累计时长为主播开播时间点；
// @note         V0.6.4 优化时间显示，如果不是当日开播则带日期，增加隐藏功能，自动跳转前可以取关，去除遮挡按钮功能的三个斗鱼广告，增加火力分享；
// @note         V0.6.5 紧急修复二合一自动跳转不停止bug,修复快速签到处理有时不响应的bug,签到轮询改为依据网络访问速度自动适应，即队列任务;
// @note         V0.6.6 修复因斗鱼升级导致的火力全开接口失效问题，请求get升级为加密的post请求，修复无手机绑定时鱼塘自动领鱼粮，出现无限弹窗的bug，修改fireinfo的持久化机制；
// @note         V0.6.7 修复二合一功能超过火力等待时间不自动跳转的问题，修复专题直播间极速签到cookie值为空的问题，修复火力跳转cookie为空的问题，清除每日跳转次数的历史数据，新增增加火力等待和跳转上限用户自定义参数；
// @note         V0.6.8 限制机器人回答的长度范围，避免成为百科问答式回答，修改自定义参数礼物答谢和自动取关的功能密码；
// @note         V0.6.9 新增自定义云弹幕功能，用户可到 https://popzoo.github.io/barrage/ 上传自己专属的云弹幕，文件名称要与自己的斗鱼昵称一致，格式为json，上传成功后刷新脚本页面自动采用自制弹幕内容；
// @note         V0.7.0 增加自动取关功能，白嫖抢丸子跑路不关注功能优化了，带牌粉丝牌的房间默认不取关，特殊关注的房间默认不取关，其他房间如果是脚本自动跳转到的房间会默认取消，该功设置为默认功能，取消了隐藏功能；
// @note         V0.7.1 修复因斗鱼更改页面元素导致车队无法自动签到的问题,优化用户更换昵称名的session更新,增加国内公用云弹幕和filter访问加速节点，更改更新机制，优化清除locastorage清除延迟机制；
// @note         V0.7.2 去除了自定义弹幕配置中需要设置AI过滤的配置列表参数，修复二合一开关关闭时，停留在弹幕轰炸无法自动发送弹幕的bug,优化tip提示同行，更新并增加云弹幕文案；
// @note         V0.7.3 新增隐藏功能-关闭幻神特效功能，新增隐藏功能-不符合筛选房间的跳转延迟设置，优化公有弹幕缓存到浏览器，优化绑定状态缓存到浏览器，减少网络接口请求压力，优化火力节点，新增GF版本号对比信息提示；
// @note         V0.7.4 去除@require依赖库，增加了异地账号登陆弹幕连接失败则自动跳转的功能，修复感谢主播弹幕时候出现[求pick，undefined]的bug,增加了可以直接链接到第三方小葫芦的统计平台的按钮图标；
// @note         V0.7.5 修改未开启礼物致谢功能，就发送感谢礼物弹幕的bug；
// @note         V0.8.0 脚本改造升级，由原有单一的火力系统升级为火力系统+粉丝福利社两套系统，两套系统可以通过单选按钮无缝切换。原有开火搜索选框，更改为粉丝福利社抽奖，使用方式与弹幕轰炸和二合一开火+弹幕轰炸方式一样，跳转内容只搜索粉丝福利房间；
// @note         V0.8.1 修复私有弹幕缓存后无法解析的问题，修复二合一开关开启后无限跳转的bug；
// ==/UserScript==

//=============================================================================
//++++++++++++++++++Room Script is main Function+++++++++++++++++++++++++++
//=============================================================================
function roomScript() {
    //=============================================================================
    //++++++++++Common barrage，user can change your own barrage++++++++++++++++
    //=============================================================================
    var arrCommon = ["主播加油💪","好奈斯","点击关注，不会迷路","弹幕冲鸭冲鸭","我来冒个泡","火力全开暴躁起来","小礼物刷起来","一发入魂","支持主播，办卡走一波",
                     "主播彪悍的人生，么得解释","嘤嘤嘤","水军来捧，主播威猛","铁粉驾到，热度必爆","自家人，别误伤","主播贼6！","กิิิิิ荧กิิิิิิิิิิิ光กิิิิิิิิิิิ棒กิิิิิ"]; //common barrage, used with clould common barrage
    var arrPoetry =["山重水复疑无路，关注主播不迷路！","大风起兮云飞扬，弹幕冲兮人满房！","海阔凭鱼跃，弹幕满屏飞！","这是一位神奇的主播，这是一条优质的弹幕"];//refined barrage,used with clould refined barrage;
    const royalTime = 300;//adapt royal effect, don't suggest value less than 100 (ms);
    var fireWait = 60;//if fire power is over,script will wait this value(second) to check whether fire appeared again or redirect；
    var jumpCount = 100;//auto jump times, don't advise the value larger than 120; this may conduct your account to be forbidden by douyu;
    var jumpDelay = 3;//default jump delay setup, (second);
    var tmGap = 10000;//default send barrage time gap (ms);
    var msgTxt, msgBtn, firePowerTime, fireJumpTime, popLoopTime, roomAssignTime;//delay task object;
    var uid = "-", uname="-", shareTM="-", roomId="99999", banRoom=[], banName=[], giftInfoStr="-";//user id，name，roomid, room filter;
    var fireFlag=true,deityFlag=true,welfareFlag=true,thankFlag=false,selfDanmuFlag=false,mixedFlag=false;
    var sbts = (new Date()).getTime();//globle present timestamp
    var tkAdTM = (new Date()).getTime();//thank admin timestamp
    var radioStorage = localStorage.getItem("radioTagStatus🌼🍄🌼")!=null ? localStorage.getItem("radioTagStatus🌼🍄🌼") : "ceaseFire";
    var switchStatus = localStorage.getItem("switchStatus🏮🎎🏮")!=null ? localStorage.getItem("switchStatus🏮🎎🏮") : "off";
    var AIwordFilter = ["机器人"], donatorThank = ["老板大气"], arrWinning = ["哈哈，中奖了"], arrNoPrize = ["又么得中，蓝瘦"];
    //=================================================================================================================================================
    function userConfig(){
        let configInfo = localStorage.getItem("collectUserBarrage");
        if(configInfo!=null && uid !="-"){
            if(configInfo.indexOf("🀄礼物答谢🀄")>-1){// thankFlag = collectArr.indexOf("🀄礼物致谢🀄")>-1?true:false;
                thankFlag=true;
                console.info("获取用户配置-->【开启礼物答谢功能】");
            }
            if(configInfo.indexOf("🀄弹幕混用🀄")>-1){
                mixedFlag=true;
                console.info("获取用户配置-->【AI与私有弹幕混用】");
            }
            if(configInfo.indexOf("🀄关闭幻神🀄")>-1){
                deityFlag = false;
                console.info("获取用户配置-->【关闭幻神特效功能】");
            }else{
                msgBtn.addEventListener("mouseup",clickBtnEvent);//binding mouse event
                document.onkeydown = function(e){e.keyCode==13?clickBtnEvent():false}//binding keybord event
            }
            configInfo = JSON.parse(configInfo);
            configInfo = JSON.parse(configInfo.v);
            var collectArr = [].concat(configInfo[uid]);
            // console.info(collectArr);
            for(let i=collectArr.length-1;i>-1;i--){
                if(collectArr[i].indexOf("🀄跳转上限🀄▶")>-1){//check is digital
                    let jumpCountObj = collectArr[i].substring(collectArr[i].indexOf("▶")+1).replace(/\s/g, '');
                    if(jumpCountObj>0){
                        jumpCount = jumpCountObj;
                        console.info("获取用户配置-->【最大跳转次数:"+jumpCountObj+"次】");
                    }else{
                        alert("🀄跳转上限🀄▶数值错误，请重新配置或删除此值");
                    }
                }else if(collectArr[i].indexOf("🀄结束等待🀄▶")>-1){
                    let fireWaitObj = collectArr[i].substring(collectArr[i].indexOf("▶")+1).replace(/\s/g, '');
                    if(fireWaitObj>0){
                        fireWait = fireWaitObj;
                        console.info("获取用户配置-->【结束等待时间:"+fireWaitObj+"秒】");
                    }else{
                        alert("🀄结束等待🀄▶数值错误，请重新配置或删除此值");
                    }
                }else if(collectArr[i].indexOf("🀄跳转延迟🀄▶")>-1){
                    let jumpDelayObj = collectArr[i].substring(collectArr[i].indexOf("▶")+1).replace(/\s/g, '');
                    if(jumpDelayObj>0){
                        jumpDelay = jumpDelayObj;
                        console.info("获取用户配置-->【跳转延迟时间:"+jumpDelayObj+"秒】");
                    }else{
                        alert("🀄跳转延迟🀄▶数值错误，请重新配置或删除此值");
                    }
                }
            }
        }
    }
    //cloud barrage, public danmu cache, self danmu directly visit
    function cloudBarrage(){
        var roomCategory = document.getElementsByClassName("Title-categoryItem")[1];
        roomCategory = roomCategory.innerText;
        let publicDanmuCache = sessionStorage.getItem("publicDanmuCache🍥💾🍥");
        let selfDanmuCache = sessionStorage.getItem("selfDanmuCache🍥💾🍥");
        if(selfDanmuCache!=null){
            let json = JSON.parse(selfDanmuCache);
            arrCommon = json.通用!=undefined ? [].concat(json.通用) : arrCommon;
            arrCommon = json[roomCategory]!=undefined ? arrCommon.concat(json[roomCategory]) : arrCommon;
            arrPoetry = json.精选!=undefined ? [].concat(json.精选) : arrPoetry;
            donatorThank = json.giftThank!=undefined ? donatorThank.concat(json.giftThank) : donatorThank;
            arrWinning = json.winning!=undefined ? arrWinning.concat(json.winning) : arrWinning;
            arrNoPrize = json.noprize!=undefined ? arrNoPrize.concat(json.noprize) : arrNoPrize;
            console.info("采用缓存私有云弹幕，如您上传或更改了私有弹幕，需要重启浏览器更新缓存！");
            selfDanmuFlag = true;
        }else if(publicDanmuCache!=null){
            let json = JSON.parse(publicDanmuCache);
            arrCommon = json.通用!=undefined ? [].concat(json.通用) : arrCommon;
            arrCommon = json[roomCategory]!=undefined ? arrCommon.concat(json[roomCategory]) : arrCommon;
            arrPoetry = json.精选!=undefined ? [].concat(json.精选) : arrPoetry;
            donatorThank = json.giftThank!=undefined ? donatorThank.concat(json.giftThank) : donatorThank;
            arrWinning = json.winning!=undefined ? arrWinning.concat(json.winning) : arrWinning;
            arrNoPrize = json.noprize!=undefined ? arrNoPrize.concat(json.noprize) : arrNoPrize;
            console.info("采用缓存公用云弹幕，如您上传或更改了私有弹幕，需要重启浏览器更新缓存！");            
        }else{
            getSelfDanmu();
        }
        // personal danmu
        function getSelfDanmu(){
            fetch('https://danmu-1253626683.cos.ap-beijing.myqcloud.com/userDanmu/'+uname+'.json',{
                method: 'GET',
                mode: 'cors',
                cache: 'default',
                credentials: 'omit'
            }).then(res => {
                return res.json();
            }).then(jsonData => {
                let json = jsonData.data;
                arrCommon = json.通用!=undefined ? [].concat(json.通用) : arrCommon;
                arrCommon = json[roomCategory]!=undefined ? arrCommon.concat(json[roomCategory]) : arrCommon;
                arrPoetry = json.精选!=undefined ? [].concat(json.精选) : arrPoetry;
                donatorThank = json.giftThank!=undefined ? donatorThank.concat(json.giftThank) : donatorThank;
                arrWinning = json.winning!=undefined ? arrWinning.concat(json.winning) : arrWinning;
                arrNoPrize = json.noprize!=undefined ? arrNoPrize.concat(json.noprize) : arrNoPrize;
                console.info("已获取到您的专属云弹幕，弹幕初始化完毕！");
                sessionStorage.setItem("selfDanmuCache🍥💾🍥",JSON.stringify(json));//cache danmu
                selfDanmuFlag = true;
            }).catch(err => {
                console.info("没有找到您的专属云弹幕，使用公用云弹幕！");
                getpublicDanmuCoding();
                // console.error('REQUEST ERROR', err);
            })
        }
        // get public cloud danmu domestic
        function getpublicDanmuCoding(){
            GM_xmlhttpRequest({
                method: "GET",
                url: "https://coding.net/u/lvlanxing/p/popzoo/git/raw/master/json/cloudDanmu.json",
                onload: function(response) {
                    if(response.responseText.indexOf("404")==-1){
                        let json = JSON.parse(response.responseText);
                        json = json.data;
                        arrCommon = json.通用!=undefined ? arrCommon.concat(json.通用) : arrCommon;
                        arrCommon = json[roomCategory]!=undefined ? arrCommon.concat(json[roomCategory]) : arrCommon;
                        arrPoetry = json.精选!=undefined ? arrPoetry.concat(json.精选) : arrPoetry;
                        donatorThank = json.giftThank!=undefined ? donatorThank.concat(json.giftThank) : donatorThank;
                        arrWinning = json.winning!=undefined ? arrWinning.concat(json.winning) : arrWinning;
                        arrNoPrize = json.noprize!=undefined ? arrNoPrize.concat(json.noprize) : arrNoPrize;
                        console.info("已获取到公有云弹幕，弹幕初始化完毕！");
                        sessionStorage.setItem("publicDanmuCache🍥💾🍥",JSON.stringify(json));//cache danmu
                    }else{
                        getPublicDanmuAbroad();
                    }
                },
                onerror: function(err){
                    // console.error(err);
                    getPublicDanmuAbroad();
                }
            });
        }
        // public public cloud danmu abroad
        function getPublicDanmuAbroad(){//origin json https://raw.githubusercontent.com/popzoo/barrage/master/danmu.json
            fetch('https://cdn.statically.io/gh/popzoo/barrage/master/danmu.json',{
                method: 'GET',
                mode: 'cors',
                cache: 'default',
                credentials: 'omit',
            }).then(res => {
                return res.json();
            }).then(json => {
                json = json.data;
                arrCommon = json.通用!=undefined ? arrCommon.concat(json.通用) : arrCommon;
                arrCommon = json[roomCategory]!=undefined ? arrCommon.concat(json[roomCategory]) : arrCommon;
                arrPoetry = json.精选!=undefined ? arrPoetry.concat(json.精选) : arrPoetry;
                donatorThank = json.giftThank!=undefined ? donatorThank.concat(json.giftThank) : donatorThank;
                arrWinning = json.winning!=undefined ? arrWinning.concat(json.winning) : arrWinning;
                arrNoPrize = json.noprize!=undefined ? arrNoPrize.concat(json.noprize) : arrNoPrize;
                console.info("已获取到公有云弹幕，弹幕初始化完毕！");
                sessionStorage.setItem("danmuCache🍥💾🍥",JSON.stringify(json));//cache danmu
            }).catch(err => {
                console.error('REQUEST ERROR', err);
            })
        }
    }
    //Capture Barrage to give AI question
    function captureBarrage(){
        let danmuLength = document.getElementsByClassName('Barrage-content').length;
        if ( danmuLength > 2 ) {
            var danmuCount = 1;
            var barrageArr = document.getElementsByClassName('Barrage-content');
            function loopSeek(){
                let danmuMsg = barrageArr[barrageArr.length-danmuCount];//.replace(/\s/g, '')  remove blank tab and change row；
                if(danmuMsg!=undefined && escape(danmuMsg.innerText).indexOf( "%u" )!=-1 && danmuMsg.innerText.length>3 ){//judge str is chinese
                    robotAIChat(danmuMsg.innerText.trim());
                }else{
                    if(danmuCount<= Math.min(20, danmuLength)){//capture lastest 20 items danmu
                        danmuCount++;
                        loopSeek();
                    }else{
                        bombBarrage();
                        return;
                    }
                }
            }
            loopSeek();
        }else{
            bombBarrage();
        }
    }
    //AI chat function，140 million relations entity
    function robotAIChat(question){
        let appid = "&appid=e231f81cd82f994e2843c870f391ac7c";
        fetch('https://api.ownthink.com/bot?spoken='+question+appid).then(res => {
            return res.json();
        }).then(json => {
            if(json.message=="success" && json.data.type==5000){
                json = json.data.info.text;//filter AI stupid answer
                var sendflag = false;
                if(json.length<33){//filter AI too long answer
                    for(let i=0;i<AIwordFilter.length;i++){
                        if(json.indexOf(AIwordFilter[i])>-1){
                            sendflag = true;
                            break;
                        }
                    }
                }else{
                    sendflag = true;
                }
                if(sendflag){
                    bombBarrage();
                }else{
                    msgTxt.value = json;
                    msgBtn.click();
                    console.info("小思弹幕,时间间隔<"+((new Date()).getTime() - sbts)/1000+"s>【问】" + question +"【答】" + json);
                    clickBtnEvent();
                }
            }else{
                bombBarrage();
            }
        }).catch(err => {
            bombBarrage();//protect running from AI robot death
            console.warn('REQUEST ERROR', err);
        })
    }
    //Send Barrage
    function bombBarrage(){
        let probNum = parseInt(Math.random() * 5);
        if(probNum == 0 && thankFlag){//thankful barrage
            let fireMaker = document.querySelector(".FirePowerChatModal-roomAdminTitle");
            if(fireMaker!= null && fireMaker.innerText.indexOf("发起了火力全开") >-1 ){
                let reg = new RegExp(" 发起了火力全开");//remove word
                let makerName = fireMaker.innerText.replace(reg,"");
                if((new Date()).getTime() - tkAdTM >160 *1000 && makerName.indexOf(uname) ==-1){//filter myself admin
                    msgTxt.value = "感谢房管@"+makerName+"的火力丸子，"+ donatorThank[parseInt(Math.random()*donatorThank.length)];
                    console.info("感谢房管,时间间隔<"+((new Date()).getTime() - sbts)/1000+"s>" + msgTxt.value);
                    tkAdTM = (new Date()).getTime();
                }else{
                    msgTxt.value = arrCommon[parseInt(Math.random() * arrCommon.length)];
                    console.info("普通弹幕,时间间隔<"+((new Date()).getTime() - sbts)/1000+"s>" + msgTxt.value);
                }
            }else{
                msgTxt.value = arrPoetry[parseInt(Math.random() * arrPoetry.length)];
                console.info("精选弹幕,时间间隔<"+((new Date()).getTime() - sbts)/1000+"s>" + msgTxt.value);
                // console.info("求主播pick,时间间隔<"+((new Date()).getTime() - sbts)/1000+"s>" + msgTxt.value);
            }
        }else if(probNum == 1){
            msgTxt.value = arrPoetry[parseInt(Math.random() * arrPoetry.length)];
            console.info("精选弹幕,时间间隔<"+((new Date()).getTime() - sbts)/1000+"s>" + msgTxt.value);
        }else{
            msgTxt.value = arrCommon[parseInt(Math.random() * arrCommon.length)];
            console.info("普通弹幕,时间间隔<"+((new Date()).getTime() - sbts)/1000+"s>" + msgTxt.value);
        }
        msgBtn.click();
        clickBtnEvent();
    }
    // gift thank barrage
    function giftTankBarrage(isFire){
        let giftBannerList = document.querySelector(".BarrageBanner").children;//include Banner4gift and Banner4noble
        if(thankFlag && giftBannerList.length>0 && radioStorage === "bombFire"){
            for(let i=0;i<giftBannerList.length;i++){
                let giftBanner = giftBannerList.item(i);
                if(giftBanner!=undefined){
                    // &&(giftBanner.innerText.indexOf("飞机")>-1 || giftBanner.innerText.indexOf("火箭")>-1 || giftBanner.innerText.indexOf("超级火箭")>-1 || giftBanner.innerText.indexOf("办卡")>-1)
                    let giftWords = "感谢"+giftBanner.innerText.replace(/\s/g, '')+"，";//remove blank and tab
                    if(giftInfoStr.indexOf(giftWords)==-1 && giftWords.indexOf(uname)==-1){//remove redupication and filter myself donate gift situation
                        giftWords += donatorThank[parseInt(Math.random()* donatorThank.length)];
                        msgTxt.value = giftWords;
                        msgBtn.click();
                        jsonAnalytics(0);
                        giftInfoStr = (giftWords + giftInfoStr).substr(0,120);
                        if(isFire!=undefined){
                            console.info("谢礼弹幕,时间间隔<"+((new Date()).getTime() - sbts)/1000+"s>" + giftWords);
                            clickBtnEvent();
                        }else{
                            console.info("谢礼弹幕,停止累计<"+((new Date()).getTime() - sbts)/1000+"s>" + giftWords);
                            setTimeout(function(){royalChatEffect()}, royalTime);
                            setTimeout(function(){screenEmpireBarrage()}, royalTime);
                        }
                        return false;//only thanks to nearest one piece of donator
                    }
                }
            }
        }
        return true;
    }
    //winning barrage
    function awardBarrage(){
        var awardRecord = document.querySelector(".FirePowerRewardModal-rewardList");
        if(awardRecord!=null){
            if(awardRecord.innerText.indexOf(uname)!=-1){
                msgTxt.value = arrWinning[parseInt(Math.random()*arrWinning.length)];
            }else{
                msgTxt.value = arrNoPrize[parseInt(Math.random()*arrNoPrize.length)];
            }
            console.info("中奖弹幕,时间间隔<"+((new Date()).getTime() - sbts)/1000+"s>" + msgTxt.value);
            msgBtn.click();
            clickBtnEvent();
            document.querySelector(".FirePowerRewardModal-close")!=null? document.querySelector(".FirePowerRewardModal-close").click(): true; //close award list
        }
    }
    //Get last own barrage position Gap
    function countBarrageGap(num){
        var gapFlag = true;
        var count = 0;
        var chatList = document.getElementsByClassName("Barrage-listItem");
        for(let i= chatList.length-1; i>-1;i--){
            if(chatList[i].innerText.indexOf("您的账号在另一地点登录，弹幕连接已断开")>-1){
                jumpDelayConfig();//jump to another room
                break;
            }
            let lastGap = chatList.length - i -1;
            if(chatList[i].innerHTML.indexOf("is-self")!=-1 ){
                if(lastGap>= num){
                    gapFlag = true;
                    break;
                } else{
                    gapFlag = false;
                    console.info("弹幕等候,距自己上条弹幕间隔数:" + lastGap+"/"+num );
                    break;
                }
            }
            if(count===5){//at most loop 5 times
                break;
            }else{
                count++;
            }
        }
        return gapFlag;
    }
    // controller to send barrage and listen fire power activity
    function firePowerController() {
        let fireCheck = document.getElementsByClassName("FirePowerChatModal-Notice")[0];
        if(giftTankBarrage(fireCheck)){//gift thank barrage,should be pre
            if ( fireCheck != undefined && awardJudge() && !joinCondition() && !banSpeak() ) {
                let num = parseInt(Math.random()*4) + 2; //random to wait 2~5 barrage gap
                if(radioStorage === "bombFire" && countBarrageGap(num) && !nameFilter()){
                    if(selfDanmuFlag){
                        mixedFlag ? captureBarrage() : bombBarrage();
                    }else{
                        captureBarrage();
                    }
                    jsonAnalytics(0);
                }
                if(fireFlag){
                    shareFirePowerInfo();
                    fireFlag=false;
                }
            } else {
                if(!fireFlag){
                    sbts = (new Date()).getTime();
                    fireFlag=true;
                }
                if( (new Date()).getTime() - sbts < 1000*30 ){
                    awardBarrage();//winning barrage
                }
                console.info("火力弹幕停止,时间累计："+ ((new Date()).getTime() - sbts)/1000 + "s" );
                if( (radioStorage === "bombFire" && switchStatus==="on") && ((new Date()).getTime() - sbts) > 1000 * fireWait && getDailyRedirect() < parseInt(jumpCount)){//如果超过*分钟没有开火，则跳转！
                    if(cancelFollowRoom()){
                        popupToast("《火力搜寻跳转》<br>已超过"+fireWait+"s没重开火力<br>跳转前将取关<br>浮窗关闭后跳转！", 3)
                        msgTxt.value = "#取关";
                        msgBtn.click();
                    }else{
                        popupToast("《火力搜寻跳转》<br>已超过"+fireWait+"s没重开火力<br>浮窗关闭后跳转！", 3);
                    }
                    fireJumpTime = setTimeout(randomFireRequest,3500);
                }
            }
        }
        randomTime();
    }
    //random barrage time
    function randomTime(){
        let tmRandom = tmGap + parseInt(Math.random()*1500);
        if(radioStorage==="openFire"){
            firePowerTime = setTimeout(welfareController, tmRandom);
        }else{
            firePowerTime = setTimeout(firePowerController, tmRandom);
        }
    }
    //Seek Fire Power Room
    function randomFireRequest() {
        if(switchStatus==="on" && getDailyRedirect()>=parseInt(jumpCount)){
            popupToast("《二合一功能受限》<br>今日自动跳转已达上限("+jumpCount+"次)<br>若要继续跳转请开启隐藏功能", 3);
        }else{
            fetch('https://www.douyu.com/japi/firepower/apinc/activeTask/getRecRid', {
                method: 'POST',
                mode: 'no-cors',
                credentials: 'include',
                headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"},
                body: "token="+getEffectCookie("acf_ccn")
            }).then(result => {
                return result.json();
            }).then(json => {
                fireRequestFilter(json.data);
            }).catch(err => {
                console.error('REQUEST ERROR', err);
            })
        }
    }
    //Fire Power Room Filter
    function fireRequestFilter(fireUrl) {
        if(!roomFilter(fireUrl)){
            var myRequest = new Request('https://www.douyu.com/swf_api/h5room/'+fireUrl);
            fetch(myRequest).then(function(response) {
                return response.json().then(function(json) {
                    var jsonData = json.data;
                    console.info("主播昵称:【"+jsonData.nickname+"】+++游戏名称:【" + jsonData.game_name+"】+++跳转链接=>https://www.douyu.com/"+fireUrl);
                    if (jsonData.game_name.indexOf("一起看") == -1 && jsonData.game_name.indexOf("二次元") == -1 && jsonData.game_name.indexOf("户外") == -1 && jsonData.game_name.indexOf("汽车") == -1) {
                        fetch('https://bojianger.com/data/api/common/search.do?keyword='+fireUrl, {
                            method: 'GET',
                            mode: 'cors',
                            cache: 'default',
                            credentials: 'omit'
                        }).then(result => {
                            return result.text();
                        }).then(txt => {
                            let json = JSON.parse(txt);
                            let peopleNum = json.data.anchorVo.audience_count;
                            if(peopleNum<5000){//if room people is larger than * and then redirect new one
                                fireUrl = "https://www.douyu.com/" + fireUrl;
                                let dailyJumpTimes = getDailyRedirect();
                                dailyJumpTimes!=-1 ? localStorage.setItem((new Date()).toLocaleDateString() + "📱🌐📱[" + uname + "]", 1+dailyJumpTimes):false;
                                window.location.href = fireUrl;
                            }else{
                                randomFireRequest();
                            }
                        }).catch(err => {
                            console.error('REQUEST ERROR', err);
                        })
                    } else {
                        randomFireRequest();
                    }
                });
            });
        }else{
            randomFireRequest();
        }
    }
    //===============================================================
    //====================== welfare lottory ========================
    //===============================================================
    var pageNum = sessionStorage.getItem("pageNum🎗📑🎗")!=null ? sessionStorage.getItem("pageNum🎗📑🎗") : 1;
    function randomWelfareRequest(){
        if(switchStatus==="on" && getDailyRedirect()>=parseInt(jumpCount)){
            popupToast("《二合一功能受限》<br>今日自动跳转已达上限("+jumpCount+"次)<br>若要继续跳转请开启隐藏功能", 3);
        }else{
            fetch('https://www.douyu.com/japi/weblist/apinc/rec/lottery?num=1&page='+pageNum,{
                method: 'GET',
                mode: 'cors',
                cache: 'default',
                credentials: 'include'
            }).then(res => {
                return res.json();
            }).then(json => {
                var welFareList = json.data;
                if(welFareList[0]!=undefined && pageNum<50){
                    pageNum = parseInt(pageNum)+1;
                    sessionStorage.setItem("pageNum🎗📑🎗",pageNum);
                    if((welFareList[0].roomName.indexOf("鱼翅")>-1||welFareList[0].roomName.indexOf("元")>-1) && !roomFilter(welFareList[0].roomId)){//include cash and red pack
                        console.info(welFareList[0]);
                        let dailyJumpTimes = getDailyRedirect();
                        dailyJumpTimes!=-1 ? localStorage.setItem((new Date()).toLocaleDateString() + "📱🌐📱[" + uname + "]", 1+dailyJumpTimes):false;                    
                        window.location.href = "https://www.douyu.com/"+welFareList[0].roomId;
                    }else{
                        randomWelfareRequest();//callback itself
                    }
                }else{
                    pageNum = 1;
                    sessionStorage.setItem("pageNum🎗📑🎗",pageNum);
                    randomWelfareRequest();//uneffective and recycle from beginning
                }
            }).catch(err => {
                // console.error('REQUEST ERROR', err);
                pageNum = 1;
                sessionStorage.setItem("pageNum🎗📑🎗",pageNum);
                randomWelfareRequest();//uneffective and recycle from beginning
            })
        }
    }

    function welfareFilter(){
        let welfareEntrance = document.getElementsByClassName("LotteryDrawEnter-enter")[0];
        if(welfareEntrance!=undefined && document.getElementsByClassName("ULotteryStart-topMain")[0]==undefined){
            welfareEntrance.click();//get Lottery window info
        }
        let welfareObj = document.getElementsByClassName("ULotteryStart-topMain")[0];//need delay?
        welfareObj!=undefined ? console.info(welfareObj.innerText.replace(/\s/g, '|')):false;
        if(welfareObj !=undefined && welfareObj.innerText.indexOf("参与条件：发弹幕+关注主播")>-1){
            console.info("符合参与🎰条件！");
            welfareController();
        }else{
            if(switchStatus==="on"){ // console.info("无福利社🎰活动");
                jumpDelayConfig();//directly jump
            }else{
                welfareController();
            }
        }
        let closeObj = document.getElementsByClassName("LotteryContainer-close")[0];
        closeObj != undefined ? closeObj.click() : false;

    }
    // welfare controller
    function welfareController(){
        let welfareEntrance = document.getElementsByClassName("LotteryDrawEnter-enter")[0];
        if(welfareEntrance!=undefined && document.getElementsByClassName("ULotteryStart-topMain")[0]==undefined){
            welfareEntrance.click();//get Lottery window info
        }
        let welfareObj = document.getElementsByClassName("ULotteryStart-topMain")[0];
        // document.getElementsByClassName("LotteryContainer")[0].style.display = "none";
        if(welfareObj !=undefined && welfareObj.innerText.indexOf("参与条件：发弹幕+关注主播")>-1){
            welfareObj = welfareObj.innerText.replace(/\s/g, '|');
            let remainTime = welfareEntrance.innerText.split(":");
            remainTime = parseInt(remainTime[0]) * 60 + parseInt(remainTime[1]);
            let joinBtn = document.getElementsByClassName("ULotteryStart-joinBtn is-disabled")[0];//join in activity
            if(joinBtn!=undefined){
                let danmuContent = document.getElementsByClassName("ULotteryStart-demandDanmu")[0].innerText;
                danmuContent = danmuContent.substring(danmuContent.indexOf("弹幕：")+3, danmuContent.indexOf("复制"));
                let num = parseInt(Math.random()*5) + 2; // send danmu, random to wait 2~6 barrage gap
                if(countBarrageGap(num) && !banSpeak() && !nameFilter()){
                    msgTxt.value = danmuContent;
                    msgBtn.click();
                    console.info("福利抽奖,时间间隔<"+((new Date()).getTime() - sbts)/1000+"s>" + danmuContent);
                    clickBtnEvent();
                    jsonAnalytics(0);
                }                
            }else{
                document.getElementsByClassName("ULotteryStart-joinBtn")[0].click();//primary time to join in activity
            }
            if(welfareFlag){//put info
                let avatar = document.getElementsByClassName("Title-anchorPicBack")[0].getElementsByTagName("img")[0].getAttribute("src");
                let sendMsg = {"roomId":roomId,"donator":uname,"avatar":avatar,"sendTime":new Date().getTime(),"remainTime":remainTime,"content":welfareObj};
                getFireCOS(sendMsg);
                welfareFlag = false;
            }
        }else{
            if(!welfareFlag){
                welfareFlag = true;
            }
            console.info("福利弹幕停止,时间累计："+((new Date()).getTime() - sbts)/1000+"s");
            if(radioStorage==="openFire" && switchStatus==="on" && ((new Date()).getTime() - sbts) > 1000 * fireWait && getDailyRedirect() < parseInt(jumpCount)){
                if(cancelFollowRoom()){
                    popupToast("《粉丝福利跳转》<br>已超过"+fireWait+"s没重开福利<br>跳转前将取关<br>浮窗关闭后跳转！", 3)
                    msgTxt.value = "#取关";
                    msgBtn.click();
                }else{
                    popupToast("《粉丝福利跳转》<br>已超过"+fireWait+"s没重开福利<br>3秒后自动跳转！", 3);
                }
                fireJumpTime = setTimeout(randomWelfareRequest,3500);
            }
        }
        // close Lottery
        let closeObj = document.getElementsByClassName("LotteryContainer-close")[0];
        closeObj != undefined ? closeObj.click() : false;
        randomTime(); 
    }
    //============================================ 
    // binding fire btn event
    function fireBtnBinding(){
        if(radioStorage ==="openFire"){
            randomWelfareRequest();
        }else{
            randomFireRequest();
        }
    }
    //Binding God Barrage
    function clickBtnEvent(){
        sbts = (new Date()).getTime();
        if(deityFlag){
            setTimeout(function(){royalChatEffect()}, royalTime);
            setTimeout(function(){screenEmpireBarrage()}, royalTime);
        }
    }    
    //===============================================================
    //++++++++++++++++++++++ God Chat Effect +++++++++++++++++++++++
    //===============================================================
    function royalChatEffect() {
        let barrageArr = document.getElementsByClassName('Barrage-listItem');
        if (barrageArr.length > 1) {
            for (let i = barrageArr.length - 1; i >-1; i--) {
                if (barrageArr[i].lastElementChild != null && barrageArr[i].lastElementChild.innerHTML.indexOf("Barrage-nobleImg") == -1 && barrageArr[i].lastElementChild.innerHTML.indexOf("is-self") != -1) {//not null，remove reduplicttion，find self
                    // revise father element class
                    barrageArr[i].className = "Barrage-listItem js-noblefloating-barrage";
                    let chatArea = barrageArr[i].lastElementChild;
                    chatArea.className = "js-noblefloating-barragecont Barrage-notice--noble";
                    chatArea.setAttribute('style','background-color: #fff3df');
                    // revise nickname class
                    let nickNameObj = chatArea.getElementsByClassName("Barrage-nickName")[0];
                    nickNameObj.setAttribute('class','Barrage-nickName is-self js-nick');//here need reserved is-self
                    //add motorcade flag, already remove reduplication
                    let motorFlagObj = chatArea.querySelector(".Motor");
                    if(motorFlagObj==null){
                        let iconTag = document.createElement("span");
                        iconTag.className = "Motor"
                        iconTag.setAttribute("title","中");
                        iconTag.setAttribute("data-motorcade","中");
                        iconTag.setAttribute("style","background-image:url(https://img.douyucdn.cn/data/yuba/admin/2019/01/07/201901071437499042327937962.png)");
                        let iconSpan = document.createElement("span");
                        iconSpan.className = "Motor-flag";
                        iconSpan.innerText = "中"
                        iconTag.appendChild(iconSpan);
                        chatArea.insertBefore(iconTag,nickNameObj);
                    }
                    //tranform user level
                    let userLevelObj = chatArea.querySelector(".UserLevel");
                    if( userLevelObj!=null){
                        userLevelObj.className = "UserLevel UserLevel--120";
                        userLevelObj.setAttribute("title", "用户等级：120");
                    }
                    // revise or create Room element unless no room level
                    let roomLevelObj = chatArea.querySelector(".RoomLevel");
                    if( roomLevelObj!=null){
                        roomLevelObj.className = "RoomLevel RoomLevel--18";
                        roomLevelObj.setAttribute("title","房间等级：18");
                    }else{
                        let roomTag = document.createElement("span");
                        roomTag.className ="RoomLevel RoomLevel--18";
                        roomTag.setAttribute("title","房间等级：18");
                        chatArea.insertBefore(roomTag,motorFlagObj);
                    }
                    // barrage color
                    let barrageColorObj = chatArea.querySelector(".Barrage-content");
                    if(barrageColorObj !=null){
                        barrageColorObj.className = "Barrage-content Barrage-content--color0";//red color
                    }
                    // add king-hao dynamic logo
                    let kingIconUrl = ["https://sta-op.douyucdn.cn/douyu/412bc7d49e40c245a0b140b8d2ae5f2db420e36c.gif","https://sta-op.douyucdn.cn/douyu/3d416f83fb2de6e4e8de5ce4e24b424e4eccc705.gif",
                                       "https://sta-op.douyucdn.cn/douyu/7ac49673ae22983ca626a55a607e39ef0d3df5f0.gif","https://sta-op.douyucdn.cn/douyu/6467a61a8e57944b09ddb68a7673c9f6164335e9.gif",
                                       "https://cs-op.douyucdn.cn/dy-activity/2017/12/20/a7e16d5efd74e3b6bc82ff690c387c95.gif","https://sta-op.douyucdn.cn/dy-activity/2018/08/02/cf7ae36b23d47cc0bd0762d1776b7a6f.gif",
                                       "https://cs-op.douyucdn.cn/dy-activity/2018/06/27/4855683291eb04fae38a73003946fd1b.gif","https://cs-op.douyucdn.cn/dy-activity/2018/06/27/ba0d92fc83b0f34c378ef81e21325fe0.gif",
                                       "https://sta-op.douyucdn.cn/dy-activity/2018/09/11/939a31aa442d07da9133987d18191d75.gif","https://sta-op.douyucdn.cn/dy-activity/2019/01/30/3443c9004fa48fee0bb00f906a168246.gif",
                                       "https://sta-op.douyucdn.cn/douyu/0b9f31cf073fa88c1daade3a08252f90bdd18a0a.gif"]//honor hao, king hao||bumie god,tianwei God||hao first,shark queen||shark general,shark command||annually hao old, loving day ||annually hao
                    let tailTagObj = chatArea.querySelector(".Baby");
                    if(tailTagObj != null){
                        let kingIconImg = document.createElement("img");
                        kingIconImg.setAttribute("class","Baby-image is-achievement");
                        kingIconImg.setAttribute("src",kingIconUrl[parseInt(Math.random()*kingIconUrl.length)]);
                        // kingIconImg.setAttribute("data-achievementid","213");
                        tailTagObj.insertBefore(kingIconImg,tailTagObj.firstElementChild);
                    }else{
                        let signTag = document.createElement("a");
                        signTag.setAttribute("class","Baby");
                        let kingIconImg = document.createElement("img");
                        kingIconImg.setAttribute("class","Baby-image is-achievement");
                        kingIconImg.setAttribute("src",kingIconUrl[parseInt(Math.random()*kingIconUrl.length)]);
                        // kingIconImg.setAttribute("data-achievementid","188");
                        signTag.appendChild(kingIconImg);
                        let fireIconObj = chatArea.getElementsByClassName("FirePowerIcon")[0];
                        fireIconObj!=undefined? chatArea.insertBefore(signTag,fireIconObj): chatArea.appendChild(signTag);
                    }
                    // add fans medal without redupliction remove
                    let fansMedalName = document.getElementsByClassName("FansMedal-name")[0];//fans medal
                    let fansBackgroundImg = document.getElementsByClassName("FansRankList-item FansRankList-item--top")[0];
                    if(fansMedalName!=undefined && roomId!=undefined && fansBackgroundImg!= undefined ){
                        if(fansBackgroundImg.innerHTML.indexOf("background-image:")==-1){//common fans medal
                            let fansTag = document.createElement("div");
                            let fansSpan = document.createElement("span");
                            fansTag.className="FansMedal level-30 js-fans-dysclick Barrage-icon";
                            fansTag.setAttribute("data-rid",roomId);//id is same to roomId
                            fansSpan.className = "FansMedal-name js-fans-dysclick";
                            fansSpan.setAttribute("data-rid",roomId);
                            fansSpan.innerHTML = fansMedalName.innerText;
                            fansTag.appendChild(fansSpan);
                            chatArea.insertBefore(fansTag,chatArea.firstElementChild);
                        }else{//special fans medal
                            let fansTag1 = document.createElement("div");
                            fansTag1.className="FansMedal is-made js-fans-dysclick Barrage-icon";
                            fansTag1.setAttribute("style", fansBackgroundImg.getElementsByClassName("FansMedal is-made")[0].getAttribute("style") );
                            fansTag1.setAttribute("data-rid",roomId);
                            let fansSpan1 = document.createElement("span");
                            fansSpan1.className = "FansMedal-name js-fans-dysclick";
                            fansSpan1.setAttribute("data-rid",roomId);
                            fansSpan1.innerHTML = fansMedalName.innerText;
                            fansTag1.appendChild(fansSpan1);
                            chatArea.insertBefore(fansTag1,chatArea.firstElementChild);
                        }
                    }else{//point to a fans medal when room have none of fans medal
                        let fansTag2 = document.createElement("div");
                        fansTag2.className="FansMedal is-made js-fans-dysclick Barrage-icon";
                        fansTag2.setAttribute("style","background-image: url('https://gfs-op.douyucdn.cn/fans_medal_resource/2019/07/12/5a5efaca4d1250413ed9c3c36438f6cb.gif')");
                        fansTag2.setAttribute("data-rid","4615502");
                        let fansSpan2 = document.createElement("span");
                        fansSpan2.className = "FansMedal-name js-fans-dysclick";
                        fansSpan2.setAttribute("data-rid","4615502");
                        fansSpan2.innerHTML = "猪叫团";
                        fansTag2.appendChild(fansSpan2);
                        chatArea.insertBefore(fansTag2,chatArea.firstElementChild);
                    }
                    //add noble logo,if you have this identity,this will be not display
                    let nobleIconObj = barrageArr[i].getElementsByClassName("Barrage-icon Barrage-noble")[0];
                    if(nobleIconObj == undefined){//noble logo
                        let royalTag = document.createElement("span");
                        let royalImg = document.createElement("img");
                        royalTag.className = "Barrage-icon Barrage-noble";
                        royalImg.className = "Barrage-nobleImg";
                        royalImg.setAttribute("src", "//res.douyucdn.cn/resource/2019/08/15/common/4e85776071ffbae2867bb9d116e9a43c.gif");
                        royalImg.setAttribute("title", "幻神");
                        royalTag.appendChild(royalImg);
                        chatArea.insertBefore(royalTag, chatArea.firstElementChild);
                    }
                    // add admin logo,if you have this identity,this will be not display
                    let adminIconObj = barrageArr[i].getElementsByClassName("Barrage-icon Barrage-icon--roomAdmin")[0];
                    if(adminIconObj == undefined){
                        let adminTag = document.createElement("span");
                        adminTag.setAttribute("class","Barrage-icon Barrage-icon--roomAdmin");
                        chatArea.insertBefore(adminTag, chatArea.firstElementChild);
                    }
                    break;//avoid cpu resource wasted
                }
            }
        }
    }

    //===============================================================
    //+++++++++++++++++++++++++god scroll effect+++++++++++++++++++
    //===============================================================
    function screenEmpireBarrage(){
        let fatherNode = document.querySelector(".danmu-6e95c1");
        for(let i = fatherNode.children.length-1;i>=0;i--){
            if(fatherNode.children[i].className.indexOf("noble-bf13ad")==-1 && fatherNode.children[i].innerHTML.indexOf("border: 2px solid rgb(2, 255, 255)")!=-1){//find self and remove redupliction
                //transform parent node
                let liStyle = fatherNode.children[i].getAttribute("style");
                let characterLength = liStyle.substring(liStyle.indexOf("translateX(-")+12,liStyle.indexOf("px); transition"));
                let transformLength = liStyle.substring(liStyle.indexOf("transform ")+10,liStyle.indexOf("s linear"));
                let screenOpacity = liStyle.substring(liStyle.indexOf("opacity:")+8,liStyle.indexOf("; z-index:"));
                let characterStyle = "opacity: "+ screenOpacity +"; z-index: 30; background: rgba(0, 0, 0, 0); top: 4px; transform: translateX(-"+ characterLength +"px); transition: transform "+ transformLength +"s linear 0s;"
                fatherNode.children[i].className = "danmuItem-31f924 noble-bf13ad";
                fatherNode.children[i].setAttribute("style",characterStyle);
                //noble icon without redupliction remove
                let nobleImgTag = document.createElement("img");
                nobleImgTag.className = "super-noble-icon-9aacaf";
                nobleImgTag.setAttribute("src","https://shark2.douyucdn.cn/front-publish/live_player-master/assets/images/h1_dcd226.png");
                nobleImgTag.setAttribute("style","margin-left: -57px; margin-top: -4px;");
                fatherNode.children[i].insertBefore(nobleImgTag,fatherNode.children[i].firstElementChild);
                //user avatar img
                let userIconTag = document.createElement("img");
                userIconTag.className = "super-user-icon-574f31";
                let userIconObj = document.getElementsByClassName("Avatar is-circle")[0];
                if(userIconObj !=undefined){
                    userIconObj = userIconObj.getElementsByTagName("img")[0].getAttribute("src");
                    userIconTag.setAttribute("src", userIconObj.replace((new RegExp("_middle")),"_small"));
                }else{
                    console.error("未能获取到用户头像");
                }
                fatherNode.children[i].insertBefore(userIconTag,fatherNode.children[i].firstElementChild);
                //remove out tail tag
                let tailTag = fatherNode.children[i].getElementsByClassName("afterpic-8a2e13")[0];
                tailTag.remove();
                //transform barrage effect
                let textContent = fatherNode.children[i].getElementsByClassName("text-879f3e")[0];
                textContent.className = "super-text-0281ca";
                textContent.setAttribute("style","font: bold 23px SimHei, 'Microsoft JhengHei', Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); background: url('https://shark2.douyucdn.cn/front-publish/live_player-master/assets/images/h2_8e5e64.png'); height: 44px;");
                //add tag tail includes fire icon or sign icon
                let afterpicTag = document.createElement("div");
                afterpicTag.setAttribute("class","afterpic-8a2e13");
                afterpicTag.setAttribute("style","margin-top: 7px; margin-left: -1px;");// afterpicTag.setAttribute("style","margin-top: 7px; margin-left: -43px;");
                if(document.querySelector(".FirePowerChatModal-Notice")==null){//add sign icon
                    let signImg = document.createElement("img");
                    signImg.setAttribute("class","afterpic-8a2e13");
                    let signImgUrl = ["https://shark2.douyucdn.cn/front-publish/live_player-master/assets/images/lucky_c5d02e.png","https://shark2.douyucdn.cn/front-publish/live_player-master/assets/images/first_e511ac.png"];
                    signImg.setAttribute("src",signImgUrl[parseInt(Math.random()*2)]);
                    signImg.setAttribute("style","width: 28.8px; height: 28.8px;");
                    afterpicTag.appendChild(signImg);
                }else{//add fire icon
                    let fireImg = document.createElement("img");
                    fireImg.setAttribute("class","afterpic-8a2e13");
                    fireImg.setAttribute("src","https://shark2.douyucdn.cn/front-publish/live_player-master/assets/images/hlqk_61648e.svg");//fire
                    fireImg.setAttribute("style","width: 28.8px; height: 28.8px;");//margin-left: -42px;
                    afterpicTag.appendChild(fireImg);
                }
                textContent.appendChild(afterpicTag);
                //tail icon
                let superTailImg = document.createElement("img");
                superTailImg.className = "super-tail-bffa58";
                superTailImg.setAttribute("src","https://shark2.douyucdn.cn/front-publish/live_player-master/assets/images/h3_fd2e5b.png");
                fatherNode.children[i].appendChild(superTailImg);
            }
        }
    }
    //===============================================================
    //++++++++++++++++Add CSS Style and Btn UI+++++++++++++++++++++
    //===============================================================
    function createUIElement(){
        // create css style priority to run,radio is checkbox，dfn is tip style, modle_toast is week alert,mui is switch style
        var radioStyle = document.createElement('style');
        radioStyle.type = 'text/css';
        radioStyle.innerHTML = (function(){/*
        .radio{display:inline-block;position: relative;line-height: 18px;margin-right: 8px;cursor: pointer;}
        .radio input{display: none;}
        .radio .radio-bg{display: inline-block;height: 18px;width: 18px;margin-right: 0px;padding:;background-color: #45bcb8;border-radius: 100%;vertical-align: top;box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1) inset, 0 1px 4px rgba(0, 0, 0, 0.1) inset, 1px -1px 2px rgba(0, 0, 0, 0.1);cursor: pointer;transition: all 0.2s ease;}
        .radio .radio-on{display: true;}
        .radio input:checked + span.radio-on{width: 10px;height: 10px;position: absolute;border-radius: 100%;background: #FFFFFF;top: 4px;left: 4px;box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.3), 0 0 1px rgba(255, 255, 255, 0.4) inset;background-image: linear-gradient(#ffffff 0, #e7e7e7 100%);transform: scale(0, 0);transition: all 0.2s ease;transform: scale(1, 1);display: inline-block;}
        dfn {padding: 0 0.4em;cursor: help;font-style: normal;position: relative;}
        dfn::after {content: attr(data-info);display: inline;white-space: pre-wrap;z-index: 999;border-radius: 4px;position: absolute;top: 22px; left: 0;opacity: 0;width: 310px;font-size: 13px;font-weight: 300;line-height: 1.5em;padding: 0.5em 0.8em;background: rgba(0,0,0,0.8);color: #fff;pointer-events: none;transition: opacity 150ms, top 150ms;}
        dfn::before {content: '';display: block;position: absolute;top: 12px; left: 20px;opacity: 0;width: 0; height: 0;border: solid transparent 5px;border-bottom-color: rgba(0,0,0,0.8);transition: opacity 150ms, top 150ms;}
        dfn:hover {z-index: 200;}
        dfn:hover::after,
        dfn:hover::before {opacity: 1;}
        dfn:hover::after {top: 30px;}
        dfn:hover::before {top: 20px;}
        .model_toast {width: 452px;background: rgba(0,0,0,.5);border-radius: 8px;text-align: center;position: fixed;top: 50%;left: 50%;margin-top: -120px;margin-left: -226px;}
        .model_toast .popup-toast {padding: 38px 40px;text-align: center;font-size: 16px;color: #fff;z-index: 300;}
        .mui-switch {margin:16px 0;width: 52px;height: 31px; position: relative;border: 1px solid #dfdfdf;background-color: #fdfdfd;box-shadow: #dfdfdf 0 0 0 0 inset;border-radius: 20px;border-top-left-radius: 20px;border-top-right-radius: 20px;border-bottom-left-radius: 20px;border-bottom-right-radius: 20px;background-clip: content-box;display: inline-block;-webkit-appearance: none;user-select: none;outline: none; }
        .mui-switch:before {content: '';width: 29px;height: 29px;position: absolute;top: 0px;left: 0;border-radius: 20px;border-top-left-radius: 20px;border-top-right-radius: 20px;border-bottom-left-radius: 20px;border-bottom-right-radius: 20px;background-color: #fff;box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4); }
        .mui-switch:checked {border-color: #64bd63;box-shadow: #64bd63 0 0 0 16px inset;background-color: #64bd63; }
        .mui-switch:checked:before {left: 21px; }
        .mui-switch.mui-switch-anim {transition: border cubic-bezier(0, 0, 0, 1) 0.4s, box-shadow cubic-bezier(0, 0, 0, 1) 0.4s; }
        .mui-switch.mui-switch-anim:before {transition: left 0.3s; }
        .mui-switch.mui-switch-anim:checked {box-shadow: #64bd63 0 0 0 16px inset;background-color: #64bd63;transition: border ease 0.4s, box-shadow ease 0.4s, background-color ease 1.2s; }
        .mui-switch.mui-switch-anim:checked:before {transition: left 0.3s; }
    */}).toString().split('/*')[1].split('*/')[0];
        document.head.appendChild(radioStyle);

        // create radio after css runing
        var radioBtnTag = (function(){/*
        <dfn style="font-size:16px;" data-info="🧐-手动火力全开房间搜索，用户可以手动点击跳转；⛔-火力停止状态，初始化组件展示数据或停止弹幕；🎰-粉丝福利抽奖，自动参与当前房间粉丝福利社抽奖活动，如果没有活动则保持静默状态，根据抽奖有无自动发停，若开启二合一开关，则全自动搜寻参与；💥-发送火力弹幕，自动参与当前房间火力全开活动，如没有火力或不满足条件则保持静默状态，根据火力有无自动发停，弹幕内容为AI+云弹幕库或私有弹幕库，若开启二合一开关，则全自动搜寻并参与活动；⚡-极速签到功能，助抢签到手速王，将房间加入[特别关注]，未开播时停留此处，开播瞬间极速签到！">
        <label for="ceaseFire" class="radio" id="label_cease_fire">
            <span class="radio-bg"></span>
            <input type="radio" name="radio_fire" id="ceaseFire"  value="⛔" />⛔
            <span class="radio-on"></span>
        </label>
        <label for="openFire" class="radio" id="label_open_fire">
            <span class="radio-bg"></span>
            <input type="radio" name="radio_fire" id="openFire"  value="🎰" />🎰
            <span class="radio-on"></span>
        </label>
        <label for="bombFire" class="radio" id="label_bomb_fire" >
            <span class="radio-bg"></span>
            <input type="radio" name="radio_fire" id="bombFire"  value="💥" />💥
            <span class="radio-on"></span>
        </label>
        <label for="thunderAssign" class="radio" id="label_thunder">
            <span class="radio-bg"></span>
            <input type="radio" name="radio_fire" id="thunderAssign"  value="⚡"/>⚡
            <span class="radio-on"></span>
        </label>
        </dfn>
        */}).toString().split('/*')[1].split('*/')[0].replace(/[\n]/g, '');

        // create two-in-one switch of fire seek + send danmu
        let menuNode = document.querySelector(".Header-menu");
        var outLiTag = document.createElement("li");
        outLiTag.className="Header-menu-link";
        // let checkedStatus = localStorage.getItem("switchStatus🏮🎎🏮");
        var switchContent = "<dfn data-info='二合一功能(福利社搜寻/火力全开搜寻+自动发弹幕)开关，开启此开关+停留🎰/💥处，会自动搜索福利社抽奖/火力全开+发送抽奖弹幕，每天跳转超过100次后，则停止自动跳转；开启隐藏功能用户可以自定义跳转上限。温馨提示:频繁跳转+频发弹幕=关小黑屋哦!'>";
        if(switchStatus==="on"){
            switchContent+="<input class='mui-switch mui-switch-anim' type='checkbox' checked></dfn>";
        }else{
            switchContent+="<input class='mui-switch mui-switch-anim' type='checkbox'></dfn>";
        }
        outLiTag.innerHTML = switchContent;
        menuNode.appendChild(outLiTag);
        // listen switch change event
        let bilingObj = document.getElementsByClassName("mui-switch-anim")[0];
        bilingObj.addEventListener("change",(function(){switchChange()}));

        // create fire button whose css style depend douyu pay btn
        var outSpan = document.createElement("span");
        var fireSeekBtn = document.createElement("button");
        outSpan.className = "Title-blockInline";
        fireSeekBtn.innerHTML = "🧐开火";
        fireSeekBtn.className = "Wallet-content-recharge"; //btn style, like Category-item, BackpackButton,PlayerToolbar-getYCBtn
        fireSeekBtn.addEventListener("click", fireBtnBinding);
        var blankTag = document.createElement("span");
        blankTag.innerHTML = "&nbsp;&nbsp;&nbsp;";
        var reportNode = document.querySelector(".Title-headline");//get node
        if(reportNode != null){
            outSpan.appendChild(blankTag);//blank occupation
            outSpan.appendChild(fireSeekBtn);
            reportNode.appendChild(outSpan);
            // reportNode.parentNode.parentNode.insertBefore(outSpan,reportNode.parentNode);
        }else {
            console.warn("未找到标题元素，无法创建【🔥】按钮");
        }

        //create raido btn firstly and then add event listener
        var sortNode = document.querySelector(".Title-categoryWrap");//get node
        var seekTag = document.createElement("div");
        seekTag.className = "Title-anchorInfo";
        seekTag.innerHTML = radioBtnTag;
        if(sortNode !=null){
            sortNode.firstChild.append(seekTag);
            sortNode.insertBefore(seekTag,sortNode.firstElementChild.nextSibling);//add btn now
            var anchor1 = document.getElementById("ceaseFire");
            anchor1.addEventListener("change",(function(){radioChange('ceaseFire');}));
            var anchor2 = document.getElementById("openFire");
            anchor2.addEventListener("change",(function(){radioChange('openFire');}));
            var anchor3 = document.getElementById("bombFire");
            anchor3.addEventListener("change",(function(){radioChange('bombFire');}));
            var anchor4 = document.getElementById("thunderAssign");
            anchor4.addEventListener("change",(function(){radioChange('thunderAssign');}));
            if(switchStatus==="on"){
                document.getElementById("label_thunder").style.display="none";
            }
        }else{
            console.warn("未找到房间类别元素，无法创建单选框");
        }
        // remember and restore radio status
        var radioNode = document.getElementById(radioStorage);
        radioNode.setAttribute("checked","checked");
    }
    // ===================================================================
    // =========================== weak tip toast=========================
    // ===================================================================
    function popupToast(text,time) {
        let model = document.getElementById('toast-popup');
        if(model!=undefined){
            clearTimeout(popLoopTime);//remove old recyle
            // model.remove();
        }else{
            let editText = text + "<br><br>("+time+"s后自动关闭)";
            var creatediv = document.createElement('div');
            creatediv.className = 'model_toast';
            creatediv.setAttribute('id','toast-popup');
            var contentHtml = '<div class="popup-toast" id="toast-content">'+editText+'</div>'
            creatediv.innerHTML = contentHtml;
            document.body.appendChild(creatediv);
        }
        time==undefined?3:time;//default 3s
        var loopRefresh = function(){
            let modelObj = document.getElementById('toast-popup');
            if(time==0){
                modelObj.style.display = 'none';
                return;
            }else{
                let editText = text + "<br><br>("+time+"s后自动关闭)";
                var content = document.getElementById('toast-content');
                content.innerHTML = editText;
                modelObj.style.display = 'block';
                time--;
                popLoopTime = setTimeout(loopRefresh,1000);
            }
        }
        loopRefresh();
    }
    //Time format util
    function dateFormat(fmt, date) {
        let ret;
        let opt = {
            "Y+": date.getFullYear().toString(),
            "m+": (date.getMonth() + 1).toString(),
            "d+": date.getDate().toString(),
            "H+": date.getHours().toString(),
            "M+": date.getMinutes().toString(),
            "S+": date.getSeconds().toString()
        };
        for (let k in opt) {
            ret = new RegExp("(" + k + ")").exec(fmt);
            if (ret) {
                fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
            };
        };
        return fmt;
    }
    //uncompile string util
    function uncompileStr(code) {
        code = unescape(code);
        var c = String.fromCharCode(code.charCodeAt(0) + 1);
        for (var i = 1; i < code.length; i++) {
            c += String.fromCharCode(code.charCodeAt(i) + 1);
        }
        return c;
    }
    // localStorage clear trash
    function storageOperate(){
        var storage = window.localStorage;
        var clearList = new Array();
        storage.removeItem("game_recode_listdata_h5p_room");
        for(let i = 0; i< storage.length; i++ ){
            if(storage.key(i).indexOf("FIRE_POWER_ACT_") != -1 || storage.key(i).indexOf("RankCoverage_vesion_") != -1
               || (storage.key(i).indexOf("carAssigned🚦🚍🚦") != -1 && storage.key(i).indexOf("carAssigned🚦🚍🚦"+(new Date()).toLocaleDateString()) == -1 ) //clear history motorcade assign
               || (storage.key(i).indexOf("carNumber🚖⛽🚖") != -1 && storage.key(i).indexOf("carNumber🚖⛽🚖"+(new Date()).toLocaleDateString()) == -1 ) //clear history motorcade number
               || (storage.key(i).indexOf("giftNumber💖🎁💖") != -1 && storage.key(i).indexOf("giftNumber💖🎁💖"+(new Date()).toLocaleDateString()) == -1 ) //clear history gift number
               || (storage.key(i).indexOf("📱🌐📱") != -1 && storage.key(i).indexOf((new Date()).toLocaleDateString() + "📱🌐📱[" + uname + "]") == -1 )||storage.key(i).indexOf("🐛🌵🐤") != -1){//clear history jump count
                clearList.push(storage.key(i));
                // storage.removeItem(storage.key(i));
            }
        }
        var num = 0;
        function loopClearStorage(){
            if(num>=clearList.length){
                console.info("历史存储垃圾数据清空完毕！");
            }else{
                storage.removeItem(clearList[num]);
                num++;
            }
        }
        loopClearStorage();
    }

    //judge ban speak (true is banning，false is no banning)
    function banSpeak(){
        var banObj = document.getElementsByClassName("MuteStatus is-mute")[0];
        if(banObj!=undefined && banObj.innerHTML.indexOf("禁言")!=-1){
            return true;
        }else{
            return false;
        }
    }

    //judge fans  (true is fans，false is no need);
    function joinCondition(){//参与条件：粉丝团成员。送6鱼翅的办卡就可参与啦
        var joinFlag = false;//参与条件：粉丝团成员。你已经满足参与条件
        var joinObj = document.querySelector(".FirePowerChatModal-joinCondition");
        if(joinObj != null){
            joinObj = joinObj.innerText;
            if(joinObj.indexOf("粉丝团成员。送6鱼翅的办卡就可参与") != -1){
                joinFlag = true;
                console.info("只有粉丝团才能参与！");
            }
        }
        return joinFlag;
    }

    //judge hot degree
    function hotFilter() {
        let hotValue = document.querySelector(".Title-anchorText");
        if (hotValue != null) {
            tmGap = 10000;
            if (hotValue.innerText <= 1000) {
                tmGap = tmGap + 5000;
            } else if(hotValue.innerText > 1000 && hotValue.innerText <= 10000 ){
                tmGap = tmGap + 2000;
            } else if(hotValue.innerText > 10000 && hotValue.innerText <= 100000){
                tmGap = tmGap ;
            } else if(hotValue.innerText > 100000 && hotValue.innerText <= 300000){
                tmGap = tmGap - 2000;
            } else if(hotValue.innerText > 300000 && hotValue.innerText <= 500000){
                tmGap = tmGap - 3000;
            } else {
                tmGap = tmGap - 4000;
            }
        }else{
            console.warn("未获取到热度值");// location.reload(true);
        }
    }

    // judege award (true is suitable, false need jumping or waiting)
    function awardJudge() {
        var awardDet = document.getElementsByClassName("FirePowerChatModal-detail")[0];//cash award
        var awardStr = document.getElementsByClassName("FirePowerChatModal-award")[0];//fish ball
        function awardConditionFilter(prizeObj){
            var awardFlag = false;
            if (prizeObj != undefined) {
                prizeObj = prizeObj.innerText;
                if(prizeObj.indexOf("鱼丸") != -1) {
                    if(prizeObj.indexOf("1个") == -1 && prizeObj.indexOf("1条") == -1 && prizeObj.indexOf("2条") == -1 &&
                       (prizeObj.substring(prizeObj.indexOf("鱼丸")-3, prizeObj.indexOf("鱼丸")) >=100 || prizeObj.substring(prizeObj.indexOf("鱼丸")-4, prizeObj.indexOf("鱼丸")) >=100) ){
                        awardFlag = true;
                    }else{
                        console.info("鱼丸奖励不达标");
                    }
                }else if (prizeObj.indexOf("红包") != -1 || prizeObj.indexOf("现金") != -1) {
                    if(prizeObj.indexOf("0.01元") == -1 && prizeObj.indexOf("0.1元") == -1 && prizeObj.indexOf("0.2元") == -1 && prizeObj.indexOf("0.5元") == -1 ){
                        awardFlag = true;
                    }else{
                        console.info("红包奖励不达标");
                    }
                }else{
                    console.info("非实质性奖品");
                }
                // }else{
                // console.info( prizeObj == document.querySelector(".FirePowerChatModal-award") ? "无奖品锚点-->外":"无详情锚点-->外");
            }
            return awardFlag;
        }
        return awardConditionFilter(awardStr) || awardConditionFilter(awardDet) ;
    }
    // ===================================================================
    // ================= remember and restore last operate ===============
    // ===================================================================
    function screenBarrageMemory(){
        var closeBarrageObj = document.getElementsByClassName("showdanmu-42b0ac")[0];
        var closeBarrageViceObj = document.getElementsByClassName("hidedanmu-5d54e2")[0];
        if(closeBarrageObj !=undefined ){
            var scrollStatus = localStorage.getItem("scrollBarrage➰🍚➰");
            if(scrollStatus == "close"){
                closeBarrageObj.click();
            }
            closeBarrageObj.addEventListener("mouseup",getScrollStatus);
            closeBarrageViceObj.addEventListener("mouseup",getScrollStatus);
        }else{
            checkDelayCallback(4);//wait to perform
        }
    }

    // listenning changing of Scroll Status
    function getScrollStatus(){
        var scrollBarrageObj = document.getElementsByClassName("showdanmu-42b0ac removed-9d4c42")[0];//close scroll barrage
        scrollBarrageObj == undefined ? localStorage.setItem("scrollBarrage➰🍚➰","close") : localStorage.setItem("scrollBarrage➰🍚➰","open");

    }

    // remember and restore autoplay status
    function autoPlayMemory(){
        var playObj = document.getElementsByClassName("play-8dbf03")[0];
        var pauseObj = document.getElementsByClassName("pause-c594e8")[0];
        if(pauseObj!=undefined){
            var autoPlayStatus = localStorage.getItem("autoPlayStatus📀📺📀");
            if(autoPlayStatus == "close"){
                pauseObj.click();
            }
            playObj.addEventListener("mouseup",getAutoPlayStatus);
            pauseObj.addEventListener("mouseup",getAutoPlayStatus);
        }else{
            checkDelayCallback(8);//wait to load
        }
    }

    // listenning changing of autoplay status
    function getAutoPlayStatus(){
        var autoPlayObj = document.getElementsByClassName("pause-c594e8 removed-9d4c42")[0];//close player
        autoPlayObj == undefined ? localStorage.setItem("autoPlayStatus📀📺📀","close") : localStorage.setItem("autoPlayStatus📀📺📀","open");
    }

    //get user identity info, without considering change uname
    function getUserInfo(){
        let uidObj = document.querySelector(".UserInfo-avatar");
        uid = uidObj != null ? uidObj.firstElementChild.getAttribute("uid"):"unlogin";
        let sessUname = sessionStorage.getItem(uid+"🌴🔮🌴");
        if(sessUname!=null){
            uname = sessUname;
        }else{
            let localUname = localStorage.getItem(uid+"🌴🔮🌴");
            if(localUname !=null){
                uname = localUname;
            }else{
                updateUserName();
            }
        }
    }
    //renew uname
    function updateUserName(){
        var ajax = new XMLHttpRequest();
        ajax.timeout = 8000;
        ajax.responseType ="document";
        ajax.open('get', 'https://www.douyu.com/member/cp',true);
        ajax.send();
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200) {
                var htmlDoc = ajax.responseXML;
                uname = htmlDoc.querySelector(".uname_con").innerText.trim();
                sessionStorage.setItem(uid+"🌴🔮🌴", uname);
                localStorage.setItem(uid+"🌴🔮🌴", uname);
            }
        }
    }
    //get daily jump times
    function getDailyRedirect(){
        var dailyRedirect = 0;
        if(uname != "-" && uname !=null){
            dailyRedirect = localStorage.getItem((new Date()).toLocaleDateString() + "📱🌐📱["+uname+"]");
            if(dailyRedirect == null){
                localStorage.setItem((new Date()).toLocaleDateString() + "📱🌐📱["+uname+"]",0);
                dailyRedirect = 0;
            }else{
                dailyRedirect = parseInt(dailyRedirect);
            }
            // console.info("dailyJumpTimes:"+dailyRedirect);
        }else{
            dailyRedirect = -1;
        }
        return dailyRedirect;
    }
    //jump delay config
    function jumpDelayConfig(){
        let roomStayTime = localStorage.getItem("__BEACON_opentime")/1000;
        if(radioStorage ==="openFire"){
            if(roomStayTime < jumpDelay){
                let lastTime = (jumpDelay - roomStayTime + Math.random()*1.5).toFixed(1);
                console.info("已停留时间:"+roomStayTime+"s;设置停留时间："+jumpDelay+"s;剩余停留时间："+lastTime)+"s;";
                popupToast("《粉丝福利搜寻》<br>不符合参与条件<br>浮窗关闭后跳转！", parseInt(lastTime));
                fireJumpTime = setTimeout(randomWelfareRequest,lastTime*1000);
            }else{
                popupToast("《粉丝福利搜寻》<br>不符合参与条件<br>浮窗关闭后跳转！", 3);
                fireJumpTime = setTimeout(randomWelfareRequest,3000);
            }
        }else if(radioStorage==="bombFire"){
            if(roomStayTime < jumpDelay){
                let lastTime = (jumpDelay - roomStayTime + Math.random()*1.5).toFixed(1);
                console.info("已停留时间:"+roomStayTime+"s;设置停留时间："+jumpDelay+"s;剩余停留时间："+lastTime)+"s;";
                popupToast("《火力全开搜寻》<br>不符合开火条件<br>浮窗关闭后跳转！", parseInt(lastTime));
                fireJumpTime = setTimeout(randomFireRequest,lastTime*1000);
            }else{
                popupToast("《火力全开搜寻》<br>不符合开火条件<br>浮窗关闭后跳转！", 3);
                fireJumpTime = setTimeout(randomFireRequest,3000);
            }
        }
    }
    // get Phone status, session update
    function getPhoneStatus(){
        var phonestatus = sessionStorage.getItem("phoneStatus📞⏳📞");
        if(phonestatus!=null){
            if(phonestatus == "1"){//binding phone
                checkDelayCallback(7);//auto get fish food
            }else if(phonestatus == "0"){
                checkDelayCallback(6);//send barrage without binding phone and auto get fish food
            }
        }else{
            fetch('https://www.douyu.com/member/cp/cp_rpc_ajax',{
                method: 'GET',
                mode: 'no-cors',
                cache: 'default',
                credentials: 'include',
            }).then(res => {
                return res.json();
            }).then(json => {
                let phonestatus = json.info.phonestatus;
                sessionStorage.setItem("phoneStatus📞⏳📞", phonestatus);
                if(phonestatus == 1){//binding phone
                    checkDelayCallback(7);//auto get fish food
                }else if(phonestatus == 0){
                    checkDelayCallback(6);//send barrage without binding phone and auto get fish food
                }
            }).catch(err => {
                console.error('REQUEST ERROR', err);
            })
        }
    }
    //send barrage without phone
    function releasePhoneLimit(){
        var chatLogin = document.getElementsByClassName("MuteStatus is-noLogin")[0];
        if(chatLogin!=undefined){
            chatLogin.remove();
            let btnGray = document.getElementsByClassName("ChatSend-button is-gray")[0];
            btnGray!=undefined ? btnGray.className = "ChatSend-button":"";
        }else{
            checkDelayCallback(6);
        }
    }
    // mainly to check danmu API frequent and adapt CDN to accelerate
    function jsonAnalytics(code){
        let siteId = code == 1?'1278051049':'1278115154';//page || barrage
        var statJs = document.createElement('script');
        statJs.type = 'text/javascript';
        statJs.async = true;
        statJs.charset = 'utf-8';
        statJs.src = 'https://w.cnzz.com/c.php?async=1&id=' + siteId;
        var rootJs = document.getElementsByTagName('script')[0];
        rootJs.parentNode.insertBefore(statJs, rootJs);
    }
    // get lastest version number
    function getGFVersionNumber(){
        let newVersion = sessionStorage.getItem("versionNumber🔥😡🔥");
        let userVersion = GM_info.script.version;
        if(newVersion!=null){
            versionTipInfo(newVersion,userVersion);
        }else{
            fetch('https://greasyfork.org/zh-CN/scripts/389379',{
                method: 'GET',
                mode: 'cors',
                cache: 'default',
                credentials: 'omit',
            }).then(res => {
                return res.text();
            }).then(txt => {
                txt = (new DOMParser()).parseFromString(txt, 'text/html');
                let versionNumber = txt.getElementsByClassName("script-show-version")[1];
                if(versionNumber!=undefined){
                    versionNumber = versionNumber.innerText;
                    sessionStorage.setItem("versionNumber🔥😡🔥", versionNumber);
                    versionTipInfo(versionNumber,userVersion);
                }
            }).catch(err => {
                console.error('REQUEST ERROR', err);
            })
        }
    }
    function versionTipInfo(newVersion,userVersion){
        let newList = newVersion.slice(".");
        newList = parseInt(newList[newList.length-1]) + 100*newList[1] + 10000*newList[0];
        let userList = userVersion.slice(".");
        userList = parseInt(userList[userList.length-1]) + 100*userList[1] + 10000*userList[0];
        if(newList>userList){
            GM_info.scriptWillUpdate = true;
            console.info("脚本最新版为["+newVersion+"],您当前的版本为["+GM_info.script.version+"],旧版本功能将不再维护,推荐您升级到最新版！");
        }
    }
    // ===================================================================
    // ========================= Filter Config ===========================
    // ===================================================================
    //room filter ; true-contain; false-not include
    function roomFilter(roomNB){
        var roomFlag = false;
        if(banRoom.length>0){
            for(let i=0;i< banRoom.length;i++){
                if(banRoom[i]==roomNB){
                    roomFlag = true;
                    break;
                }
            }
        }
        return roomFlag;
    }
    //evil user filter ; true contain, false not contain
    function nameFilter(){
        var nameFlag = false;
        if(banName.length>0){
            for(let j=0;j<banName.length;j++){
                if(banName[j]==uname){
                    nameFlag = true;
                    break;
                }
            }
        }
        return nameFlag;
    }
    function getFilterConfigCoding(){
        GM_xmlhttpRequest({
            method: "GET",
            url: "https://coding.net/u/lvlanxing/p/popzoo/git/raw/master/json/filterConfig.json",
            onload: function(response) {
                if(response.responseText.indexOf("404")==-1){
                    let jsonData = JSON.parse(response.responseText);
                    // console.info("GM"+response.responseText);
                    banRoom = jsonData.roomFilter!=undefined ? [].concat(jsonData.roomFilter):banRoom;
                    banName = jsonData.nameFilter!=undefined ? [].concat(jsonData.nameFilter):banName;
                    AIwordFilter = jsonData.AIFilter!=undefined ? [].concat(jsonData.AIFilter):AIwordFilter;
                }else{
                    getFilterConfigCOS();
                }
            }
        });
    }

    // get real roomId
    function getRoomId(){
        roomId = document.getElementsByClassName("Title-anchorName")[0];
        if(roomId!=undefined){
            roomId = roomId.getAttribute("href").substr(roomId.getAttribute("href").indexOf("room_id=")+8)
        }else{
            roomId = "99999";
            console.warn("无法获取当前房间号,请刷新页面重试！");
        }
    }
    // ===================================================================
    // ====================== Real Person Number =========================
    // ===================================================================
    // show anchor credit, online people, accumulative living time
    function realPersonNum(){
        let divTag = document.createElement("div");
        divTag.setAttribute('style','margin-left:-18px;');
        divTag.setAttribute('class','Title-anchorName');
        divTag.setAttribute('id','anchor_info_tag');
        divTag.innerHTML = "<dfn id = 'anchor_detail_info' data-info='🎅-当前房间在线人数(前三组数据均来源于播酱网)；💲-今日主播的总收益(点击任意图标即可刷新数据)；💭-今日房间弹幕总数(以上数据大约延迟30s左右)；'> 🎅- 💲- 💭- </dfn>";//🍪-主播今日收到鱼丸数目总量(鱼丸单位:×1个)
        divTag.innerHTML += "<dfn id = 'real_person_num' data-info='🌐-今日跳转次数(仅统计用此脚本自动或手动跳转)；💎-主播当前信用值(若小于4则不能送礼物,满值12)；🎬-主播本次开播时间(若长时间开播则显示日期);'> 🌐- 💎- 🎬- </dfn>";
        let showPosition = document.querySelector(".Title-anchorHot");
        if(showPosition!=null){
            showPosition.parentNode.insertBefore(divTag, showPosition);
            let newDivTag = document.getElementById("anchor_info_tag");
            newDivTag!=undefined ?newDivTag.addEventListener("click",titleAreaRefresh):false;
            newDivTag.click();//update once
        }else{
            console.warn("无法获取显示位置");
        }
    }
    function titleAreaRefresh(){
        anchorCreditRefresh();
        anchorInfoRefresh();
    }
    // refresh anchor credit...
    function anchorCreditRefresh(){
        fetch('https://www.douyu.com/swf_api/h5room/'+ roomId).then(res => {
            return res.json();
        }).then(json => {
            // let personNum = json.data.online;
            let curCredit = json.data.cur_credit;
            let liveStatus = json.data.show_status;
            var liveTime = json.data.show_time;
            // var barrageDelay = jsonData.data.room_dm_delay;
            if(liveStatus == "1"){//1 living,2 no living     new Date(liveTime).toLocaleTimeString()
                // onlineTime = ((Math.round((new Date()).getTime()/1000) - parseInt(liveTime))/60).toFixed(1);//leave one dot to show second
                liveTime = new Date(liveTime * 1000);//.toLocaleTimeString();
                liveTime = (new Date()).getDate()===liveTime.getDate() ?dateFormat("HH:MM:SS",liveTime) :dateFormat("mm-dd HH:MM:SS",liveTime);
            }else{
                liveTime = "未播";
            }
            let peopleObj = document.getElementById("real_person_num");
            if(peopleObj!=undefined && switchStatus ==="off"){
                peopleObj.removeAttribute("style");
                peopleObj.innerHTML = "🌐"+ getDailyRedirect() +"次&nbsp;💎"+curCredit +"分&nbsp;🎬" + liveTime;
            }else{
                peopleObj.setAttribute("style","display:none;");
            }
        }).catch(err => {
            console.error('REQUEST ERROR', err);
        })
    }
    // get anchor info from bojianger
    function anchorInfoRefresh(){
        fetch('https://bojianger.com/data/api/common/search.do?keyword='+roomId, {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            credentials: 'omit'
        }).then(result => {
            return result.text();
        }).then(txt => {
            let json = JSON.parse(txt);
            // console.info(json.data.anchorVo);
            let peopleNum = json.data.anchorVo.audience_count;
            let danmuCount = json.data.anchorVo.danmu_count;
            let giftValue = json.data.anchorVo.yc_gift_value;//fish wing
            let fishballNum = json.data.anchorVo.yw_gift_gx;//fish ball
            let anchorObj = document.getElementById("anchor_detail_info");
            if(anchorObj!=undefined && switchStatus ==="off"){//🎅- 💰- 🍥- 🍪-
                anchorObj.setAttribute("data-info","🎅-当前房间在线人数(前三组数据均来源于播酱网)；💲-今日主播的总收益(点击这里刷新此行六组数据)；💭-今日房间弹幕总数(以上数据大约延迟30s左右)；");
                anchorObj.innerHTML = "🎅"+peopleNum +"人&nbsp;💲"+giftValue +"元&nbsp;💭"+ danmuCount + "条";//&nbsp;🍪" + 100*fishballNum + "丸";
            }else{
                let dfnTagObj = document.getElementById("anchor_detail_info");
                dfnTagObj.setAttribute("data-info","🎅-当前房间在线人数(前三组数据均来源于播酱网)；💲-主播今日的总收益(点击这里刷新此行六组数据)；🌐-今日跳转次数(仅统计用此脚本自动或手动跳转)；");
                anchorObj.innerHTML = "🎅"+peopleNum +"人&nbsp;💲"+giftValue +"元&nbsp;🌐"+ getDailyRedirect() +"次";
            }
        }).catch(err => {
            console.error('REQUEST ERROR', err);
        })
    }
    // ===================================================================
    // ====================== auto cancel follow room ====================
    // ===================================================================
    function cancelFollowRoom(){
        var cancelCareFlag = true;
        var careList = sessionStorage.getItem("noCancelList💖👸💖");
        careList = JSON.parse(careList);
        // console.info(careList);
        if(careList != null && careList.length>0){
            for(let i=0;i<careList.length;i++){
                if(careList[i]==roomId){
                    cancelCareFlag = false;
                }
            }
        }else{
            cancelCareFlag = false;//first need init,so don't cancel follow
            getFansRoomList();
        }
        return cancelCareFlag;
    }
    function getFansRoomList(){
        var roomSet = new Set();
        fetch('https://www.douyu.com/member/cp/getFansBadgeList',{
            method: 'GET',
            mode: 'no-cors',
            cache: 'default',
            credentials: 'include',
        }).then(res => {
            return res.text();
        }).then(txt => {
            txt = (new DOMParser()).parseFromString(txt, 'text/html');
            let badgeList = txt.getElementsByClassName("fans-badge-list")[0].lastElementChild.children;//get tbody content
            if(badgeList.length>0){
                for(let i=0; i<badgeList.length;i++){
                    // console.info(badgeList[i].getAttribute("data-fans-room"));//roomId
                    roomSet.add(badgeList[i].getAttribute("data-fans-room"));
                    roomSet.add("99999");//here to set sessionStorage not null;
                    getSpecialFollowList(roomSet);
                }
            }
        }).catch(err => {
            console.error('REQUEST ERROR', err);
        })
    }
    function getSpecialFollowList(roomSet){
        fetch('https://www.douyu.com/wgapi/livenc/liveweb/follow/special',{
            method: 'GET',
            mode: 'cors',
            cache: 'no-store',
            credentials: 'include'
        }).then(res => {
            return res.text();
        }).then(json => {
            var followList = JSON.parse(json);
            followList = followList.data;
            for(let i=0; i<followList.length; i++){
                // console.info(followList[i].room_id.toString());
                roomSet.add(followList[i].room_id.toString());
            }
            followList=Array.from(roomSet);
            sessionStorage.setItem("noCancelList💖👸💖",JSON.stringify(followList));
        }).catch(err => {
            console.error('REQUEST ERROR', err);
        })
    }
    // follow anchor (#关注  #取关)
    function followRoom() {
        var subObj = document.getElementsByClassName("Title-followBtn")[0];
        var followCheck = document.getElementsByClassName("Title-followBtnBox is-followed")[0];//check followed status
        if (subObj != undefined && followCheck==undefined) {
            subObj.click();
            console.info("已经关注💓主播！");
            roomAssignTime = setTimeout(autoAssign, 3000);//wait for assign
        }
    }
    // adjust clarity (1.highest clarity； other.lowest clarity）
    // function adjustClarity(code){
    //     var videoClarity = document.querySelector(".panelFill-d95ee8");
    //     if(videoClarity != undefined && videoClarity != null){
    //         code===1 ? videoClarity.previousSibling.firstElementChild.click() : videoClarity.previousSibling.lastElementChild.click();
    //     }else{
    //         console.info("没有画质📺选项！");
    //     }
    // }
    // show room assign rank
    // function assignRank(){
    //     var anchorLevel = (document.getElementsByClassName("AnchorLevel")[0]).getAttribute("class").substring(24);
    //     var showPlace = document.querySelector(".Title-anchorHot");
    //     if(anchorLevel>=30){//不排除已签到，因为还需要手动刷新
    //         var refreshTag = document.createElement("dfn");
    //         refreshTag.setAttribute("id","assign_Rank");
    //         refreshTag.setAttribute("class","Title-anchorName");
    //         refreshTag.setAttribute("data-info","📝-表示当前房间已签到人数，点击可以刷新，方便大家来抢签到手气王，如果主播等级<Lv30无房间签到，则无此图标，可统计前100的排名，需要注意当处于⛔停火状态才能手动签到，其他状态仍是自动签到;");
    //         refreshTag.innerHTML= "📝-";
    //         showPlace.parentNode.insertBefore(refreshTag, showPlace);
    //         assignRefresh();
    //         refreshTag.addEventListener("click",assignRefresh);
    //     }
    // }
    // refresh assign rank
    // function assignRefresh(){
    //     fetch('https://www.douyu.com/japi/roomuserlevel/apinc/getSignInRankInfoList?rid='+roomId).then(res => {
    //         return res.json();
    //     }).then(json => {
    //         var jsonData = json.data;
    //         var assignId = document.getElementById("assign_Rank");
    //         assignId.innerHTML = jsonData.length <100? "📝"+jsonData.length:"📝100+";
    //         // console.info("📝房间签到人数:"+jsonData.length);
    //     }).catch(err => {
    //         console.error('REQUEST ERROR', err);
    //     })
    // }

    // ===================================================================
    // ============================= COS Operate =========================
    // ===================================================================
    const firePrefix = 'https://fire-room-1253626683.cos.ap-beijing.myqcloud.com/';//eslint-disable-next-line
    const jumpPrefix = 'https://jump-count-1253626683.cos.ap-beijing.myqcloud.com/';//eslint-disable-next-line
    const welfarePrefix = 'https://welfare-1253626683.cos.ap-beijing.myqcloud.com/';//eslint-disable-next-line
    function putJumpInfo(){
        let url = jumpPrefix+'JumpCount/'+dateFormat("YYYY-mm-dd",new Date()) +'/'+uname+'.json';
        fetch(url,{
            method: 'PUT',
            headers: {'Content-Type':'application/json; charset=utf-8'},
            body: JSON.stringify({"uname":uname,"uid":uid,"jumpCount":getDailyRedirect()}),
            credentials: "omit",
        }).then(response => {
            if(response.headers.get('ETag')!=undefined){
                console.log("JumpCountPut:success");
            }
        }).catch(err => {
            console.error('JumpCountPut:failure');
        })
    }
    function getFilterConfigCOS(){//second plan
        fetch(firePrefix+'filterConfig.json',{
            method: 'GET',
            mode: 'cors',
            cache: 'no-store',
            credentials: 'omit'
        }).then(res => {
            return res.json();
        }).then(jsonData => {
            banRoom = jsonData.roomFilter!=undefined ? [].concat(jsonData.roomFilter):banRoom;
            banName = jsonData.nameFilter!=undefined ? [].concat(jsonData.nameFilter):banName;
            AIwordFilter = jsonData.AIFilter!=undefined ? [].concat(jsonData.AIFilter):AIwordFilter;
        }).catch(err => {
            console.error('REQUEST ERROR', err);
        })
    }
    function putFireInfo(file,fireUrl){
        fetch(fireUrl,{
            method: 'PUT',
            headers: {'Content-Type':'application/json; charset=utf-8'},
            body: file,
            credentials: "omit",
        }).then(response => {
            if(response.headers.get('ETag')!=undefined){
                radioStorage==="openFire" ? console.info("WelfarePut:Success") : console.info("FireRoomPut:Success");
                
            }
        }).catch(err => {
            console.error('FireRoomPut:failure');
        })
    }
    function getFireCOS(sendMsg){
        let date = new Date();
        let reqUrl = firePrefix +'FireNode/'+dateFormat("YYYY-mm-dd",date) +'/'+dateFormat('HH',date)+'-fireInfo.json';
        if(radioStorage==="openFire"){
            reqUrl = welfarePrefix +'WelfareNode/'+dateFormat("YYYY-mm-dd",date) +'/'+dateFormat('HH',date)+'-welfareInfo.json';
        }
        fetch(reqUrl,{
            method: 'GET',
            mode: 'cors',
            cache: 'no-store',
            credentials: 'omit'
        }).then(res => {
            return res.json();
        }).then(jsonData => {
            var addFlag = true;
            for(let i=0; i<jsonData.length;i++){//remove reduplication
                if(jsonData[i].roomId == sendMsg.roomId){
                    let endTimeStamp = jsonData[i].remainTime*1000 + parseInt(jsonData[i].sendTime);
                    if(endTimeStamp >= (new Date()).getTime()){
                        addFlag = false;//if one fire activity endtime longer than current time,this fire node will be omit
                    }
                }
            }
            radioStorage==="openFire" ? console.info("WelfareGet:Success") : console.info("FireRoomGet:Success");
            if(addFlag){
                jsonData.unshift(sendMsg);
                putFireInfo(JSON.stringify(jsonData),reqUrl);
            }
        }).catch(err => {
            var arr = new Array();
            putFireInfo(JSON.stringify([sendMsg]),reqUrl);
            // console.error('REQUEST ERROR', err);
        })
    }
    function shareFirePowerInfo(){
        if(shareTM=="-" || (new Date().getTime() - shareTM) >60 * 1000){//to avoid frequently transform onchange radio
            let fireBox = document.querySelector(".FirePowerChatModal-infoBox");
            let remainTime = document.querySelector(".FirePowerChatModal-remainTime");
            if(fireBox!=null&&remainTime!=null){
                remainTime = remainTime.innerText.split(":");
                remainTime = parseInt(remainTime[0]) * 60 + parseInt(remainTime[1]);
                let fireInfo = fireBox.innerText.replace(/\s/g, '|');
                let avatar = document.getElementsByClassName("Title-anchorPicBack")[0].getElementsByTagName("img")[0].getAttribute("src");
                let sendMsg = {"roomId":roomId,"donator":uname,"avatar":avatar,"sendTime":new Date().getTime(),"remainTime":remainTime,"content":fireInfo};
                getFireCOS(sendMsg);
            }
            shareTM = new Date().getTime();//get curtime
        }
    }
    // ===================================================================
    // ===================== API room fast assign ========================
    // ===================================================================
    function thunderRoomAssign(){
        var ajax = new XMLHttpRequest();
        ajax.responseType ="json";
        ajax.open('post', 'https://www.douyu.com/japi/roomuserlevel/apinc/checkIn',true);
        ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset-UTF-8");
        let paramStr = "rid="+ roomId + "&ctn=" + getEffectCookie('acf_ccn');
        ajax.send(paramStr);
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200) {
                var json = ajax.response;
                if(json.data.rank !=-1){
                    let expireTime = (new Date()).setHours(0, 0, 0, 0) + 3600*24*1000 ;//set expire time is tomorrow 00:00:00:000ms。
                    localStorage.setItem("USER_ROOM_LEVEL_SIGN_"+ roomId, '{"c":'+ (new Date()).getTime() +',"e":'+ expireTime +',"v":\"1\","r":1}');
                    console.info("API接口自动签到📝成功，签到排名：["+ json.data.rank+"],签到时间:"+new Date().toLocaleTimeString());
                    popupToast("《极速房间签到》<br>API接口自动签到📝成功，签到排名：【"+ json.data.rank+"】<br>签到时间:"+new Date().toLocaleTimeString()+"<br>极速签到功能关闭", 6);
                }
            }
        }
    }
    //polling anchor is living
    function prepareThunderAssign(){
        var anchorLevel = (document.getElementsByClassName("AnchorLevel")[0]).getAttribute("class").substring(24);
        fetch('https://www.douyu.com/wgapi/livenc/liveweb/follow/special',{
            method: 'GET',
            mode: 'cors',
            cache: 'no-store',
            credentials: 'include',
        }).then(res => {
            return res.text();
        }).then(json => {
            var followList = JSON.parse(json);
            followList = followList.data;
            var roomFlag = false;
            for(let i=0; i<followList.length; i++){
                if(followList[i].room_id == roomId){
                    roomFlag=true;
                    break;
                }
            }
            if(roomFlag){//check whether anchor is already in special follow list or not
                if(anchorLevel>=30 ){
                    let acfCookie = getEffectCookie('acf_ccn');
                    getAnchorStatus();
                    popupToast("《极速房间签到》<br>极速签到功能已开启<br>请F12控制台查看功能是否正常！", 4);
                }else{
                    console.info("主播等级<Lv.30，无房间可签到！");
                }
            }else{
                popupToast("《极速房间签到》<br>当前房间未添加到【特别关注】<br>请添加并重切到⚡才能开启！", 4);
                // console.info("当前房间未添加到“特别关注”，添加后重新切到⚡才能开启极速签到！");
            }
        }).catch(err => {
            console.error('REQUEST ERROR', err);
        })
    }
    // get special follow list and anchor living status
    function getAnchorStatus(){
        fetch('https://www.douyu.com/wgapi/livenc/liveweb/follow/special',{
            method: 'GET',
            mode: 'cors',
            cache: 'no-store',
            credentials: 'include'
        }).then(res => {
            return res.text();
        }).then(json => {
            var followList = JSON.parse(json);
            followList = followList.data;
            // console.info(followList);
            for(let i=0; i<followList.length; i++){
                if(followList[i].room_id == roomId){
                    if(followList[i].show_status=="1"){
                        // clearInterval(statusInterval);
                        thunderRoomAssign();//fast assign
                        console.info("已经开播啦")
                    }else if(radioStorage === "thunderAssign"){
                        getAnchorStatus();
                        console.info("未开播["+followList[i].show_status+"]检测中");
                    }
                    break;
                }
            }
        }).catch(err => {
            console.error('REQUEST ERROR', err);
        })
    }
    //common click room auto assign
    function autoAssign(){
        let anchorLevel = (document.getElementsByClassName("AnchorLevel")[0]).getAttribute("class").substring(24);
        if(anchorLevel>=30 ){//exclude already assign
            let assignObj = document.getElementsByClassName("RoomLevelDetail-icon")[0];//check assign btn
            let followCheck = document.getElementsByClassName("Title-followBtnBox is-followed")[0];//check whether is followed
            if(assignObj!=undefined && followCheck!=undefined){
                let unassign = document.getElementsByClassName("RoomLevelDetail-icon RoomLevelDetail-icon--zn")[0];
                if(unassign!=undefined){
                    unassign.click();
                    clearTimeout(roomAssignTime);//avoid duplicate assign
                    popupToast("《房间自动签到》<br>房间自动点击签到📝成功!", 3);
                    console.info("房间签到📝完毕！");
                }
            }else{
                checkDelayCallback(5);
            }
        }
    }
    // ===================================================================
    // ========================== cookie operate =========================
    // ===================================================================
    //generate random uuid
    function guid() {
        return 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    //cookie acf_ccn expire time is 3h
    function setCookie(cookiename,value){
        var exp = new Date();
        exp.setTime(exp.getTime() + 3*60*60*1000);
        document.cookie = cookiename + "="+ escape (value) + "; path=/; expires=" + exp.toGMTString();
    }
    // get effect cookie
    function getEffectCookie(cookiename){
        let cookie = getCookie(cookiename);
        if(cookie!=null&&cookie!=""){
            return cookie;
        }else{
            setCookie(cookiename,guid());
            return getCookie(cookiename);
        }
    }
    //get fast assign cookie
    function getCookie(cookieName) {//here should use trim()
        var acf_ccn = "";
        var strCookie = document.cookie;
        var arrCookie = strCookie.split("; ");
        for(var i = 0; i < arrCookie.length; i++){
            var arr = arrCookie[i].split("=");
            if(cookieName == arr[0]){
                acf_ccn = arr[1];
            }
        }
        return acf_ccn;
    }
    // ===================================================================
    // ======================= gift and car entrance =====================
    // ===================================================================
    // gift show
    function giftShowEntrance(){
        let showPlace = document.getElementsByClassName("PlayerToolbar-ywInfo")[0];
        if(showPlace!=undefined){
            let giftTag = document.createElement("dfn");
            giftTag.innerHTML = "<a href='https://popzoo.github.io/pop/giftshow.html' target='_blank'>🎁礼物</a>";
            giftTag.setAttribute("class","PlayerToolbar-ywInfo");
            giftTag.setAttribute("id","gift_view_door");
            giftTag.setAttribute("style","text-align:left;margin-right:6px;");
            giftTag.setAttribute("data-info","🎁-斗鱼礼物图鉴，点击可查看动态、静态、欢迎、牌子、成就、广播等图片集锦，统计数据已放入跳转网页底部，这里只做跳转入口;");
            showPlace.parentNode.insertBefore(giftTag, showPlace);
        }else{
            checkDelayCallback(10);
        }
    }
    // motorcade assign entrance and check redupliction
    function motorcadeEntrance(){
        let showPlace = document.getElementsByClassName("PlayerToolbar-ywInfo")[0];
        if(showPlace!=undefined){
            let carTag = document.createElement("dfn");
            carTag.innerHTML = "<a href='https://msg.douyu.com/motorcade/#' target='_blank'>🚖车队</a>";
            carTag.setAttribute("class","PlayerToolbar-ywInfo");
            carTag.setAttribute("id","motorcade_door");
            carTag.setAttribute("style","text-align:left;margin-right:0;");
            carTag.setAttribute("data-info","🚖-斗鱼车队入口，点击可进入车队界面，每天首次启动脚本后自动跳转页面执行签到和领取车队加油卡，白嫖车队请点击【🎁礼物】进入【车队展】中查看;");
            showPlace.parentNode.insertBefore(carTag, showPlace);
            //check whether is duplicate assign
            let carStatus = localStorage.getItem("carAssigned🚦🚍🚦"+(new Date()).toLocaleDateString());
            if(carStatus!="true"){//car no assignment
                setTimeout(function(){
                    localStorage.setItem("carAssigned🚦🚍🚦"+(new Date()).toLocaleDateString(),"true");
                    // openNewTab("https://msg.douyu.com/motorcade/");//method focus new tab
                    GM_openInTab('https://msg.douyu.com/motorcade/',{active: false});//unfocus new tab
                },4000);
            }            
        }else{
            checkDelayCallback(11);
        }
    }
    //avoid to forbid jump
    function openNewTab(url) {
        var a = document.createElement('a');
        a.setAttribute('href', url);
        a.setAttribute('target', '_blank');
        a.setAttribute('id', "auto_jump_car");
        if(!document.getElementById("auto_jump_car")) {// avoid add again
            document.body.appendChild(a);
        }
        a.click();
    }
    // third statistics jump
    function thirdStatEntrance(){
        let showPlace = document.getElementsByClassName("PlayerToolbar-ywInfo")[0];
        if(showPlace!=undefined){
            let thirdTag = document.createElement("dfn");
            thirdTag.innerHTML = "<a href='https://www.xiaohulu.com/liveParticularsIndex/2/"+roomId+"' target='_blank'>📊葫芦</a>";
            thirdTag.setAttribute("class","PlayerToolbar-ywInfo");
            thirdTag.setAttribute("style","text-align:left;margin-right:0;");            
            thirdTag.setAttribute("data-info","📊-小葫芦数据统计页面，点击可查看主播排行、收益、弹幕数、开播时常、礼物数等详细数据，也可更改为播酱链接入口，看大家需求来定;");
            showPlace.parentNode.insertBefore(thirdTag, showPlace);
        }else{
            checkDelayCallback(14);
        }
    }    
    // ===================================================================
    // ======================auto donate fans bar=========================
    // ===================================================================
    function addFansClickBtn(){
        let fishballBtn = document.getElementsByClassName("PlayerToolbar-ywInfo")[0];
        if(fishballBtn!=undefined){
            let dfnTag = document.createElement("dfn");
            dfnTag.className = "PlayerToolbar-ywInfo";
            dfnTag.setAttribute("style","text-align:left;margin-right:0;");//text-align:left mean data-info should be left
            dfnTag.setAttribute("data-info","🎯-打卡续牌子，一键给自己所有带粉丝牌的房间自动赠送一个荧光棒，自动续牌子防止掉亲密度呦！");
            dfnTag.innerText = "🎯打卡";
            dfnTag.addEventListener("click",getFansMedalList);
            fishballBtn.parentNode.insertBefore(dfnTag,fishballBtn);
        }else{
            checkDelayCallback(12);
        }
    }
    // get fans Badge roomId
    function getFansMedalList(){
        var badgeStr = "";
        popupToast("《粉丝续牌子打卡》<br>正在打卡中...", 2);
        fetch('https://www.douyu.com/member/cp/getFansBadgeList',{
            method: 'GET',
            mode: 'no-cors',
            cache: 'default',
            credentials: 'include',
        }).then(res => {
            return res.text();
        }).then(txt => {
            txt = (new DOMParser()).parseFromString(txt, 'text/html');
            let badgeList = txt.getElementsByClassName("fans-badge-list")[0].lastElementChild;//get tbody content
            var i=0;
            console.info("获取需要打卡的牌子数："+badgeList.children.length);
            function loopDonate(){
                if(i==badgeList.children.length){
                    badgeStr=badgeStr.substr(0,badgeStr.length-1);
                    popupToast("《粉丝续牌子打卡》<br>"+badgeStr+"<br>以上带粉丝牌房间打卡成功！", 4);
                }else{
                    let room_id = badgeList.children[i].getAttribute("data-fans-room");
                    let room_name = badgeList.children[i].firstElementChild.nextElementSibling.innerText.trim();
                    //send fansBar to anchor ||赞4 弱鸡5 稳23 荧光棒268 棒棒哒178 辣眼睛179 怂180 加油卡912
                    let postData = "propId=268&propCount=1&roomId="+room_id+"&bizExt=%7B%22yzxq%22%3A%7B%7D%7D";
                    fetch('https://www.douyu.com/japi/prop/donate/mainsite/v1', {
                        method: 'POST',
                        mode: 'no-cors',
                        credentials: 'include',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: postData
                    }).then(result => {
                        return result.json();
                    }).then(json => {
                        console.info("【"+room_name+"】:"+json.msg);
                        if(json.error==0){
                            badgeStr += "【"+room_name+"】,";
                        }else if(json.error==1 && json.msg.indexOf("用户没有足够的道具")>-1){
                            // clearTimeout(fansDonateTime);
                            popupToast("《粉丝打卡失败》<br>道具不足，无法完成打卡！",3);
                            if(badgeStr.indexOf("】")>-1){
                                badgeStr=badgeStr.substr(0,badgeStr.length-1);
                                setTimeout(function(){
                                    popupToast("《粉丝续牌子打卡》<br>"+badgeStr+"<br>以上带粉丝牌房间打卡成功！", 3);
                                },2500);
                            }
                            return;
                        }
                        i++;
                        loopDonate();
                    }).catch(err => {
                        console.error('REQUEST ERROR', err);
                    })
                }
            }
            if(badgeList.innerText.indexOf("暂无数据")==-1){
                loopDonate();
            }else{
                popupToast("《粉丝续牌子打卡》<br>没有检测到您有粉丝牌<br>不忘初心，拒绝办卡，白嫖大军威武！", 3);
            }
        }).catch(err => {
            console.error('REQUEST ERROR', err);
        })
    }
    // ===================================================================
    // =========================fetch all fish food=======================
    // ===================================================================
    // add fish food click btn
    function addFishFoodClickBtn(){
        let fishballBtn = document.getElementsByClassName("PlayerToolbar-ywInfo")[0];
        if(fishballBtn!=undefined){
            let divTag = document.createElement("dfn");
            divTag.className = "PlayerToolbar-ywInfo";
            divTag.setAttribute("style","text-align:left;margin-right:0;");
            divTag.setAttribute("id","fish_food_tag");
            divTag.setAttribute("data-info","🍰-领鱼粮和小礼物，一键领取所有鱼粮，并自动参与一次鱼粮抽奖，抽取小礼物。每次页面刷新或跳转，也会自动领取鱼粮，但不参与抽奖哟！");
            divTag.innerText = "🍰鱼粮";
            divTag.addEventListener("click",function(){getAllFishFood(100)});
            fishballBtn.parentNode.insertBefore(divTag,fishballBtn);
        }else{
            checkDelayCallback(13);
        }
    }
    function getAllFishFood(sign){
        if(sign === 100){popupToast("《领取鱼粮》<br>正在领取鱼粮中...", 3);}
        let fishPond = document.querySelector(".FishpondTreasure-icon");
        if(fishPond!=null){
            fishPond.click();
            let ftpModal = document.querySelector(".FTP");
            if(ftpModal!=null){
                ftpModal.setAttribute("style","display:none;");// ftpModal.setAttribute("style","visibility:hidden;");
                let currentTime = (new Date).getTime();
                function waitAjaxData(){
                    if((new Date).getTime() - currentTime <10*1000){
                        setTimeout(loopBubbleBox,500);
                    }else{
                        console.info("等待鱼粮数据超时，请手动一键领取鱼粮！");
                    }
                }
                waitAjaxData();
                // click watch time fish food ,can repeat click
                function loopBubbleBox(){
                    if(document.getElementsByClassName("FTP-singleTask-btn")[0] !=undefined){
                        let bubbleBox = document.getElementsByClassName("FTP-bubbleBox is-complete")[0];
                        if(bubbleBox!=undefined){
                            bubbleBox.click();
                            setTimeout(loopBubbleBox,500);
                        }else{
                            console.info("泡泡区域鱼粮领取完毕！");
                            loopSingTask(1);
                        }
                    }else{
                        waitAjaxData();
                    }
                }
                // click daily and weekly task fish food
                function loopSingTask(code){
                    let fishFoodTask = document.getElementsByClassName("FTP-singleTask-btn is-finished")[0];
                    if(fishFoodTask!=undefined){
                        fishFoodTask.click();
                        setTimeout(function(){loopSingTask(code)},500);
                    }else{
                        if(code === 1){
                            let btnBox = document.getElementsByClassName("FTP-btnBox")[1];
                            if(btnBox!=undefined){
                                btnBox.click();
                                console.info("每日任务鱼粮领取完毕！");
                                setTimeout(function(){loopSingTask(2)},500);
                            }
                        }else if(code === 2){
                            console.info("每周任务鱼粮领取完毕！");
                            let closFTP = document.querySelector(".FTP-close");
                            closFTP!=null ? closFTP.click() : "";
                            if(sign === 100){
                                getFishFoodGift();
                            }
                        }
                    }
                }
            }
        }else{
            checkDelayCallback(7);
        }
    }
    //get fish pond gift
    function getFishFoodGift(){
        let postData = "rid="+roomId;
        fetch('https://www.douyu.com/japi/activepointnc/api/dolottery', {
            method: 'POST',
            mode: 'no-cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
            },
            body: postData
        }).then(res => {
            return res.json();
        }).then(json => {
            if(json.data!=null && json.data.msg!=null){
                // console.info(json.data.msg);
                popupToast("《领鱼粮+小礼物》<br>所有鱼粮领取完毕<br>"+json.data.msg, 3);
            }else{
                popupToast("《领鱼粮+小礼物》<br>"+json.msg, 3);
            }
        }).catch(err => {
            console.error('REQUEST ERROR', err);
        })
    }
    // ===================================================================
    // ======================== event listener ===========================
    // ===================================================================
    // handle openfire onchange radio
    // function openFireFilter(){
    //     let fireCheck = document.getElementsByClassName("FirePowerChatModal-Notice")[0];
    //     if( fireCheck != undefined && awardJudge() && !joinCondition() && !banSpeak() ){
    //         console.info("符合开火🔥条件！");
    //         followRoom();
    //         firePowerController();
    //     }else{
    //         jumpDelayConfig();
    //         popupToast("《火力全开搜寻》<br>当前房间不符合开火🔥条件<br>3秒后自动跳转新🏠！", 3);
    //         fireJumpTime = setTimeout(randomFireRequest,3000);
    //     }
    // }
    //  handle bombfire onchange radio
    function bombFireFilter(){
        let fireCheck = document.getElementsByClassName("FirePowerChatModal-Notice")[0];
        if( fireCheck != undefined && !joinCondition() && awardJudge() && !banSpeak() ){
            console.info("符合弹幕💥发送！");
            followRoom();
            firePowerController();
        }else{
            if(switchStatus==="on"){
                jumpDelayConfig();
            }else{
                firePowerController();
            }
        }
    }
    // tow-in-one switch onchange listener, hide other radio
    function switchChange(){//==========================================add more hide element
        clearTimeout(fireJumpTime);//the clear must be created here
        clearTimeout(firePowerTime);//avoid controller run twice at same time
        // let switchStatus = localStorage.getItem("switchStatus🏮🎎🏮");
        if(switchStatus==="on"){//close siwtch
            document.getElementById("label_thunder").removeAttribute("style");
            // document.querySelector(".Title-roomOtherBottom").removeAttribute("style");
            // document.querySelector(".Title-roomOtherTop").removeAttribute("style");
            switchStatus = "off";
            localStorage.setItem("switchStatus🏮🎎🏮","off");
            if(radioStorage === "openFire"){
                welfareFilter();
            }else if(radioStorage === "bombFire"){
                bombFireFilter();
            }
        }else{//open switch
            document.getElementById("label_thunder").style.display="none";
            // document.querySelector(".Title-roomOtherBottom").style.display="none";
            // document.querySelector(".Title-roomOtherTop").style.display="none";
            switchStatus = "on";
            localStorage.setItem("switchStatus🏮🎎🏮","on");
            if(radioStorage === "openFire"){
                welfareFilter();
            }else if(radioStorage === "bombFire"){
                bombFireFilter();
            }
        }
        titleAreaRefresh();//refresh title
        console.info("开关状态:"+switchStatus);
    }
    // remove ads
    function removeSomeAds(){
        let signToolBar = document.querySelector(".PlayerToolbar-signCont");
        signToolBar!=null?signToolBar.remove():false;
        let signBarrage = document.querySelector(".SignBarrage");//here should be noticed error
        signBarrage!=null ?signBarrage.remove():false;
        let titleAd = document.querySelector(".Title-ad");
        titleAd!=null ?titleAd.remove():false;
        checkDelayCallback(9);
    }
    // radio onchange listener
    function radioChange(msg){
        if(msg === "ceaseFire"){
            radioStorage = "ceaseFire";
            clearTimeout(firePowerTime);
            clearTimeout(fireJumpTime);
            console.info("⛔-停止开火");
            localStorage.setItem("radioTagStatus🌼🍄🌼",msg);
        }else if(msg === "openFire"){
            radioStorage = "openFire";
            clearTimeout(firePowerTime);
            clearTimeout(fireJumpTime);
            console.info("🎰-粉丝抽奖");
            localStorage.setItem("radioTagStatus🌼🍄🌼",msg);
            welfareFilter();
        }else if(msg === "bombFire"){
            radioStorage = "bombFire";
            clearTimeout(firePowerTime);
            clearTimeout(fireJumpTime);
            console.info("💥-弹幕轰炸");
            localStorage.setItem("radioTagStatus🌼🍄🌼",msg);
            bombFireFilter();
        }else if(msg === "thunderAssign"){
            radioStorage = "thunderAssign";
            clearTimeout(firePowerTime);
            clearTimeout(fireJumpTime);
            console.info("⚡-极速签到");
            localStorage.setItem("radioTagStatus🌼🍄🌼",msg);
            prepareThunderAssign();
        }
    }
    //===============================================================
    //+++++++++++ Room Script Controller and Init Program ++++++++++
    //===============================================================
    function programInitCheck(){
        var chatCheck = document.querySelector(".ChatSend");//check chat element
        if(chatCheck==null){
            checkDelayCallback(0);
        }else{//init program
            sbts = (new Date()).getTime();//record start timestamp
            msgTxt = document.querySelector(".ChatSend-txt");
            msgBtn = document.querySelector(".ChatSend-button");
            createUIElement();//create css and btn
            jsonAnalytics(1);//barrage analytics
            screenBarrageMemory();//restore scroll barrage status
            autoPlayMemory();//restore autoplay status
            // adjustClarity(0);//adjust clarity (1.highest;other.lowest)
            getUserInfo();//get uid,uname
            getRoomId();//get real room_id
            userConfig();//user personal config
            realPersonNum();//real person number
            // setTimeout(assignRank, 1000);//room assign rank
            giftShowEntrance();//platform total gift sort number
            motorcadeEntrance();//motorcade total number and car assign
            thirdStatEntrance();//third statistic entrance
            addFansClickBtn();//fans donate bars btn
            addFishFoodClickBtn();//add fish food btn
            removeSomeAds();//remove some boring ADs
            getPhoneStatus();//get phone status --> get fishfood || send danmu no phone
            getFilterConfigCoding();//get filter config
            cloudBarrage();//get cloud barrge
            autoAssign();//room auto assign
            putJumpInfo();//jump Counts
            cancelFollowRoom();//init careList session storage
            getGFVersionNumber();//get lastest version info
            sbts = (new Date()).getTime();//reset timestamp
            checkDelayCallback(1);//go to barrageInitCheck
        }
    }
    //===============================================================
    //+++++++++++++++++++ Wait Element or Object Loading ++++++++++++
    //===============================================================
    function checkDelayCallback(code){
        if(code===0){
            setTimeout(programInitCheck,1000);
        }else if(code===1){
            setTimeout(barrageInitCheck,1000); 
        }else if(code===2){//wait to check fire power
            if(((new Date()).getTime() - sbts)/1000 < 25){//jump unless it's more than *s to check none of activity
                setTimeout(barrageInitCheck,1000);
            }else{
                switchStatus==="on" ? jumpDelayConfig() : welfareController();
            }
        }else if(code===3){
            if(((new Date()).getTime() - sbts)/1000 < 15){
                setTimeout(barrageInitCheck,1000);//wait 12s for element loading
            }else{
                switchStatus==="on" ? jumpDelayConfig() : firePowerController();
            }
        }else if(code===4){
            if(((new Date()).getTime() - sbts)/1000 < 15){
                setTimeout(screenBarrageMemory,1500);//wait 15s for element loading
            }
        }else if(code===5){
            if(((new Date()).getTime() - sbts)/1000 < 15){
                setTimeout(autoAssign,2000);//wait 15s for element loading
            }
        }else if(code===6){
            if(((new Date()).getTime() - sbts)/1000 < 15){
                setTimeout(releasePhoneLimit,3000);//wait 15s for element loading
            }
        }else if(code===7){
            setTimeout(getAllFishFood,7000);//wait 15s for element loading
        }else if(code===8){
            if(((new Date()).getTime() - sbts)/1000 < 15){
                setTimeout(autoPlayMemory,1000);//wait 15s for element loading
            }
        }else if(code===9){
            setTimeout(removeSomeAds,5000);//wait 5s for element loading
        }else if(code===10){
            if(((new Date()).getTime() - sbts)/1000 < 10){
                setTimeout(giftShowEntrance,1000);//wait 15s for element loading
            }else{
                console.warn("无礼物显示位置");
            }
        }else if(code===11){
            if(((new Date()).getTime() - sbts)/1000 < 10){
                setTimeout(motorcadeEntrance,1000);//wait 15s for element loading
            }else{
                console.warn("无车队显示位置");
            }
        }else if(code===12){
            if(((new Date()).getTime() - sbts)/1000 < 10){
                setTimeout(addFansClickBtn,1000);//wait 15s for element loading
            }else{
                console.warn("无打卡显示位置");
            }
        }else if(code===13){
            if(((new Date()).getTime() - sbts)/1000 < 10){
                setTimeout(addFishFoodClickBtn,1000);//wait 15s for element loading
            }else{
                console.warn("无鱼粮显示位置");
            }
        }else if(code===14){
            if(((new Date()).getTime() - sbts)/1000 < 10){
                setTimeout(thirdStatEntrance,1000);//wait 15s for element loading
            }else{
                console.warn("无统计显示位置");
            }
        }
    }

    //===============================================================
    //++++++++++++++ Fire Power Check and Barrage Init ++++++++++++++
    //===============================================================
    function barrageInitCheck(){
        if(radioStorage === "openFire"){
            let fansCheck = document.getElementsByClassName("LotteryDrawEnter-enter")[0];
            if(fansCheck!=undefined){//exist fans welfare
                setTimeout(welfareFilter,3000);
            }else{
                checkDelayCallback(2);
            }
        }else if(radioStorage === "bombFire"){
            let fireCheck = document.getElementsByClassName("FirePowerChatModal-Notice")[0];
            if(fireCheck!=undefined){//exist fire power
                bombFireFilter();
            }else{
                checkDelayCallback(3);
            }
        }else if(radioStorage === "thunderAssign"){
            prepareThunderAssign();
        }else{//ceaseFire or undefined
            console.info("初始化停止⛔");
            storageOperate();//clear localStorage
        }
    }

    setTimeout(programInitCheck, 4000); //wait 4 second to load page
}

//=============================================================================
//++++++++++++++++++ Yuba Assign, Domain is yuba.douyu ++++++++++++++++++++++++
//=============================================================================
function yubaScript(){
    var page = 1;//default page
    var assignStr = "";
    // yuba assign
    function yubaAssign(groupId,groupName){
        let postData = "group_id="+groupId;//+"&cur_exp=15"; //ignore curent exp parameter to send here
        fetch('https://yuba.douyu.com/ybapi/topic/sign', {//?timestamp=0.122968905822739
            // fetch('https://msg.douyu.com/v3/motorcade/getSetting?timestamp='+Math.random(), {
            method: 'POST',
            mode: 'cors',
            credentials: 'omit',
            headers: {
                // "x-csrf-token":"GFFVRWBzyh9vrY0GsDJLGjCiNNtLet3Bd9",//this value is acf_yb_t in cookie,if it's null douyu can generate a new one
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: postData
        }).then(json => {
            if(json.data.level!=undefined){
                console.info("【"+groupName+"】的鱼吧已签到，鱼吧等级为Lv."+json.data.level);
                assignStr += "【"+ groupName +"】、";
            }
        }).catch(err => {
            console.error('REQUEST ERROR', err);
        })
    }

    // every page can get max value of 30 item at yuba collection list, default back to 6 items without limit
    function yubaFollowList(){
        fetch('https://yuba.douyu.com/wbapi/web/group/myFollow?limit=30&page='+ page,{//timestamp=0.33173683329112125
            method: 'GET',
            mode: 'no-cors',
            cache: 'default',
            credentials: 'include'
        }).then(result => {
            let jsonData=result.data.list;
            if(jsonData!=undefined && jsonData!=""){
                // let overCount = 5;
                let overCount = jsonData.length;
                let i = 0;
                var loopit = function(){
                    if(i==overCount){
                        // console.info("本页签到完毕！");
                        yubaFollowList(++page);
                        return;
                    }else{
                        yubaAssign(jsonData[i].group_id,jsonData[i].group_name);
                        i++;
                        setTimeout(loopit,parseInt(Math.random()*50)+150);
                    }
                }
                loopit();
            }else{
                localStorage.setItem("yubaAssigned💧☔💧"+(new Date()).toLocaleDateString(),"true");
                assignStr = assignStr.substr(0,assignStr.length-1);
                storageClear();
                popupToast(assignStr+"的鱼吧(位于鱼吧收藏列表里)，今日签到完毕！",4);
            }
        }).catch(err => {
            console.error('REQUEST ERROR', err);
        })
    }

    // clear yuba assign history
    function storageClear(){
        var storage = window.localStorage;
        storage.removeItem("game_recode_listdata_h5p_room");
        for(let i = 0; i< storage.length; i++ ){
            if( storage.key(i).indexOf("yubaAssigned💧☔💧") != -1 && storage.key(i).indexOf("yubaAssigned💧☔💧"+(new Date()).toLocaleDateString()) == -1 ){
                storage.removeItem(storage.key(i));
            }
        }
    }

    let yubaStatus = localStorage.getItem("yubaAssigned💧☔💧"+(new Date()).toLocaleDateString());
    if(yubaStatus=="true"){//redupliction checked
        console.info("鱼吧已签到,不再重复执行！");
    }else{
        setTimeout(yubaFollowList,2000);
    }
}

//=============================================================================
//++++++++++++++++ Motorcade Assign, Domain is msg.douyu +++++++++++++++++++++
//=============================================================================
function motorcadeScript(){
    var sbts = new Date().getTime();
    // create style
    function createCSS(){
        var style = document.createElement('style');
        style.type = 'text/css';
        let styleStr=" .model_toast {width: 452px;background: rgba(0,0,0,.5);border-radius: 8px;text-align: center;position: fixed;top: 50%;left: 50%;margin-top: -120px;margin-left: -226px;} ";
        styleStr += " .model_toast .popup-toast {padding: 38px 40px;text-align: center;font-size: 16px;color: #fff;z-index: 300;} ";
        style.innerHTML=styleStr;
        document.head.appendChild(style); // document.getElementsByTagName('head').item(0).appendChild(style);
        getMotorcadeMid();
    }
    // * weak tip toast
    function popupToast(text,time) {
        let editText = text + "<br><br>("+time+"s后自动关闭此页面)";
        var creatediv = document.createElement('div');
        creatediv.className = 'model_toast';
        creatediv.setAttribute('id','toast-popup');
        var contentHtml = '<div class="popup-toast" id="toast-content">'+editText+'</div>'
        creatediv.innerHTML = contentHtml;
        document.body.appendChild(creatediv);
        time==undefined?3:time;//default 3s
        var loopRefresh = function(){
            let modelObj = document.getElementById('toast-popup');
            if(time==0){
                modelObj.style.display = 'none';
                return;
            }else{
                let editText = text + "<br><br>("+time+"s后自动关闭此页面)";
                var content = document.getElementById('toast-content');
                content.innerHTML = editText;
                modelObj.style.display = 'block';
                time--;
                setTimeout(loopRefresh,1000);
            }
        }
        loopRefresh();
    }
    //get my own mid from page
    function getMotorcadeMid(){
        // var tagObj = document.getElementsByClassName("linkWrap--3Bin_")[1];//the second one
        var tagObj = document.getElementsByClassName("LevItem-linkWrap-3Bin_")[1];//the second one
        if(tagObj!=undefined){
            sbts = new Date().getTime();
            let mid = tagObj.getAttribute("href");
            mid = mid.substring(12);
            if(mid!="undefined"){
                console.info("我的车队号:"+mid);
                motorcadeCheck(mid);
            }else{
                waitElementLoad(2);
            }
        }else{
            waitElementLoad(1);
        }
    }
    // wait element to load
    function waitElementLoad(code){
        if(code===1){//page load
            if(new Date().getTime()-sbts<1000*25){
                setTimeout(getMotorcadeMid,1000);
                // }else{
                // console.info("加载超时，请重试");
                // return;
            }
        }else if(code===2){//ajax data load
            if(new Date().getTime()-sbts<1000*7){
                setTimeout(getMotorcadeMid,1000);
            }else{
                popupToast("《车队签到失败》<br>车队签到失败，请手动签到！", 4);
                console.info("没有加入车队或无法获取车队号！");
                setTimeout(function(){
                    window.location.href = "https://popzoo.github.io/barrage/";
                },4000);
            }
        }
    }
    //get assign cookie
    function getCookie(cookieName) {
        var csrfToken = "";
        var strCookie = document.cookie;
        var arrCookie = strCookie.split("; ");
        for(var i = 0; i < arrCookie.length; i++){
            var arr = arrCookie[i].split("=");
            if(cookieName == arr[0]){
                csrfToken = arr[1];
            }
        }
        if(csrfToken == ""){
            csrfToken = Math.random().toString(36).substr(2);
            document.cookie = "post-csrfToken="+ escape(csrfToken)+";path=/";
        }
        return csrfToken;
    }
    //check my motorcade assign status
    function motorcadeCheck(mid){//escape(mid) +'&timestamp='+Math.random().toFixed(16)
        fetch('https://msg.douyu.com/v3/motorcade/signs/weekly?mid='+ mid, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'dy-device-id':'-',
                "dy-client": "web",
                "dy-csrf-token":getCookie("post-csrfToken"),
            }
        }).then(result => {
            if(result.data.is_sign=="0"){
                console.info("本周已签到次数:"+result.data.total);
                motorcadeAssign(mid,1+parseInt(result.data.total));
            }else if(result.data.is_sign=="1"){
                console.info("车队已签到,不再重复执行！");
            }else{
                console.info(result.message);
            }
        }).catch(err => {
            console.error('REQUEST ERROR', err);
        })
    }
    //assign my motorcade
    function motorcadeAssign(mid,total){//encodeURIComponent(mid)
        let postData = "to_mid="+ mid +"&expression="+total;
        fetch('https://msg.douyu.com/v3/msign/add?timestamp='+Math.random().toFixed(17), {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'dy-device-id':'-',
                "dy-client": "web",
                "dy-csrf-token":getCookie("post-csrfToken"),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: postData
        }).then(result => {
            if(result.status_code=="200"){
                popupToast("《车队签到成功》<br>今日车队自动签到完毕！", 4);
                setTimeout(function(){
                    // window.opener=null;
                    // window.open('','_self');
                    // window.close();
                    window.location.href = "https://popzoo.github.io/barrage/";
                },4000);
            }else{
                console.info(result.message);
            }
        }).catch(err => {
            console.error('REQUEST ERROR', err);
        })
    }
    setTimeout(createCSS,3000);
}
//===============================================================
//+++++++++++++++ Main Controller and Entrance ++++++++++++++++++
//===============================================================
(function(){
    if(window.location.host=="www.douyu.com"){
        roomScript();
    }else if(window.location.host=="yuba.douyu.com"){
        yubaScript();
    }else if(window.location.host=="msg.douyu.com"){
        motorcadeScript();
    }
})();

