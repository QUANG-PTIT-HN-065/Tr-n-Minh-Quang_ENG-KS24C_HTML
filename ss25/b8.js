function isStrongPassword(password) {
    if (password.length < 8) {
        return false;
    }
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (char >= "A" && char <= "Z") {
            hasUpper = true;
        } else if (char >= "a" && char <= "z") {
            hasLower = true;
        } else if (char >= "0" && char <= "9") {
            hasNumber = true;
        }
        if (hasUpper && hasLower && hasNumber) {
            return true;
        }
    }
    return false;
}
console.log(isStrongPassword("Abc12345")); 
console.log(isStrongPassword("abc12345")); 
console.log(isStrongPassword("ABC12345")); 
console.log(isStrongPassword("Abcdefgh")); 
console.log(isStrongPassword("A1b"));