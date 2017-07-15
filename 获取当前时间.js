/*
* @Author: KunnyChen
* @Date:   2017-07-15 11:44:18
* @Last Modified by:   KunnyChen
* @Last Modified time: 2017-07-15 11:52:18
* @Describe：获取当前时间
*/

'use strict';

function GetCurrentDate() {
   var d = new Date();
   var y = d.getYear()+1900;
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