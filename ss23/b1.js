let numbers = [];
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`Nhập số nguyên thứ ${i + 1}: `));
    numbers.push(num);
}
let count = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 10) {
        count++;
    }
}
alert(`Có ${count} số nguyên lớn hơn hoặc bằng 10 trong mảng.`);
