/*
 * @Author: KunnyChen
 * @Date:   2017-07-15 09:31:55
 * @Last Modified by:   KunnyChen
 * @Last Modified time: 2017-07-21 11:59:52
 * @Describe：字符串截取方法
 */

'use strict';

// 方法 charCodeAt() 与 charAt() 方法执行的操作相似，只不过前者返回的是位于指定位置的字符的编码，而后者返回的是字符子串。
getCharactersLen: function(charStr, cutCount) {
        if (charStr == null || charStr == '') return '';
        var totalCount = 0;
        var newStr = '';
        for (var i = 0; i < charStr.length; i++) {
            var c = charStr.charCodeAt(i);
            if (c < 255 && c > 0) {
                totalCount++;
            } else {
                totalCount += 2;
            }
            if (totalCount >= cutCount) {
                newStr += charStr.chartAt(i);
                break;
            } else {
                newStr += charStr.charAt(i);
            }
        }
        return newStr;
    }
    // *****************************************************************
    // substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。stringObject.substr(start,length)
var str = "Hello world!"
document.write(str.substr(3)) //lo world!

var str = "Hello world!"
document.write(str.substr(3, 7)) //lo worl  ,从开始处理的7个字符

// ******************************************************************
// substring() 方法用于提取字符串中介于两个指定下标之间的字符。stringObject.substring(start,stop)
var str = "Hello world!"
document.write(str.substring(3)) //lo world!

var str = "Hello world!"
document.write(str.substring(3, 7)) //lo w

// *********************************************************************
// slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。stringObject.slice(start,end)
var str = "Hello happy world!"
document.write(str.slice(6)) //happy world!

var str = "Hello happy world!"
document.write(str.slice(6, 11)) //happy

// 字符串中查找字符串indexOf
var test = 'Welcome to my blog!';
var value = 'blog';
var subValue = test.indexOf(value);
console.log(subValue); //14,子字符串的索引
