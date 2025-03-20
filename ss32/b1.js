function changeColor() {
    let div = document.getElementById("color");
    div.style.backgroundColor = getRandomColor(); 
}
function getRandomColor() {
    let r = Math.floor(Math.random() * 256); 
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}