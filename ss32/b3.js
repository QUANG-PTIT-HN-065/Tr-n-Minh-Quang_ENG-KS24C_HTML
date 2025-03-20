let btn = document.getElementById('btn')
let ol = document.getElementById('ol');
btn.onclick = function(){
    const value = document.getElementById("myInput").value;
    if (value === "") {
        alert("không thêm được");
        return;
    }
    ol.innerHTML +=
    `<li>${value}</li>`
}