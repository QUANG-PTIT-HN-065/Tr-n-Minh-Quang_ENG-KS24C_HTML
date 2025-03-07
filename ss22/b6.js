let numbers = [3, 5, 7, 3, 8, 5, 3, 9, 3, 2]; 
let input = parseInt(prompt("Nhập vào một số nguyên:"));
let count = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === input) {
        count++;
    }
}
alert("Số " + input + " xuất hiện " + count + " lần trong mảng.");
