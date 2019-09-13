<!-- GreaseFork -->
<!-- <script charset="Shift_JIS" src="http://chabudai.sakura.ne.jp/blogparts/honehoneclock/honehone_clock_wh.js"></script> 时钟代码 -->
<h2>主要功能</h2>
<p>本脚本所包含的功能有自动火力全开搜寻+自动发送弹幕+皇帝弹幕特效+不绑定手机发弹幕+房间自动签到+房间真实人数+今日跳转次数+默认最低画质(可换最高)+主播信用值+可选关闭自动播放+可选关闭滚屏弹幕等功能</p>
<hr>
<h2><a style="clear:both; color:red; text-decoration:none; background-color:yellow">必知内容</a></h2>
<p>安装本脚本的目的是为了抢丸子红包和享受帝王弹幕效果和不绑手机发弹幕或查看房间人数</p>
<ol>
    <li>如果是为了使用帝王弹幕特效和查看人数的功能，那将复选框点到小猴那个位置等待页面初始化12s后就好了，其他的都不理会，按以往您斗鱼习惯操作就好。以下内容是详细介绍，<strong>懒人可以不看！</strong></li>
    <li>如果是为了抢丸子或红包，那一定要记住要<strong><a style="color:red">用小号，用小号，用小号</a></strong>重要说三遍，小号可以不绑手机但要任意账号登陆登录（不登陆火力全开不出现），保持在自动搜索状态🔥，来搜索符合筛选规则的房间（记住：这个小号尽量不要发弹幕，只做搜寻和跳转使用，仅跳转的话上千次都没问题）。找到筛选合适的网址复制粘贴，然后在用自己的主账号放到💥自动发送弹幕功能，自动发弹幕抢丸子红包，当火力全开消失后则自动停止发弹幕，出现后还会继续恢复发送弹幕，主账号可以开两个个页面抢丸子（测试没问题），但不要超过三个，博主曾开了5个房间，然侯被系统封了半个月，因为要登陆两个账号建议用两个浏览器登陆，一个浏览器的多账号功能也行，但容易内存占用过高而崩溃。 主账号按自己的使用习惯操作就好，但也最好不要频繁段时间内跳转，只是作为发弹幕抢丸子使用。碰到合适的直播间，丸子会经常发，所以也不用段时间内经常更换网址，如果非要跳转，或者一段时间再跳转（>30s），或者控制在100次内（超过100次以上会被系统检测，有较大概率被系统封禁发言，这点是最最最重要的）。</li>
    <li>本来博主是把自动寻找火力全开房间+奖品筛选判读+自动发弹幕抢丸子红包的功能放在一个脚本中(真正的全自动发弹幕抢丸子工具)，但是被斗鱼的强大的弹幕系统给无情打击了，因为斗鱼后台能够检测账号的异常状态，频繁跳转+频繁发弹幕（二者兼备才行）则跳转超过一百多次后就会被限制弹幕，解封比较麻烦，基于这个原因，博主把自动火力搜寻和自动发送弹幕功能分开，用两个账号操作才最保险和安全。</li>
</ol>
<hr>
<h2>使用说明</h2>
    <p><img src="https://raw.githubusercontent.com/wolf-scream/FirePowerSeek/master/pics/updateInstruction.png" width="100%"></p>
    <p>本脚本的使用方法特别简单，因为因为一共可供操作的单击区域就5个</p>
<ul>
    <li>序号1是手动搜索火力全开房间，用户自动搜索奖品内容不满意，或不启用自动搜索，喜欢手动筛选的用户使用</li>
    <li>图序2区域是脚本的主要功能，从左向右依次是停止火力，自动搜索火力全开房间，符合开火房间自动发送弹幕功能,在下面小图有详细说明</li>
    <li>序号3区域是一些数据的显示，从左向右依次是平台礼物种类数量、今日跳转次数、主播信用度、房间人数、主播开播时间、房间已签到人数（没有房间签到则不显示此图标）,在下面小图有详细说明，点击后可以局部刷新。平台礼物种类数量每日首次访问更新一次，点击后可以看到礼物的图标；今日跳转次数不包含用户手动粘贴的斗鱼网址跳转；主播的信用值，最高12，低于4分则不能送主播礼物；房间的真实在线人数，在有些情况下会不准（比如没开播的主播房间用户永远为0），该接口参考greaseFork中qianjiachun大佬提供的json接口实现的，在此拜谢。还有调整画质的方法参考greaseFork中wah0713大神的方法，在此一并谢过。除了这两处的参考且在版本迭代记录中有详细的参考记录，其他均为作者原创；</li>
</ul><table><tr>
    <td><img src = "https://raw.githubusercontent.com/wolf-scream/FirePowerSeek/master/pics/funcionSeek.png" width="100%" ></td><td>&nbsp;&nbsp;</td>
    <td><img src = "https://raw.githubusercontent.com/wolf-scream/FirePowerSeek/master/pics/funcionGift.png" width="100%" ></td>
</tr><tr>
    <td><img src = "https://raw.githubusercontent.com/wolf-scream/FirePowerSeek/master/pics/functionPeople.png" width="100%" ></td><td>&nbsp;&nbsp;</td>
    <td><img src = "https://raw.githubusercontent.com/wolf-scream/FirePowerSeek/master/pics/functionAssign.png" width="100%" ></td>
</tr></table><ul>
<li>区域详细说明见上面小图，脚本执行后鼠标悬浮在此区域也有上小图显示的浮窗说明提示；</li>
<li><img src="https://raw.githubusercontent.com/wolf-scream/FirePowerSeek/master/pics/shenhaoLogo.png" width="50%"></li>
<li>上图是超级皇帝聊天弹幕特效的效果图，详细说明如下：
  <ul><li>1是帝王标志logo，没有考虑贵族标志的去重问题，(如需要联系博主，后续迭代加上去重)；</li>
    <li>2是当前房间的粉丝牌，普通粉丝牌直接是满级，动态定制的粉丝牌，如小团团、大马猴则是当前房间粉丝榜一的牌子，如果当前房间没牌子，则指定一个固定粉丝牌；</li>
    <li>3是满级账号标识；</li>
    <li>4是满级房间号标识；
    <li>5是定制的logo车队标识，若你的账号有车队标识，则不显示此标；</li>
    <li>6是签到手气王，已去重;</li>
    <li>7是王者神豪的动态logo，如果你的账号原本就有签到手气王，则也不显示此标志;</li>
</ul></li></ul><hr>
  <table><tr>
    <td><img src = "https://raw.githubusercontent.com/wolf-scream/FirePowerSeek/master/pics/initStopUnsatisfied.png" width="100%" ></td><td>&nbsp;&nbsp;</td>
    <td><img src = "https://raw.githubusercontent.com/wolf-scream/FirePowerSeek/master/pics/initStopHotStop.png" width="100%" ></td>
    </tr><tr>
    <td><img src = "https://raw.githubusercontent.com/wolf-scream/FirePowerSeek/master/pics/initJumpUnsatisfied.png" width="100%" ></td><td>&nbsp;&nbsp;</td>
    <td><img src = "https://raw.githubusercontent.com/wolf-scream/FirePowerSeek/master/pics/initJumpSatisfied.png" width="100%" ></td>
</tr></table><ul>
<li>上面四幅图片为常见的脚本初始化状态,左边单选可以执行网站条件筛选但不跳转；右边单选的则执行自动筛选条件，符合条件+关注+签到，火力全开结束后等待60s,若没有重新开始，则开始跳转继续搜索开火房间，不符合条件则也是继续跳转搜索</li>
<li>非油猴的使用方式：
  <ul><li>打开房间，等待网页加载完毕</li>
    <li>拷贝代码，在浏览器（推荐chrome）中按F12打开控制台</li>
    <li>在console中粘贴代码</li>
    <li>按回车执行脚本</li>
    <li>再按F12关闭控制台等待12s即可</li>
  </ul></li></ul><hr>
<h2>脚本特点</h2>
<ol>    
    <li>本脚本完全由原生的JS写成，且好多函数代码模块可以独立使用（比如非绑定手机发弹幕函数），用户完全可以不装tampermokey或violentmonkey,直接复制需要的代码片段在控制台执行；</li>
    <li>暂时没有增加斗鱼广告的去除功能，一是斗鱼的广告并没有妨碍和降低观看直播的用户体验；二是毕竟是白嫖了斗鱼这么久，让斗鱼赚点广告费应该的；三是greaseFork平台很多去广告的脚本，直接使用就可以了；四是斗鱼的活动推广广告位置经常不固定，需要经常更新脚本才行，不便于脚本长期维护;</li>
</ol><hr>
<h2>常见问题</h2>
<ul>
    <li>问题No.1 当弹幕速度过快的时候(一般发送弹幕间隔时间<2s)，会出现皇帝弹幕特效出现在屏幕左侧移动缓慢的情况，请降低弹幕发送速度即可;</li>
    <li>问题No.2 为什么房间真实人数为0，点击刷新也不变，可能是当前房间没有开播造成的;</li>
    <li>问题No.3 为什么🌐网络跳转次数统计不准确-->跳转次数统计是统计当前账号直接采用本脚本(手动按钮或自动开火)跳转的次数统计，不包括用户自己点击的页面链接或地址栏粘贴网址访问所产生的跳转次数统计;</li>
    <li>问题No.4 有可能会产生的情况是当跳转次数多了后，自动跳转页面首先显示所跳转的页面丢失或无响应，而后隔几秒自动刷新才正确显示(这时手动刷新页面也会显示正常页面)，不确定是否是普遍现象，可能是网络的网速太慢导致，也可能是短时间请求数过于频繁导致，若是后者，请隔段时间在运行自动搜索跳转</li>
    <li>问题No.5 浏览器显示内存不足崩溃，用户打开的页面过多造成的，建议用多个不同浏览器满足多个页面打开的需求，不要只用一个浏览器;</li>
</ul><hr>    
<h2><a href="https://raw.githack.com/wolf-scream/gift_effect/master/index.html" style="clear:both; color:red; text-decoration:none" target="blank" >礼物图谱</a></h2>
    <ul>
    <li>新增查看斗鱼定制礼物的图谱展示（主要是定制火箭最多），由于是统一加载所有礼物图片，网速不好的用户请耐心等待一下哈，当鼠标停留到礼物正上方会显示礼物的名称和礼物的id号，大家可以涨涨见识撒，土豪的可以找找自己喜欢的礼物模板记住id，然后去斗鱼定制私人火箭，相当有牌面！<strong><a href="https://raw.githack.com/wolf-scream/gift_effect/master/index.html" target="blank">【传送门】</a></strong></li>
   <li>用浏览器的搜索功能ctrl+F，能搜到自己熟悉的礼物图片，文字默认是隐藏（注意不是没有），鼠标悬停才显示，来个小团团“母猪冲撞”有木有撒;</li>
   </ul>
   <table><tr>
        <td><img src="https://raw.githubusercontent.com/wolf-scream/gift_effect/master/douyu_gift.png" width="100%"></td>
        <td><img src="https://raw.githubusercontent.com/wolf-scream/gift_effect/master/search_gift.png" width="100%"></td>
   </tr></table><hr>    
<h2><a style="clear:both; color:red; text-decoration:none; background-color:yellow">作者声明</a></h2>
<strong>本脚本仅供编程爱好者参考、学习和交流使用，不作商业用途，如有侵犯了您的权益，请立马联系作者进行处理。</strong>
<hr>
<h2>写在最后</h2>
    <ul>
    <li>博主连抓N天都没有抓到幻神，蓝瘦，幻神见尾不见首，考虑到抓捕幻神弹幕方法的鸡肋所以默认是被注掉，没有开启此功能，但博主还是希望您能将尾部的setInterval(captureDeityBarrage,7000)方法打开，大家一起来抓幻神，抓到有效弹幕元素(localStorage中两个🍅🥦🍅打头的键值)的并发邮件给博主的，博主大手一挥赏鱼丸万两，就是这么壕！</li>
    <li>greaseFork中的Greasy丶H2P作者<a href="https://greasyfork.org/zh-CN/scripts/380546">【传送门】</a>已经做了带UI界面很不错的自动发送弹幕功能了，而且功能很完善；</li>
    <li>待完成的功能todo: 0.云端分类弹幕库筹建；1.车队自动签到；2.幻神弹幕特效实现……</li>
    <li>看到github上有个自动记录竞猜数据的python脚本，包括竞猜封盘的赔率，竞猜标题，输赢，鱼丸数量等，将数据保存到本地并可以浏览器列表形式展示数据。这个功能还挺棒的，博主也挺喜欢竞猜的，好赌是天性哈，虽然总是梭哈然后就两手光光了，需要的朋友点击<strong><a style="color:red" href = "https://github.com/youbao88/douyuquiz">这里</a>;</strong></li>
    <li>欢迎大家使用、参考、研究和引用本脚本，但在引用脚本的时候，希望您能标注出处，这也是对博主的认可和尊重，也是对您自我修养的体现，如果有什么意见的话欢迎给博主<strong><a href="mailto:lvlanxing@gmail.com?subject=邮件主题&body=邮件内容" rel="nofollow" style="color:red">发送邮件</a></strong>留言，或在博主的<strong><a style="color:red" href="https://github.com/wolf-scream/FirePowerSeek">GitHub</a></strong>上留言都行，（QQ交流群：650178547）</li>
    </ul>
