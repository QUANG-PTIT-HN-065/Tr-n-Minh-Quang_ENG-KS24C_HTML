let a, b, c;
do {
    a = parseFloat(prompt("Nhập hệ số a (≠ 0):"));
} while (isNaN(a) || a === 0);
do {
    b = parseFloat(prompt("Nhập hệ số b:"));
} while (isNaN(b));
do {
    c = parseFloat(prompt("Nhập hệ số c:"));
} while (isNaN(c));
let delta = b * b - 4 * a * c;
if (delta < 0) {
    alert("Phương trình vô nghiệm");
} else if (delta === 0) {
    let x = -b / (2 * a);
    alert(`Phương trình có nghiệm kép: x = ${x}`);
} else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    alert(`Phương trình có 2 nghiệm phân biệt:\n x1 = ${x1}\n x2 = ${x2}`);
}
