let number = parseInt(prompt("Nhập một số nguyên:"))
if (isNaN(number)) {
    alert("Vui lòng nhập một số hợp lệ!");
} else if (number % 3 === 0 && number % 5 === 0) {
    alert(number + " chia hết cho cả 3 và 5.");
} else {
    alert(number + " KHÔNG chia hết cho cả 3 và 5.");
}
