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
//*************************************************************************************************************************************************
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
//***********************************************************************************************************************************************
	var x = 10;
	var y = 20;
	$(".li .aaa img").mouseover(function(e){
		this.myTitle =this.title;
		this.title = "";
		var imgTitle = this.myTitle? "<br />" + this.myTitle : "";
		var tooltip = "<div id='tooltip1'><img width='200' id='ss' src="+this.src+" alt='产品预览图'/>"+imgTitle+"</div>";
		$("body").append(tooltip);
		$("#ss").height(200);
		$("#tooltip1").css({
			"position":"absolute",
			"top":(e.pageY+y) + "px",
			"left":(e.pageX+x) + "px",
			"border":"1px solid gray",
			"box-shadow":"3px 3px 3px #666",
			"background":"white"
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
//***************************************************************************************************************************************************
window.onload = function()
      {
             var oTab = document.getElementById("tabs");
             var oUl = oTab.getElementsByTagName("ul")[0];
             var oLis = oUl.getElementsByTagName("li");
             var oDivs= oTab.getElementsByTagName("div");    
    // JS实现选项卡切换
             for(var i= 0,len = oLis.length;i<len;i++)
             {
                 oLis[i].index = i;
                 oLis[i].onclick = function() 
                                  {
                                      for(var n= 0;n<len;n++)
                                      {
                                          oLis[n].className = "";
                                          oDivs[n].className = "hide";
                                      }
                                      this.className = "on";
                                      oDivs[this.index].className = "";
                                  }
             }
     }
//*************************************************************************************************************************************************888    

 //自动轮播
$(function(){
	var page = 0;
		$(".v_content_list ul a").css("text-decoration","none").css("color","black");
		setInterval(function(){
			page++;
			if(page>3)
			{
				page = 0;
			}
			$(".v_content_list ul").animate({left:-800*page+"px"},2000);
			$("div.d_list").eq((page)).addClass("current").siblings().removeClass("current");

		},5000);
});
// 		
// 		怎样做到使两者结合起来？？
// 		怎样做到使两者结合起来？？
// 		怎样做到使两者结合起来？？
// 		怎样做到使两者结合起来？？