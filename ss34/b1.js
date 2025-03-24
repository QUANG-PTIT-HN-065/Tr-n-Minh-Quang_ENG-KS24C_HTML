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
function sumbit () {
   event.preventDefault();
   let password = document.getElementById('password').value;
   let confirm = document.getElementById('confirm').value;
   if (checkEmail()) {
      alert('Email đã tồn tại')
      return;
   }
   if (password ==="" || confirm === "") {
      alert('Vui lòng nhập đầy đủ thông tin');
      return;
   }
   if (password === confirm) {
      let email = document.getElementById('email').value;
      let user = {
         email: email,
         password: password
      }
        acc.push(user)
      localStorage.setItem('user', JSON.stringify(user))
      alert('Đăng ký thành công')
   }else {
      alert('Mật khẩu không khớp')
   }
   localStorage.setItem('user', JSON.stringify(acc))
   window.location.href = 'b3.html'
}
function checkEmail() {
    let email = document.getElementById('email').value;
    for (let i = 0; i < acc.length; i++) {
        if (email === acc[i].email) {
            return true;
        }
    }
    return false;
}
getAcc()
// localStorage.clear();