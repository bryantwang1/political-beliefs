$(document).ready(function(){
  $("#political-beliefs").submit(function(event){
    var userAge = parseInt($("#age").val())

    if(userAge != NaN && userAge < 18) {
      $("#helpBlock1").show();
      $("#helpBlock1").text("You must be older than 18.");
    } else if(userAge >= 18) {
      $("#helpBlock1").hide();
    } else{
      $("#helpBlock1").show();
      $("#helpBlock1").text("You must enter your age as a number.");
    };
    event.preventDefault();
  });
});
