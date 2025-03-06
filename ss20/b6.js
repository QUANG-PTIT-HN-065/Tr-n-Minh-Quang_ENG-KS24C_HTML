let n = parseInt(prompt("Nhập một số nguyên:"));
let isPrime = true;
if (n < 2) {
    isPrime = false;
} else {
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log(`${n} là số nguyên tố`);
} else {
    console.log(`${n} không phải là số nguyên tố`);
}
