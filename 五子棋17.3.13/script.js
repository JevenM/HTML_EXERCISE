var over = false;
var chessboard = [];
//赢法数组
var wins = [];
//赢法统计数组
var mywin = [];
var computerwin = [];

var me = true;

for(k=0;k<15;k++){
	chessboard[k] = [];
	for(l=0;l<15;l++){
		chessboard[k][l] = 0;
	}
}

for(i=0;i<15;i++){
	wins[i] = [];
	for(j=0;j<15;j++){
		wins[i][j] = [];
	}
}//初始化三维数组
var count = 0;//count记录多少种赢法：572种
for(i=0;i<15;i++){
	for(j=0;j<11;j++){
		for(k=0;k<5;k++){
			wins[i][j+k][count] = true;
		}
		count++;
	}
}//找出所有横线

for(i=0;i<15;i++){
	for(j=0;j<11;j++){
		for(k=0;k<5;k++){
			wins[j+k][i][count] = true;
		}
		count++;
	}
}//找出所有的竖线
for(i=0;i<11;i++){
	for(j=0;j<11;j++){
		for(k=0;k<5;k++){
			wins[i+k][j+k][count] = true;
		}
		count++;
	}
}//找出所有的斜线
for(i=0;i<11;i++){
	for(j=14;j>3;j--){
		for(k=0;k<5;k++){
			wins[i+k][j-k][count] = true;
		}
		count++;
	}
}//找出所有的反斜线
// console.log(count);
for(var i=0;i<count;i++){
	mywin[i] = 0;
	computerwin[i] =0;
}
var chess = document.getElementById('chess');
var context = chess.getContext('2d');
context.strokeStyle = "#bfbfbf";

var img = new Image();
img.src = "flower.png";
img.onload = function(){
	context.drawImage(img,0,0,450,450);
	drawimage();	
}

function drawimage() {
	for(var i=0;i<15;i++)
	{
		context.moveTo(15+i*30,15);
		context.lineTo(15+i*30,435);
		context.stroke();
		context.moveTo(15,15+i*30);
		context.lineTo(435,15+i*30);
		context.stroke();
	}	
}
function onestop(i,j,me){
	context.beginPath();
	context.arc(15+i*30,15+j*30,13,0,2*Math.PI);
	context.closePath();
	var gradient = context.createRadialGradient(15+i*30+2,15+j*30-2,13,15+i*30+2,15+j*30-2,0);
	if(me){
		gradient.addColorStop(0,"#0a0a0a");
		gradient.addColorStop(1,"#636766");	
	}
	else{
		gradient.addColorStop(0,"#d1d1d1");
		gradient.addColorStop(1,"#f9f9f9");
	}
	context.fillStyle = gradient;
	context.fill();
}
chess.onclick = function(e){
	if(over){
		return;
	}
	if(!me){
		return;
	}
	var x = e.offsetX;
	var y = e.offsetY;
	var i = Math.floor(x/30);
	var j = Math.floor(y/30);
	if(chessboard[i][j] == 0){
		onestop(i,j,me);
		chessboard[i][j] = 1;
		
		for(var k=0;k<count;k++){
			if(wins[i][j][k]){
				mywin[k]++;
				computerwin[k] = 6;
				if(mywin[k] == 5){
					window.alert("你竟然赢了？？？");
					var el = prompt("输入你的尊姓大名：");
					if(el!= null)
						{
	 						alert("你好"+el);	
	 						document.getElementById('a').value = el;
						}
					else
						{
							alert("你竟然敢忽视我的问题...点击确定！");
						}
					over = true;
				}
			}
		}
		if(!over){
			me = !me;
			computerAI();
		}
	}
}
var computerAI = function(){
	var myscore = [];
	var computerscore = [];
	var max = 0;
	var u=0,v=0;
	for(var i=0;i<15;i++){
		myscore[i] = [];
		computerscore[i] = [];
		for(var j=0;j<15;j++){
			myscore[i][j] = 0;
			computerscore[i][j] = 0;
		}
	}
	for(var i=0;i<15;i++){
		for(var j=0;j<15;j++){
			if(chessboard[i][j] ==0){
				for(var k=0;k<count;k++){
					if(wins[i][j][k]){
						if(mywin[k] == 1){
							myscore[i][j] += 200;
						}
						else if(mywin[k] ==2){
							myscore[i][j] += 400;
						}
						else if(mywin[k] ==3){
							myscore[i][j] += 2000;
						}
						else if(mywin[k] ==4){
							myscore[i][j] += 10000;
						}
						if(computerwin[k] == 1){
							computerscore[i][j] += 220;
						}
						else if(computerwin[k] ==2){
							computerscore[i][j] += 420;
						}
						else if(computerwin[k] ==3){
							computerscore[i][j] += 2100;
						}
						else if(computerwin[k] ==4){
							computerscore[i][j] += 20000;
						}
					}
				}
				if(myscore[i][j]>max){
					max = myscore[i][j];
					u = i;
					v = j;
				}
				else if(myscore[i][j] == max){
					if(computerscore[i][j]>computerscore[u][v]){
						u = i;
						v = j;
					}
				}
				if(computerscore[i][j]>max){
					max = computerscore[i][j];
					u = i;
					v = j;
				}
				else if(computerscore[i][j] == max){
					if(myscore[i][j]>myscore[u][v]){
						u = i;
						v = j;
					}
				}
			}
		}
	}
	onestop(u,v,false);
	chessboard[u][v] = 2;
	for(var k=0;k<count;k++){
			if(wins[u][v][k]){
				computerwin[k]++;
				mywin[k] = 6;
				if(computerwin[k] == 5){
					window.alert("计算机赢了啊哈哈哈哈！");
					var begin = confirm("是否重新开始？");
					if(begin){
						 location.reload();
					}
					else{
						document.write("你认输吧！");
					}
					over = true;
				}
			}
		}
		if(!over){
			me = !me;
		}
}
function restart(){
	location.reload();
}