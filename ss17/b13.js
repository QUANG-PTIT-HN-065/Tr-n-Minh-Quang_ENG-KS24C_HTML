let n = parseFloat(prompt("Nhập số tiền gửi (VND):"));
let m = parseInt(prompt("Nhập số tháng gửi:"));
let laiSuat = 4.3 / 100;
let lai = (n * laiSuat * m) / 12;
var finalMoney = lai.toLocaleString("vi-VN")
document.write("Số tiền lãi nhận được sau"," ", m ," ", "tháng là:", finalMoney , " VND");
