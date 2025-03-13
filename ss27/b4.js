function integerProcessor() {
    let numbers = [];
    while (true) {
        let choice = prompt(`Chọn chức năng:
1. Nhập danh sách số nguyên
2. Tính trung bình các số
3. Tìm số chẵn lớn nhấ
n4. Tìm số lẻ nhỏ nhất
5. Thoát`);
        if (choice === '5') {
            alert("Thoát chương trình.");
            break;
        }
        switch (choice) {
            case '1':
                let count = parseInt(prompt("Nhập số lượng số nguyên:"));
                for (let i = 0; i < count; i++) {
                    let num = parseInt(prompt(`Nhập số nguyên thứ ${i + 1}:`));
                    numbers.push(num);
                }
                break;
            case '2':
                if (numbers.length === 0) {
                    alert("Danh sách trống, vui lòng nhập số trước.");
                } else {
                    let sum = numbers.reduce((acc, val) => acc + val, 0);
                    let avg = sum / numbers.length;
                    alert(`Trung bình các số: ${avg.toFixed(2)}`);
                }
                break;
            case '3':
                let evenNumbers = numbers.filter(num => num % 2 === 0);
                if (evenNumbers.length > 0) {
                    let maxEven = Math.max(...evenNumbers);
                    alert(`Số chẵn lớn nhất: ${maxEven}`);
                } else {
                    alert("Không có số chẵn trong danh sách.");
                }
                break;
            case '4':
                let oddNumbers = numbers.filter(num => num % 2 !== 0);
                if (oddNumbers.length > 0) {
                    let minOdd = Math.min(...oddNumbers);
                    alert(`Số lẻ nhỏ nhất: ${minOdd}`);
                } else {
                    alert("Không có số lẻ trong danh sách.");
                }
                break;
            default:
                alert("Lựa chọn không hợp lệ, vui lòng thử lại.");
        }
    }
}
integerProcessor();
