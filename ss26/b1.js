let arr = [];
let count = 0;
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`Nhập số nguyên thứ ${i + 1}:`)); 
    arr.push(num);
}
let filteredArr = arr.filter(num => num >= 10)
if (filteredArr == 0) {
    console.log(`mnagr không có giá trị`);
}else {
    console.log(filteredArr)
}