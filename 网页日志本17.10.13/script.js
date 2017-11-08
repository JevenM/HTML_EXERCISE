function getHistory(){
	var length = localStorage.length;
	var table = document.getElementById('history');
	table.innerHTML = '';

	for( var i = 0; i < length; i ++ ){
		//以时间作为key存入localStorage
		var key = localStorage.key(i);
		// alert(key);
		var date = new Date();
		date.setTime(key);

		//获取日志记录时间的本地格式
		var time = date.toLocaleString();

		var content = localStorage.getItem(key);

		//创建表格主题第一行
		var row = table.insertRow(i);

		row.insertCell(0).innerHTML = i + 1;
		row.insertCell(1).innerHTML = content;
		row.insertCell(2).innerHTML = time;
		row.insertCell(3).innerHTML = '<button onclick="delDiary(' + key + ')">删除</button>';
	}
}
function saveDiary(){
	var content = document.getElementById("diary").value;
	var today = new Date();
	//将当前时间改为时间戳
	var key = today.getTime();

	//以时间戳为key保存当前日志
	localStorage.setItem(key, content);
	alert("日志已保存！");
	document.getElementById('diary').value = '';
	getHistory();
}

function delDiary(key){
	localStorage.removeItem(key);
	alert("本条日志已删除！");

	//重新加载
	getHistory();
}

function clearDiary(){
	//清空所有日志记录
	localStorage.clear();
	alert("日志已全部删除！");

	getHistory();
}