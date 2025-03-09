let arr = [];
let n = +prompt('nhập vào số luọng phần tử');
let count = 0;
if (n > 0) {
    for (let i = 0; i < n; i++) {
        arr[i] = +prompt("")
    }
    for (const i of arr) {
        if (Number.isInteger(i) && i < 0) {
            count++;
        }
    }
    alert(`${count}`)
}else if (n == 0){
    alert(`mảng không có phần tủ`)
}else {
    alert(`số phần từ ko đuọc âm`)
}