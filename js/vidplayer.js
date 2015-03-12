    var tag = document.createElement('script');
    tag.src = "http://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        
    var module;    
    var currentModule = 0;
    var player;
    function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
    height: '640',
    width: '1000',
    //videoId: 'IYFuz8d8WzQ',
    events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
});
}

      function onPlayerReady(event) {
        event.target.cuePlaylist(["IYFuz8d8WzQ","MstFsNp-8m0"], 0, "medium");
        event.target.playVideo();
      }

      function onPlayerStateChange(event) {
      var t;
        if (event.data == YT.PlayerState.PLAYING) {
            setInterval(function(){
            t = player.getCurrentTime();
            console.log(t);

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
 
    $.getJSON('coldstorage.json', function(chone) {
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
    var v = vaultdata[module][0];
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
        player.stopVideo();
      }

