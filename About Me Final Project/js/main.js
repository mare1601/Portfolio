$(document).ready(function() {

// Fade in of my name
$(function() {
  $('.titletext').hide().delay(900).fadeIn(1000);
});

// Stick the nav bar to the top! 
var navPos = $('.nav').offset().top;
$(window).scroll(function() {
    var scrollPos = $(this).scrollTop();
    if (scrollPos >= navPos) {
        $('.nav').addClass('fixed');
    } else {
        $('.nav').removeClass('fixed');
    }
});

// Send the plane across the page!
$(window).scroll(function() {
if ($(this).scrollTop() > 1000){  
    $('.plane').addClass('fly');
  }
  else{
    $('.plane').removeClass('fly');
  }
});

// Smooth sweeps to new sections - admitted totally reused from https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-70
        }, 1000);
        return false;
      }
    }
  });
});

// Toggle class so the hamburger button works - Brilliant!!
$("#nav-toggle").click(function (e) {
      e.preventDefault();
  if($('#main-nav').is('.nav')){
   $('#main-nav').slideUp(function(){ 
          $('#main-nav').addClass('nav-show');
          $('#main-nav').removeClass('nav');
          $('#main-nav').slideDown(500);
          $('#hamburger').animate({
            height: '150px'
            }, 500, function(){
          }); 
          return false;
      }); 
  }
  else {
    $('#main-nav').slideUp(function(){  
        $('#main-nav').addClass('nav');
        $('#main-nav').removeClass('nav-show');
        $('#main-nav').slideUp(1000);
          $('#hamburger').animate({
            height: '0px'
            }, 500, function(){
          });  
      });  
//not sure where the return false should go but I need it to stop being wonky!
    return false;
  }
  return false;
});

//I only want the link clicking to hide the nav bar when it's tiny :) 
  if($(window).width() <= 500) {
      $('.topnav').click(function(){
      $('#main-nav').slideUp(function(){
        $('#main-nav').addClass('nav');
        $('#main-nav').removeClass('nav-show');
        $('#main-nav').slideUp(1000);
          $('#hamburger').animate({
            height: '0px'
            }, 500, function(){
            });
        });      
      });
     }; 
});
