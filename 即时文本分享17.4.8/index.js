//变量声明预解析，第一遍寻找所有的变量声明（不包括赋值）
//第二遍寻找所有的执行代码并执行（包括赋值）
var body,text,title;
appendImg();
//querySelector最新选择器，兼容IE8
var oSina = document.querySelector('#imgSina');
var oQQ = document.querySelector('#imgQQ');
var shares = document.querySelectorAll('.share');
var title = document.title;
getTxt();

// var obj {
// 	num:1;
// 	add:function(){
// 		this.num++;
// 		(function(){
// 			this.num++;
// 		}) ();
// 	}
// }
// obj.add();
//()(); 匿名函数自执行体，函数声明立刻执行
function appendImg(){//加入两张小图标
	body = document.documentElement || document.body;
	//documentElement 没有文档声明
	//body 有声明
	var aImg = "<img id='imgSina' class='share' title='分享到微博' src='images/sina.gif' />"+"\n"+"<img id='imgQQ' class='share' title='分享到QQ' src='images/qq.png' />";
	body.innerHTML += aImg;
}

body.onmouseup = function(e){
	e = e || window.event;
	text = getTxt();
	
	var left = e.pageX - 40;
	var top = e.pageY - 40;
	if(text&&text.length>0){
		showImg(true,oSina,(top+50),left);
		showImg(true,oQQ,(top+50),(left+30));
	}
	else{
		showImg(false);
	}
}
function showImg(bool,obj,top,left){
	if(bool){
		obj.style.display = 'inline';
		obj.style.left = left+'px';
		obj.style.top = top+'px';
	}else{
		for(var i=0,len = shares.length;i<len;i++){
			shares[i].style.display = 'none';
		}
	}
}
oSina.onclick = function(){
	window.open('http://service.weibo.com/share/share.php?title='+text+'——分享自: '+title+'&url='+window.location.href);
}
oQQ.onclick = function(){
	window.open('http://qzone.qq.com');
}
function getTxt(){
	var str = '';
	if(document.selection){
		str = document.selection.createRange().text;
	}
	else{
		str = document.getSelection();
	}
	return str.toString();
}
