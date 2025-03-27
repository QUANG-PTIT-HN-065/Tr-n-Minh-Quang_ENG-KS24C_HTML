let url = document.getElementById("addBookmark");
let urlbody = document.getElementById("url");
let closes = document.getElementById("close");
let bn = document.getElementById("btn");
let arr = JSON.parse(localStorage.getItem('arrlist')) || [];
let div = document.getElementById("body");
function save() {
    localStorage.setItem('arrlist', JSON.stringify(arr));
};
add();
url.onclick = function () {
    urlbody.style.display = "flex";
    document.body.style.backgroundColor = "gray";
};
closes.onclick = function () {
    urlbody.style.display = "none";
    document.body.style.backgroundColor = "#ffffff";
};

bn.onclick = function () {
    let input = document.getElementById("webName").value;
    let input2 = document.getElementById("weburl").value;
    arr.push({
        id: arr.length + 1,
        name: input,
        url: input2,
    });
    if (input === "" || input2 === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    save();
    urlbody.style.display = "none";
    document.body.style.backgroundColor = "#ffffff";
    add();
};
function add() {
    div.innerHTML = "";
    arr.forEach(element => {
        div.innerHTML += `<div class="body2" onclick="locate(${element.id})">
         <div><img src="http://www.google.com/s2/favicons?domain=${element.url}"'> ${element.name}</div> <div onclick="dele(${element.id})">x</div>
      </div>`;
    });
};
function locate(id){
    let index=arr.findIndex(element=>element.id==id);
    window.location.href=arr[index].url;
};
function dele(id){
    arr=arr.filter(element=>element.id!==id);
    save();
    add();
}