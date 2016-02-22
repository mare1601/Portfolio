$(document).ready(function() {
function initMap() {
  var myLatLng = {lat: -25.363, lng: 131.044};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 4
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Hello World!'
  });
}
// check for Geolocation support
  if (navigator.geolocation) {
    console.log('Geolocation is supported!');
  }
  else {
    console.log('Geolocation is not supported for this Browser/OS version yet.');
  };

// Obtain user's location
    window.onload = function() {
    var startPos;
    var geoOptions = {
      enableHighAccuracy: true
    } 

    var geoSuccess = function(position) {
      startPos = position;
      document.getElementById('startLat').innerHTML = startPos.coords.latitude;
      document.getElementById('startLon').innerHTML = startPos.coords.longitude;
    };
    var geoError = function(error) {
      console.log('Error occurred. Error code: ' + error.code);
      // error.code can be:
      //   0: unknown error
      //   1: permission denied
      //   2: position unavailable (error response from location provider)
      //   3: timed out
    };  

    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
  };

  
// Slide open the side nav
  $('#hamburger').on('click', function(){
    $('body').addClass('nav-menu-open');
  });
// If the user clicks anywhere that isn't the nav, or the hamburger, the side nav
  $('body').on('click', function(e){
    var $target = $(e.target);
    if ($target.hasClass('nav-menu') || $target.attr('id') === 'hamburger' || $target.attr('class') === 'hamburger-menu'){
     return;
    } 
    else {
      $('body').removeClass('nav-menu-open');
    }
  });
});