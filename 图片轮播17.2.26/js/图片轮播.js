var num = 0;
		$(".left").click(function(){
			num++;
			if(num>3)
			{
				num=3;
			}
			$("ul").animate({left:-966*num+"px"},500);
		});
		$(".right").click(function(){
			num--;
			if(num<0)
			{
				num=0;
			}
			$("ul").animate({left:-966*num+"px"},500);
		});
		// 自动轮播
		// setInterval(function(){
		// 	num++;
		// 	if(num>3)
		// 	{
		// 		num=3;
		// 	}
		// 	$("ul").animate({left:-966*num+"px"},2000);
		// },500);