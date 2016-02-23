$(document).ready(function() {

//Jquery UI Datepicker
  $(function() {
    $('#datepicker').datepicker();
  });
  $(function() {
    $( "#datepicker2" ).datepicker();
  });

//Google location api usage
  function initialize() {
    var input = document.getElementById('searchTextField');
    var options = {types: ['(cities)'],};
    var autocomplete = new google.maps.places.Autocomplete(input, options);
  }
  google.maps.event.addDomListener(window, 'load', initialize);
});