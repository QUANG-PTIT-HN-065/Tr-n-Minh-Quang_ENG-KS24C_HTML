let n = prompt("Nhập một ký tự:");
let tyGia = 23000;
switch (n) {
    case 1:{
        let soTien = parseFloat(prompt("Nhập số tiền VND:"));
        if (!isNaN(soTien) && soTien >= 0) {
            let quyDoi = soTien / tyGia;
            alert(soTien + " VND = " + quyDoi.toFixed(2) + " USD");
        } else {
            alert("Số tiền không hợp lệ!");
        }
        break;
    }    
    case 2:
        let soTien = parseFloat(prompt("Nhập số tiền USD:"));
        if (!isNaN(soTien) && soTien >= 0) {
            let quyDoi = soTien * tyGia;
            alert(soTien + " USD = " + quyDoi.toFixed(0) + " VND");
        } else {
            alert("Số tiền không hợp lệ!");
        }
        break
    default:
        alert(`không hợp lệ`)
        break;
}