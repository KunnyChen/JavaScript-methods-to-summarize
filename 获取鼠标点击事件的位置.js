/*
 * @Author: KunnyChen
 * @Date:   2017-07-21 09:24:46
 * @Last Modified by:   KunnyChen
 * @Last Modified time: 2017-07-21 11:52:05
 */

'use strict';
document.onclick = mouseClick;

function mouseClick(ev) {
    ev = ev || window.event; //window.event用来兼容IE
    var x = 0;
    var y = 0;
    if (ev.pageX) {
        x = ev.pageX;
        y = ev.pageY;
    } else if (ev.clientX) {
        var offsetX = 0,
            offsetY = 0;
        if (document.documentElement.scrollLeft) {
            offsetX = document.documentElement.scrollLeft;
            offsetY = document.documentElement.scrollTop;
        } else if (document.body) {
            offsetX = document.body.scrollLeft;
            offsetY = document.body.scrollTop;
        }
        x = ev.clientX + offsetX;
        y = ev.clientY + offsetY;
    }
    console.log("您点击的位置是 x=" + x + ",y=" + y);
}
// IE
document.body.clientWidth //body对象宽度
document.body.clientHeight //body对象高度
document.documentElement.clientWidth //可视区域的宽度
document.documentElement.clientHeight //可视区域的高度

// FF
document.documentElement.scrollHeight // 浏览器所有内容高度
document.body.scrollHeight //浏览器所有内容高度
document.documentElement.scrollTop // 浏览器滚动部分高度
document.body.scrollTop //始终为0
document.documentElement.clientHeight //浏览器可视部分高度
document.body.clientHeight // 浏览器所有内容高度

// Chrome
document.documentElement.scrollHeight //浏览器所有内容高度
document.body.scrollHeight // 浏览器所有内容高度
document.documentElement.scrollTop // 始终为0
document.body.scrollTop //浏览器滚动部分高度
document.documentElement.clientHeight //浏览器可视部分高度
document.body.clientHeight // 浏览器所有内容高度

浏览器所有内容高度(即浏览器整个框架的高度) = 滚动条卷去部分 + 可视部分 + 底部隐藏部分的高度总和

浏览器滚动部分高度 = 滚动条卷去部分高度 = 可视顶端距离整个对象顶端的高度。

clientHeight
在IE和FF下， 该属性没什么差别， 都是指浏览器的可视区域， 即除去浏览器的那些工具栏状态栏剩下的页面展示空间的高度。
