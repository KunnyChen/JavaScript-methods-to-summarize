/*
 * @Author: KunnyChen
 * @Date:   2017-07-15 11:45:20
 * @Last Modified by:   KunnyChen
 * @Last Modified time: 2017-07-19 14:23:35
 */

'use strict';
export default (type = 'GET', url = '', data = {}, async = true) => {
    return new Promise((resolve, reject) => { //定义一个promise
        type = type.toUpperCase();

        let requestObj;
        if (window.XMLHttpRequest) {
            requestObj = new XMLHttpRequest();
        } else {
            requestObj = new ActiveXObject;
        }

        if (type == 'GET') {
            let dataStr = ''; //数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&';
            })
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
            requestObj.open(type, url, async);
            requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            requestObj.send();
        } else if (type == 'POST') {
            requestObj.open(type, url, async);
            requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            requestObj.send(JSON.stringify(data));
        } else {
            reject('error type');
        }

        requestObj.onreadystatechange = () => {
            if (requestObj.readyState == 4) {
                if (requestObj.status == 200) {
                    let obj = requestObj.response
                    if (typeof obj !== 'object') {
                        obj = JSON.parse(obj);
                    }
                    resolve(obj);
                } else {
                    reject(requestObj);
                }
            }
        }
    })
}

// **********************************************************************

function myFunction() {
    loadXMLDoc("/try/ajax/ajax_info.txt", function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
        }
    });
}

var xmlhttp;

function loadXMLDoc(url, cfunc) {
    if (window.XMLHttpRequest) {
        // IE7+, Firefox, Chrome, Opera, Safari 代码
        xmlhttp = new XMLHttpRequest();
    } else { // IE6, IE5 代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } //创建对象

    xmlhttp.onreadystatechange = cfunc;
    //用cfunc调用响应函数

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

}

function myFunction() //响应执行时的操作
{
    loadXMLDoc("/try/ajax/ajax_info.txt", function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
        }

    });

}
// 常见的状态码及其含义
// 200：服务器响应正常
// 304：该资源在上次请求之后没有任何修改（通常用于浏览器的缓存机制，使用 get请求时尤其需要注意）
// 400：无法找到请求的资源
// 401：访问资源的权限不够
// 403：没有权限访问资源
// 404：需要访问的资源不存在
// 405：需要访问的需要被禁止
// 407：访问的资源主要代理身份验证
// 414：请求的URL太长
// 500：服务器内部的错误