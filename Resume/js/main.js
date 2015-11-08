
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

