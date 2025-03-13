function chunkArray(array, n) {
    if (!Array.isArray(array)) {
        return `dữ liệu không hợp lệ`
    }
    if (n <= 0) {
        return("Kích thước mảng con phải lớn hơn 0");
    }
    let result = [];
    for (let i = 0; i < array.length; i += n) {
        result.push(array.slice(i, i + n));
    }
    return result;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(chunkArray("abcd", 3));