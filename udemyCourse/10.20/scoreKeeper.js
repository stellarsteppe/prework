/**
 * Creator: steppe
 * Date Created: 10.20 .18
 * Date Last Modified: 10.20 .18
 */

 var button1 = document.getElementById("p1");
 var button2 = document.getElementById("p2");
 var resetButton = document.getElementById("p3");
 var button1Display = document.querySelector("#button1Display");
 var button2Display = document.querySelector("#button2Display");
 var numInput = document.querySelector("input");
 var winningScoreDisplay = document.querySelector("p span");
 var button1Score = 0;
 var button2Score = 0;
var gameOver= false;
var winningScore = 5;


 button1.addEventListener("click", function() {
    if (!gameOver) {
     button1Score++;
     button1Display.classList.add("winner");
     if (button1Score === winningScore) {
         gameOver = true;
     }
    button1Display.textContent = button1Score;
     
     
     }
 });

 button2.addEventListener("click", function () {
     if (!gameOver) {
         button2Score++;
         button2Display.classList.add("winner");
         if (button2Score === winningScore) {
             gameOver = true;
         }
         button2Display.textContent = button2Score;
        }
 });

 resetButton.addEventListener("click", function() {
    //  button1Score = 0;
    //  button2Score = 0;
    //  button1Display.textContent = 0;
    //  button2Display.textContent = 0;
    //  button1Display.classList.remove("winner");
    //  button2Display.classList.remove("winner");
    //  gameOver = false;
    reset();
});

 function reset() {
    button1Score = 0;
    button2Score = 0;
    button1Display.textContent = 0;
    button2Display.textContent = 0;
    button1Display.classList.remove("winner");
    button2Display.classList.remove("winner");
    gameOver = false;
 }

 numInput.addEventListener("change", function() {
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
 });