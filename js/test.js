$(function() {
    var a = 0;
    $('#project .scrollbox').on('mousewheel', function(e) {
        var b = e.originalEvent.wheelDelta;
        a += b;
        $('#project .item1').css('transform', 'translateY(' + (-a /1) + 'px)');
        $('#project .item2').css('transform', 'translateY(' + (a / 1) + 'px)');
    });




    /*var a = 0;
    var scrollbox = $('#main .scrollbox');
  
    scrollbox.on('mousewheel', function(e) {
      var delta = e.originalEvent.wheelDelta;
      var scrollboxHeight = scrollbox.height();
      var contentHeight = scrollbox.find('.item').height();
      var maxScroll = contentHeight - scrollboxHeight;
  
      a += delta;
  
      if (a < 0) {
        a = 0;
      } else if (a > maxScroll) {
        a = maxScroll;
      }
  
      $('#main .item1').css('transform', 'translateY(' + (-a) + 'px)');
      $('#main .item2').css('transform', 'translateY(' + a + 'px)');
  
      return false; // Prevent page scrolling
    });*/



/*
    var a = 0;
    var scrollbox = $('#project .scrollbox');
  
    scrollbox.on('mousewheel', function(e) {
      var delta = e.originalEvent.wheelDelta;
      var scrollboxHeight = scrollbox.height();
      var contentHeight = scrollbox.find('.item1').height();
      var maxScroll = contentHeight - scrollboxHeight;
  
      a += delta;
  
      if (a < 0) {
        a = 0;
      } else if (a > maxScroll) {
        a = maxScroll;
      }
  
      if (a > 0 && a < maxScroll) {
        e.preventDefault(); 
      }
  
      $('#project .item1').css('transform', 'translateY(' + (-a) + 'px)');
      $('#project .item2').css('transform', 'translateY(' + a + 'px)');
    });*/
});