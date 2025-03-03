let num = parseInt(prompt("nhập một số năm:1-6"));
if (num < 1) {
    document.write(`${num} năm : mới vào nghể`);
}else if (num >= 1 && num <= 3) {
    document.write(`${num} năm : nhân viên có kinh nghiệm`);
}else if (num >= 4 && num <= 6) {
    document.write(`${num} năm : chuyên viên`);
}else if (num > 6) {
    document.write(`${num} năm : quản lý`);
}