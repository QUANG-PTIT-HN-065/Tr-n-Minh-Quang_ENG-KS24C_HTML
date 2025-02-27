let usd = parseFloat(prompt("Nhập số tiền (USD):"));
const exchangeRate = 25000;
let vnd = usd * exchangeRate;
document.write("Số tiền tương ứng (VND): " + vnd.toLocaleString("vi-VN") + " đ");