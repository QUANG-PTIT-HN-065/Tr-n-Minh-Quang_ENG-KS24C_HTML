function validateEmail() {
    let email = document.getElementById("email").value;
    let result = document.getElementById("result");
    if (email.includes("@") && (email.endsWith(".com") || email.endsWith(".vn"))) {
        check(true);
    } else {
        check(false);
    }
    checkEmail(email);
}
function countOccurrences(str, subStr) {
    return str.split(subStr).length - 1;
}
function checkEmail(email) {
    let atCount = countOccurrences(email, "@");
    let comCount = countOccurrences(email, ".com");
    let vnCount = countOccurrences(email, ".vn");
    if (atCount === 1 && (comCount === 1 || vnCount === 1)) {
        check(true);
    } else {
        check(false);
    }
}
function check(check) {
    if (check) {
        result.innerHTML = "Email hợp lệ";
        result.style.color = "green";
    } else {
        result.innerHTML = "Email không hợp lệ";
        result.style.color = "red";
    }
}