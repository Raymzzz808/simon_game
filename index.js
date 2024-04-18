//  ARRAYS:
  var output = [];
  var outputClick = [];

//  EVENT LISTENER
  document.addEventListener("keydown", function (event) {
    //TO START (Press A Button).
    startGame(event.key);

  });
//  RANDOM GENERATOR:
var ranNum = Math.floor(Math.random() * 4) + 1;
  
//  START GAME FUNCTION/TRIGGER
  function startGame(key) {
    switch (key) {
      case "a":
        //Change h1
        $("h1").text("Good luck!");
        //LOG into ARRAY
        output.push(ranNum);
        //RUN ANNIMATION
        buttonAnimation(ranNum);
        break;
      default:
        console.log();
    }
  }

//  BUTTON ANIMATION.
function buttonAnimation(ranNum){
    var activeButton = $("#" + ranNum);
    playSound[ranNum].play();
    setTimeout(function(){
        activeButton.addClass("pressed");
      },300);
      setTimeout(function(){
          activeButton.removeClass("pressed");
      },500);
    }

//  CLICK-ANIMATION:
$("div.btn").click(function(){
    //Get ID from button.
      var buttonId = $(this).attr("id");
      playSound[(buttonId-1)].play();
      //push ID as INTEGERS in Array.
      outputClick.push(parseInt(buttonId,10));
      //LIGHT on BUTTON
      $("#" + buttonId).addClass("pressed");
      //TURN OFF LIGHT
      setTimeout(function(){
        $("#" + buttonId).removeClass("pressed");
    },100);
    //RUN A CHECK
    checkIt(outputClick, output);
  });


//  FUNCTION TO COMPARE BOTH ARRAYS:
function checkIt(arr1, arr2) {
    // ARR1.lenghth === ARR2.length?
    if (outputClick.length !== output.length) {
        setTimeout(function() {
          // WHAT THE FUCK?!?!?!?!?!?!
        }, (output.length * 5000))
        //IF STILL NOT THE SAME..IT TIL IT IS!
        return;
    }

    // FOR LOOP --> Start = 0,  END @ Max.Length, Increased by 1;
    for (let i = 0; i < output.length; i++) {
        //IF CORR. #'s in BOTH arrays != , END GAME!
        if (outputClick[i] !== output[i]) {
          sound5.play();
            setTimeout(function() {
                endGame();
            }, (output.length * 200)); 
            return; 
        } 
    } 
    //  DELAYS GAME by 2 second if ALL #'s in array are the same.
    setTimeout(function() {
      $('h1').text('Level '+ output.length)
        continueGame();
    }, (output.length * 200));
}

//  CONTINUE THE GAME:
function continueGame(ranNum2){
    //  RESET CLICK ARRAY:
    outputClick = [];
    //  DISPLAY LEVEL:
    var ranNum2 = Math.floor(Math.random()*4) + 1; 
    var activeButton = $("#" + ranNum2);
    playSound[ranNum].play();
    output.push(ranNum2);
    setTimeout(function(){
        activeButton.addClass("pressed");
      },300);
      setTimeout(function(){
          activeButton.removeClass("pressed");
      },500);
}

//END GAME:
function endGame(){
    //RESET BUTTON ARRAY
    var output = [];
    //RESET CLICK ARRAY
    var outputClick =[];
    $("h1").text("Game Over!");
    setTimeout(function(){
      $("h1").text("Press A to Start");
    },1000);
}

//TO DO:

// 1. Add Sound to each button when active.

//SOUND ELEMENTS:

var sound1 = new Audio("./sounds/yellow.mp3");
var sound2 = new Audio("./sounds/blue.mp3");
var sound3 = new Audio("./sounds/red.mp3");
var sound4 = new Audio("./sounds/green.mp3");
var sound5 = new Audio("./sounds/wrong.mp3");
var playSound = [sound1, sound2, sound3, sound4];
