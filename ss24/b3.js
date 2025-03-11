let arr = [];
let choice;
do {
    choice = +prompt(`------ MENU ------
1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
4. Tính tổng và trung bình cộng của các số dương trong mảng
5. Đảo ngược mảng
6. Kiểm tra mảng có đối xứng không
7. Thoát chương trình
Lựa chọn của bạn là gì?`);
    switch (choice) {
        case 1:
            arr = [];
            let n = +prompt(`Nhập số lượng phần tử:`);
            for (let i = 0; i < n; i++) {
                let value = +prompt(`Nhập phần tử thứ ${i + 1}:`);
                arr.push(value);
            }
            break;
        case 2:
            console.log("Mảng hiện tại:", arr.join(", "));
            break;
        case 3:
            if (arr.length === 0) {
                console.log("Mảng trống.");
            } else {
                let max = arr[0];
                let indexes = [0];
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] > max) {
                        max = arr[i];
                        indexes = [i];
                    } else if (arr[i] === max) {
                        indexes.push(i);
                    }
                }
                console.log(`Phần tử lớn nhất: ${max}, xuất hiện tại vị trí: ${indexes.join(", ")}`);
            }
            break;
        case 4:
            let sum = 0;
            let count = 0;

            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > 0) {
                    sum += arr[i];
                    count++;
                }
            }
            let average = count > 0 ? sum / count : 0; 
            console.log(`Tổng các số dương: ${sum}`);
            console.log(`Trung bình cộng các số dương: ${average.toFixed(2)}`);
            break;
        case 5:
            arr.reverse();
            console.log("Mảng sau khi đảo ngược:", arr.join(", "));
            break;
        case 6:
            let isSymmetric = true;
            for (let i = 0; i < Math.floor(arr.length / 2); i++) {
                if (arr[i] !== arr[arr.length - 1 - i]) {
                    isSymmetric = false;
                    break;
                }
            }
            console.log(isSymmetric ? "Mảng đối xứng." : "Mảng không đối xứng.");
            break;
        case 7:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
            break;
    }
} while (choice != 7);
