var music = document.getElementById('audio');

var volume = document.getElementById('volume');

var toggleBtn = document.getElementById('toggleBtn');

var title = document.getElementById('title');

//音乐路径列表
var list = new Array("阿南亮子 (Anan Ryoko) - Refrain.mp3","蒋蒋-残雪.mp3","李荣浩-老街.mp3");
//音乐名列表
var titleList = new Array("阿南亮子 (Anan Ryoko) - Refrain","蒋蒋-残雪","李荣浩-老街");

var i=0;
var j=0;
// function rotate(){
// 	document.getElementById('CDimage').style.transform = 'rotate('+j+'deg)';
// 	j=j+10;
// }

window.onload = function(){
	// setInterval(rotate(),10);
	music.play();
}


function toggleMusic(){
	if(music.paused){
		music.play();
		$('#CDimage img').css({
			"animation-play-state":"running"
			//控制动画暂停/运行
		});
		toggleBtn.innerHTML = '<img src="pause.png" width="50" height="50" alt="暂停" />';
	}
	else{
		music.pause();
		$('#CDimage img').css({
			"animation-play-state":"paused"
			//控制动画的状态
		});
		toggleBtn.innerHTML = '<img src="play.png" width="50" height="50" alt="播放" />';
	}
}

function setVolume(){
	music.volume = volume.value;
}

function nextMusic(){
	if(i == list.length-1){
		i=0;
	}
	else{
		i++;
	}
	music.pause();
	toggleBtn.innerHTML = '<img src="pause.png" width="50" height="50" alt="播放" />';
	music.src = list[i];
	title.innerHTML = titleList[i];
	music.play();
	$('#CDimage img').css({
			"animation-play-state":"running"
			//控制动画暂停/运行
		});
}

function lastMusic(){
	if(i == 0)
		i=list.length-1;
	else
		i--;
	music.pause();
	toggleBtn.innerHTML = '<img src="pause.png" width="50" height="50" alt="播放" />';
	music.src = list[i];
	title.innerHTML = titleList[i];
	music.play();
	$('#CDimage img').css({
			"animation-play-state":"running"
			//控制动画暂停/运行
		});
}


