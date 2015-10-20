$(function () {
  $('#weather-form').submit(function(e) {
    e.preventDefault();
    var cityName = $('#cityName').val();
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=db9f972ceedfc04224b19c5c25e50501';
    console.log(cityName);
    console.log(url);

  $.ajax({
     type: 'GET',
      url: url,
      dataType: 'jsonp',
      success: function(json) {
         console.log(json);
          var data = $("#response").text(JSON.stringify(json));
          var temperature = (((json.main.temp)-273.15)*1.8 + 32);
          for (var i = 0, l = data.length; i < l; i++) {
          $('#response').text('The temperature today is ' + temperature.toFixed() + '. Also, fyi: ' + json.weather[0].description +'!');
          console.log(json.main.temp);
          }
        },

      error: function(e) {
         console.log(e.message)
       }
  
});
});
});