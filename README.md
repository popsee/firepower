<!-- GreaseFork -->
<!-- <script charset="Shift_JIS" src="http://chabudai.sakura.ne.jp/blogparts/honehoneclock/honehone_clock_wh.js"></script> 时钟代码 -->
<h2>主要功能</h2>
<p>本脚本所包含的功能有自动火力全开搜寻+自动发送弹幕+皇帝弹幕特效+不绑定手机发弹幕+房间自动签到+房间真实人数+今日跳转次数+默认最低画质(可换最高)+主播信用值+可选关闭自动播放+可选关闭滚屏弹幕等功能</p>
<hr>
<h2><a style=" color:red; text-decoration:none; background-color:yellow">必知内容</a></h2>
<p>安装本脚本的目的是为了抢丸子红包、享受帝王弹幕效果、不绑手机发弹幕，查看主播信用、开播时常等功能</p>
<ol>
    <li>如果是为了使用帝王弹幕特效和不绑手机发弹幕，查看等功能，那将复选框点到⛔-火力停止状态,等待组件初始化就好了，其他的都不理会，按以往您斗鱼习惯操作就好。以下内容是其他功能的详细介绍，<strong>懒人可以不看！</strong></li>
    <li>如果是为了抢丸子或红包，那一定要记住要<strong><a style="color:red">用小号，用小号，用小号</a></strong>重要说三遍，小号可以不绑手机但要任意账号登陆登录（不登陆火力全开不出现），保持在自动搜索状态🔥，来搜索符合筛选规则的房间（记住：这个小号尽量不要发弹幕，只做搜寻和跳转使用，仅跳转的话上千次都没问题，有丧心病狂大神测试一天跳转3000多次，没毛病）。通过小号找到筛选合适的网址拷贝下来。然后用自己的主账号访问刚刚复制的网址，状态保持在💥弹幕轰炸功能，即自动发弹幕抢丸子红包，脚本可以自动检测有无火力全开而发送或停止弹幕，主账号可以开两个页面抢丸子，再多了会被识别是机器人发弹幕而被封（亲测），因为要登陆两个甚至多个账号建议用不同浏览器登陆；</li>
    <li>本来博主是把自动寻找火力全开房间+奖品筛选判读+自动发弹幕抢丸子红包的功能放在连续函数中执行的(真正实现自动搜索+自动发弹幕抢丸子)，但是这种“异常”情况能被斗鱼后台系统检测到，一般满足频繁房间跳转+频繁发弹幕（二者兼备才行）则搜索跳转150次上下后就会被限制弹幕（但一般不超过200次，自己点击跳转的超200次不算），解封比较麻烦，基于这个原因，博主把自动火力搜寻和自动发送弹幕功能拆分开俩，这样至少能保证大家主账号的安全。</li>
    <li>鉴于有些水友抱怨说火力搜寻和自动弹幕功能没有合二为一，感觉我拆分的多此一举，我思量后决定把全自动火力搜寻+自发弹幕的脚本分享给大家。这个全自动脚本功能可以满足一些喜欢冒险的人、懒人或者是每天看斗鱼时间较短，火力搜寻跳转次数在100之内的用户，请<strong><a style="color:red; text-decoration:none" href="https://raw.githubusercontent.com/wolf-scream/FirePowerSeek/master/AutoSeek_SendMsg.js" target="_blank">这里下载</a></strong>；</li>
    <li>🔥自动搜索火力全开房间的筛选条件包含：
        <ul><li>房间需要有火力全开活动才符合条件；</li>
            <li>热度大于300000的则房间被过滤掉，因为中奖难度太高；</li>
            <li>奖品内容要为鱼丸、红包或现金，鱼丸份数>2，数量>100；</li>
            <li>红包或现金过滤0.01、0.1等无意义的红包；；</li>
            <li>参与条件过滤掉粉丝专属的开火活动；</li>
            <li>过滤掉被房间禁言的直播间；</li>
        </ul>
    </li>
</ol>
<hr>
<h2>脚本说明</h2>
    <p><img src="https://raw.githubusercontent.com/wolf-scream/FirePowerSeek/master/pics/updateInstruction.jpg" width="100%"></p>
    <p>本脚本的使用方法特别简单，因为因为一共可供操作的区域都集中在房间标题右侧附近，如图所示；</p>
<ul>
    <li>序号1是手动搜索火力全开房间，供用户对自动搜索的奖品内容不满意，自动搜索无效时或不启用自动搜索，喜欢手动筛选的用户使用；</li>
    <li>图序2区域是脚本的主要功能，从左向右依次是⛔-火力停止状态；🔥-火力搜寻状态；💥-符合搜索条件的房间则自动发送弹幕功能,下面图解说明；</li>
    <li>序号3区域是一些数据的显示，从左向右依次：
        <ul><li>🎁平台礼物种类数量,平台礼物种类数量每日首次访问更新一次缓存到本地，点击后可以看到礼物的展示网址;</li>
            <li>🌐今日跳转次数,今日跳转次数仅统计使用本脚本自动或手动搜索跳转的次数，供用户参考防止跳转多了被斗鱼封禁；</li>
            <li>💎主播信用度,主播的信用值，最高12，低于4分则不能送主播礼物；</li>
            <li>🎅房间在线人数,只做参考，靠谱的活跃观众人数统计建议大家去<strong><a href="https://bojianger.com/" target="_blank">播酱</a></strong>查看；</li>
            <li>⏰主播开播时间，单位为分钟;</li>
            <li>📝房间已签到人数（没有房间签到则不显示）,点击后可以实时刷新。</li>
        </ul>
    </li>
</ul><table><tr>
    <td><img src = "https://raw.githubusercontent.com/wolf-scream/FirePowerSeek/master/pics/funcionSeek.png" width="100%" ></td><td>&nbsp;&nbsp;</td>
    <td><img src = "https://raw.githubusercontent.com/wolf-scream/FirePowerSeek/master/pics/funcionGift.png" width="100%" ></td>
</tr><tr>
    <td><img src = "https://raw.githubusercontent.com/wolf-scream/FirePowerSeek/master/pics/functionPeople.png" width="100%" ></td><td>&nbsp;&nbsp;</td>
    <td><img src = "https://raw.githubusercontent.com/wolf-scream/FirePowerSeek/master/pics/functionAssign.png" width="100%" ></td>
</tr></table><ul>
<li>各区域详细说明见上面小图，脚本执行后鼠标悬浮在对应的功能按钮上也有相同的浮窗说明提示；</li></ul>
   <table><tr>
        <td><img src="https://raw.githubusercontent.com/wolf-scream/FirePowerSeek/master/pics/shenhaoLogo.png" width="100%"></td><td>&nbsp;&nbsp;</td>
        <td><img src="https://raw.githubusercontent.com/wolf-scream/FirePowerSeek/master/pics/banSpeak.png" width="100%"></td>
   </tr></table>
<ul><li>上左图是超级皇帝聊天弹幕特效的效果图，详细说明如下：
  <ol><li>帝王标志logo，没有考虑贵族标志的去重问题，(如您有其他贵族标志，则也一同显示)；</li>
    <li>当前房间的粉丝牌，普通粉丝牌直接是满级，定制logo的粉丝牌，如猪叫团牌子则是扒取当前房间粉丝榜一的牌子，如果当前房间没牌子，则指定一个固定粉丝牌，同样没有去重，感觉没啥必要；</li>
    <li>满级账号标识；</li>
    <li>满级房间号标识；
    <li>定制的logo车队标识，已去重，若你的账号有车队标识，则不显示此标；</li>
    <li>签到手气王，已去除，这个图标和王者神豪图标不同行显示，看起来不舒服，包括第一次图标和猜王图标都是这个原因没有加上的;</li>
    <li>王者神豪的动态logo图标，这个挥刀的小人感觉还是很拉风的，必须留着;</li>
</ol></li><li>上右图说明：当你发送弹幕后，屏幕滚屏弹幕区和聊天弹幕区都不显示自己发送的弹幕，尝试用手机app端发送弹幕也没显示，这时可以用浏览器F12找console区域，然后发送一条弹幕出现上图右侧的报错，说明您已经被斗鱼系统给屏蔽发言了，如果出现这种情况，请移步博主的github,参考如何解封账号异常状态，里面有详细的封禁场景和解封办法，<a style="color:red; text-decoration:none" href="https://github.com/wolf-scream/FirePowerSeek/issues/2" target="_blank">点击这里</a></li></ul><hr>
<ul><li>非油猴的使用方式：
  <ul><li>打开房间，等待网页加载完毕</li>
    <li>拷贝代码，在浏览器（推荐chrome）中按F12打开控制台</li>
    <li>在console中粘贴代码，按回车执行脚本</li>
    <li>再按F12关闭控制台等待脚本加载</li>
  </ul></li></ul><hr>
<h2>脚本特点</h2>
<ol>    
    <li>本脚本完全由原生的JS写成，不依赖第三方js库(如jquery),所以很多函数代码模块可以独立使用（比如非绑定手机发弹幕函数），用户完全可以不装tampermokey或violentmonkey,直接复制需要的代码片段或全部代码在控制台执行；</li>
    <li>暂时没有增加斗鱼广告的去除功能，一是斗鱼的广告并没有妨碍和降低观看直播的用户体验；二是毕竟是白嫖了斗鱼这么久，让斗鱼赚点广告费应该的；三是greaseFork平台已经有很多去除广告的脚本，直接使用就可以了；四是斗鱼的活动广告位置经常不固定，需要经常更新脚本才行，不便于维护;</li>
    <li>云弹幕功能已经集成了，这回大家可以解放双手，不用再为发啥子弹幕而愁了，自动从云端抽取符合房间类别的热门弹幕，就是这么牛；</li>
    <li>待完成的功能--todo: 幻神弹幕特效实现，以后人人都是幻神了，有牌面，有气场，有神范，有木有……</li>
</ol><hr>
<h2>常见问题</h2>
<ul>
    <li>问题No.1 当弹幕速度过快的时候(一般发送弹幕间隔时间<2s)，会出现皇帝弹幕特效出现在屏幕左侧移动缓慢的情况，请降低弹幕发送速度即可;</li>
    <li>问题No.2 有可能会产生的情况是当跳转次数多了后，自动跳转页面首先显示所跳转的页面丢失或无响应，而后隔几秒自动刷新才正确显示(这时手动刷新页面也会显示正常页面)，可能是短时间请跳转求数过于频繁导致，请隔段时间在运行自动搜索跳转;</li>
    <li>问题No.3 浏览器经常崩溃，这种情况是最为常见的，基本上是由于浏览器内存不足造成的，即用户打开的页面太多了，所以建议您用多个不同浏览器满足多个页面打开的需求，不要用一个浏览器打开多个页面，只要是chrome内核的浏览器就可以，如360、搜狗，也都能装油猴的;</li>
</ul><hr>    
<h2><a href="https://wolf-scream.github.io/gift_effect" style=" color:red; text-decoration:none" target="_blank" >礼物图谱</a></h2>
<ul>
    <li>新增查看斗鱼定制礼物的图谱展示（主要是定制火箭最多），由于是统一加载所有礼物图片，网速不好的用户请耐心等待一下哈，大家可以涨涨见识撒，土豪的可以找找自己喜欢的礼物模板记住id，然后去斗鱼定制私人火箭，相当有牌面！<strong><a style="text-decoration:none; color:red;" href="https://wolf-scream.github.io/gift_effect" target="_blank">【传送门】</a></strong></li>
   <li>用浏览器的搜索功能ctrl+F，能搜到自己熟悉的礼物图片，来个幻神定制火箭——“皇家同花顺”有木有撒;</li>
</ul><table><tr>
        <td><img src="https://raw.githubusercontent.com/wolf-scream/gift_effect/master/pics/giftShow.jpg" width="100%"></td>
   </tr></table><hr>    
<h2><a style=" color:red; text-decoration:none; background-color:yellow">作者声明</a></h2>
<p><strong>本脚本仅供编程爱好者参考、学习和交流使用，请勿做商业用途，如有侵犯了您的权益，请立马联系作者进行处理；</strong></p>
<p><strong>房间在线人数参考greaseFork中qianjiachun大佬的API接口实现的，在此竭诚拜谢；调整画质的方法参考greaseFork中wah0713大神的方法实现，再次谢过。除了这两处参考，其他均为作者原创；</strong></p>
<hr>
<h2>写在最后</h2>
<ul>
    <li>greaseFork中的大牛<strong><a href="https://greasyfork.org/zh-CN/scripts/380546">Greasy丶H2P</a></strong>已经做了带UI界面，可自定义弹幕内容、抄袭循环弹幕、关键词回复等自动发弹幕功能，功能很丰富，这里力推下；</li>
    <li>github上有个自动记录竞猜数据的python脚本，包括竞猜封盘的赔率，竞猜标题，输赢，鱼丸数量等，将数据保存到本地并可以浏览器列表形式展示数据。这个功能还挺棒的，喜欢梭哈的朋友请点击<strong><a style="color:red;text-decoration:none" href = "https://github.com/youbao88/douyuquiz">这里</a>;</strong></li>
    <li>github的liutianyu老兄向我推荐了<strong><a href="https://bojianger.com/" target="_blank">播酱</a></strong>这个斗鱼数据统计的平台，可以看到斗鱼特别详细的统计数据，包括真实活跃观众和历史所有的弹幕记录等，对数据感兴趣的童鞋可以去看看，这里的数据分析做的是相当的nice，每天幻神大大宠幸谁的直播间，什么时间发的啥子弹幕，送了啥子礼物都能一目了然，话说没有隐私了，牛批的一塌糊涂；</li> 
    <li>欢迎大家使用、参考、研究和引用本脚本，但在引用脚本的时候，希望您能标注出处，这也是对博主的认可和尊重，也是对您自我修养的体现，如果有什么意见的话欢迎给博主<strong><a href="mailto:lvlanxing@gmail.com?subject=邮件主题&body=邮件内容" rel="nofollow" style="color:red">发送邮件</a></strong>留言，或在博主的<strong><a style="color:red; text-decoration:none;" href="https://github.com/wolf-scream/FirePowerSeek">GitHub</a></strong>上留言都行，（QQ交流群：650178547）</li>
</ul>
