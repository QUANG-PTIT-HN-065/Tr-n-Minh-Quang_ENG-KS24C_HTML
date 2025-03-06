let tien = parseFloat(prompt("Nhập số tiền gửi (VND):"));
let laithang = parseFloat(prompt("Nhập % lãi:"));
let thang = parseInt(prompt("Nhập số tháng gửi:"));
let laiSuat = laithang / 100;
let total = tien;
for (let i = 1; i <= thang; i++) {
    total += total * laiSuat; 
}
let lai = total - tien; 
document.write(`Lãi: ${lai.toFixed(3)} VND<br>`);
document.write(`Tổng tiền nhận được: ${total.toFixed(3)} VND`);