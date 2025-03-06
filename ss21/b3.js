const matKhauDung = "123456";
while (true) {
    let matKhauNhap = prompt("Nhập mật khẩu:");
    if (matKhauNhap === matKhauDung) {
        alert("Mật khẩu chính xác! ");
        break;
    } else {
        alert("Sai mật khẩu! ");
    }
}