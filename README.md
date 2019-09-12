<!-- GreaseFork -->
<!-- <script charset="Shift_JIS" src="http://chabudai.sakura.ne.jp/blogparts/honehoneclock/honehone_clock_wh.js"></script> 时钟代码 -->
<h2>主要功能</h2>
<p>本脚本所包含的功能有自动火力全开搜寻+皇帝弹幕特效+不绑定手机发弹幕+房间自动签到+房间真实人数+今日跳转次数+默认最低画质(可换最高)+主播信用值+可选关闭自动播放+可选关闭滚屏弹幕等功能</p>
<hr>
<h2><a style="clear:both; color:red; text-decoration:none; background-color:yellow">必知内容</a></h2>
<p>安装本脚本的目的是为了抢丸子红包和享受帝王弹幕效果和不绑手机发弹幕或查看房间人数</p>
<ol>
    <li>如果是为了使用帝王弹幕特效和查看人数的功能，那将复选框点到小猴那个位置等待页面初始化12s后就好了，其他的都不理会，按以往您斗鱼习惯操作就好。以下内容是详细介绍，<strong>懒人可以不看！</strong></li>
    <li>如果是为了抢丸子或红包，那一定要记住要<strong><a style="color:red">用小号，用小号，用小号</a></strong>重要说三遍，小号可以不绑手机但要登录，来搜索符合筛选规则的房间（这个小号尽量不要发弹幕，只做搜寻和跳转使用，仅跳转的话上千次都没问题），从前面小筛选合适的网址复制粘贴，然后在用自己的主账号发弹幕抢丸子红包，，因为要登陆两个账号可以用两个浏览器登陆，也可以用谷歌的多账户功能，主要防止登陆的session互相覆盖。 主账号按自己的使用习惯操作就好，但也最好不要经常跳转，只是作为发弹幕抢丸子使用。碰到合适的直播间，丸子会一发半天或更长的，所以也不用经常更换网址，如果非要跳转，也尽量控制在100次内（超过100次以上会被系统检测，有较大概率被系统封禁发言，这点是最最重要的）。</li>
    <li>本来博主是把自动寻找火力全开房间+奖品筛选判读+自动发弹幕抢丸子红包的功能放在一个脚本中(真正的全自动发弹幕抢丸子工具)，但是被斗鱼的强大的弹幕系统给无情打击了，因为斗鱼后台能够检测账号的异常状态，频繁跳转+频繁发弹幕（二者兼备才行）则跳转超过一百多次后就会被限制弹幕，解封比较麻烦，基于这个原因，博主把火力搜寻独立出来，自动弹幕的功能暂时未加，原因请见下面的《脚本题外》。</li>
</ol>
<hr>
<h2>使用说明</h2>
    <p><img src="https://raw.githubusercontent.com/wolf-scream/FirePowerSeek/master/pics/introduction.png" width="100%"></p>
    <p>本脚本的使用方法特别简单，因为因为一共可供操作的单击区域就三个</p>
<ul>
    <li>一个是手动开火按钮见图序号1，点击后立即手动跳转一个火力全开的房间，如果序号停留在按钮二见序号2的位置，则保持停止，不在自动搜索，如果停留在图序号3的位置，则执行自动火力搜寻，当前房间若符合筛选条件则停留，当火力全开停止后累计等待60s 如没有再发起火力则跳转；若不符合筛选规则3s后跳转到新的火力全开房间，筛选的包括奖品内容筛选，非粉丝筛选，禁言筛选和热度筛选，详细说明见脚本的版本迭代介绍。</li>
    <li>图序号4,5,6是另一个按钮模块，点击后可以局部刷新，一般>30s左右点击会有变化。图序号4是今日跳转次数，注意不包含用户手动粘贴的斗鱼网址跳转。序号5是主播的信用值，最高12，最低4分或更低。图6为当前房间的真实在线人数，不过有些情况下会不准（比如没开播的主播房间用户永远为0，还有热度和人数差距太小的），仅供参考，该方法参考greaseFork中qianjiachun大佬提供的json接口实现的，在此拜谢。还有调整画质的方法参考greaseFork中wah0713大神的方法，在此一并谢过。除了这两处的参考且在版本迭代记录中有详细的参考记录，其他均为作者原创。</li>
</ul><table><tr>
    <td><img src = "https://raw.githubusercontent.com/wolf-scream/FirePowerSeek/master/pics/assignRoom.png" width="100%" ></td><td>&nbsp;&nbsp;</td>
    <td><img src = "https://raw.githubusercontent.com/wolf-scream/FirePowerSeek/master/pics/shenhaoLogo.png" width="100%" ></td>
</tr></table><ul>
    <!-- <p><img src="https://raw.githubusercontent.com/wolf-scream/FirePowerSeek/master/pics/updateTips.png" width="60%"></p> -->
<li>更新说明，上左图的房间人数区域已经更新为四个数据显示，除了原有的三个外，新增了⏰本次主播开播时间累计/min，右边📝图标的数据表示当前房间已签到人数，点击可以刷新，方便大家来抢签到手气王，如果主播等级小于Lv30无房间签到，则不显示此图标，可统计签到前100的排行，需要注意当处于🙈停火状态才能手动签到，否则当处于🔥开火则仍旧是自动，详细说明见图，或脚本执行后鼠标悬浮在此区域有浮窗提示；</li>
<!-- <p><img src = "https://raw.githubusercontent.com/wolf-scream/FirePowerSeek/master/pics/shenhaoLogo.png" width="60%"></p> -->
<li>上右图是超级皇帝聊天弹幕特效的效果图，详细说明如下：
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
    <li>本脚本完全由原生的JS写成，且好多函数代码模块可以独立使用（比如非绑定手机发弹幕函数），用户完全可以不装tampermokey或violentmonkey,直接复制代码在控制台执行；</li>
    <li>暂时没有增加斗鱼广告的去除功能，一是斗鱼的广告并没有妨碍和降低观看直播的用户体验；二是毕竟是白嫖了斗鱼这么久，让斗鱼赚点广告费应该的；三是greaseFork平台很多去广告的脚本，直接使用就可以了；四是斗鱼的活动推广广告位置经常不固定，需要经常更新脚本才行，不便于脚本长期维护;</li>
</ol><hr>
<h2>常见问题</h2>
<ul>
    <li>问题No.1 当弹幕速度过快的时候(一般发送弹幕间隔时间<2s)，会出现皇帝弹幕特效出现在屏幕左侧移动缓慢的情况，请降低弹幕发送速度即可;</li>
    <li>问题No.2 当碰到符合条件的火力全开房间，仍然跳转，出现这种情况的原因是火力全开的弹窗弹出时间晚于脚本加载等待的12s时间造成的，解决方法是可以修改最底部的脚本延迟加载时间，比如改成15000ms(15s)，或更换一个好一点的网络，一般网速慢或卡才会出现此问题，博主的做法是回退，重刷新页面最简单实用;</li>
    <li>问题No.3 为什么房间真实人数为0，点击刷新也不变，可能是当前房间没有开播，或者是服务器返回的数据出现错误;</li>
    <li>问题No.4 为什么网络跳转次数统计不准确-->跳转次数统计是统计当前账号对应的直接采用本脚本(手动按钮或自动开火)跳转的次数统计，不包括用户自己点击的页面其他链接所产生的跳转次数统计;</li>
    <li>问题No.5 有可能会产生的情况是当跳转次数多了后，自动跳转页面首先显示所跳转的页面丢失或无响应，而后隔几秒自动刷新才正确显示(这时手动刷新页面也会显示正常页面)，博主经历过一次，不确定是否是普遍现象，可能是网络的网速太慢导致，也可能是短时间请求数过于频繁导致，具体还待后续大家反馈，若是后者，请隔段时间在运行自动搜索跳转</li>
</ul><hr>    
<h2>脚本题外</h2>
<p>原本这个脚本是带判断火力全开自动发送弹幕功能的，后来博主思量之下还是决定去掉。</p>
<ul>
    <li>一是因为如果频繁跳转房间(每天超过100次跳转)+频繁发弹幕这样场景很容易被斗鱼封禁，博主用被封了四个号的惨痛经历决定去除自动发弹幕功能；</li>
    <li>二是博主的弹幕文字和语言都是写在js代码的数组里面，没有UI界面可供用户选择，对于不太熟悉JS的用户使用起来非常不便；</li>
    <li>三是greaseFork中的Greasy丶H2P作者<a href="https://greasyfork.org/zh-CN/scripts/380546">【传送门】</a>已经做了带UI界面很不错的自动回复弹幕功能了，而且功能很完善，没必要重复；</li>
    <li>四也是最重要的一点，博主CSS很烂，不擅长写UI界面的东东，搞后端的，你懂的，这个借口我为自己点个赞！</li>
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
    <li>待完成的功能todo:1.车队自动签到；2.幻神弹幕特效实现;</li>
    <li>看到github上有个自动记录竞猜数据的python脚本，包括竞猜封盘的赔率，竞猜标题，输赢，鱼丸数量等，将数据保存到本地并可以浏览器列表形式展示数据。这个功能还挺棒的，博主也挺喜欢竞猜的，好赌是天性哈，虽然总是梭哈然后就两手光光了，需要的朋友点击<strong><a style="color:red" href = "https://github.com/youbao88/douyuquiz">这里</a>;</strong></li>
    <li>欢迎大家使用、参考、研究和引用本脚本，但在引用脚本的时候，希望您能标注出处，这也是对博主的认可和尊重，也是对您自我修养的体现，如果有什么意见的话欢迎给博主<strong><a href="mailto:lvlanxing@gmail.com?subject=邮件主题&body=邮件内容" rel="nofollow" style="color:red">发送邮件</a></strong>留言，或在博主的<strong><a style="color:red" href="https://github.com/wolf-scream/FirePowerSeek">GitHub</a></strong>上留言都行，（QQ交流群：650178547）</li>
    </ul>
