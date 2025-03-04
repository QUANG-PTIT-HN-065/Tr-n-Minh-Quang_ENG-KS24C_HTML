let char = prompt("Nhập một ký tự:");
let result;
if (char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z') {
    result = "Ký tự " + char + " là một chữ cái.";
} else {
    result = "Ký tự " + char + " không phải là chữ cái.";
}
alert(result);