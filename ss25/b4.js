function searchEvenNumbers(arr) {
    if (isNaN(arr)) {
        return `dữ liệu không hợp lệ`
    }
    if (arr > 1) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(arr); i++) {
            if (arr % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            return `là số nguyên tố`;
        }
    }
    return `không phải là số nguyên tố`
}

let arr = 17;
console.log(searchEvenNumbers(arr));
