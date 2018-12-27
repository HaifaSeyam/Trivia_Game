//Once the page is loaded and Start button is clicked then hide the starting page and show the game page
//Also, run the timer for 30 sec 
window.onload = function () {
    $("#startBtn").on("click", function(){
        $("#startPage").hide();
        $(".container").show();
        $(".gameHeader").show();
        $("#restartBtn").hide();
        runTimer(30, "timer");
    });
};
  
//variables for timer functions
//var timer = 31;
var intervalId;

/*Once Submit button is clicked, onSubmit function will be called
In this function .. */
function onSubmit(){
    //.. Varibales declared for counting the correct and wrong answeres and unanswered questions
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;
    //Number of questions as a counter to be used in the for loops
    var numOfQuestions = 5;

    //Array of answers
    var answers = ["b", "b", "a", "c", "a"];

    /*Variables to store the value of the selected input radio. Each question has 3 values, 
    one for each input radio*/
    var question1 = document.forms["triviaGame"]["question1"].value;
    var question2 = document.forms["triviaGame"]["question2"].value;
    var question3 = document.forms["triviaGame"]["question3"].value;
    var question4 = document.forms["triviaGame"]["question4"].value;
    var question5 = document.forms["triviaGame"]["question5"].value;

    /*for loop to check if any of the radio buttons is not selected*/
    for (var i = 1 ; i <= numOfQuestions ; i++){
        if (eval("question" + i) == "") {
            unAnswered++;
            /*Each time I click on done button while not selecting any of the radio buttons, for testing purposes,
            I got a result of 5 unanswered questions and 5 wrong answers at the same time .. 
            when I tried to edit the if statements in the next for loop trying to fix this,
            something wrong happens .. so here, each time I check for unselection
            I increment the unAnswered counter and decrement the wrongAnswers counter, so whenever
            I click on done button without selecting any radio button, I got a result of 
            - No Answer: 5
            - Right Answeres: 0
            - Wrong Answeres: 0 (instead of 5)*/
            wrongAnswers--; 
        }
    }
    /*for loop to check if any of the radio buttons that has been selected is a correct answer*/
    for (var j = 1 ; j <= numOfQuestions ; j++){
        if (eval("question" + j) == answers [j - 1]){
            correctAnswers++;
        } else {
            wrongAnswers++;
        }
    }
    //Display the results
    var results = document.getElementById("results");
    results.innerHTML = ("<h2> Correct Answers: " + correctAnswers + "<br>" + "Wrong Answers: " + wrongAnswers + "<br>" + "Not Answered: " + unAnswered + "</h2>");
    //Stop the timer and hide it
    stop();
    $("#timer").hide();
    //Hiding the questions after submession
    $("#triviaContent").hide();
    $(".container").css("border", "0");
    
    //Show the restart button
    $("#restartBtn").show();
    $("#restartBtn").on("click", function() {
        location.reload(true);
    });
      
    return false;
}

var seconds = 31;
runningTimer.innerHTML = ("<div>Time remaining: " + timer + "</div>");

//Timer functions
function runTimer(seconds, timerDiv) {
    //clearInterval(intervalId);
    //intervalId = setInterval(decrement, 1000);
    var runningTimer = document.getElementById("timer");
    runningTimer.innerHTML = ("<div>Time remaining: " + seconds + "</div>");
    if (seconds < 1) {
        clearTimeout(timer);
        runningTimer.innerHTML = ("<div> Time's Up </div>");
        $("#restartBtn").show();
        $("#restartBtn").on("click", function() {
            location.reload(true);
        });
        $("#triviaContent").hide();
        $(".container").css("border", "0");
    }
    seconds--;
    var timer = setTimeout ("runTimer (" + seconds + ",' " + timerDiv + " ')", 1000);
    
    }

    
/*
var runningTimer = document.getElementById("timer");
function decrement() {
    timer--;
    runningTimer.innerHTML = ("<div>Time remaining: " + timer + "</div>");
    if (timer === 0) {
        stop();
        runningTimer.innerHTML = ("<div> Time's Up </div>");
        $("#restartBtn").show();
        $("#restartBtn").on("click", function() {
            location.reload(true);
        });
    }
}*/
    
function stop() {
    clearInterval(intervalId);
}