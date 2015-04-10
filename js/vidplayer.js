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
                   'controls':1,
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
          videoId: 'MstFsNp-8m0',
          playerVars: {
                       'autoplay':0,
                       'controls':1,
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
        console.log(jumplink);
        var t =jumplink.data("start");
        console.log(jumplink + " data-start: " + t);
        jumplink.click(floorNav(i, t));
      }

      // "enter" button event listener pauses intro, which in turn plays main
      $("#enter").click(function(d){
        intro.pauseVideo();
      })
  }                                 

  //Initiates playback
function onPlayerReady(event) {
  event.target.playVideo();
}
              
 //Trigger movement to next ID on playback stop - making this up
  function onIntroPlayerStateChange(event){
        // console.log(event);
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
        // console.log(t);

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
        });

        if(module != currentModule) {
          $("#fp"+currentModule).attr("src", "./img/FloorplanNav/"+currentModule+"_off.jpg");
          currentModule = module;
          console.log("MODULE CHANGE");
          console.log("module "+currentModule);
          console.log(modulename);
          $("#fp"+currentModule).attr("src", "./img/FloorplanNav/"+currentModule+"_on.jpg");
          //$(".chapter").hide();
          $("."+modulename).show();
          $("#currentembed").html("");
          var v = vaultdata[module][0];  /// this is throwing an error!!
          $("#currentembed").append($("<a></a>") .attr({"class":"tracks","itemid":v.itemid+'_tracks',"href":v.itemid,"data-file":v.trackFile}).html(v.location));
          console.log(v);
          $('#player-digital-title-one').html(v.description);
          $('#player-digital-name-one').html(v.item_title);
        }

      },1000);

  var clickIndex = 0;
  $("#next-bt").click(function() {
      clickIndex = clickIndex + 1;;       
      if(clickIndex >= vaultdata[currentModule].length) clickIndex = 0;
    $("#currentembed").html("");
  var v = vaultdata[currentModule][clickIndex];
  $("#currentembed").append($("<a></a>") .attr({"class":"tracks","itemid":v.itemid+'_tracks',"href":v.itemid,"data-file":v.trackFile}).html(v.location));
      $('#player-digital-title-one').html(v.description);
      $('#player-digital-name-one').html(v.item_title);
      var vaultshow=document.getElementById("vault_null");
      vaultshow.style.display = "none";
      var infoshow=document.getElementById("infobox");
      infoshow.style.display = "block";
  });

  $("#prev-bt").click(function() {
      clickIndex = clickIndex - 1;;       
      if(clickIndex <= 0) clickIndex = vaultdata[currentModule].length - 1;
      $("#currentembed").html("");
      var v = vaultdata[currentModule][clickIndex];
      $("#currentembed").append($("<a></a>") .attr({"class":"tracks","itemid":v.itemid+'_tracks',"href":v.itemid,"data-file":v.trackFile}).html(v.location));
      $('#player-digital-title-one').html(v.description);
      $('#player-digital-name-one').html(v.item_title);
      var vaultshow=document.getElementById("vault_null");
      vaultshow.style.display = "none";
      var infoshow=document.getElementById("infobox");
      infoshow.style.display = "block";
  });
}
}
  function stopVideo() {
    main_player.stopVideo();
  }

// Navigation from the floor plan - main video is called "player"
function floorNav(j, t){
  return function (e){
    console.log("change to module: " + (j) + ", time: "+t);
    main_player.seekTo(t);
    main_player.pauseVideo();
  }

}

