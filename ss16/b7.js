let math = parseFloat(prompt("Nhập điểm Toán:"));
let physics = parseFloat(prompt("Nhập điểm Vật lý:"));
let chemistry = parseFloat(prompt("Nhập điểm Hóa học:"));
let average = (math + physics + chemistry) / 3;
document.write("Điểm trung bình 3 môn là: " + average.toFixed(2));