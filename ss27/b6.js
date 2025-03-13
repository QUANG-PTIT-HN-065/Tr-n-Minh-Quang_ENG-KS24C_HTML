function isArithmeticSequence(arr) {
    if (!Array.isArray(arr)) {
        return `dữ liệu không hợp lệ`
    }
    if (arr.length < 2) return false; 
    const num = arr[1] - arr[0]; 
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== num) {
            return false; 
        }
    }
    return true; 
}
console.log(isArithmeticSequence([2, 4, 6, 8, 10])); 
console.log(isArithmeticSequence([1, 2, 4, 8])); 
console.log(isArithmeticSequence("abcd")); 
