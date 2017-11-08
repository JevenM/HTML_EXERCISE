$(function(){
	var x = 10;
	var y = 20;
	$(".li .aaa").mouseover(function(e){
		this.myTitle =this.title;
		this.title = "";
		var imgTitle = this.myTitle? "<br />" + this.myTitle : "";
		var tooltip = "<div id='tooltip1'><img id='ss' src="+this.href+" alt='产品预览图'/>"+imgTitle+"</div>";
		$("body").append(tooltip);
		$("#ss").height(200);
		$("#tooltip1").css({
			"position":"absolute",
			"top":(e.pageY+y) + "px",
			"left":(e.pageX+x) + "px"
		}).show("fast");
	}).mouseout(function(){
		this.title = this.myTitle;
		$("#tooltip1").remove();
	}).mousemove(function(e){
		$('#tooltip1').css({
			"position":"absolute",
			"top":(e.pageY+y)+ "px",
			"left":(e.pageX+x)+ "px",
			"z-index":"1000"
		});		
	});
});