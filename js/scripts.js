var unicornParty;
var dogParty;

$(document).ready(function(){
  $("#political-beliefs").submit(function(event){
    var userAge = parseInt($("#age").val())
    var buttonColor = $("#btn-color").val().toLowerCase();
    var color = $("input:radio[name=color]:checked").val();
    var animal = $("input:radio[name=animal]:checked").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var communication = $("input:radio[name=communication]:checked").val();
    unicornParty = 0;
    dogParty = 0;

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
    };

    if(color === "blue") {
      unicornParty = unicornParty + 1;
    } else {
      dogParty = dogParty + 1;
    }

    if(animal === "donkey") {
      unicornParty = unicornParty + 1;
    } else {
      dogParty = dogParty + 1;
    }

    if(flavor === "strawberry") {
      unicornParty = unicornParty + 1;
    } else {
      dogParty = dogParty + 1;
    }

    if(communication === "calling") {
      unicornParty = unicornParty + 1;
    } else {
      dogParty = dogParty + 1;
    }

    event.preventDefault();
  });
});
