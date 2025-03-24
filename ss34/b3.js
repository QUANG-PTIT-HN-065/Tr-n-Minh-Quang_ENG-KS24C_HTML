let acc = []
function getAcc() {
    let data = localStorage.getItem('user');
    if (data) {
        acc = JSON.parse(data); 
    } else {
        acc = []; 
    }
    console.log(acc);
}
function longIn () {
    event.preventDefault();
    getAcc()
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    if (checkEmail(email,password)) {
        alert('Đăng nhập thành công')
        window.location.href = 'b2.html'
    }else {
        alert('Email không tồn tại')
    }
}
function checkEmail(email,password) {
    for (let i = 0; i < acc.length; i++) {
        if (email === acc[i].email && password === acc[i].password) {
            return true;
        }
    }
    return false;
}
function signUP(){
    window.location.href = 'b1.html'
}