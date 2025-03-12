let arr = []
function findMaxAndIndex(arr) {
    if (arr.length == 0) {
        return `mảng khong có phần tử`
    }
    if (!Array.isArray(arr)) {
        return `dữ liệu không hợp lệ`
    }
    let evenArr = arr.filter(num => num % 2 === 0).map(num => num ** 2);
    return evenArr;
    
}
for (let i = 0; i < 10; i++) {
    let num = +prompt(`Nhập số thứ ${i + 1}:`); 
    arr.push(num);
}
let cleanArr = arr.filter(Boolean)
console.log(findMaxAndIndex(cleanArr));