
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

var $buoop = {
	c:2,
	text: "Hi! Your browser (%s) is a smidgen old.  You may want to <a%s>update</a> for the best experience.",
}; 
function $buo_f(){ 
 var e = document.createElement("script"); 
 e.src = "//browser-update.org/update.min.js"; 
 document.body.appendChild(e);
};
try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
catch(e){window.attachEvent("onload", $buo_f)} 

