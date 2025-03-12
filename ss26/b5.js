let arr = []
function findMaxAndIndex(arr) {
    if (arr.length == 0) {
        return `mảng khong có phần tử`
    }
    if (!Array.isArray(arr)) {
        return `dữ liệu không hợp lệ`
    }
    let result = Math.max(...arr)
    console.log(result);
    console.log(arr);
    let index = arr.indexOf(result)
    return `Số lớn nhất là ${result}, nằm ở vị trí ${index + 1}`;
}
for (let i = 0; i < 10; i++) {
    let num = +prompt(`Nhập số thứ ${i + 1}:`); 
    arr.push(num);
}
let cleanArr = arr.filter(Boolean)
console.log(findMaxAndIndex(cleanArr));

