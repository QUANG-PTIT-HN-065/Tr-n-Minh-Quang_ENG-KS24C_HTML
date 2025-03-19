let from = document.getElementById("login-container");
from.addEventListener("submit", function(event) {
    event.preventDefault();
    if (from.username.value == "huanrose@gmail.com" && from.password.value == "123456" ) {
        console.log(`đăng nhập thằng công`);
    }else {
        console.log(`đăng nhập thất bại`);
    }
})