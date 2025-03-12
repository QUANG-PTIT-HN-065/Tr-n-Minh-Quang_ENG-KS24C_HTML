function filterLongStrings(arr) {
    if (arr.length == 0) {
        return `mảng khong có phần tử`
    }
    if (!Array.isArray(arr)) {
        return `dữ liệu không hợp lệ`
    }else {
        return arr.filter(str => str.length > 5);
    }
}
console.log(filterLongStrings(["apple", "banana", "cherry", "cat", "elephant"])); 
console.log(filterLongStrings("abcs"))
console.log(filterLongStrings([]))