function isPrime(n) {
    if (n < 2) {
        return false;
    } 
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
function filterPrimeNumbers(arr) {
    if (arr.length == 0) {
        return `mảng khong có phần tử`
    }
    if (!Array.isArray(arr)) {
        return `dữ liệu không hợp lệ`
    }else {
        return arr.filter(isPrime);
    }
}
console.log(filterPrimeNumbers([1, 2, 5, 6, 7, 8, 9, 10, 11, 13, 17])); 
console.log(filterPrimeNumbers([])); 
console.log(filterPrimeNumbers('ascv')); 