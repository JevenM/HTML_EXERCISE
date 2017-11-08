var img =  new Array(12);
var nums = 0;
if (document.images) 
{
	for (var i = 1; i <= 12; i++) {
		img[i] = new Image();
		if(i<10)
		{
			img[i].src = "images/00" + i + ".jpg";
		}
		else
		{
			img[i].src = "images/0" + i + ".jpg";
		}
	}
}
function fort() 
{
	window.status = "Hello! My name is Jeven!...";
	// body...
	nums++;
	document.images[12].src = img[nums].src;
	if(nums == 12)
		nums = 0;
}
function slide()
{
	setInterval("fort()",1000);
}












