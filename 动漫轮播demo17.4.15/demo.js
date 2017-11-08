$(function () {
	var page = 1;
	var i = 4;
	$("a.next").click(function(){
		var $parent = $(this).parents("div.v_show");
		var $v_show = $parent.find("ul");
		var $v_content = $parent.find("div.v_content");
		var v_width = $v_content.width();
		var len = $v_show.find("li").length;
		var page_count = Math.ceil(len/i);
		if(!$v_show.is(":animated")){
			if(page == page_count){
				$v_show.animate({left:'0px'},"slow");
				page = 1;
			}else{
				$v_show.animate({left:'-='+v_width},"slow");
				page++;
			}
			$parent.find("div.d_list").eq((page - 1)).addClass("current").siblings().removeClass("current");
		}
	});
	$("a.prev").click(function(){
		var $parent = $(this).parents("div.v_show");
		var $v_show = $parent.find("ul");
		var $v_content = $parent.find("div.v_content");
		var v_width = $v_content.width();
		var len = $v_show.find("li").length;
		var page_count = Math.ceil(len/i);
		if(!$v_show.is(":animated")){
			if(page == 1){
				$v_show.animate({left:'-='+v_width*(page_count-1)},"slow");
				page = page_count;
			}else{
				$v_show.animate({left:'+='+v_width},"slow");
				page--;
			}
			$parent.find("div.d_list").eq((page - 1)).addClass("current").siblings().removeClass("current");
		}
	});
	$(".v_content_list ul a").css("text-decoration","none").css("color","black");
 });
//  自动轮播
// $(function(){
// 	var page = 0;
// 		$(".v_content_list ul a").css("text-decoration","none").css("color","black");
// 		setInterval(function(){
// 			page++;
// 			if(page>3)
// 			{
// 				page = 0;
// 			}
// 			$("ul").animate({left:-800*page+"px"},2000);
// 			$("div.d_list").eq((page)).addClass("current").siblings().removeClass("current");

// 		},5000);
// });
// 		
// 		怎样做到使两者结合起来？？
// 		怎样做到使两者结合起来？？
// 		怎样做到使两者结合起来？？
// 		怎样做到使两者结合起来？？