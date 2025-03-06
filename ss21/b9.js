let n;
do {
    n = parseInt(prompt("Nhập một số nguyên:"));
} while (isNaN(n)); 
let isPrime = true;
if (n < 2) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    document.write(`${n} là số nguyên tố`);
} else {
    document.write(`${n} không phải là số nguyên tố`);
}
