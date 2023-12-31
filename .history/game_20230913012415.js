var buttoncolours = ["red","blue","green","yellow"];
var gamePattern = [];


var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress(function(){
    if(!started){
        $(#level-title).text("Level" + level);
        nextSequence();
        started = true;

    }
});

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
});
function nextSequence(){
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random * 4);
    var randomChosenColour = buttoncolours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}

function playSound(name){
    
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatePress(currentColour){
    $("#" + currentColour).addClass("presseed");

    setTimeout(function(){
        $("#" + currentColour).removeClass("presseed");

    },100);
}