let num = prompt("Nhập vào một số nguyên:");
let isPalindrome = true;
for (let i = 0; i < Math.floor(num.length / 2); i++) {
    if (num[i] !== num[num.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}
if (isPalindrome) {
    console.log(`${num} là số đối xứng.`);
} else {
    console.log(`${num} không phải là số đối xứng.`);
}
