let numbers = [];
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`Nhập số nguyên thứ ${i + 1}: `));
    numbers.push(num);
}
let maxVal = numbers[0];
let maxIndex = 0;
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxVal) {
        maxVal = numbers[i];
        maxIndex = i;
    }
}
alert(`Phần tử lớn nhất trong mảng là ${maxVal} tại vị trí ${maxIndex}.`);
