let arr = [];
let choice
do {
    choice = +prompt(`------ MENU ------
1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
5. Tính trung bình cộng các phần tử của một hàng cụ thể
6. Đảo ngược các hàng trong mảng
7. Thoát chương trình
Lựa chọn của bạn là gì?`);  
    switch (choice) {
        case 1:
            let rows = +prompt("Nhập số hàng:");
            let cols = +prompt("Nhập số cột:");
            arr = [];
            for (let i = 0; i < rows; i++) {
                arr[i] = [];
                for (let j = 0; j < cols; j++) {
                    arr[i][j] = +prompt(`Nhập phần tử arr[${i+1}][${j+1}]:`);
                }
            }
            break;

        case 2:
            console.log("Mảng 2 chiều:");
            for (let i = 0; i < arr.length; i++) {
                console.log(arr[i].join(" "));
            }
            break;

        case 3:
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    sum += arr[i][j];
                }
            }
            console.log(`Tổng các phần tử: ${sum}`);
            break;

        case 4:
            let max = arr[0][0];
            let maxIndex = [0, 0];
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    if (arr[i][j] > max) {
                        max = arr[i][j];
                        maxIndex = [i, j];
                    }
                }
            }
            console.log(`Phần tử lớn nhất: ${max} tại vị trí [${maxIndex[0]+1}][${maxIndex[1]+1}]`);
            break;
        case 5:
            let rowIndex = +prompt("Nhập số hàng cần tính trung bình cộng:");
            if (rowIndex >= 0 && rowIndex < arr.length) {
                let sum = 0;
                let count = arr[rowIndex].length;
                for (let j = 0; j < count; j++) {
                    sum += arr[rowIndex][j];
                }
                let average = count > 0 ? sum / count : 0;
                console.log(`Trung bình cộng hàng ${rowIndex}: ${average.toFixed(2)}`);
            } else {
                console.log("Hàng không hợp lệ!");
            }
            break;
        case 6:
            arr.reverse();
            console.log("Mảng sau khi đảo ngược các hàng:");
            for (let i = 0; i < arr.length; i++) {
                console.log(arr[i].join(" "));
            }
            break;
        case 7:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại!");
            break;
    }
} while (choice != 7);
