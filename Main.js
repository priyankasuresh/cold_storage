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

	/*var floorImg = new Image();
	floorImg.id = 'plan_img';
	floorImg.src = 'FloorPlan.png';
	plan.appendChild(floorImg);
	floor.appendChild(plan);

	container.appendChild(floor);*/

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
 //good stuff begins here 

  //$.getJSON('data.json', function(data) {
    //    var output="<ul>";
      //  for (var i in data.vault) {
        //    output+="<li>" + data.vault[i].chapterone + "</li>";
        //}

  //       output+="</ul>";
  //       document.getElementById("chapter_one").innerHTML=output;
  // });

  //   $.getJSON('data.json', function(data) {
  //       var output="<ul>";
  //       for (var i in data.vault) {
  //           output+="<li>" + data.vault[i].chaptertwo + "</li>";
  //       }

  //       output+="</ul>";
  //       document.getElementById("chapter_two").innerHTML=output;
  // });
  //     $.getJSON('data.json', function(data) {
  //       var output="<ul>";
  //       for (var i in data.vault) {
  //           output+="<li>" + data.vault[i].chapterthree + "</li>";
  //       }

  //       output+="</ul>";
  //       document.getElementById("chapter_three").innerHTML=output;
  // });
  //       $.getJSON('data.json', function(data) {
  //       var output="<ul>";
  //       for (var i in data.vault) {
  //           output+="<li>" + data.vault[i].chapterfour + "</li>";
  //       }

  //       output+="</ul>";
  //       document.getElementById("chapter_four").innerHTML=output;
  // });
  //         $.getJSON('data.json', function(data) {
  //       var output="<ul>";
  //       for (var i in data.vault) {
  //           output+="<li>" + data.vault[i].chapterfive + "</li>";
  //       }

  //       output+="</ul>";
  //       document.getElementById("chapter_five").innerHTML=output;
  // });
  //           $.getJSON('data.json', function(data) {
  //       var output="<ul>";
  //       for (var i in data.vault) {
  //           output+="<li>" + data.vault[i].chaptersix + "</li>";
  //       }

  //       output+="</ul>";
  //       document.getElementById("chapter_six").innerHTML=output;
  // });
    $.getJSON('chone.json', function(chone) {
    var clickedID=0;
    var count=chone.firstch.length;
    var firstIndex=0,lastIndex=0;
    var $ul = $("<ul></ul>"); 
//    document.getElementById('player-digital-image-one').innerHTML =  chone.firstch[clickedID].location ;     
    $.each(chone.firstch,function(i,v) {
        $ul.append(
            $("<li></li>").append(                   
            	$("<a></a>") .attr({"class":"tracks","itemid":v.itemid+'_tracks',"href":v.itemid,"data-file":v.trackFile}).html(v.location))
            );
        var index=i;
        if(index==0)
             firstIndex=v.itemid;
        if(index==count-1)
             lastIndex=v.itemid;
    });

    $("#player-handwriting-image").empty().append($ul);
    
     $("#player-handwriting-image a").click(function() {
      var name = $(this).html(),
          filename = $(this).attr("data-file");
        $('#player-digital-image-one').html($(this).html());
         clickedID=$(this).attr('href');
         $('.tracks').removeClass('selected'); $('#'+clickedID+'_tracks').addClass('selected');
        
        return false;
    }); 

$("#next-bt").click(function() {
    $('.tracks').removeClass('selected');
     clickedID++;

    if(clickedID>lastIndex)
        clickedID=firstIndex;
        $('#'+(clickedID)+'_tracks').addClass('selected');
document.getElementById('player-digital-image-one').innerHTML =  chone.firstch[clickedID-1].location ;

    
    });

$("#prev-bt").click(function() {
      $('.tracks').removeClass('selected');
  clickedID--;
     if(clickedID<firstIndex)
        clickedID=lastIndex;
document.getElementById('player-digital-image-one').innerHTML =  chone.firstch[clickedID-1].location ;
      $('#'+(clickedID)+'_tracks').addClass('selected');
    
    });


});
	$.getJSON('chone.json', function(chone) {
    var clickedID=0;
    var count=chone.firstch.length;
    var firstIndex=0,lastIndex=0;
    var $ul = $("<ul></ul>"); 
  //  document.getElementById('player-digital-name-one').innerHTML =  chone.firstch[clickedID].itemtitle ;      
    $.each(chone.firstch,function(i,v) {
        $ul.append(
            $("<li></li>").append(                   
            	$("<a></a>") .attr({"class":"tracks","itemid":v.itemid+'_tracks',"href":v.itemid,"data-file":v.trackFile}).html(v.itemtitle))
            );
        var index=i;
        if(index==0)
             firstIndex=v.itemid;
        if(index==count-1)
             lastIndex=v.itemid;
    });

    $("#player-handwriting-name").empty().append($ul);
    
     $("#player-handwriting-name a").click(function() {
      var name = $(this).html(),
          filename = $(this).attr("data-file");
        $('#player-digital-name-one').html($(this).html());
         clickedID=$(this).attr('href');
         $('.tracks').removeClass('selected'); $('#'+clickedID+'_tracks').addClass('selected');
        
        return false;
         
    }); 

$("#next-bt").click(function() {
    $('.tracks').removeClass('selected');
     clickedID++;

    if(clickedID>lastIndex)
        clickedID=firstIndex;
        $('#'+(clickedID)+'_tracks').addClass('selected');
document.getElementById('player-digital-name-one').innerHTML =  chone.firstch[clickedID-1].itemtitle ;

    
    });

$("#prev-bt").click(function() {
      $('.tracks').removeClass('selected');
  clickedID--;
     if(clickedID<firstIndex)
        clickedID=lastIndex;
document.getElementById('player-digital-name-one').innerHTML =  chone.firstch[clickedID-1].itemtitle ;
      $('#'+(clickedID)+'_tracks').addClass('selected');
    
    });


});
      	
  	$.getJSON('chone.json', function(chone) {
    var clickedID=0;
    var count=chone.firstch.length;
    var firstIndex=0,lastIndex=0;
    var $ul = $("<ul></ul>");  
    //document.getElementById('player-digital-title-one').innerHTML =  chone.firstch[clickedID].description ;
    //clickedID++;     
    $.each(chone.firstch,function(i,v) {
        $ul.append(
            $("<li></li>").append(                   
            	$("<a></a>") .attr({"class":"tracks","itemid":v.itemid+'_tracks',"href":v.itemid,"data-file":v.trackFile}).html(v.description))
            );
        var index=i;
        if(index==0)
             firstIndex=v.itemid;
        if(index==count-1)
             lastIndex=v.itemid;
    });

    $("#player-handwriting-title").empty().append($ul);
    
     $("#player-handwriting-title a").click(function() {
      var name = $(this).html(),
          filename = $(this).attr("data-file");
        $('#player-digital-title-one').html($(this).html());
         clickedID=$(this).attr('href');
         $('.tracks').removeClass('selected'); $('#'+clickedID+'_tracks').addClass('selected');
        
        return false;
         
    }); 

$("#next-bt").click(function() {
    $('.tracks').removeClass('selected');
     clickedID++;

    if(clickedID>lastIndex)
        clickedID=firstIndex;
        $('#'+(clickedID)+'_tracks').addClass('selected');
document.getElementById('player-digital-title-one').innerHTML =  chone.firstch[clickedID-1].description ;

    
    });

$("#prev-bt").click(function() {
      $('.tracks').removeClass('selected');
  clickedID--;
     if(clickedID<firstIndex)
        clickedID=lastIndex;
document.getElementById('player-digital-title-one').innerHTML =  chone.firstch[clickedID-1].description ;
      $('#'+(clickedID)+'_tracks').addClass('selected');
    
    });


});
//TWO

    $.getJSON('chtwo.json', function(chtwo) {
    var clickedID=0;
    var count=chtwo.secondch.length;
    var firstIndex=0,lastIndex=0;
    var $ul = $("<ul></ul>");
  //document.getElementById('player-digital-image-two').innerHTML =  chtwo.secondch[clickedID].location ;       
    $.each(chtwo.secondch,function(i,v) {
        $ul.append(
            $("<li></li>").append(                   
            	$("<a></a>") .attr({"class":"tracks","itemid":v.itemid+'_tracks',"href":v.itemid,"data-file":v.trackFile}).html(v.location))
            );
        var index=i;
        if(index==0)
             firstIndex=v.itemid;
        if(index==count-1)
             lastIndex=v.itemid;
    });

    $("#player-handwriting-image").empty().append($ul);
    
     $("#player-handwriting-image a").click(function() {
      var name = $(this).html(),
          filename = $(this).attr("data-file");
        $('#player-digital-image-two').html($(this).html());
         clickedID=$(this).attr('href');
         $('.tracks').removeClass('selected'); $('#'+clickedID+'_tracks').addClass('selected');
        
        return false;
         
    }); 

$("#next-bt").click(function() {
    $('.tracks').removeClass('selected');
     clickedID++;

    if(clickedID>lastIndex)
        clickedID=firstIndex;
        $('#'+(clickedID)+'_tracks').addClass('selected');
document.getElementById('player-digital-image-two').innerHTML =  chtwo.secondch[clickedID-1].location ;

    
    });

$("#prev-bt").click(function() {
      $('.tracks').removeClass('selected');
  clickedID--;
     if(clickedID<firstIndex)
        clickedID=lastIndex;
document.getElementById('player-digital-image-two').innerHTML =  chtwo.secondch[clickedID-1].location ;
      $('#'+(clickedID)+'_tracks').addClass('selected');
    
    });


});
	$.getJSON('chtwo.json', function(chtwo) {
    var clickedID=0;
    var count=chtwo.secondch.length;
    var firstIndex=0,lastIndex=0;
    var $ul = $("<ul></ul>");
  //  document.getElementById('player-digital-name-two').innerHTML =  chtwo.secondch[clickID].itemtitle ;       
    $.each(chtwo.secondch,function(i,v) {
        $ul.append(
            $("<li></li>").append(                   
            	$("<a></a>") .attr({"class":"tracks","itemid":v.itemid+'_tracks',"href":v.itemid,"data-file":v.trackFile}).html(v.itemtitle))
            );
        var index=i;
        if(index==0)
             firstIndex=v.itemid;
        if(index==count-1)
             lastIndex=v.itemid;
    });

    $("#player-handwriting-name").empty().append($ul);
    
     $("#player-handwriting-name a").click(function() {
      var name = $(this).html(),
          filename = $(this).attr("data-file");
        $('#player-digital-name-two').html($(this).html());
         clickedID=$(this).attr('href');
         $('.tracks').removeClass('selected'); $('#'+clickedID+'_tracks').addClass('selected');
        
        return false;
         
    }); 

$("#next-bt").click(function() {
    $('.tracks').removeClass('selected');
     clickedID++;

    if(clickedID>lastIndex)
        clickedID=firstIndex;
        $('#'+(clickedID)+'_tracks').addClass('selected');
document.getElementById('player-digital-name-two').innerHTML =  chtwo.secondch[clickedID-1].itemtitle ;

    
    });

$("#prev-bt").click(function() {
      $('.tracks').removeClass('selected');
  clickedID--;
     if(clickedID<firstIndex)
        clickedID=lastIndex;
document.getElementById('player-digital-name-two').innerHTML =  chtwo.secondch[clickedID-1].itemtitle ;
      $('#'+(clickedID)+'_tracks').addClass('selected');
    
    });


});
      	
  	$.getJSON('chtwo.json', function(chtwo) {
    var clickedID=0;
    var count=chtwo.secondch.length;
    var firstIndex=0,lastIndex=0;
    var $ul = $("<ul></ul>"); 
    document.getElementById('player-digital-title-two').innerHTML =  chtwo.secondch[clickID].description ;      
    $.each(chtwo.secondch,function(i,v) {
        $ul.append(
            $("<li></li>").append(                   
            	$("<a></a>") .attr({"class":"tracks","itemid":v.itemid+'_tracks',"href":v.itemid,"data-file":v.trackFile}).html(v.description))
            );
        var index=i;
        if(index==0)
             firstIndex=v.itemid;
        if(index==count-1)
             lastIndex=v.itemid;
    });

    $("#player-handwriting-title").empty().append($ul);
    
     $("#player-handwriting-title a").click(function() {
      var name = $(this).html(),
          filename = $(this).attr("data-file");
        $('#player-digital-title-two').html($(this).html());
         clickedID=$(this).attr('href');
         $('.tracks').removeClass('selected'); $('#'+clickedID+'_tracks').addClass('selected');
        
        return false;
         
    }); 

$("#next-bt").click(function() {
    $('.tracks').removeClass('selected');
     clickedID++;

    if(clickedID>lastIndex)
        clickedID=firstIndex;
        $('#'+(clickedID)+'_tracks').addClass('selected');
document.getElementById('player-digital-title-two').innerHTML =  chtwo.secondch[clickedID-1].description ;

    
    });

$("#prev-bt").click(function() {
      $('.tracks').removeClass('selected');
  clickedID--;
     if(clickedID<firstIndex)
        clickedID=lastIndex;
document.getElementById('player-digital-title-two').innerHTML =  chtwo.secondch[clickedID-1].description ;
      $('#'+(clickedID)+'_tracks').addClass('selected');
    
    });


});

//THREE

    $.getJSON('chthree.json', function(chthree) {
    var clickedID=0;
    var count=chthree.thirdch.length;
    var firstIndex=0,lastIndex=0;
    var $ul = $("<ul></ul>");  
//    document.getElementById('player-digital-image-three').innerHTML =  chthree.thirdch[clickID].location ;     
    $.each(chthree.thirdch,function(i,v) {
        $ul.append(
            $("<li></li>").append(                   
            	$("<a></a>") .attr({"class":"tracks","itemid":v.itemid+'_tracks',"href":v.itemid,"data-file":v.trackFile}).html(v.location))
            );
        var index=i;
        if(index==0)
             firstIndex=v.itemid;
        if(index==count-1)
             lastIndex=v.itemid;
    });

    $("#player-handwriting-image").empty().append($ul);
    
     $("#player-handwriting-image a").click(function() {
      var name = $(this).html(),
          filename = $(this).attr("data-file");
        $('#player-digital-image-three').html($(this).html());
         clickedID=$(this).attr('href');
         $('.tracks').removeClass('selected'); $('#'+clickedID+'_tracks').addClass('selected');
        
        return false;
         
    }); 

$("#next-bt").click(function() {
    $('.tracks').removeClass('selected');
     clickedID++;

    if(clickedID>lastIndex)
        clickedID=firstIndex;
        $('#'+(clickedID)+'_tracks').addClass('selected');
document.getElementById('player-digital-image-three').innerHTML =  chthree.thirdch[clickedID-1].location ;

    
    });

$("#prev-bt").click(function() {
      $('.tracks').removeClass('selected');
  clickedID--;
     if(clickedID<firstIndex)
        clickedID=lastIndex;
document.getElementById('player-digital-image-three').innerHTML =  chthree.thirdch[clickedID-1].location ;
      $('#'+(clickedID)+'_tracks').addClass('selected');
    
    });


});
	$.getJSON('chthree.json', function(chthree) {
    var clickedID=0;
    var count=chthree.thirdch.length;
    var firstIndex=0,lastIndex=0;
    var $ul = $("<ul></ul>");  
//    document.getElementById('player-digital-name-three').innerHTML =  chthree.thirdch[clickID].itemtitle ;      
    $.each(chthree.thirdch,function(i,v) {
        $ul.append(
            $("<li></li>").append(                   
            	$("<a></a>") .attr({"class":"tracks","itemid":v.itemid+'_tracks',"href":v.itemid,"data-file":v.trackFile}).html(v.itemtitle))
            );
        var index=i;
        if(index==0)
             firstIndex=v.itemid;
        if(index==count-1)
             lastIndex=v.itemid;
    });

    $("#player-handwriting-name").empty().append($ul);
    
     $("#player-handwriting-name a").click(function() {
      var name = $(this).html(),
          filename = $(this).attr("data-file");
        $('#player-digital-name-three').html($(this).html());
         clickedID=$(this).attr('href');
         $('.tracks').removeClass('selected'); $('#'+clickedID+'_tracks').addClass('selected');
        
        return false;
         
    }); 

$("#next-bt").click(function() {
    $('.tracks').removeClass('selected');
     clickedID++;

    if(clickedID>lastIndex)
        clickedID=firstIndex;
        $('#'+(clickedID)+'_tracks').addClass('selected');
document.getElementById('player-digital-name-three').innerHTML =  chthree.thirdch[clickedID-1].itemtitle ;    
    });

$("#prev-bt").click(function() {
      $('.tracks').removeClass('selected');
  clickedID--;
     if(clickedID<firstIndex)
        clickedID=lastIndex;
document.getElementById('player-digital-name-three').innerHTML =  chthree.thirdch[clickedID-1].itemtitle ;
      $('#'+(clickedID)+'_tracks').addClass('selected');
    
    });


});
      	
  	$.getJSON('chthree.json', function(chthree) {
    var clickedID=0;
    var count=chthree.thirdch.length;
    var firstIndex=0,lastIndex=0;
    var $ul = $("<ul></ul>");   
//    document.getElementById('player-digital-title-three').innerHTML =  chthree.thirdch[clickID].description ;     
    $.each(chthree.thirdch,function(i,v) {
        $ul.append(
            $("<li></li>").append(                   
            	$("<a></a>") .attr({"class":"tracks","itemid":v.itemid+'_tracks',"href":v.itemid,"data-file":v.trackFile}).html(v.description))
            );
        var index=i;
        if(index==0)
             firstIndex=v.itemid;
        if(index==count-1)
             lastIndex=v.itemid;
    });

    $("#player-handwriting-title").empty().append($ul);
    
     $("#player-handwriting-title a").click(function() {
      var name = $(this).html(),
          filename = $(this).attr("data-file");
        $('#player-digital-title-three').html($(this).html());
         clickedID=$(this).attr('href');
         $('.tracks').removeClass('selected'); $('#'+clickedID+'_tracks').addClass('selected');
        
        return false;
         
    }); 

$("#next-bt").click(function() {
    $('.tracks').removeClass('selected');
     clickedID++;

    if(clickedID>lastIndex)
        clickedID=firstIndex;
        $('#'+(clickedID)+'_tracks').addClass('selected');
document.getElementById('player-digital-title-three').innerHTML =  chthree.thirdch[clickedID-1].description ;

    
    });

$("#prev-bt").click(function() {
      $('.tracks').removeClass('selected');
  clickedID--;
     if(clickedID<firstIndex)
        clickedID=lastIndex;
document.getElementById('player-digital-title-three').innerHTML =  chthree.thirdch[clickedID-1].description ;
      $('#'+(clickedID)+'_tracks').addClass('selected');
    
    });


});

//FOUR
    $.getJSON('chfour.json', function(chfour) {
    var clickedID=0;
    var count=chfour.fourthch.length;
    var firstIndex=0,lastIndex=0;
    var $ul = $("<ul></ul>"); 
//    document.getElementById('player-digital-image-four').innerHTML =  chfour.fourthch[clickID].location ;      
    $.each(chfour.fourthch,function(i,v) {
        $ul.append(
            $("<li></li>").append(                   
            	$("<a></a>") .attr({"class":"tracks","itemid":v.itemid+'_tracks',"href":v.itemid,"data-file":v.trackFile}).html(v.location))
            );
        var index=i;
        if(index==0)
             firstIndex=v.itemid;
        if(index==count-1)
             lastIndex=v.itemid;
    });

    $("#player-handwriting-image").empty().append($ul);
    
     $("#player-handwriting-image a").click(function() {
      var name = $(this).html(),
          filename = $(this).attr("data-file");
        $('#player-digital-image-four').html($(this).html());
         clickedID=$(this).attr('href');
         $('.tracks').removeClass('selected'); $('#'+clickedID+'_tracks').addClass('selected');
        
        return false;
         
    }); 

$("#next-bt").click(function() {
    $('.tracks').removeClass('selected');
     clickedID++;

    if(clickedID>lastIndex)
        clickedID=firstIndex;
        $('#'+(clickedID)+'_tracks').addClass('selected');
document.getElementById('player-digital-image-four').innerHTML =  chfour.fourthch[clickedID-1].location ;

    
    });

$("#prev-bt").click(function() {
      $('.tracks').removeClass('selected');
  clickedID--;
     if(clickedID<firstIndex)
        clickedID=lastIndex;
document.getElementById('player-digital-image-four').innerHTML =  chfour.fourthch[clickedID-1].location ;
      $('#'+(clickedID)+'_tracks').addClass('selected');
    
    });


});
	$.getJSON('chfour.json', function(chfour) {
    var clickedID=0;
    var count=chfour.fourthch.length;
    var firstIndex=0,lastIndex=0;
    var $ul = $("<ul></ul>");
//    document.getElementById('player-digital-name-four').innerHTML =  chfour.fourthch[clickID].itemtitle ;        
    $.each(chfour.fourthch,function(i,v) {
        $ul.append(
            $("<li></li>").append(                   
            	$("<a></a>") .attr({"class":"tracks","itemid":v.itemid+'_tracks',"href":v.itemid,"data-file":v.trackFile}).html(v.itemtitle))
            );
        var index=i;
        if(index==0)
             firstIndex=v.itemid;
        if(index==count-1)
             lastIndex=v.itemid;
    });

    $("#player-handwriting-name").empty().append($ul);
    
     $("#player-handwriting-name a").click(function() {
      var name = $(this).html(),
          filename = $(this).attr("data-file");
        $('#player-digital-name-four').html($(this).html());
         clickedID=$(this).attr('href');
         $('.tracks').removeClass('selected'); $('#'+clickedID+'_tracks').addClass('selected');
        
        return false;
         
    }); 

$("#next-bt").click(function() {
    $('.tracks').removeClass('selected');
     clickedID++;

    if(clickedID>lastIndex)
        clickedID=firstIndex;
        $('#'+(clickedID)+'_tracks').addClass('selected');
document.getElementById('player-digital-name-four').innerHTML =  chfour.fourthch[clickedID-1].itemtitle ;    
    });

$("#prev-bt").click(function() {
      $('.tracks').removeClass('selected');
  clickedID--;
     if(clickedID<firstIndex)
        clickedID=lastIndex;
document.getElementById('player-digital-name-four').innerHTML =  chfour.fourthch[clickedID-1].itemtitle ;
      $('#'+(clickedID)+'_tracks').addClass('selected');
    
    });


});
      	
  	$.getJSON('chfour.json', function(chfour) {
    var clickedID=0;
    var count=chfour.fourthch.length;
    var firstIndex=0,lastIndex=0;
    var $ul = $("<ul></ul>");  
//    document.getElementById('player-digital-title-four').innerHTML =  chfour.fourthch[clickID].description ;      
    $.each(chfour.fourthch,function(i,v) {
        $ul.append(
            $("<li></li>").append(                   
            	$("<a></a>") .attr({"class":"tracks","itemid":v.itemid+'_tracks',"href":v.itemid,"data-file":v.trackFile}).html(v.description))
            );
        var index=i;
        if(index==0)
             firstIndex=v.itemid;
        if(index==count-1)
             lastIndex=v.itemid;
    });

    $("#player-handwriting-title").empty().append($ul);
    
     $("#player-handwriting-title a").click(function() {
      var name = $(this).html(),
          filename = $(this).attr("data-file");
        $('#player-digital-title-four').html($(this).html());
         clickedID=$(this).attr('href');
         $('.tracks').removeClass('selected'); $('#'+clickedID+'_tracks').addClass('selected');
        
        return false;
         
    }); 

$("#next-bt").click(function() {
    $('.tracks').removeClass('selected');
     clickedID++;

    if(clickedID>lastIndex)
        clickedID=firstIndex;
        $('#'+(clickedID)+'_tracks').addClass('selected');
document.getElementById('player-digital-title-four').innerHTML =  chfour.fourthch[clickedID-1].description ;

    
    });

$("#prev-bt").click(function() {
      $('.tracks').removeClass('selected');
  clickedID--;
     if(clickedID<firstIndex)
        clickedID=lastIndex;
document.getElementById('player-digital-title-four').innerHTML =  chfour.fourthch[clickedID-1].description ;
      $('#'+(clickedID)+'_tracks').addClass('selected');
    
    });
});

//FIVE
    $.getJSON('chfive.json', function(chfive) {
    var clickedID=0;
    var count=chfive.fifthch.length;
    var firstIndex=0,lastIndex=0;
    var $ul = $("<ul></ul>"); 
//    document.getElementById('player-digital-image-five').innerHTML =  chfive.fifthch[clickID].location ;      
    $.each(chfive.fifthch,function(i,v) {
        $ul.append(
            $("<li></li>").append(                   
            	$("<a></a>") .attr({"class":"tracks","itemid":v.itemid+'_tracks',"href":v.itemid,"data-file":v.trackFile}).html(v.location))
            );
        var index=i;
        if(index==0)
             firstIndex=v.itemid;
        if(index==count-1)
             lastIndex=v.itemid;
    });

    $("#player-handwriting-image").empty().append($ul);
    
     $("#player-handwriting-image a").click(function() {
      var name = $(this).html(),
          filename = $(this).attr("data-file");
        $('#player-digital-image-five').html($(this).html());
         clickedID=$(this).attr('href');
         $('.tracks').removeClass('selected'); $('#'+clickedID+'_tracks').addClass('selected');
        
        return false;
         
    }); 

$("#next-bt").click(function() {
    $('.tracks').removeClass('selected');
     clickedID++;

    if(clickedID>lastIndex)
        clickedID=firstIndex;
        $('#'+(clickedID)+'_tracks').addClass('selected');
document.getElementById('player-digital-image-five').innerHTML =  chfive.fifthch[clickedID-1].location ;

    
    });

$("#prev-bt").click(function() {
      $('.tracks').removeClass('selected');
  clickedID--;
     if(clickedID<firstIndex)
        clickedID=lastIndex;
document.getElementById('player-digital-image-five').innerHTML =  chfive.fifthch[clickedID-1].location ;
      $('#'+(clickedID)+'_tracks').addClass('selected');
    
    });


});
	$.getJSON('chfive.json', function(chfive) {
    var clickedID=0;
    var count=chfive.fifthch.length;
    var firstIndex=0,lastIndex=0;
    var $ul = $("<ul></ul>"); 
//    document.getElementById('player-digital-name-five').innerHTML =  chfive.fifthch[clickID].itemtitle ;      
    $.each(chfive.fifthch,function(i,v) {
        $ul.append(
            $("<li></li>").append(                   
            	$("<a></a>") .attr({"class":"tracks","itemid":v.itemid+'_tracks',"href":v.itemid,"data-file":v.trackFile}).html(v.itemtitle))
            );
        var index=i;
        if(index==0)
             firstIndex=v.itemid;
        if(index==count-1)
             lastIndex=v.itemid;
    });

    $("#player-handwriting-name").empty().append($ul);
    
     $("#player-handwriting-name a").click(function() {
      var name = $(this).html(),
          filename = $(this).attr("data-file");
        $('#player-digital-name-five').html($(this).html());
         clickedID=$(this).attr('href');
         $('.tracks').removeClass('selected'); $('#'+clickedID+'_tracks').addClass('selected');
        
        return false;
         
    }); 

$("#next-bt").click(function() {
    $('.tracks').removeClass('selected');
     clickedID++;

    if(clickedID>lastIndex)
        clickedID=firstIndex;
        $('#'+(clickedID)+'_tracks').addClass('selected');
document.getElementById('player-digital-name-five').innerHTML =  chfive.fifthch[clickedID-1].itemtitle ;    
    });

$("#prev-bt").click(function() {
      $('.tracks').removeClass('selected');
  clickedID--;
     if(clickedID<firstIndex)
        clickedID=lastIndex;
document.getElementById('player-digital-name-five').innerHTML =  chfive.fifthch[clickedID-1].itemtitle ;
      $('#'+(clickedID)+'_tracks').addClass('selected');
    
    });


});
      	
  	$.getJSON('chfive.json', function(chfive) {
    var clickedID=0;
    var count=chfive.fifthch.length;
    var firstIndex=0,lastIndex=0;
    var $ul = $("<ul></ul>");  
//    document.getElementById('player-digital-title-five').innerHTML =  chfive.fifthch[clickID].description ;     
    $.each(chfive.fifthch,function(i,v) {
        $ul.append(
            $("<li></li>").append(                   
            	$("<a></a>") .attr({"class":"tracks","itemid":v.itemid+'_tracks',"href":v.itemid,"data-file":v.trackFile}).html(v.description))
            );
        var index=i;
        if(index==0)
             firstIndex=v.itemid;
        if(index==count-1)
             lastIndex=v.itemid;
    });

    $("#player-handwriting-title").empty().append($ul);
    
     $("#player-handwriting-title a").click(function() {
      var name = $(this).html(),
          filename = $(this).attr("data-file");
        $('#player-digital-title-five').html($(this).html());
         clickedID=$(this).attr('href');
         $('.tracks').removeClass('selected'); $('#'+clickedID+'_tracks').addClass('selected');
        
        return false;
         
    }); 

$("#next-bt").click(function() {
    $('.tracks').removeClass('selected');
     clickedID++;

    if(clickedID>lastIndex)
        clickedID=firstIndex;
        $('#'+(clickedID)+'_tracks').addClass('selected');
document.getElementById('player-digital-title-five').innerHTML =  chfive.fifthch[clickedID-1].description ;

    
    });

$("#prev-bt").click(function() {
      $('.tracks').removeClass('selected');
  clickedID--;
     if(clickedID<firstIndex)
        clickedID=lastIndex;
document.getElementById('player-digital-title-five').innerHTML =  chfive.fifthch[clickedID-1].description ;
      $('#'+(clickedID)+'_tracks').addClass('selected');
    
    });
});
//SIX
    $.getJSON('chsix.json', function(chsix) {
    var clickedID=0;
    var count=chsix.sixthch.length;
    var firstIndex=0,lastIndex=0;
    var $ul = $("<ul></ul>");  
//    document.getElementById('player-digital-image-six').innerHTML =  chsix.sixthch[clickID].location ;     
    $.each(chsix.sixthch,function(i,v) {
        $ul.append(
            $("<li></li>").append(                   
            	$("<a></a>") .attr({"class":"tracks","itemid":v.itemid+'_tracks',"href":v.itemid,"data-file":v.trackFile}).html(v.location))
            );
        var index=i;
        if(index==0)
             firstIndex=v.itemid;
        if(index==count-1)
             lastIndex=v.itemid;
    });

    $("#player-handwriting-image").empty().append($ul);
    
     $("#player-handwriting-image a").click(function() {
      var name = $(this).html(),
          filename = $(this).attr("data-file");
        $('#player-digital-image-six').html($(this).html());
         clickedID=$(this).attr('href');
         $('.tracks').removeClass('selected'); $('#'+clickedID+'_tracks').addClass('selected');
        
        return false;
         
    }); 

$("#next-bt").click(function() {
    $('.tracks').removeClass('selected');
     clickedID++;

    if(clickedID>lastIndex)
        clickedID=firstIndex;
        $('#'+(clickedID)+'_tracks').addClass('selected');
document.getElementById('player-digital-image-six').innerHTML =  chsix.sixthch[clickedID-1].location ;

    
    });

$("#prev-bt").click(function() {
      $('.tracks').removeClass('selected');
  clickedID--;
     if(clickedID<firstIndex)
        clickedID=lastIndex;
document.getElementById('player-digital-image-six').innerHTML =  chsix.sixthch[clickedID-1].location ;
      $('#'+(clickedID)+'_tracks').addClass('selected');
    
    });


});
	$.getJSON('chsix.json', function(chsix) {
    var clickedID=0;
    var count=chsix.sixthch.length;
    var firstIndex=0,lastIndex=0;
    var $ul = $("<ul></ul>");  
//    document.getElementById('player-digital-name-six').innerHTML =  chsix.sixthch[clickID].itemtitle ;     
    $.each(chsix.sixthch,function(i,v) {
        $ul.append(
            $("<li></li>").append(                   
            	$("<a></a>") .attr({"class":"tracks","itemid":v.itemid+'_tracks',"href":v.itemid,"data-file":v.trackFile}).html(v.itemtitle))
            );
        var index=i;
        if(index==0)
             firstIndex=v.itemid;
        if(index==count-1)
             lastIndex=v.itemid;
    });

    $("#player-handwriting-name").empty().append($ul);
    
     $("#player-handwriting-name a").click(function() {
      var name = $(this).html(),
          filename = $(this).attr("data-file");
        $('#player-digital-name-six').html($(this).html());
         clickedID=$(this).attr('href');
         $('.tracks').removeClass('selected'); $('#'+clickedID+'_tracks').addClass('selected');
        
        return false;
         
    }); 

$("#next-bt").click(function() {
    $('.tracks').removeClass('selected');
     clickedID++;

    if(clickedID>lastIndex)
        clickedID=firstIndex;
        $('#'+(clickedID)+'_tracks').addClass('selected');
document.getElementById('player-digital-name-six').innerHTML =  chsix.sixthch[clickedID-1].itemtitle ;    
    });

$("#prev-bt").click(function() {
      $('.tracks').removeClass('selected');
  clickedID--;
     if(clickedID<firstIndex)
        clickedID=lastIndex;
document.getElementById('player-digital-name-six').innerHTML =  chsix.sixthch[clickedID-1].itemtitle ;
      $('#'+(clickedID)+'_tracks').addClass('selected');
    
    });


});
      	
  	$.getJSON('chsix.json', function(chsix) {
    var clickedID=0;
    var count=chsix.sixthch.length;
    var firstIndex=0,lastIndex=0;
    var $ul = $("<ul></ul>");   
//    document.getElementById('player-digital-title-six').innerHTML =  chsix.sixthch[clickID].description ;    
    $.each(chsix.sixthch,function(i,v) {
        $ul.append(
            $("<li></li>").append(                   
            	$("<a></a>") .attr({"class":"tracks","itemid":v.itemid+'_tracks',"href":v.itemid,"data-file":v.trackFile}).html(v.description))
            );
        var index=i;
        if(index==0)
             firstIndex=v.itemid;
        if(index==count-1)
             lastIndex=v.itemid;
    });

    $("#player-handwriting-title").empty().append($ul);
    
     $("#player-handwriting-title a").click(function() {
      var name = $(this).html(),
          filename = $(this).attr("data-file");
        $('#player-digital-title-six').html($(this).html());
         clickedID=$(this).attr('href');
         $('.tracks').removeClass('selected'); $('#'+clickedID+'_tracks').addClass('selected');
        
        return false;
         
    }); 

$("#next-bt").click(function() {
    $('.tracks').removeClass('selected');
     clickedID++;

    if(clickedID>lastIndex)
        clickedID=firstIndex;
        $('#'+(clickedID)+'_tracks').addClass('selected');
document.getElementById('player-digital-title-six').innerHTML =  chsix.sixthch[clickedID-1].description ;

    
    });

$("#prev-bt").click(function() {
      $('.tracks').removeClass('selected');
  clickedID--;
     if(clickedID<firstIndex)
        clickedID=lastIndex;
document.getElementById('player-digital-title-six').innerHTML =  chsix.sixthch[clickedID-1].description ;
      $('#'+(clickedID)+'_tracks').addClass('selected');
    
    });
});

//SEVEN
$.getJSON('chseven.json', function(chseven) {
    var clickedID=0;
    var count=chseven.seventhch.length;
    var firstIndex=0,lastIndex=0;
    var $ul = $("<ul></ul>");    
//    document.getElementById('player-digital-image-seven').innerHTML =  chseven.seventhch[clickID].location ;   
    $.each(chseven.seventhch,function(i,v) {
        $ul.append(
            $("<li></li>").append(                   
            	$("<a></a>") .attr({"class":"tracks","itemid":v.itemid+'_tracks',"href":v.itemid,"data-file":v.trackFile}).html(v.location))
            );
        var index=i;
        if(index==0)
             firstIndex=v.itemid;
        if(index==count-1)
             lastIndex=v.itemid;
    });

    $("#player-handwriting-image").empty().append($ul);
    
     $("#player-handwriting-image a").click(function() {
      var name = $(this).html(),
          filename = $(this).attr("data-file");
        $('#player-digital-image-seven').html($(this).html());
         clickedID=$(this).attr('href');
         $('.tracks').removeClass('selected'); $('#'+clickedID+'_tracks').addClass('selected');
        
        return false;
         
    }); 

$("#next-bt").click(function() {
    $('.tracks').removeClass('selected');
     clickedID++;

    if(clickedID>lastIndex)
        clickedID=firstIndex;
        $('#'+(clickedID)+'_tracks').addClass('selected');
document.getElementById('player-digital-image-seven').innerHTML =  chseven.seventhch[clickedID-1].location ;

    
    });

$("#prev-bt").click(function() {
      $('.tracks').removeClass('selected');
  clickedID--;
     if(clickedID<firstIndex)
        clickedID=lastIndex;
document.getElementById('player-digital-image-seven').innerHTML =  chseven.seventhch[clickedID-1].location ;
      $('#'+(clickedID)+'_tracks').addClass('selected');
    
    });


});
	$.getJSON('chseven.json', function(chseven) {
    var clickedID=0;
    var count=chseven.seventhch.length;
    var firstIndex=0,lastIndex=0;
    var $ul = $("<ul></ul>");   
//    document.getElementById('player-digital-name-seven').innerHTML =  chseven.seventhch[clickID].itemtitle ;    
    $.each(chseven.seventhch,function(i,v) {
        $ul.append(
            $("<li></li>").append(                   
            	$("<a></a>") .attr({"class":"tracks","itemid":v.itemid+'_tracks',"href":v.itemid,"data-file":v.trackFile}).html(v.itemtitle))
            );
        var index=i;
        if(index==0)
             firstIndex=v.itemid;
        if(index==count-1)
             lastIndex=v.itemid;
    });

    $("#player-handwriting-name").empty().append($ul);
    
     $("#player-handwriting-name a").click(function() {
      var name = $(this).html(),
          filename = $(this).attr("data-file");
        $('#player-digital-name-seven').html($(this).html());
         clickedID=$(this).attr('href');
         $('.tracks').removeClass('selected'); $('#'+clickedID+'_tracks').addClass('selected');
        
        return false;
         
    }); 

$("#next-bt").click(function() {
    $('.tracks').removeClass('selected');
     clickedID++;

    if(clickedID>lastIndex)
        clickedID=firstIndex;
        $('#'+(clickedID)+'_tracks').addClass('selected');
document.getElementById('player-digital-name-seven').innerHTML =  chseven.seventhch[clickedID-1].itemtitle ;    
    });

$("#prev-bt").click(function() {
      $('.tracks').removeClass('selected');
  clickedID--;
     if(clickedID<firstIndex)
        clickedID=lastIndex;
document.getElementById('player-digital-name-seven').innerHTML =  chseven.seventhch[clickedID-1].itemtitle ;
      $('#'+(clickedID)+'_tracks').addClass('selected');
    
    });


});
      	
  	$.getJSON('chseven.json', function(chseven) {
    var clickedID=0;
    var count=chseven.seventhch.length;
    var firstIndex=0,lastIndex=0;
    var $ul = $("<ul></ul>"); 
//    document.getElementById('player-digital-title-seven').innerHTML =  chseven.seventhch[clickID].description ;      
    $.each(chseven.seventhch,function(i,v) {
        $ul.append(
            $("<li></li>").append(                   
            	$("<a></a>") .attr({"class":"tracks","itemid":v.itemid+'_tracks',"href":v.itemid,"data-file":v.trackFile}).html(v.description))
            );
        var index=i;
        if(index==0)
             firstIndex=v.itemid;
        if(index==count-1)
             lastIndex=v.itemid;
    });

    $("#player-handwriting-title").empty().append($ul);
    
     $("#player-handwriting-title a").click(function() {
      var name = $(this).html(),
          filename = $(this).attr("data-file");
        $('#player-digital-title-seven').html($(this).html());
         clickedID=$(this).attr('href');
         $('.tracks').removeClass('selected'); $('#'+clickedID+'_tracks').addClass('selected');
        
        return false;
         
    }); 

$("#next-bt").click(function() {
    $('.tracks').removeClass('selected');
     clickedID++;

    if(clickedID>lastIndex)
        clickedID=firstIndex;
        $('#'+(clickedID)+'_tracks').addClass('selected');
document.getElementById('player-digital-title-seven').innerHTML =  chseven.seventhch[clickedID-1].description ;

    
    });

$("#prev-bt").click(function() {
      $('.tracks').removeClass('selected');
  clickedID--;
     if(clickedID<firstIndex)
        clickedID=lastIndex;
document.getElementById('player-digital-title-seven').innerHTML =  chseven.seventhch[clickedID-1].description ;
      $('#'+(clickedID)+'_tracks').addClass('selected');
    
    });
});

//buttons to call vault items
	    $(document).ready(function(){
        $('input[type="button"]').click(function(){
            if($(this).attr("value")=="One"){
            	$(".chapter").hide();
                $(".one").show();
            }
        });
    });
	    	    $(document).ready(function(){
        $('input[type="button"]').click(function(){
            if($(this).attr("value")=="Two"){
            	$(".chapter").hide();
                $(".two").show();
            }
        });
    });
	    	    	    	    $(document).ready(function(){
        $('input[type="button"]').click(function(){
            if($(this).attr("value")=="Three"){
            	$(".chapter").hide();
                $(".three").show();
            }
        });
    });
	    	    	    	    	    	    $(document).ready(function(){
        $('input[type="button"]').click(function(){
            if($(this).attr("value")=="Four"){
                $(".chapter").hide();
                $(".four").show();
            }
        });
    });
	    	    	    	    	    	    	    	    $(document).ready(function(){
        $('input[type="button"]').click(function(){
            if($(this).attr("value")=="Five"){
                $(".chapter").hide();
                $(".five").show();
            }
        });
    });
	    	    	    	    	    	    	    	    	    	    $(document).ready(function(){
        $('input[type="button"]').click(function(){
            if($(this).attr("value")=="Six"){
                $(".chapter").hide();
                $(".six").show();
            }
        });
    });
	   $(document).ready(function(){
        $('input[type="button"]').click(function(){
            if($(this).attr("value")=="Seven"){
                $(".chapter").hide();
                $(".seven").show();
            }
        });
    });
