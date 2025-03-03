let num = parseFloat(prompt("nhập điểm môn toán"));
let num1= parseFloat(prompt("nhập điểm môn toán"));
let num2 = parseFloat(prompt("nhập điểm môn toán"));
let num3 = ((num + num1 + num2)/3);
document.write("điểm trung bình là " +" "+ num3.toFixed(2));
if (num3 >= 8) {
    document.write(" giỏi");
}else if (num3 >= 6.5 && num3 <= 7.9) {
    document.write(" khá");
}else if (num3 >= 5.0 && num3 <= 6.4) {
    document.write(" trung bình");
}else if (num3 < 5.0) {
    document.write(" yếu");
}
