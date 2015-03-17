
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
//krys menu
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll < 50){
        console.log("expand menu");
        //$(".menu_holder").toggleClass('expandmenu collapsemenu');
        $(".menu_holder").removeClass('collapsemenu').addClass('expandmenu');
    }else{
        console.log("collapse menu");
        //$(".menu_holder").toggleClass('collapsemenu expandmenu');
        $(".menu_holder").removeClass('expandmenu').addClass('collapsemenu');
    }
   
});
  box(5,6);
  box(47.75,50);
  box(80.2,56.5);
  box(25, 30);
  box(91.75,5.5);
  box(8.75,58);
  box(67,14);
  
  var tracker = document.createElement('div');
  tracker.id = "tracker"


  floor.appendChild(tracker);

  $(document).on('mousemove', function(e){
      $('#scan').css({
         left:  e.pageX-5+"px",
         top:   0
      });
  });
  var scan = document.createElement('div');
  scan.id="scan";
//  scan.setAttribute('style','height:'+plan_img.height+'px');
//  console.log(scan.height);
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
  
    var count=0;
    var vaultdata = {};
 
    $.getJSON('data/coldstorage.json', function(chone) {
    count=chone.length;
    var firstIndex=0,lastIndex=0;
    $.each(chone, function(i,val) {
      if(!vaultdata[val.chapter]) vaultdata[val.chapter] = [];
      vaultdata[val.chapter].push(val);
    
    });
  });

