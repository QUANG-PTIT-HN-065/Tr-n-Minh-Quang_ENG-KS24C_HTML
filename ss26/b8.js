function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
function getOddPrimes(arr) {
    if (!Array.isArray(arr)) {
        return `dữ liệu không hợp lệ`
    }
    return arr.filter(num => isPrime(num) && num % 2 !== 0);
}
let numbers = []; 
for (let i = 0; i < 20; i++) {
   let n = +prompt(`nhập vào phần tử thứ ${i + 1}`)
   numbers.push(n)
}
let cleanArr = arr.filter(Boolean)
let oddPrimes = getOddPrimes(numbers);
console.log(oddPrimes);
