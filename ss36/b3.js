let btnBlue = document.getElementById("btnBlue");
let btnRed = document.getElementById("btnRed");
let btnPurple = document.getElementById("btnPurple");
let btnYellow = document.getElementById("btnYellow");
let mainBody = document.getElementById("mainBody");
let savedColor = localStorage.getItem("Color");
if (savedColor) {
    mainBody.style.backgroundColor = savedColor;
}
function changeColor(color) {
    mainBody.style.backgroundColor = color;
    localStorage.setItem("Color", color);
}

btnBlue.onclick = function() {
    changeColor("blue");
}
btnRed.onclick = function() {
    changeColor("red");
}
btnPurple.onclick = function() {
    changeColor("purple");
} 
btnYellow.onclick = function() {
    changeColor("yellow");
}
