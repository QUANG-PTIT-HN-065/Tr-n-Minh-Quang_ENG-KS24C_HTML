let tongLe = 0;
for (let i = 1; i <= 5; i++) {
    let so = parseInt(prompt(`Nhập số nguyên thứ ${i}:`));
    if ( so % 2 !== 0) {
        tongLe += so;
    }
}
alert(`Tổng các số lẻ là: ${tongLe}`);
