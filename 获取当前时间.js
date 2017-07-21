/*
 * @Author: KunnyChen
 * @Date:   2017-07-15 11:44:18
 * @Last Modified by:   KunnyChen
 * @Last Modified time: 2017-07-21 11:25:33
 * @Describe：获取当前时间
 */

'use strict';

function GetCurrentDate() {
    var d = new Date();
    var y = d.getYear() + 1900;
    month = add_zero(d.getMonth() + 1),
        days = add_zero(d.getDate()),
        hours = add_zero(d.getHours());
    minutes = add_zero(d.getMinutes()),
        seconds = add_zero(d.getSeconds());
    var str = y + '-' + month + '-' + days + ' ' + hours + ':' + minutes + ':' + seconds;
    return str;
};

function add_zero(temp) {
    if (temp < 10) return "0" + temp;
    else return temp;
}
// ********************************************
function getTime() {
    var now = new Date();
    var y = now.getFullYear();
    var m = now.getMonth() + 1;
    m = (m < 10) ? '0' + m : m;
    var d = now.getDate();
    var h = now.getHours();
    h = (h < 10) ? '0' + h : h;
    var mi = now.getMinutes();
    mi = (mi < 10) ? '0' + mi : mi;
    return y + '-' + m + '-' + d + " " + h + ':' + mi;
}
