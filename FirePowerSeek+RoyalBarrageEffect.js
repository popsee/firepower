// ==UserScript==
// @name  斗鱼自动火力全开搜寻+皇帝弹幕特效+不绑定手机发弹幕+房间自动签到+房间真实人数...
// @namespace    https://greasyfork.org/zh-CN/scripts/389379
// @version      0.3.6
// @description  包含功能：斗鱼自动火力全开搜寻+皇帝弹幕特效(本机)+不绑定手机发弹幕+房间自动签到+房间真实人数+今日跳转次数+默认最低画质(可换最高)+主播信用值+可选关闭自动播放+可选关闭滚屏弹幕等功能&&IncludingFunction：Fire Power Seek + Royal Barrage Effect + Sent Barrage Without Binding Phone + Room Assign + Real People + Jump Times + Lowest Quality + Host Credit and so forth
// @author       Alexander
// @supportURL   https://github.com/wolf-scream/FirePowerSeek
// @icon         http://www.douyutv.com/favicon.ico
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
// @mail         lvlanxing@gmail.com
// @copyright    JadeBone
// @grant        none
// @compatible   chrome
// @license      GPL-3.0
// @run-at       document-end
// @note         本脚本完全由原生的JS写成，且好多函数代码模块可以独立使用（比如非绑定手机发弹幕函数），用户完全可以不装tampermokey或violencemonkey,直接复制代码在控制台执行；
// @note         用户可以自己去脚本最下面的mainFunc()主函数中，打开和关闭自己想用或不想开启的功能
// @note         非油猴的使用方式：1.打开房间，等待网页加载完毕，2.拷贝代码，在浏览器（推荐chrome）中按F12打开控制台，3.在console标签粘贴代码，4.回车，5.再按F12关闭控制台等待即可；
// @note         欢迎大家使用、参考、研究和引用本脚本，但在引用脚本的时候，希望您能标注出处，这也是对博主的认可和尊重，也是作为***职业自我修养的体现，如果有什么意见的话欢迎给博主发邮件留言；
// @note         原本这个脚本是带判断火力全开自动发送弹幕功能的，后来博主思量之下还是决定去掉，一是因为如果频繁跳转房间(每天超过100次跳转)+频繁发弹幕这样场景很容易被斗鱼封禁，博主用被封了四个号的惨痛经历决定去除自动发弹幕功能；二是博主的弹幕都是写在代码的数组里面，没有UI界面可供用户选择，对于不太熟悉JS的用户使用起来非常不便；三是greaseFork中的Greasy丶H2P作者已经做了带UI界面很不错的自动回复弹幕功能了，而且功能很完善，没必要重复；四也是最重要的一点，博主CSS很烂，搞后端，你懂得哈！
// @note         暂时没有增加斗鱼广告的去除功能，一是斗鱼的广告并没有妨碍和降低观看直播的用户体验；二是毕竟是白嫖了斗鱼这么久，让斗鱼赚点广告费应该的；
// @note         V0.1.0 根据斗鱼鱼塘任务的接口，实现手动按钮火力房间搜索并跳转
// @note         V0.1.1 火力搜寻的网址跳转计数，按日期形式序列化到localStorage中，方便用户统计查看
// @note         V0.1.2 清理localStorage中无用的信息，同时也防止斗鱼收集用户行为信息
// @note         V0.1.3 增加火力全开房间的筛选，热度筛选，当房间热度太高>50W 弹幕中奖几率低则跳过
// @note         V0.1.4 奖品种类筛选，只有符合鱼丸和红包奖励才参与，鱼丸奖品份数要大于2，每个不低于100丸子，红包过滤常见无效的金额数目（0.01,0.1,0.5元）
// @note         V0.1.5 参与条件筛选，是否需要成为粉丝才可以参与，如需要粉丝，则跳过
// @note         V0.1.6 禁言判断，如果之前被正浏览的房间禁言，则自动跳转
// @note         V0.1.7 增加画质调整，因为是抢丸子，所以默认为最低画质，函数中也带了最高画质的代码，可自行注掉更换，该方法参考greaseFork中wah0713大神的方法实现，在此拜谢！
// @note         V0.2.0 增加自动按钮的UI按钮和样式radio,实现手动自动自由切换的方案，由你喜好决定
// @note         V0.2.1 增加复选框radio的记录功能，序列化localStrage,记录上次跳转的操作，如果是自动，则一直会筛选到符合的房间为之，如果错过房间想停止，你在程序初始化显示界面后有3s的时间选择，点击停止🙈，即可停留界面
// @note         V0.2.2 添加满足筛选条件的当前房间自动关注与房间签到功能，毕竟都抢人红包或丸子了，给个关注应该的，也方便以后继续抢哈……
// @note         V0.2.3 添加默认关闭滚屏弹幕方法，用户可按需要在尾部mainFunc中注掉或打开此方法
// @note         V0.2.4 添加默认关闭自动视频播放的方法，用户可按需要在尾部mainFunc中注掉或打开此方法
// @note         V0.2.5 增加获取用户ID和用户昵称的函数，并序列化localStorage中，方便标识不同用户数据统计
// @note         V0.2.6 增加获取当前房间的roomId,方便后续的json的URL请求和粉丝牌的logo寻找提供条件
// @note         V0.2.7 添加显示当前直播间真实人数，这个功能也是挺不错了，但也也有不准的地方，仅供参考吧，该方法参考greaseFork中qianjiachun大佬提供的json接口实现的，在此拜谢！
// @note         V0.2.8 添加显示当前房间的信用值，满为12，最低为4，该方法也是参考greaseFork中qianjiachun大佬提供的json接口实现的，在此拜谢！
// @note         V0.2.9 添加不绑定手机号发弹幕(前提是必须是其他账号登陆状态，非登陆状态不行)，这个功能还是挺不错，如果想搞小号抢丸子，这个挺方便的，看来斗鱼还是给手机号不足的用户留条后路的
// @note         V0.3.0 增加超级皇帝的聊天弹幕特效：包括帝王图标，当前房间的满级粉丝牌30，等级满级120，当前房间满级16，炫酷车队logo-皇,签到手气王
// @note         V0.3.1 增加超级皇帝的滚屏弹幕特效，绑定键盘回车和鼠标点击弹幕发送按钮，当用户发弹幕会自动触发，延迟300ms后自动改为皇帝弹幕特效，网络好可以改成200
// @note         V0.3.2 增加抓捕幻神弹幕特效的自动方法，如果朋友您在localStorage方法看到两个🍅🥦🍅打头的键值，如果数据可用，或者您是前端大神，希望您把抓获的野生纯种幻神弹幕特效邮件发给博主，虽然不能享受RMB的幻神待遇，但本机满足下幻神的体验还是很棒的事情
// @note         V0.3.3 添加皇帝弹幕王者神豪的动态logo特效，修正了一些log的日志级别，增加了房间签到时间延迟，防止出现没关注就签到的无效情景
// @note         V0.3.4 增加了网址跳转前的房间过滤功能，自动过滤掉二次元、看电影和人数>2500的房间，提高搜索效率，增加topic/*专题房间的网址匹配
// @note         V0.3.5 增加了当前直播间主播已经开启直播时间的计时，单位/分钟，增加了当前浏览器弹幕系统（包含竞猜的实时赔率显示）的延迟时间显示，单位/毫秒，增加了鼠标悬浮此区域的文字提示tip说明
// @note         V0.3.6 修改了脚本加载的固定时间，改为根据用户端的网络的页面加载进度自动执行脚本初始化，去除了上方弹幕延迟数据90ms(无意义)，增加了当前房间的签到排行显示，便于用户抢签到手气王，当签到人数>=66后，则执行自动房间签到，反之则不执行，最多显示签到人数100+
// @note         todo:车队自动签到，幻神弹幕特效抓取
// @lastmodified    2019.09.09
// ==/UserScript==


(function() {
    const royalTime = 300;//发送弹幕后更改皇族的时间间隔，网络延迟大则增加此数值 ,反正则减小 ms;
    var tmGap = 10000;//默认弹幕时间间隔与轮询间隔 ms
    var hotValue = 0;//房间热度值
    var firePowerTimeout, fireJump1, fireJump2;//延迟任务对象
    var uid = "未知", uname="未知", roomId;//用户id，昵称，房间号
    var sbts = (new Date()).getTime();//当前时间戳
    var radioStorage = "ceaseFire";

    // 判断当前房间是否火力全开,自动监听
    function firePowerMsg() {
        var fireObj = document.getElementsByClassName("FirePowerChatModal-Notice")[0];
        if (fireObj != undefined && !joinCondition() && awardJudge() && !banSpeak() ) {
            console.log("火力监测时间间隔："+ ((new Date()).getTime() - sbts)/1000 + "s");
            sbts = (new Date()).getTime();
        } else {
            console.log("火力停止时间累计："+ ((new Date()).getTime() - sbts)/1000 + "s" );
            if(((new Date()).getTime() - sbts) > 1000 * 60){//如果累计超过1分钟没有火力全开，则跳转！
                randomFireRequest();
            }
        }
        randomTime();//回调随机时间检测-这里可调用自动弹幕
    }

    //随机时间差
    function randomTime(){
        let tmChange = tmGap + parseInt(Math.random()*1000);
        firePowerTimeout= setTimeout(firePowerMsg, tmChange);
    }

    // 火力全开房间搜索并跳转
    function randomFireRequest() {
        var ajax = new XMLHttpRequest();
        ajax.timeout = 2000;
        ajax.responseType = "json";
        ajax.open('get', 'https://www.douyu.com/japi/firepower/apinc/activeTask/getRecRid', true); //采用异步
        ajax.send();
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200) {
                // var jsonData = JSON.parse(ajax.responseText);
                fireRequestFilter(ajax.response.data);
            }
        }
    }

    // 火力全开房间搜索过滤
    function fireRequestFilter(fireUrl) {
        var myRequest = new Request('https://www.douyu.com/swf_api/h5room/'+fireUrl);
        fetch(myRequest).then(function(response) {
            return response.json().then(function(json) {
                var jsonData = json.data;
                console.log("主播昵称:【"+jsonData.nickname+"】++++++在线人数:【" + jsonData.online + "】++++++游戏名称:【" + jsonData.game_name+"】++++++URL=>https://www.douyu.com/"+fireUrl);
                if (jsonData.online < 2500 && jsonData.game_name.indexOf("一起看") == -1 && jsonData.game_name.indexOf("二次元") == -1 && jsonData.game_name.indexOf("户外") == -1) { //筛选条件：过滤二次元、看电影、户外和人数>2500的房间
                    fireUrl = "https://www.douyu.com/" + fireUrl;
                    var dailyPageCount = localStorage.getItem((new Date()).toLocaleDateString() + "🐛🌵🐤[" + uname + ":" + uid + "]");
                    if (dailyPageCount != null && dailyPageCount != undefined) {
                        dailyPageCount = parseInt(dailyPageCount) + 1;
                        localStorage.setItem((new Date()).toLocaleDateString() + "🐛🌵🐤[" + uname + ":" + uid + "]", dailyPageCount);
                    } else {
                        localStorage.setItem((new Date()).toLocaleDateString() + "🐛🌵🐤[" + uname + ":" + uid + "]", 1);
                    }
                    window.location.href = fireUrl;
                    // setTimeout(function(){window.location.href = fireUrl},1000);//延迟跳转，防止服务器不响应
                } else {
                    randomFireRequest(); //重新获取火力全开的roomId
                }
            });
        });
    }

    //===============================================================
    //+++++++++++++++++++++++++帝皇聊天特性+++++++++++++++++++++++++++
    //===============================================================
    function royalChatEffect(roles) {//roles:1:幻神，other：超级皇帝
        if (document.getElementsByClassName('Barrage-listItem').length > 1) {
            let barrageArr = document.getElementsByClassName('Barrage-listItem');
            var roomFlag = false;
            for (let i = barrageArr.length - 1; i >= 0; i--) {
                if (barrageArr[i].lastElementChild != null && barrageArr[i].lastElementChild.innerHTML.indexOf("Barrage-nobleImg") == -1 && barrageArr[i].lastElementChild.innerHTML.indexOf("is-self") != -1) { //非空，去重，找自己

                    //增加单字车队图标,去重
                    if(barrageArr[i].lastElementChild.innerHTML.indexOf("Motor")==-1){
                        var iconTag = document.createElement("span");
                        iconTag.className = "Motor"
                        iconTag.setAttribute("title","神");
                        iconTag.setAttribute("data-motorcade","神");
                        iconTag.setAttribute("style","background-image:url(https://img.douyucdn.cn/data/yuba/admin/2019/01/07/201901071437499042327937962.png)");
                        var iconSpan = document.createElement("span");
                        iconSpan.className = "Motor-flag";
                        iconSpan.innerText = "神"
                        iconTag.appendChild(iconSpan);
                        barrageArr[i].lastElementChild.insertBefore(iconTag,barrageArr[i].lastElementChild.children[1]);
                    }

                    //修改用户等级、房间等级和字幕颜色
                    var userLevelObj = barrageArr[i].lastElementChild.querySelector(".UserLevel");
                    if( userLevelObj!=undefined){
                        userLevelObj.className = "UserLevel UserLevel--120";
                        userLevelObj.setAttribute("title", "用户等级：120");
                    }
                    var roomLevelObj = barrageArr[i].lastElementChild.querySelector(".RoomLevel");
                    if( roomLevelObj!=undefined){
                        roomLevelObj.className = "RoomLevel RoomLevel--16";
                        roomLevelObj.setAttribute("title","房间等级：16");
                    }
                    var barrageColorObj = barrageArr[i].lastElementChild.querySelector(".Barrage-content");
                    if(barrageColorObj !=undefined){
                        barrageColorObj.className = "Barrage-content Barrage-content--color0";
                    }

                    //如果没有房间等级则创建元素
                    if(roomFlag ==false){
                        var roomTag = document.createElement("span");
                        roomTag.className ="RoomLevel RoomLevel--16";
                        roomTag.setAttribute("title","房间等级：16");
                        barrageArr[i].lastElementChild.insertBefore(roomTag,barrageArr[i].lastElementChild.children[1]);
                    }

                    // 增加签到手气王+增加王者神豪特效
                    var fireIconObj = barrageArr[i].lastElementChild.getElementsByClassName("FirePowerIcon")[0];
                    var signTag = document.createElement("a");
                    signTag.setAttribute("class","Baby");
                    signTag.setAttribute("data-id","1500000312");
                    var signIconImg = document.createElement("img");
                    signIconImg.setAttribute("class","Baby-image  js-baby-signMedalClick");
                    signIconImg.setAttribute("src","https://res.douyucdn.cn/resource/2019/06/27/reward/15fd9177ac85d6e91414e3ea00c2d720.png");
                    signIconImg.setAttribute("title","签到手气王");
                    signTag.appendChild(signIconImg);
                    var kingIconImg = document.createElement("img");
                    kingIconImg.setAttribute("class","Baby-image is-achievement");
                    kingIconImg.setAttribute("src","https://sta-op.douyucdn.cn/douyu/3d416f83fb2de6e4e8de5ce4e24b424e4eccc705.gif");
                    kingIconImg.setAttribute("data-achievementid","188");
                    kingIconImg.setAttribute("title","王者神豪");
                    signTag.appendChild(kingIconImg);
                    if( barrageArr[i].lastElementChild.innerHTML.indexOf("Baby-image")==-1 ){//去重
                        fireIconObj!=undefined? barrageArr[i].lastElementChild.insertBefore(signTag,fireIconObj): barrageArr[i].lastElementChild.appendChild(signTag);
                    }

                    //增加猜王图标,不优雅，放弃增加
                    // var guessTag = document.createElement("a");
                    // guessTag.className = "Medal";
                    // guessTag.setAttribute("data-id","1500000230");
                    // var guessImg = document.createElement("img");
                    // guessImg.setAttribute("class","Medal-image");
                    // guessImg.setAttribute("src","//res.douyucdn.cn//resource/2018/03/16/reward/9f192d005a697258371bef79e4550295.png");
                    // guessImg.setAttribute("title","竞猜周榜收益第一名");
                    // guessTag.appendChild(guessImg);
                    // barrageArr[i].lastElementChild.insertBefore(guessTag,barrageArr[i].lastElementChild.children[1]);

                    // 添加粉丝牌，未考虑本身的粉丝牌去除
                    var fansMedalName = document.getElementsByClassName("FansMedal-name")[0];//粉丝牌名称
                    var fansBackgroundImg = document.getElementsByClassName("FansRankList-item FansRankList-item--top")[0];
                    barrageArr[i].className = "Barrage-listItem js-floating-barrage js-fansfloating-barrage";
                    barrageArr[i].lastElementChild.className = "js-fansfloating-barragecont Barrage--paddedBarrage";
                    if(fansMedalName!=undefined && roomId!=undefined && fansBackgroundImg!= undefined ){//当前房间为普通粉丝牌

                        if(fansBackgroundImg.innerHTML.indexOf("background-image:")==-1){
                            var fansTag = document.createElement("div");
                            fansTag.className="FansMedal level-30 js-fans-dysclick Barrage-icon";
                            fansTag.setAttribute("data-rid",roomId);//id与房间号一致
                            var fansSpan = document.createElement("span");
                            fansSpan.className = "FansMedal-name js-fans-dysclick";
                            fansSpan.setAttribute("data-rid",roomId);
                            fansSpan.innerHTML = fansMedalName.innerText;
                            fansTag.appendChild(fansSpan);
                            barrageArr[i].lastElementChild.insertBefore(fansTag,barrageArr[i].lastElementChild.firstElementChild);
                        }else{//当前房间为动态粉丝牌
                            var fansTag1 = document.createElement("div");
                            fansTag1.className="FansMedal is-made js-fans-dysclick Barrage-icon";
                            fansTag1.setAttribute("style", fansBackgroundImg.getElementsByClassName("FansMedal is-made")[0].getAttribute("style") );
                            fansTag1.setAttribute("data-rid",roomId);//id与房间号一致
                            var fansSpan1 = document.createElement("span");
                            fansSpan1.className = "FansMedal-name js-fans-dysclick";
                            fansSpan1.setAttribute("data-rid",roomId);//id与房间号一致
                            fansSpan1.innerHTML = fansMedalName.innerText;
                            fansTag1.appendChild(fansSpan1);
                            barrageArr[i].lastElementChild.insertBefore(fansTag1,barrageArr[i].lastElementChild.firstElementChild);
                        }
                    }else{//当前房间无粉丝牌，则指定一个粉丝牌
                        var fansTag2 = document.createElement("div");
                        fansTag2.className="FansMedal is-made js-fans-dysclick Barrage-icon";
                        fansTag2.setAttribute("style","background-image: url('https://gfs-op.douyucdn.cn/fans_medal_resource/2019/07/12/5a5efaca4d1250413ed9c3c36438f6cb.gif')");//id与房间号一致
                        fansTag2.setAttribute("data-rid","4615502");//id与房间号一致
                        var fansSpan2 = document.createElement("span");
                        fansSpan2.className = "FansMedal-name js-fans-dysclick";
                        fansSpan2.setAttribute("data-rid","4615502");//id与房间号一致
                        fansSpan2.innerHTML = "猪叫团";
                        fansTag2.appendChild(fansSpan2);
                        barrageArr[i].lastElementChild.insertBefore(fansTag2,barrageArr[i].lastElementChild.firstElementChild);
                    }

                    //增加超级皇帝标签，未考虑有其他贵族标志的替换
                    var nobleIconObj = barrageArr[i].getElementsByClassName("Barrage-icon Barrage-noble")[0];
                    if(nobleIconObj==undefined){//贵族图标去重
                        var royalTag = document.createElement("span");
                        var royalImg = document.createElement("img");
                        royalTag.className = "Barrage-icon Barrage-noble";
                        royalImg.className = "Barrage-nobleImg";
                        var nobleImgUrl = roles == 1 ? "//res.douyucdn.cn/resource/2019/08/15/common/4e85776071ffbae2867bb9d116e9a43c.gif" : "//res.douyucdn.cn/resource/2019/08/09/common/3d994a081e5384de14e6893d1d8b94c5.gif";
                        royalImg.setAttribute("src", nobleImgUrl);
                        royalImg.setAttribute("title", roles == 1?"幻神":"超级皇帝");
                        royalTag.appendChild(royalImg);
                        barrageArr[i].lastElementChild.insertBefore(royalTag, barrageArr[i].lastElementChild.firstElementChild);
                    }
                    break;//加中断意味着只修改刚发送临近的一条弹幕，避免循环全部弹幕的资源浪费
                }
            }
        } else {
            console.warn("无弹幕可操作");
        }
    }

    //===============================================================
    //++++++++++++++++++++++++超级帝皇屏幕特效++++++++++++++++++++++++
    //===============================================================
    function screenEmpireBarrage(){
        var fatherNode = document.querySelector(".danmu-6e95c1");
        for(let i = fatherNode.children.length-1;i>=0;i--){
            if(fatherNode.children[i].className.indexOf("noble-bf13ad")==-1 && fatherNode.children[i].innerHTML.indexOf("border: 2px solid rgb(2, 255, 255)")!=-1){//去重,带蓝框为自己
                //父标签更改
                var liStyle = fatherNode.children[i].getAttribute("style");
                let characterLength = liStyle.substring(liStyle.indexOf("translateX(-")+12,liStyle.indexOf("px); transition"));
                let transformLength = liStyle.substring(liStyle.indexOf("transform ")+10,liStyle.indexOf("s linear"));
                let screenOpacity = liStyle.substring(liStyle.indexOf("opacity:")+8,liStyle.indexOf("; z-index:"));
                var characterStyle = "opacity: "+ screenOpacity +"; z-index: 30; background: rgba(0, 0, 0, 0); top: 54px; transform: translateX(-"+ characterLength +"px); transition: transform "+ transformLength +"s linear;"
                fatherNode.children[i].className = "danmuItem-31f924 noble-bf13ad";
                fatherNode.children[i].setAttribute("style",characterStyle);

                //贵族图标  未考虑去重替换
                var nobleImgTag = document.createElement("img");
                nobleImgTag.className = "super-noble-icon-9aacaf";
                nobleImgTag.setAttribute("src","https://shark2.douyucdn.cn/front-publish/live_player-master/assets/images/c1_51e025.png");
                nobleImgTag.setAttribute("style","margin-top: -2px;");
                fatherNode.children[i].insertBefore(nobleImgTag,fatherNode.children[i].firstElementChild);

                //用户图标
                var userIconTag = document.createElement("img");
                var userIconObj = document.getElementsByClassName("Avatar is-circle")[0];//自己头像
                var fansHeader = document.getElementsByClassName("FansRankList-item FansRankList-item--top")[0];//粉丝头牌头像
                if(userIconObj !=undefined){
                    userIconObj = userIconObj.getElementsByTagName("img")[0].getAttribute("src");
                    userIconTag.setAttribute("src", userIconObj.replace((new RegExp("_middle")),"_small"));
                }else if(fansHeader!=undefined){//这里不使用固定地址头像，防止用户更换头像，地址失效
                    fansHeader = fansHeader.getElementsByTagName("img")[0].getAttribute("src");
                    userIconTag.setAttribute("src", fansHeader.replace((new RegExp("_middle")),"_small"));
                }
                userIconTag.className = "super-user-icon-574f31";
                fatherNode.children[i].insertBefore(userIconTag,fatherNode.children[i].firstElementChild);

                //去除尾部标签
                var tailTag = fatherNode.children[i].getElementsByClassName("afterpic-8a2e13")[0];
                tailTag.remove();

                //更改字幕内容特效
                var textContent = fatherNode.children[i].getElementsByClassName("text-879f3e")[0];
                textContent.className = "super-text-0281ca";
                textContent.setAttribute("style","font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; font-size: 23px; line-height: normal; font-family: SimHei, &quot;Microsoft JhengHei&quot;, Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); background: url('https://shark2.douyucdn.cn/front-publish/live_player-master/assets/images/c2_8ae118.png');");

                //尾部图标
                var superTailImg = document.createElement("img");
                superTailImg.className = "super-tail-bffa58";
                superTailImg.setAttribute("src","https://shark2.douyucdn.cn/front-publish/live_player-master/assets/images/c3_bfe43b.png");
                fatherNode.children[i].appendChild(superTailImg);

                //添加开火标签和签到手气王
                var afterpicTag = document.createElement("div");
                afterpicTag.setAttribute("class","afterpic-8a2e13");
                afterpicTag.setAttribute("style","margin-top: 7px; margin-left: -43px;");
                // afterpicTag.setAttribute("style","margin-top: 7px; margin-left: -1px;");
                if(document.querySelector(".FirePowerChatModal-Notice")==undefined){//添加手气王
                    var signImgTag = document.createElement("img");
                    signImgTag.setAttribute("class","afterpic-8a2e13");
                    signImgTag.setAttribute("src","https://shark2.douyucdn.cn/front-publish/live_player-master/assets/images/lucky_c5d02e.png");
                    signImgTag.setAttribute("style","width: 28.8px; height: 28.8px;");
                    afterpicTag.appendChild(signImgTag);
                }else{//添加火图标
                    var fireImg = document.createElement("img");
                    fireImg.setAttribute("class","afterpic-8a2e13");
                    fireImg.setAttribute("src","https://shark2.douyucdn.cn/front-publish/live_player-master/assets/images/hlqk_61648e.svg");
                    fireImg.setAttribute("style","width: 28.8px; height: 28.8px;");//margin-left: -42px;
                    afterpicTag.appendChild(fireImg);
                }
                fatherNode.children[i].appendChild(afterpicTag);
                // textContent.appendChild(afterpicTag);
            }
        }
    }

    //===============================================================
    //++++++++++++++++添加火力跳转按钮和radio弹幕状态++++++++++++++++++
    //===============================================================
    function creatBtnTag(){
        // 创建元素样式,优先执行,radio为单选框样式，dfn为tip提示的样式
        var radioStyle = document.createElement('style');
        radioStyle.type = 'text/css';
        radioStyle.innerHTML = (function(){/*
        .radio{
            display: inline-block;
            position: relative;
            line-height: 18px;
            margin-right: 10px;
            cursor: pointer;
        }
        .radio input{
            display: none;
        }
        .radio .radio-bg{
            display: inline-block;
            height: 18px;
            width: 18px;
            margin-right: 5px;
            padding:;
            background-color: #45bcb8;
            border-radius: 100%;
            vertical-align: top;
            box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1) inset, 0 1px 4px rgba(0, 0, 0, 0.1) inset, 1px -1px 2px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .radio .radio-on{
            display: true;
        }
        .radio input:checked + span.radio-on{
            width: 10px;
            height: 10px;
            position: absolute;
            border-radius: 100%;
            background: #FFFFFF;
            top: 4px;
            left: 4px;
            box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.3), 0 0 1px rgba(255, 255, 255, 0.4) inset;
            background-image: linear-gradient(#ffffff 0, #e7e7e7 100%);
            transform: scale(0, 0);
            transition: all 0.2s ease;
            transform: scale(1, 1);
            display: inline-block;
        }

        dfn {
              padding: 0 0.4em;
              cursor: help;
              font-style: normal;
              position: relative;
            }
            dfn::after {
              content: attr(data-info);
              display: inline;
              white-space: pre-wrap;
              z-index: 999;
              border-radius: 4px;
              position: absolute;
              top: 22px; left: 0;
              opacity: 0;
              width: 310px;
              font-size: 13px;
              font-weight: 300;
              line-height: 1.5em;
              padding: 0.5em 0.8em;
              background: rgba(0,0,0,0.8);
              color: #fff;
              pointer-events: none;
              transition: opacity 150ms, top 150ms;
            }
            dfn::before {
              content: '';
              display: block;
              position: absolute;
              top: 12px; left: 20px;
              opacity: 0;
              width: 0; height: 0;
              border: solid transparent 5px;
              border-bottom-color: rgba(0,0,0,0.8);
              transition: opacity 150ms, top 150ms;
            }
            dfn:hover {z-index: 2;}
            dfn:hover::after,
            dfn:hover::before {opacity: 1;}
            dfn:hover::after {top: 30px;}
            dfn:hover::before {top: 20px;}
    */}).toString().split('/*')[1].split('*/')[0];
        document.head.appendChild(radioStyle);

        // 创建radio元素标签，后于样式执行，样式独有
        var radioBtnTag = (function(){/*
        <span>&nbsp;&nbsp;&nbsp;</span>
        <label for="ceaseFire" class="radio">
            <span class="radio-bg"></span>
            <input type="radio" name="radio_fire" id="ceaseFire"  value="🙈" checked="checked"/>🙈
            <span class="radio-on"></span>
        </label>
        <label for="openFire" class="radio">
            <span class="radio-bg"></span>
            <input type="radio" name="radio_fire" id="openFire"  value="🔥" />🔥
            <span class="radio-on"></span>
        </label>
    */}).toString().split('/*')[1].split('*/')[0].replace(/[\n]/g, '');

        // 创建火力寻找跳转按钮，按钮样式依赖斗鱼
        var fireAllBtn = document.createElement("button");
        var outSpan = document.createElement("span");
        outSpan.className = "Title-blockInline";
        fireAllBtn.innerHTML = "🧐开火";
        fireAllBtn.className = "Wallet-content-recharge"; //这个控制按钮样式,如Category-item, BackpackButton,PlayerToolbar-getYCBtn
        fireAllBtn.addEventListener("click", randomFireRequest);
        var blankTag = document.createElement("span");
        blankTag.innerHTML = "&nbsp;&nbsp;&nbsp;";
        var reportNode = document.querySelector(".Title-headline");//获取锚点
        if(reportNode != undefined){
            outSpan.appendChild(blankTag);
            outSpan.appendChild(fireAllBtn);
            reportNode.appendChild(outSpan);
            // reportNode.parentNode.parentNode.insertBefore(outSpan,reportNode.parentNode);
        }else {
            console.error("未找到举报元素节点，无法创建【🔥】按钮");
        }

        //这里要先创建标签，然后动态添加onchange事件，否则获取不到监听对象
        var sortNode = document.querySelector(".Title-categoryWrap");//获取锚点
        var divTag = document.createElement("span");
        divTag.className = "Title-blockInline";
        divTag.innerHTML = radioBtnTag;
        if(sortNode !=undefined){
            sortNode.firstChild.append(divTag);
            var anchor1 = document.getElementById("ceaseFire");
            anchor1.addEventListener("change",(function(){radioFunc('ceaseFire');}));
            var anchor2 = document.getElementById("openFire");
            anchor2.addEventListener("change",(function(){radioFunc('openFire');}));
        }else{
            console.error("未找到标题元素节点，无法创建radio单选框");
        }
    }

    // localStorage清空并转存
    function storageOperate(){
        var storage = window.localStorage;
        storage.removeItem("game_recode_listdata_h5p_room");
        //取出跳转数据
        for(let i = 0; i< storage.length; i++ ){
            if(storage.key(i).indexOf("FIRE_POWER_ACT_") != -1 || storage.key(i).indexOf("RankCoverage_vesion_") != -1){
                storage.removeItem(storage.key(i));
            }
        }
    }

    // 参与条件关注，则自动点击关注   ----#关注  #取关
    function followRoom() {
        var subObj = document.querySelector(".Title-followBtn");
        if (subObj != undefined && subObj != null) {
            subObj.click();
            console.log("已经关注💓主播");
        }
    }

    //禁言判断（true是被禁言，false为没有禁言）
    function banSpeak(){
        var banObj = document.getElementsByClassName("MuteStatus is-mute")[0];
        if(banObj!=undefined && banObj.innerHTML.indexOf("禁言")!=-1){
            return true;
        }else{
            return false;
        }
    }

    // 参与条件,是否要求为-粉丝团成员  true为粉丝，false为非粉
    function joinCondition(){
        var joinFlag = false;
        var joinObj = document.getElementsByClassName("FirePowerChatModal-content")[0];
        if(joinObj != undefined){
            joinObj = joinObj.innerText;
            if(joinObj.indexOf("粉丝团成员") != -1){
                joinFlag = true;
                console.log("只有粉丝团才能参与！");
            }
        }
        return joinFlag;
    }

    // 主播热度筛选
    function hotFilter() {
        var hotFlag = true;
        hotValue = document.getElementsByClassName("Title-anchorText")[0];//主播热度
        if (hotValue != undefined) {
            if (hotValue.innerText <= 1000) {
                tmGap = tmGap + 8000;
            } else if(hotValue.innerText > 1000 && hotValue.innerText <= 10000 ){
                tmGap = tmGap + 3000;
            } else if(hotValue.innerText > 10000 && hotValue.innerText <= 100000){
                tmGap = tmGap + 1000;
            } else if(hotValue.innerText > 100000 && hotValue.innerText <= 300000){
                tmGap = tmGap - 2000;
            } else if(hotValue.innerText > 300000 && hotValue.innerText <= 500000){
                tmGap = tmGap - 4000;
                console.log("热度太高，中奖太难，网页跳转！");
                hotFlag = false;
            } else {
                tmGap = tmGap - 6000;
                console.log("热度太高，中奖太难，网页跳转！");
                hotFlag = false;
            }
        }else{
            console.error("未获取到热度值，请刷新页面重试！");
            // location.reload(true);
        }
        return hotFlag;
    }

    // 判断奖品是否是鱼丸或红包奖励
    function awardJudge() {
        var awardDet = document.querySelector(".FirePowerChatModal-detail");//红包
        var awardStr = document.querySelector(".FirePowerChatModal-award");
        function awardConditionFilter(prizeObj){
            var awardFlag = false;
            if (prizeObj != undefined) {
                prizeObj = prizeObj.innerText;
                if(prizeObj.indexOf("鱼丸") != -1) {
                    if(prizeObj.indexOf("1个") == -1 && prizeObj.indexOf("2个") == -1 && prizeObj.indexOf("1条") == -1 && prizeObj.indexOf("2条") == -1 &&
                       prizeObj.substring(prizeObj.indexOf("鱼丸")-3, prizeObj.indexOf("鱼丸")) >=100 ){
                        awardFlag = true;
                    }else{
                        console.log("鱼丸奖励不达标-->内");
                    }
                }else if (prizeObj.indexOf("红包") != -1 || prizeObj.indexOf("现金") != -1) {
                    if(prizeObj.indexOf("0.01元") == -1 && prizeObj.indexOf("0.1元") == -1 && prizeObj.indexOf("0.5元") == -1 ){
                        awardFlag = true;
                    }else{
                        console.log("红包奖励不达标-->内");
                    }
                }else{
                    console.log("非实质性奖励-->中");
                }
            }else{
                // console.log( prizeObj == document.querySelector(".FirePowerChatModal-award") ? "无奖品锚点-->外":"无详情锚点-->外");
            }
            return awardFlag;
        }
        return awardConditionFilter(awardStr) || awardConditionFilter(awardDet) ;
    }

    // 默认调整画质为流畅， 1.最高画质； 其他.最低画质
    function adjustClarity(code){
        var videoClarity = document.querySelector(".panelFill-d95ee8");
        if(videoClarity != undefined && videoClarity != null){
            code===1?videoClarity.previousSibling.firstElementChild.click():videoClarity.previousSibling.lastElementChild.click();
        }else{
            console.log("没有画质📺选项！");
        }
    }

    // 关闭屏幕显示弹幕
    function closeScreenBarrage(){
        var closeBarrageObj = document.getElementsByClassName("showdanmu-42b0ac")[0];
        if(closeBarrageObj !=undefined ){
            closeBarrageObj.click();
        }
    }

    // 关闭自动播放
    function closeAutoPlay(){
        var pauseObj = document.getElementsByClassName("pause-c594e8")[0];
        if(pauseObj!=undefined){
            pauseObj.click();
        }
    }

    //获取用户uid,uname
    function getUserInfo(){
        uid = document.querySelector(".UserInfo-avatar");
        uid = uid != undefined ? uid.firstElementChild.getAttribute("uid"):"未知";
        if(localStorage.getItem(uid+"🌴🔮🌴")!=null){//如果缓存有uid和uname,则不请求网络
            uname = localStorage.getItem(uid+"🌴🔮🌴");
        }else{
            var ajax = new XMLHttpRequest();
            ajax.timeout = 2000;
            ajax.responseType ="document";
            ajax.open('get', 'https://www.douyu.com/member/cp',true);//采用异步
            ajax.send();
            ajax.onreadystatechange = function() {
                if (ajax.readyState == 4 && ajax.status == 200) {
                    var htmlDoc = ajax.responseXML;
                    uname = htmlDoc.querySelector(".uname_con").innerText.trim()
                    localStorage.setItem(uid+"🌴🔮🌴", uname);
                }
            }
        }
    }

    // 监听radio的onchange事件
    function radioFunc(msg){
        if(msg == "ceaseFire"){//停火
            radioStorage = "ceaseFire";
            localStorage.setItem("radioTagStatus🌼🍄🌼",msg);
            clearTimeout(firePowerTimeout);
            clearTimeout(fireJump1);
            clearTimeout(fireJump2);
            console.log("停止开火");
        }else if(msg =="openFire"){//开火
            radioStorage = "openFire";
            localStorage.setItem("radioTagStatus🌼🍄🌼",msg);
            clearTimeout(firePowerTimeout);
            clearTimeout(fireJump1);
            clearTimeout(fireJump2);
            if( hotFilter() && awardJudge() && !joinCondition() && !banSpeak() ){
                firePowerMsg();
            }else{
                console.log("不符合开火🔥条件，3秒后自动跳转新房间🏠");
                fireJump2 = setTimeout(randomFireRequest,3000);
            }
            console.log("启动开火");
        }
    }

    // 获取当前房间的roomId
    function getRoomId(){
        roomId = document.getElementsByClassName("Title-anchorName")[0];
        roomId = roomId!=undefined ? roomId.getAttribute("href").substr(roomId.getAttribute("href").indexOf("room_id=")+8):undefined;
    }

   // 显示当前直播间主播信用，真实人数，和累计开播时间在房间热度图标左侧
    function realPersonNum(){
        var dailyJumpCount = localStorage.getItem((new Date()).toLocaleDateString() + "🐛🌵🐤[" + uname +":"+ uid + "]");
        dailyJumpCount = dailyJumpCount!=null?dailyJumpCount:0;
        var showPosition = document.querySelector(".Title-anchorHot");
        var peopleObj = document.getElementById("real_people_num");
        var ajax = new XMLHttpRequest();
        ajax.timeout = 2000;
        ajax.responseType ="json";
        ajax.open('get', 'https://www.douyu.com/swf_api/h5room/'+ roomId,true);//采用异步
        ajax.send();
        ajax.onreadystatechange = function() {//注册事件 onreadystatechange 状态改变就会调用
            if (ajax.readyState == 4 && ajax.status == 200) {
                var jsonData = ajax.response;
                var personNum = jsonData.data.online;
                var curCredit = jsonData.data.cur_credit;
                var liveStatus = jsonData.data.show_status;
                var liveTime = jsonData.data.show_time;
                // var barrageDelay = jsonData.data.room_dm_delay;
                var onlineTime = 0;
                if(liveStatus == "1"){
                    onlineTime = ((Math.round((new Date()).getTime()/1000) - parseInt(liveTime))/60).toFixed(1);// 显示房间已经直播的分钟数,保留一位小数，来显示秒
                }else if(liveStatus == "2"){
                    onlineTime = "-"
                }
                if(showPosition!=undefined && personNum!=null){
                    if(peopleObj==undefined){//去重
                        var divTag = document.createElement("div");
                        divTag.className = "Title-anchorName";
                        divTag.setAttribute("id","real_people_num");
                        divTag.innerHTML = "<dfn data-info='点击此区域🧐可以更新这四组数据，图标说明如下： 🌐-今日跳转次数(仅统计用此脚本自动或手动跳转)； 💎-主播当前信用值(若<=4则不能送礼物,满值12)； 🎅-当前房间在线人数(未开播房间则为0未统计)； ⏰-房间本次开播时间累计/min(未开播则为【-】);'>🌐"+dailyJumpCount +"&nbsp;💎"+curCredit +"&nbsp;🎅"+ personNum + "&nbsp;⏰" + onlineTime + "&nbsp;</dfn>";//显示当前跳转次数，主播信用，真实人数，和累计开播时间
                        showPosition.parentNode.insertBefore(divTag, showPosition);
                    }else{//⏱-弹幕延迟时间/ms(含竞猜延迟但不含视频延迟)  已去除
                        peopleObj.innerHTML = "<dfn data-info='点击此区域🧐可以更新这四组数据，图标说明如下： 🌐-今日跳转次数(仅统计用此脚本自动或手动跳转)； 💎-主播当前信用值(若<=4则不能送礼物,满值12)； 🎅-当前房间在线人数(未开播房间则为0未统计)； ⏰-房间本次开播时间累计/min(未开播则为【-】);'>🌐"+dailyJumpCount +"&nbsp;💎"+curCredit +"&nbsp;🎅"+ personNum + "&nbsp;⏰" + onlineTime + "&nbsp;</dfn>";
                    }
                }
            }
        }
    }

    //不绑定手机号发弹幕(前提是必须是其他账号登陆状态，非登陆状态不行)
    function releasePhoneLimit(){
        var btnGray = document.getElementsByClassName("ChatSend-button is-gray")[0];
        var chatLogin = document.getElementsByClassName("MuteStatus is-noLogin")[0];
        btnGray!=undefined ? btnGray.className = "ChatSend-button ":false;
        chatLogin!=undefined ? chatLogin.remove():false;
    }

    //房间签到                
    function assignRoom(){
        var unassignObj = document.getElementsByClassName("RoomLevelDetail-icon RoomLevelDetail-icon--zn")[0];//未签到
        var roomObj = document.querySelector(".RoomLevelDetail");//房间对象
        var showPlace = document.querySelector(".Title-anchorInfo");
        // var showPlace = document.getElementById("real_people_num");
        // 获取当前房间签到的排名
        if(roomObj!=undefined){//不排除已签到，因为还需要手动刷新 
            fetch('https://www.douyu.com/japi/roomuserlevel/apinc/getSignInRankInfoList?rid='+roomId).then(res => {
                return res.json();
            }).then(json => {
                var jsonData = json.data;
                var assignId = document.getElementById("assignRank");
                if(assignId==undefined){//自身去重
                    var refreshTag = document.createElement("dfn");
                    refreshTag.setAttribute("id","assignRank");
                    refreshTag.setAttribute("data-info","📝后的数据表示当前房间已签到人数，点击可以刷新数据，用于方便大家来抢签到手气王，如果主播<Lv30无房间签到，则不显示此图标，可供统计签到前100的排行");
                    refreshTag.innerHTML= jsonData.length <100? "📝"+jsonData.length:"📝100+";
                    showPlace.appendChild(refreshTag);
                }else{
                    assignId.innerHTML = jsonData.length <100? "📝"+jsonData.length:"📝100+";
                }
                console.log("📝房间签到人数:"+jsonData.length);
                if(unassignObj!=undefined&&(jsonData.length>=65 || jsonData.length==5)){//争取66或6则直接签到
                    unassignObj.click();
                }
            }).catch(err => {
                console.log('请求错误', err);
            })
        }
    }

    //模拟点击鼠标事件，实现特欧皇弹幕特效
    function clickBtnEvent(){//roles:1:幻神，other：超级皇帝
        setTimeout(function(){royalChatEffect(0)}, royalTime);
        setTimeout(function(){screenEmpireBarrage()}, royalTime);
    }

    //抓捕幻神弹幕特效
    function captureDeityBarrage() {
        var chatBarrage = document.getElementById("js-barrage-list");
        //https://res.douyucdn.cn/resource/2019/08/15/common/4e85776071ffbae2867bb9d116e9a43c.gif
        if(chatBarrage.innerHTML.indexOf("/2019/08/15/common/4e85776071ffbae2867bb9d116e9a43c.gif")>-1){
            localStorage.setItem("🍅🥦🍅chatBarrageEffect",chatBarrage.innerHTML);
            localStorage.setItem("🍅🥦🍅screenBarrageEffect", document.querySelector(".danmu-6e95c1").innerHTML );
        }
    }

    //===============================================================
    //++++++++++主函数入口区域,根据元素加载进度自动开始初始化程序++++++++
    //===============================================================
    function programInitCheck(){ //自动检测浏览器出现火力全开后则执行脚本
        radioStorage = localStorage.getItem("radioTagStatus🌼🍄🌼")!=null? localStorage.getItem("radioTagStatus🌼🍄🌼"): "ceaseFire";
        var chatCheck = document.querySelector(".ChatSend-button");//检测聊天区加载
        if(chatCheck==undefined){
            checkDelayCallback(0);
        }else{//执行初始化组件
            creatBtnTag();//先添加手动按钮
            var radioNode = document.getElementById(radioStorage);
            radioNode.setAttribute("checked","checked");
            getUserInfo();//需要前置执行
            getRoomId();//获取房间真实ID
            bindingEventListener(1)//btn绑定皇帝弹幕特效
            realPersonNum();//房间真实人数模块加载
            bindingEventListener(2);//房间真实人数局部刷新
            releasePhoneLimit();//去除手机绑定的限制
            setTimeout(assignRoom, 3000);//房间延时签到
            bindingEventListener(3);//签到局部刷新
            // setInterval(captureDeityBarrage,7000);//抓捕幻神弹幕特效，建议用户打开帮博主抓幻神
            setTimeout(storageOperate, 10000);//自动清理localStorage
            sbts = (new Date()).getTime();//记录初始化时间戳
            checkDelayCallback(1);//继续延迟回调
        }
    }

    //绑定监听事件,部分要延迟执行，等待ajax请求
    function bindingEventListener(code){
        if(code===1){//绑定皇帝弹幕监听
            var chatCheck = document.querySelector(".ChatSend-button");//检测聊天区加载
            chatCheck.addEventListener("mouseup",clickBtnEvent);//绑定鼠标事件
            document.onkeydown = function(e){e.keyCode==13?clickBtnEvent():false}//绑定键盘事件
        }else if(code===2){//绑定真实人数局部刷新
            setTimeout(function(){
                var peopleObj = document.getElementById("real_people_num");
                peopleObj!=undefined?peopleObj.addEventListener("click",realPersonNum):undefined; 
            },1500);
        }else if(code===3){//绑定签到局部刷新
            setTimeout(function(){
                var assignId = document.getElementById("assignRank");
                assignId!=undefined? assignId.addEventListener("click",assignRoom):undefined;
            },4500);                
        }
    }

    //回调延迟函数检测
    function checkDelayCallback(code){
        if(code===0){
            setTimeout(programInitCheck,1000);
        }else if(code===1){
            setTimeout(barrageInitCheck,1000);
        }else if(code===2){
            if(radioStorage =="openFire" && ((new Date()).getTime() - sbts)/1000 > 12){
                randomFireRequest();//超过12s没检测到火力则自动跳转新房间
            }else{
                setTimeout(barrageInitCheck,1000);
            }
        }
    }

    //弹幕组件初始化检测
    function barrageInitCheck(){
        var fireCheck = document.querySelector(".FirePowerChatModal-Notice");//检测火力全开
        if(fireCheck!=undefined){
            if( hotFilter() && awardJudge() && !joinCondition() && !banSpeak() && radioStorage=="openFire"){ //判断奖品、热度数量和是否要求粉丝团,hotFilter需要初始化
                    console.log("符合开火🔥条件，初始化准备开火");
                    followRoom();//自动关注主播
                    // adjustClarity(0);//调整画质为最低,1为画质最高
                    // closeScreenBarrage();//关闭滚屏弹幕
                    closeAutoPlay();//关闭自动播放
                    firePowerMsg();//立即执行火力全开
            }else{
                if(radioStorage == "openFire"){
                    console.log("不符合开火🔥条件，4秒后自动跳转新房间🏠");
                    fireJump1 = setTimeout(randomFireRequest,4000);
                }else{
                    console.log("初始化火力🔥停止，等待用户的操作🏠");
                }
            }
        }else{
            checkDelayCallback(2);
        }
    }

    setTimeout(programInitCheck, 5000); //5S后按页面加载进度自动设定执行脚本初始化加载时间

})();

