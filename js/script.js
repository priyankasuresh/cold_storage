$(document).ready(function() {
	var a = Math.floor(Math.random()*(71)+1);
	var b = Math.floor(Math.random()*(71)+1);
	var c = Math.floor(Math.random()*(71)+1);
	$("#card1").attr("src", "imgs/img"+a+".png");
	$("#card2").attr("src", "imgs/img"+b+".png");
	$("#card3").attr("src", "imgs/img"+c+".png");
});

$(".card-flip img").on("click",function() {
	var a = Math.floor(Math.random()*(71)+1);
	$(this).attr("src", "imgs/img"+a+".png");
});