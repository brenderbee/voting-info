$(document).ready(function(){
  var age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $("h1").hide();
    $("#of-age").fadeIn("slow");
  } else if (age <= 12){
    $("#minor").fadeIn("slow");
    alert("What are you doing?! Go out and have some fun!");
  } else {
    $("#minor").fadeIn("slow");
  }

});
