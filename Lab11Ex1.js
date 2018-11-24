var bRed = 0;
var bGreen = 0;
var bBlue = 0;
var bYellow = 0;

function clear() {
document.getElementById("myTextarea").value = "Simon Says: ";
}

function checkButton() {
document.getElementById("bRed").addEventListener("click", function() {bRed = 1; });
document.getElementById("bGreen").addEventListener("click", function() {bGreen = 1; });
document.getElementById("bBlue").addEventListener("click", function() {bBlue = 1; });
document.getElementById("bYellow").addEventListener("click", function() {bYellow = 1; });
}

function start () {
var randNum = 0;
    if (randNum == 0) {
        //set textbox to color 1
    document.getElementById("myTextarea").value = "Simon Says: Red";
    setTimeout(clear, 3000);
        if (bRed == 0 ) {

        }



}
