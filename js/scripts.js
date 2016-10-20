$(document).ready(function(){
  $("#political-beliefs").submit(function(event){
    var userAge = parseInt($("#age").val())
    var buttonColor = $("#btn-color").val().toLowerCase();

    if(userAge != NaN && userAge < 18) {
      $("#helpBlock1").show();
      $("#helpBlock1").text("You must be older than 18.");
    } else if(userAge >= 18) {
      $("#helpBlock1").hide();
    } else{
      $("#helpBlock1").show();
      $("#helpBlock1").text("You must enter your age as a number.");
    };

    if(buttonColor != "blue") {
      $("#helpBlock2").show();
      $("#helpBlock2").text("Try again!");
    } else {
      $("#helpBlock2").hide();
    }

    event.preventDefault();
  });
});
