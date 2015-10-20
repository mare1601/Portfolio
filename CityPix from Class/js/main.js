
//Link submit button to an on-click function
//Define the variable of inputCity to call on the value of the "city-type" ID
//Give the if/then statment that defines what the cities are able to be called 
//Give the function that should happen if the city-type parameters match
//Call on the css to change the class of the body to match the city entered
//Added in the "trim" and "val('')" to work as the extra credit and get rid of extra spaces, as well as put the value back to normal

$('#submit-btn').click(function () {
    var inputCity = $('#city-type').val();
    var city = inputCity.trim();
    if (city == 'New York City' || city == 'NYC' || city == 'New York') {
      $('body').attr('class','nyc');
      $('#city-type').val('');
      return false;
    }
    else if (city == 'San Francisco' || city == 'SF' || city == 'Bay Area') {
      $('body').attr('class','sf');
      $('#city-type').val('');
      return false;
    }
    else if (city == 'Los Angeles' || city == 'LA' || city == 'LAX') {
      $('body').attr('class','la');
      $('#city-type').val('');      
      return false;
    }
    else if (city == 'Austin' || city == 'ATX') {
      $('body').attr('class','austin');
      $('#city-type').val('');     
      return false;
    }
    else if (city == 'Sydney' || city == 'SYD') {
      $('body').attr('class','sydney');
      $('#city-type').val('');
      return false;
    }
})

