let n;
do {
    n = parseInt(prompt("Nhập số nguyên n (số lượng số nguyên tố cần in):"));
} while (isNaN(n) || n <= 0); 
let count = 0;
let num = 2;
document.write(`Danh sách ${n} số nguyên tố đầu tiên: <br>`);
while (count < n) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        document.write(num + " ");
        count++; 
    }
    num++; 
}
