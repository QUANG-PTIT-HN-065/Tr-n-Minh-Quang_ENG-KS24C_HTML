let a = parseFloat(prompt("Nhập hệ số a (a ≠ 0):"));
let b = parseFloat(prompt("Nhập hệ số b:"));
let c = parseFloat(prompt("Nhập hệ số c:"));
if (a === 0) {
    alert("Hệ số a phải khác 0. Đây không phải là phương trình bậc 2.");
} else {
    let delta = b * b - 4 * a * c; 

    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert(`Phương trình có 2 nghiệm phân biệt:\nx1 = ${x1.toFixed(2)}\nx2 = ${x2.toFixed(2)}`);
    } else if (delta === 0) {
        let x = -b / (2 * a);
        alert(`Phương trình có nghiệm kép:\nx = ${x.toFixed(2)}`);
    } else {
        alert("Phương trình vô nghiệm (không có nghiệm thực).");
    }
}