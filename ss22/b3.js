let input = prompt("Nhập vào dãy số:");
let reversedNumbers = input.split("").reverse();
console.log(reversedNumbers)
let check = true;
for (const i of reversedNumbers) {
    if (isNaN(i)) {
        alert(`không hợp lệ`);
        check = false;
    }
}
if (check) {
    alert(reversedNumbers.join(""));
}