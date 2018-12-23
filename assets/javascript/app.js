//Once the page is loaded and Start button is clicked then hide the starting page and show the game page
//Also, run the timer for 30 sec 
window.onload = function () {
    $("#startBtn").on("click", function(){
        $("#startPage").hide();
        $(".container").show();
        $(".gameHeader").show();
        $("#restartBtn").hide();
        runTimer();
    });
};

//variables for timer functions
var timer = 31;
var intervalId;

//Timer functions
function runTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    }
    
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
}
    
function stop() {
    clearInterval(intervalId);
}