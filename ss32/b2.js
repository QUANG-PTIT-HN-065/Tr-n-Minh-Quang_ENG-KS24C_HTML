let btn = document.getElementById('btn')
let show = document.getElementById('count')
let count = 0
btn.onclick = function (){
    count ++
    show.textContent = `Số lần bấm: ${count}`
}