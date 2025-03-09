let arr = [];
let n = +prompt('nhập vào số lượng phần tử');
let total = 0;
if (n > 0) {
    for (let i = 0; i < n; i++) {
        arr[i] = prompt("")
    }
    for (const i of arr) {
        if (i >= 0) {
            total += +i;
        }
    }
    if (total == 0) {
        alert(``)
    }
    alert(`tong = ${total}`)
}else if (n == 0) {
    alert(`mảng ko có phần tử`)
}
else {
    alert(`ko đc âm`)
}