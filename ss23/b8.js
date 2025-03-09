let arr = [];
let n = +prompt('Nhập vào số lượng phần tử');

if (n > 0) {
    for (let i = 0; i < n; i++) {
        arr[i] = Number(prompt("Nhập phần tử:"));
    }
    let isFibonacci = true;
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + arr[i - 2]) {
            isFibonacci = false;
            break;
        }
    }
    if (isFibonacci) {
        alert(`Mảng là dãy Fibonacci.`);
    } else {
        alert(`Mảng KHÔNG phải là dãy Fibonacci.`);
    }
} else if (n == 0) {
    alert(`Mảng không có phần tử`);
} else {
    alert(`Không được nhập số âm`);
}
