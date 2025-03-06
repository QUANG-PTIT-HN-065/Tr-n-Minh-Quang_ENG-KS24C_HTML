let row = +(prompt("Nhập hàng:"));
let col = +(prompt("Nhập cột:"));

for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
        if (i === 0 || i === row - 1 || j === 0 || j === col - 1) {
            document.write("* ");
        } else {
            document.write("&nbsp;&nbsp;&nbsp;"); 
        }
    }
    document.write("<br>");
}
