function findMissingNumber(arr) {
    if (!Array.isArray(arr)) {
        return `dữ liệu không hợp lệ`
    }
    let n = arr.length + 1;
    let totalSum = (arr[0] + arr[arr.length - 1]) * n / 2;
    return totalSum - arr.reduce((sum, num) => sum + num, 0);
}
let arr = [1, 2, 3, 5, 6]
console.log(findMissingNumber(arr))