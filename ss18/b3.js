let admin = prompt ("nhập vào tên đăng nhập:");
console.log(admin);
if (admin == "ADMIN") {
    let password1 = prompt ("nhập vào mật khẩu:");
    if (password1 == "TheMaster") {
        document.write("Welcome");
    } else if (password1 == "") {
        document.write("Cancelled");
    } else {
        document.write("Wrong password.");
    }
}else if (admin == "") {
    document.write("Cancelled");
}else {
    document.write("I Don’t know you");
}