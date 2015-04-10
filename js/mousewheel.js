$(function() {

   $("#credouter").mousewheel(function(event, delta) {

      this.scrollLeft -= (delta * 1);
    
      event.preventDefault();

   });

});