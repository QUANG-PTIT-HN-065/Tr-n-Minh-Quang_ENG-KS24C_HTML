let arr = [];
let n = +prompt('nhập vào số lượng phần tử');
let max1 = 0;
let max2 = 0;
if (n > 0) {
    for (let i = 0; i < n; i++) {
        arr[i] = prompt("")
    }
    for (const i of arr) {
        if (i > max1) {
            max2 = max1
            max1 = i
        }
    }
    alert(`${max2}`)
}else if (n == 0) {
    alert(`mảng ko có phần tử`)
}
else {
    alert(`ko đc âm`)
}