let a = parseInt(prompt("Nhập số a:"));
let b = parseInt(prompt("Nhập số b:"));
let ketQua = 1;
for (let i = 0; i < b; i++) {
    ketQua *= a;
}
console.log(`${a}^${b} = ${ketQua}`);
