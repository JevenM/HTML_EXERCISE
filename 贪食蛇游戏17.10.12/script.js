var time=200;//刷新间隔
var t=3;//蛇身长
//蛇行走轨迹
var snakeMap = [];
var w = 10;//单元格大小
var direction = 37;//左37 上38 右39 下40
//蛇头坐标
var x=0,y=0;
//食物初始坐标
var foodX = 0;
var foodY = 0;

var score = 0;
var bestScore = 0;

var width = 400;
var height = 400;

var r=0;//arr下标
var i=0;//颜色下标
var arr=[10,20,30,40,50];
var array = ["red","blue","green","pink","gray"];

var c = document.getElementById('Canvas');
var ctx = c.getContext('2d');
showBestScore();
showRank();

GameStart();

function showBestScore (){
	//从本地存储数据中读取历史最高分
	bestScore = localStorage.getItem("bestScore");
	if(bestScore == null){
		bestScore = 0;
	}
	document.getElementById('bestScore').innerHTML = bestScore;
}
function showRank(){
	r = localStorage.getItem("rank");
	if(r == null){
		r = 0;
	}
	document.getElementById('rank').innerHTML = r;
}
//绘制食物
function drawFood(){
	foodX = Math.floor(Math.random()*width/w)*w;
	foodY = Math.floor(Math.random()*height/w)*w;
	ctx.fillStyle = '#ff0000';
	ctx.fillRect(foodX, foodY, w, w);
}

function GameStart(){
	drawFood();
	//随机生成蛇头坐标
	x = Math.floor(Math.random()*width/w)*w;
	y = Math.floor(Math.random()*height/w)*w;

	direction = 37 + Math.floor(Math.random()*4);
	var timer = setInterval("gameRefresh();",time);
}

function gameRefresh(){
	snakeMap.push({
		'x':x,
		'y':y
	});
	drawSnake();
	switch(direction){
		case 37:
			x -= w;
			break;
		case 38:
			y -= w;
			break;
		case 39:
			x += w;
			break;
		case 40:
			y += w;
			break;	
	}
	//设置每次过关后改变canvas的border，但不能成功，画正方形的方式也行，每次刷新完就没了
	// function rect(arra){
	// 	ctx.save();
	// 	ctx.lineWidth = 10;
	// 	ctx.strokeStyle=array[r];
	// 	ctx.beginPath();
	// 	ctx.moveTo(0,0);
	// 	ctx.lineTo(400,0);
	// 	ctx.lineTo(400,400);
	// 	ctx.lineTo(0,400);
	// 	ctx.lineTo(0,0);
	// 	ctx.stroke();
	// 	ctx.closePath();
	// 	ctx.restore();
	// }

	//碰撞检测,返回值为0没碰到检测物
	var code = detectCollision();
	//返回值不为0则游戏失败
	if (code != 0) {
		if(score > bestScore){
			localStorage.setItem("bestScore",score);
		}
		if(code == 1){
			alert("你碰到了墙壁！游戏失败！当前得分："+score);
		}
		if(code == 2){
			alert("你撞死了蛇身！游戏失败！当前得分："+score);
		}
		if(code == 3){
			var co = confirm("恭喜您成功过关！本关分数："+score+"，是否进入下一关？");		
			if(co == true){
				score=0;
				r++;
				i++;
				if(i>4){
					i=0;
				}
				var bor = "10px solid " + array[i];
				c.style.border = bor;

				localStorage.setItem("rank",r);
				showRank();
				var currentScore = document.getElementById('currentScore');
				currentScore.innerHTML = score;
				clearInterval(timer);
				window.location.reload();
				// time = time - 100;
				GameStart();
			}
		}
		window.location.reload();
	}	

	if(foodX == x && foodY ==y){
		score += 10;
		var currentScore = document.getElementById('currentScore');
		currentScore.innerHTML = score;
		drawFood();
		t++;
	}
	function drawSnake(){
		ctx.fillStyle = 'lightblue';
		ctx.fillRect(x, y, w, w);

		if(snakeMap.length > t){
			var lastBox = snakeMap.shift();//删除数组最后一项，即蛇的尾部最后一个位置的记录
			ctx.clearRect(lastBox['x'], lastBox['y'], w, w);//清除最后一个位置，实现移动效果
		}
	}
	//按键监听
	document.onkeydown = function(e){
		if(e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 37){
			direction = e.keyCode;
		}
	}
	//碰撞检测
	function detectCollision(){
		if( x >= width || y >= height || x < 0 || y < 0 ){
			return 1;
		}
		if( score == arr[r] ){
			return 3;
		}
		for( var i = 0; i < snakeMap.length; i ++ ){
			if( snakeMap[i].x == x && snakeMap[i].y == y ){
				return  2;
			}
		}
		return 0;
	}
}
function reset(){
		score = 0;
		r = 0;
		
		bestScore = 0;
		localStorage.setItem("rank",r);
		document.getElementById('rank').innerHTML = r;
		var currentScore = document.getElementById('currentScore');
		currentScore.innerHTML = score;
		localStorage.setItem("bestScore",bestScore);
		document.getElementById('bestScore').innerHTML = bestScore;
		c.style.border = "10px solid black";
		clearInterval(timer);
		window.location.reload();
		// time = 800;
		GameStart();
	}





























