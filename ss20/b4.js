let str = prompt("Nhập vào một chuỗi:");
let charToFind = prompt("Nhập ký tự cần tìm:");
let found = false;
for (let i = 0; i < str.length; i++) {
    if (str[i] === charToFind) {
        found = true;
        break;
    }
}
if (found) {
    console.log(`Ký tự "${charToFind}" tồn tại trong chuỗi.`);
} else {
    console.log(`Ký tự "${charToFind}" không tồn tại trong chuỗi.`);
}
