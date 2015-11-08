$(document).ready(function() {

    $('.code-links a').bind('mouseover', function(){
        $(this).parent('li').css({position:'relative'});
        var img = $(this).children('img');
        $('<div />').text(' ').css({
            'height': img.height(),
            'width': img.width(),
            'background-color': 'orange',
            'position': 'absolute',
            'top': 22,
            'left': 24,
            'opacity': 0.5,
            'border-radius': 50,
        }).bind('mouseout', function(){
            $(this).remove();
        }).insertAfter(this);
    });

});
