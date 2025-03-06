let n;
do {
    n = parseInt(prompt("Nhập một số nguyên:"));
} while (isNaN(n)); 
document.write(`Các ước của ${n} là: <br>`);
for (let i = 1; i <= Math.abs(n); i++) {
    if (n % i === 0) {
        document.write(i + " ");
    }
}
