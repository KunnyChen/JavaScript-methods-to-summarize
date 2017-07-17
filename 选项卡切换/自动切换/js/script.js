/**
 * Created by Administrator on 2016/11/26.
 */
function $(id){
    return typeof id=='string'?document.getElementById(id):id;
}
window.onload=tab;
function tab(){
    var index = 0;
    var timer = null;
//    获取所有的页签和要切换的内容
    var lis=$('notice-tit').getElementsByTagName('li');
    var divs=$('notice-con').getElementsByTagName('div');
//    遍历每一个页签给li绑定事件
    for(var i=0;i<lis.length;i++){
        lis[i].id=i;
        lis[i].onmouseover = function () {
            clearInterval(timer);
            changeOption(this.id);
        };
        lis[i].onmouseout = function(){
            timer = setInterval(autoPlay,2000);
        }
    }
//    添加定时器，改变当前的索引
    timer = setInterval(autoPlay,2000);
    function autoPlay(){
        index++;
        if(index>=lis.length){
            index=0;
        }
        changeOption(index);
    }
    function changeOption(curIndex){
        //console.log(curIndex);
        for(var j= 0; j<lis.length;j++){
            lis[j].className='';
            divs[j].style.display='none';
        }
        //高亮显示当前的页签
        lis[curIndex].className='select';
        divs[curIndex].style.display='block';
        //console.log(index);
        index=curIndex;  //解决bug
    }
}