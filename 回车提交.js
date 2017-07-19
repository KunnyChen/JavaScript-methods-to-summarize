/*
 * @Author: KunnyChen
 * @Date:   2017-07-17 17:23:10
 * @Last Modified by:   KunnyChen
 * @Last Modified time: 2017-07-19 16:38:01
 */

'use strict';
$("id").onkeypress = function(event) {
    event = (event) ? event : ((window.event) ? window.event : "")
    keyCode = event.keyCode ? event.keyCode : (event.which ? event.which : event.charCode);
    if (keyCode == 13) {
        $("SubmitLogin").onclick();
    }
}

/************Ctrl + Entert 直接提交表单***************/
document.body.onkeydown = function(evt) {
    evt = evt ? evt : (window.event ? window.event : null);
    if (13 == evt.keyCode && evt.ctrlKey) {
        evt.returnValue = false;
        evt.cancel = true;
        PostData();
    }
};
