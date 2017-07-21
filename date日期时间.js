/*
 * @Author: KunnyChen
 * @Date:   2017-07-21 11:44:18
 * @Last Modified by:   KunnyChen
 * @Last Modified time: 2017-07-21 15:33:25
 * @Describe：获取当前时间
 */

'use strict';
var dateStart = new Date(); //开始时间，当前时间

var dateEnd = new Date(17-07-22); //结束时间，需传入时间参数
var dateDiff = dateEnd.getTime() - dateStart.getTime(); //时间差的毫秒数

//计算出相差天数
var days = Math.floor(dateDiff / (24 * 3600 * 1000));

//计算出小时数
var leave1 = dateDiff % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
var hours = Math.floor(leave1 / (3600 * 1000));
//计算相差分钟数
var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
var minutes = Math.floor(leave2 / (60 * 1000));


//计算相差秒数
var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
var seconds = Math.round(leave3 / 1000);

console.log(" 相差 " + days + "天 " + hours + "小时 " + minutes + " 分钟" + seconds + " 秒");
