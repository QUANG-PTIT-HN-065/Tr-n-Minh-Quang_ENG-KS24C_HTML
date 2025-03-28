function saveName() {
    document.getElementById("inputSection").style.display ="none";
    document.getElementById("greetingSection").style.display = "block";
    let text = document.getElementById("nameInput").value;
    let text2 = document.getElementById("greeting")
    text2.innerHTML = `xin chào ${text}`
}
function changeName(){
    document.getElementById("inputSection").style.display ="block";
    document.getElementById("greetingSection").style.display = "none";
}