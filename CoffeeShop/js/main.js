$(document).ready(function() {

var $item = $('.photos img'),
    visible = 6,
    index = 0,
    endIndex = ($item.length / 3);  

$('.arrow-right').click(function() {
  if(index < endIndex) {
    index++;
    $item.animate({
      'left':'-=310px',
    });
  }
});

$('.arrow-left').click(function() {
  if(index>0) {
    index--;
    $item.animate({
      'left':'+=310px',
    });
  }
});


});