// ==UserScript==
// @name         彩墨阁筛选
// @namespace    secondKillBet
// @version      1.0
// @description  修改背景颜色，自定义字数筛选
// @author       obrua+xiaochou+lvlanxing
// @icon         https://cdn.jsdelivr.net/gh/popsee/siteproxy/favicon.png
// @icon64URL    https://cdn.jsdelivr.net/gh/popsee/siteproxy/favicon.png
// @include      *://www.caimoge.cc/shuku*
// @mail         lvlanxing@gmail.com
// @copyright    tri-body
// @run-at       document-end
// @grant        none
// @note         只能修改颜色
// ==/UserScript==

// (function() {
//     const fiterLetter = 200; //200万字筛选
//     const hideLower = true;
//     var pageBookArr = [];

//     filterCondition();

//     function filterCondition() {
//         var bookItem = document.getElementsByClassName('shulist')[0].children;
//         if (bookItem.length > 10) {
//             for (let i = 0; i < bookItem.length; i++) {
//                 if (bookItem[i].lastElementChild != undefined && bookItem[i].lastElementChild.previousElementSibling.innerText.indexOf('万字') > -1) {
//                     let letterNode = bookItem[i].lastElementChild.previousElementSibling.innerText;
//                     let letterNum = Number(letterNode.substr(0, letterNode.length - 2));
//                     if (letterNum >= fiterLetter) {
//                         let bookInfo = {};
//                         bookInfo.kind = bookItem[i].firstElementChild.nextElementSibling.innerText;
//                         bookInfo.name = bookItem[i].firstElementChild.nextElementSibling.nextElementSibling.innerText;
//                         bookInfo.author = bookItem[i].firstElementChild.nextElementSibling.nextElementSibling.innerText;
//                         bookInfo.wordsNum = bookItem[i].lastElementChild.previousElementSibling.innerText;
//                         bookInfo.renew = bookItem[i].lastElementChild.innerText;
//                         pageBookArr.push(bookInfo);
//                     }

//                     // if (letterNum >= fiterLetter && letterNum < fiterLetter + 100) {
//                     //     // console.info(letterNum);
//                     //     bookItem[i].setAttribute('style', 'background-color: cyan');
//                     // } else if (letterNum >= fiterLetter + 100 && letterNum < fiterLetter + 200) {
//                     //     bookItem[i].setAttribute('style', 'background-color: #BDEF0A');
//                     // } else if (letterNum >= fiterLetter + 200) {
//                     //     bookItem[i].setAttribute('style', 'background-color: #FFA07A');
//                     // } else {
//                     //     if (hideLower) {
//                     //         bookItem[i].setAttribute('style', 'display: none');
//                     //     }
//                     // }
//                 }
//             }
//             console.info(pageBookArr);
//             let pageInfo = sessionStorage.getItem('pageInfo');
//             if (pageInfo == null) {
//                 sessionStorage.setItem('pageInfo', JSON.stringify(pageBookArr));
//                 pageControl();
//             } else {
//                 let tempArr = JSON.parse(pageInfo);
//                 tempArr = tempArr.concat(pageBookArr);
//                 sessionStorage.setItem('pageInfo', JSON.stringify(tempArr));
//                 pageControl();
//             }
//         } else {
//             setTimeout(filterCondition, 300);
//         }
//     }

//     function pageControl() {
//         if (document.getElementsByClassName('pages')[0] != undefined) {
//             var curPage = parseInt(document.getElementsByClassName('pages')[0].getElementsByTagName('strong')[0].innerText);
//             var totalPage = parseInt(document.getElementsByClassName('pages')[0].lastElementChild.innerText); //.replace(/[^0-9]/ig,"");
//             if (curPage < totalPage) {
//                 ++curPage;
//                 location.href = 'https://www.caimoge.cc/shuku/' + curPage + '.html';
//             }else{
//                 localStorage.setItem('pageInfo', sessionStorage.getItem('pageInfo'));
//                 console.info('小说列表全部采集完毕');
//             }
//         } else {
//             setTimeout(pageControl, 500);
//         }
//     }
// }());



(function() {
    const fiterLetter = 200; //200万字筛选
    const hideLower = true;
    filterCondition();
    function filterCondition() {
        var bookItem = document.getElementsByClassName('shulist')[0].children;
        if (bookItem.length > 10) {
            for (let i = 0; i < bookItem.length; i++) {
                if (bookItem[i].lastElementChild != undefined && bookItem[i].lastElementChild.previousElementSibling.innerText.indexOf('万字') > -1) {
                    let letterNode = bookItem[i].lastElementChild.previousElementSibling.innerText;
                    let letterNum = Number(letterNode.substr(0, letterNode.length - 2));
                    if (letterNum >= fiterLetter && letterNum < fiterLetter + 100) {
                        // console.info(letterNum);
                        bookItem[i].setAttribute('style', 'background-color: cyan');
                    } else if (letterNum >= fiterLetter + 100 && letterNum < fiterLetter + 200) {
                        bookItem[i].setAttribute('style', 'background-color: #BDEF0A');
                    } else if (letterNum >= fiterLetter + 200) {
                        bookItem[i].setAttribute('style', 'background-color: #FFA07A');
                    } else {
                        if (hideLower) {
                            bookItem[i].setAttribute('style', 'display: none');
                        }
                    }
                }
            }
        } else {
            setTimeout(filterCondition, 500);
        }
    }
}());
