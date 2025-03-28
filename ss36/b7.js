let acc = JSON.parse(localStorage.getItem("acc")) || [];

function dangKy() {
    event.preventDefault();
    let nameInput = document.getElementById("nameInput");
    let passInput = document.getElementById("password");
    let name = nameInput.value.trim();
    let pass = passInput.value.trim();

    if (name === "") {
        alert("Tên đăng nhập không hợp lệ");
        return;
    }
    if (pass === "") {
        alert("Mật khẩu không hợp lệ");
        return;
    }

    const check = acc.find(c => c.name === name);
    if (check) {
        alert("Tài khoản đã tồn tại");
        nameInput.value = "";
        passInput.value = "";
        return;
    }

    acc.push({ name, pass });
    localStorage.setItem("acc", JSON.stringify(acc));

    nameInput.value = "";
    passInput.value = "";
    alert("Đăng ký thành công!");
    nextLogIn(`/ss36/b7,1.html`);
}

function dangNhap() {
    event.preventDefault();
    let nameInput = document.getElementById("nameInput");
    let passInput = document.getElementById("password");
    let checkbox1 = document.getElementById("checkbox").checked;

    const name = nameInput.value.trim();
    let pass = passInput.value.trim();

    if (name === "") {
        alert("Tên đăng nhập không hợp lệ");
        return;
    }
    if (pass === "") {
        alert("Mật khẩu không hợp lệ");
        return;
    }
    let user = acc.find(c => c.name === name && c.pass === pass);
    if (user) {
        console.log("Đăng nhập thành công");
        alert("Đăng nhập thành công!");
        if (checkbox1) {
            localStorage.setItem("rememberUser", JSON.stringify({ name, pass }));
            localStorage.setItem("currentUser", name)
        } else {
            localStorage.removeItem("rememberUser");
        }
        nextLogIn("/ss36/b7,2.html");
    } else {
        alert("Tên đăng nhập hoặc mật khẩu chưa chính xác");
        passInput.value = "";
        return;
    }

}

function nextLogIn(url) {
    window.location.href = url;
}

function home(name) {
    let h1 = document.getElementById("h1");
    if (h1) {
        h1.innerText = `Xin chào, ${name}`;
    }
}
function dangXuat() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("rememberUser");
    window.location.href = "/ss36/b7,1.html";
}
window.onload = function () {
    let savedUser = JSON.parse(localStorage.getItem("rememberUser"));
    if (savedUser) {
        let currentPath = window.location.pathname;
        if (currentPath.includes("b7,1.html")) {
            nextLogIn("/ss36/b7,2.html");
        } if (currentPath.includes("b7,2.html")) {
            let currentUser = localStorage.getItem("currentUser");
            console.log("hello");
            console.log(currentUser)
            if (currentUser) {
                document.getElementById("welcomeMessage").innerText = `Xin chào, ${currentUser}!`;
            } else {
                window.location.href = "/ss36/b7,1.html";
            }
        } else {
            let nameInput = document.getElementById("nameInput");
            let passInput = document.getElementById("password");
            let checkbox = document.getElementById("checkbox");

            if (nameInput && passInput && checkbox) {
                nameInput.value = savedUser.name;
                passInput.value = savedUser.pass;
                checkbox.checked = true;
            }
        }
    }
};
