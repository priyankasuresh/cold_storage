  //Loads Youtube IFrame Player API:
  var tag = document.createElement('script');
  
  // intro video vars
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var intro;

  // main video vars
  var secondtag = document.createElement('script');
  secondtag.src = "https://www.youtube.com/iframe_api";
  var secondScriptTag = document.getElementsByTagName('script')[0];
  secondScriptTag.parentNode.insertBefore(secondtag, secondScriptTag);
      var module;    
  var currentModule = 0;
  var main_player;

  // floorplan nav
  var jumplinks = [];
  
  // create YT video objects
  function onYouTubeIframeAPIReady() {
      intro = new YT.Player('intro', {
          height: 563,
          width: 1000,
          videoId: 'IYFuz8d8WzQ',
          playerVars: {
                   'autoplay':1,
                   'controls':0,
                   'showinfo':0,
                   'modestbranding':1,
                   'rel':0},
          events: {
              'onReady': onPlayerReady,
              'onStateChange': onIntroPlayerStateChange
              }
          });

      main_player = new YT.Player('main_player', {
          height: '563',
          width: '1000',
          videoId: 'quIRtrq9K-E',
          playerVars: {
                       'autoplay':0,
                       'controls':0,
                       'showinfo':0,
                       'modestbranding':1,
                       'rel':0},
          events: {
                  // 'onReady': onPlayerReady,
                  'onStateChange': onMainPlayerStateChange
                }
      });
     
      // initiate floorplan navigation
      // Add event listeners to each fp section

      for(var i = 1; i <= 7; i++){
        var jumplink = $('#fp'+(i));
        var t =jumplink.data("start");
        jumplink.click(floorNav(i, t));
      }

      // "enter" button event listener pauses intro, which in turn plays main
      $("#enter").click(function(){ intro.pauseVideo();});

      // "vault_null" click event pauses intro, plays main vid
      $("#vault_null").click(function(){ intro.pauseVideo(); });

      // waypoints: pause videos when no longer in focus
      var introWaypt = new Waypoint({
        element: $("#intro"),
        handler: function(direction){

        }
      });

      var mainWaypt = new Waypoint({
        element: $("#main_player"),
        handler: function(direction){
          intro.pauseVideo(); // triggers main player & vault also
          console.log("main waypt "+direction);
          if(direction=="up"){
            main_player.playVideo();
          }
        }
      });

      var floorplanWaypt = new Waypoint({
        element: $("#floorplan"),
        handler: function(){
          console.log("floorplan waypt");
          main_player.pauseVideo();
        }
      })

  }                                 

  //Initiates playback
function onPlayerReady(event) {
  event.target.playVideo();
}
              
 //Trigger movement to next ID on playback stop - making this up
  function onIntroPlayerStateChange(event){
        if (event.data === 2){
        
            $("html, body").animate({scrollTop : $('#main_player').offset().top }, 600);
            main_player.playVideo();
            } 
         }
                      
  //Trigger pause in video if user moves to the next ID


function onMainPlayerStateChange(event) {
    var t;
    if (event.data == YT.PlayerState.PLAYING) {
      setInterval(function(){
        t = main_player.getCurrentTime();

        if(t < 224) { module = 1;   modulename = "one"; }
        else if(t< 353) { module = 2; modulename = "two"; }
        else if(t< 613) { module = 3; modulename = "three"; }
        else if(t< 726) { module = 4; modulename = "four"; }
        else if(t< 1193) { module = 5; modulename = "five"; }
        else if(t< 1373) { module = 6; modulename = "six"; }
        else {
          module = 7;
          modulename = "seven";
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

          // run after JSON has loaded
          if(module != currentModule) {
            $("#fp"+currentModule).attr("src", "./img/FloorplanNav/"+currentModule+"_off.jpg");
            currentModule = module;
            console.log("MODULE CHANGE: "+ currentModule);
            $("#fp"+currentModule).attr("src", "./img/FloorplanNav/"+currentModule+"_on.jpg");
            //$(".chapter").hide();
            $("."+modulename).show();

            // list of all vault items
            $("#vaultlist").empty();
            $("#vaultlist").append($("<ul></ul>").attr({"class": "list-unstyled"}));
            for (var i = 0; i < vaultdata[currentModule].length; i++){
              $("#vaultlist ul").append($("<li>"+vaultdata[currentModule][i].item_title+"</li>")
                .attr("class","item_title")
                .click(function(){
                  console.log("click added to: "+currentModule+", "+i);
                  displayItem(currentModule, i);
                })
              );
            }
            $("#vaultlist ul li:nth-child(1)").addClass("item_current");

            $("#currentembed").html("");
            var v = vaultdata[module][0];  
            $("#currentembed").append($("<a></a>") .attr({"class":"tracks","itemid":v.itemid+'_tracks',"href":v.itemid,"data-file":v.trackFile}).html(v.location));
            $('#player-digital-title-one').html(v.description);
            $('#player-digital-name-one').html(v.item_title);
          }
          $("#vault_null").hide();
          $("#infobox").show();

        });

      },1000);

  var clickIndex = 0;
  $("#next-bt").click(function() {
    $("#vaultlist ul li:nth-child("+(clickIndex+1)+")").removeClass("item_current");
    clickIndex = clickIndex + 1;;       
    if(clickIndex >= vaultdata[currentModule].length) clickIndex = 0;
    $("#vaultlist ul li:nth-child("+(clickIndex+1)+")").addClass("item_current");
    displayItem(currentModule, clickIndex);
  });

  $("#prev-bt").click(function() {
      $("#vaultlist ul li:nth-child("+(clickIndex+1)+")").removeClass("item_current");
      clickIndex = clickIndex - 1;;       
      if(clickIndex < 0) clickIndex = vaultdata[currentModule].length - 1;
      $("#vaultlist ul li:nth-child("+(clickIndex+1)+")").addClass("item_current");
      displayItem(currentModule, clickIndex);
  });
}
}

function displayItem(module, index){
  $("#currentembed").html("");
      var v = vaultdata[module][index];
      $("#currentembed").append($("<a></a>") .attr({"class":"tracks","itemid":v.itemid+'_tracks',"href":v.itemid,"data-file":v.trackFile}).html(v.location));
      $('#player-digital-title-one').html(v.description);
      $('#player-digital-name-one').html(v.item_title);
      var vaultshow=document.getElementById("vault_null");
      vaultshow.style.display = "none";
      var infoshow=document.getElementById("infobox");
      infoshow.style.display = "block";
}

  function stopVideo() {
    main_player.stopVideo();
  }

// Navigation from the floor plan
function floorNav(j, t){
  return function (e){
    main_player.seekTo(t);
    main_player.pauseVideo();
  }

}

