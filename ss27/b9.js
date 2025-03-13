function sortEvenNumbers(arr) {
    if (!Array.isArray(arr)) {
        return `dữ liệu không hợp lệ`
    }
    let evenNumbers = arr.filter(num => num % 2 === 0).sort((a, b) => a - b);
    let evenIndex = 0;
    return arr.map(num => (num % 2 === 0 ? evenNumbers[evenIndex++] : num));
}
let arr = [5, 8, 3, 2, 6, 1, 4];
console.log(sortEvenNumbers(arr));  