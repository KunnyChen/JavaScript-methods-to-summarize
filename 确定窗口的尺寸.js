/*
 * @Author: KunnyChen
 * @Date:   2017-07-21 09:37:13
 * @Last Modified by:   KunnyChen
 * @Last Modified time: 2017-07-21 11:55:37
 */

'use strict';
//跨浏览器获取可视窗口大小
function getWindow() {
    if (typeof window.innerWidth != 'undefined') {
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
},
