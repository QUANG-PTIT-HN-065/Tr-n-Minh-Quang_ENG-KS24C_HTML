let arr = [];
let n = +prompt('nhap arr');
if (n > 0) {
    for (let i = 0; i < n; i++) {
        arr[i] = prompt("")
    }
    for (const i of arr) {
        if (i >= 0) {
            document.write(`${i} `)
        }
    }
}else {
    alert(`mảng không có phần tủ`)
}