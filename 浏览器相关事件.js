/*
 * @Author: KunnyChen
 * @Date:   2017-07-21 10:12:47
 * @Last Modified by:   KunnyChen
 * @Last Modified time: 2017-07-21 10:39:09
 */

'use strict';

//跨浏览器添加事件
function addEvent(obj, type, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(type, fn, false);
    } else if (obj.attachEvent) { //兼容IE
        obj.attachEvent('on' + type, fn);
    }
}

// 跨浏览器移除事件
function removeEvent(obj, type, fn) {
    if (obj.removeEventListener) {
        obj.removeEventListener(type, fn, false);
    } else if (obj.detachEvent) { //兼容IE
        obj.detachEvent('on' + type, fn);
    }
}

// 跨浏览器阻止默认行为
function preDef(ev) {
    var e = ev || window.event;
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}

//跨浏览器获取目标对象
function getTarget(ev) {
    if (ev.target) { //w3c
        return ev.target;
    } else if (window.event.srcElement) { //IE
        return window.event.srcElement;
    }
}

//跨浏览器获取滚动条位置，sp == scroll position
function getSP() {
    return {
        top: document.documentElement.scrollTop || document.body.scrollTop,
        left: document.documentElement.scrollLeft || document.body.scrollLeft;
    }
}

 //跨浏览器获取可视窗口大小
function getWindow() {
    if (typeof window.innerWidth != 'undefine') {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    } else {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
}
