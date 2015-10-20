$(function () {
//function above is doc ready; leave it alone




$('#task-form').submit(function(e){
  e.preventDefault();
  var newTask = $('#newTaskInput').val();

  $("#task-form").trigger("reset");

  if(newTask.length > 0) {
    $('#tasks-to-do').removeClass('hidden');
  };

  $('#tasks-to-do').append('<li><label for "addedchore">' + newTask + ': ' +'<input type="checkbox" class="addedchore"/></label>' + '<br/>' + '</li>');
return false;

$(".addedchore").change(function() {
    $(this).closest('.addedchore label li').toggleClass("selected", this.checked);
});

});

/*
 $('input').change(function(){
   if($('input').is(':checked')) {
       $('#addedchore').addClass('selected')
     };
 });
*/

//Leave the bracket and parens below alone forever
});