function filterValidEmails(emailList) {
    if (emailList.length == 0) {
        return `mảng khong có phần tử`
    }
    if (!Array.isArray(emailList)) {
        return `dữ liệu không hợp lệ`
    }else {
        return emailList.filter(email => email.includes('@') && !email.includes(" "))
    }
}
console.log(filterValidEmails(["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", " @out.com"]))
console.log(filterValidEmails([]))
console.log(filterValidEmails("absd"))