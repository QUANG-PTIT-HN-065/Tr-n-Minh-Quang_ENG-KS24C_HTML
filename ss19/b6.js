let a = parseFloat(prompt("Nhập giá trị a:"));
let b = parseFloat(prompt("Nhập giá trị b:"));
let c = parseFloat(prompt("Nhập giá trị c:"));

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Vui lòng nhập số hợp lệ!");
} else if (a === 0) {
    alert("Giá trị a không thể bằng 0! Đây không phải phương trình bậc 2.");
} else {
    let delta = b * b - 4 * a * c;
    
    if (delta < 0) {
        alert("Phương trình vô nghiệm.");
    } else if (delta === 0) {
        let x = -b / (2 * a);
        alert("Phương trình có nghiệm kép: x = " + x);
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert("Phương trình có hai nghiệm phân biệt:\n x1 = " + x1 + "\n x2 = " + x2);
    }
}
