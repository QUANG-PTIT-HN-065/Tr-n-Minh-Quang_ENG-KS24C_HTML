let input = prompt("Nhập vào dãy số:");
let reversedNumbers = input.split("");
console.log(reversedNumbers)
let check = true;
let max = 0;
for (const i of reversedNumbers) {
    if (i > max) {
        max = i;
    }
    if (isNaN(i)) {
        alert(`không hợp lệ`);
        check = false;
        break;
    }
}
if (check) {
    alert(`${max} là số lớn nhất`)
}