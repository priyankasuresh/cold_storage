document.addEventListener('DOMContentLoaded',function(){
	var video = document.getElementById('clip');
/*	var down = document.createElement('A');
	var button =document.createElement('BUTTON');
	down.setAttribute("href",loadPlan());
	down.appendChild(button);
	document.body.appendChild(down);
*/
	loadPlan();
	video.addEventListener('play', function(){
		$("#title").fadeOut(5000);
	},false);
	
	video.addEventListener('ended',function(){
		//video.remove();
	//	loadPlan();
	},false);
});

var floor;

function loadPlan(){
	var container = document.getElementById("container");
	var intro= document.getElementById("intro");
	
	floor = document.createElement('div');
	floor.id="floor";

	var plan = document.createElement('div');
	plan.id = "plan";

	var scroll_down  = document.createElement("A");
	scroll_down.setAttribute("href", "#intro");
	scroll_down.className="down";

	
	var scroll_up = document.createElement("A");
	scroll_up.className="up";

	floor.appendChild(scroll_down);
	floor.appendChild(scroll_up);

	var floorImg = new Image();
	floorImg.id = 'plan_img';
	floorImg.src = 'FloorPlan.png';
	plan.appendChild(floorImg);
	floor.appendChild(plan);

	container.appendChild(floor);

	box(5,6);
	box(47.75,50);
	box(80.2,56.5);
	box(25, 30);
	box(91.75,5.5);
	box(8.75,58);
	box(67,14);
	
	var tracker = document.createElement('div');
	tracker.id = "tracker"

	//for(var i=1; i<28;i++){
	//	var img = new Image();
	//	img.src="clips/bw"+i+".jpg";
	//	img.className="clips";
	//	tracker.appendChild(img);
	//}

	floor.appendChild(tracker);
/*
	var svg = Snap(floorImg.width,floorImg.height);
	svg.id="svg";

	floorImg.addEventListener('click',function(){
	  console.log("it got here");
	  var ln = svg.paper.rect(100,100,50,50);
	  ln.attr({fill:"#ff0000"});
	});
	*/
	$(document).on('mousemove', function(e){
	    $('#scan').css({
	       left:  e.pageX-5+"px",
	       top:   0
	    });
	});
	var scan = document.createElement('div');
	scan.id="scan";
//	scan.setAttribute('style','height:'+plan_img.height+'px');
//	console.log(scan.height);
	floor.appendChild(scan);
	container.appendChild(floor);

	$("#scan").hover(function(){
		
	});

}

function box(x,y){
	var box = document.createElement('div');
	box.className ="boxes";
	box.id="box";
	box.style.left =x+"%";
	box.style.top=y+'%';
	floor.appendChild(box);
}