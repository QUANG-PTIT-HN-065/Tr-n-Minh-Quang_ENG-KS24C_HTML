let arr = [];
let choice;
do {
     choice = +prompt(`------ MENU ------
1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tính tổng đường chéo chính
5. Tính tổng đường chéo phụ
6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột
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
                    arr[i][j] = +prompt(`Nhập phần tử arr[${i}][${j}]:`);
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
            if (arr.length !== arr[0].length) {
                console.log("Không phải ma trận vuông, không thể tính tổng đường chéo chính!");
                break;
            }
            let sumMainDiagonal = 0;
            for (let i = 0; i < arr.length; i++) {
                sumMainDiagonal += arr[i][i];
            }
            console.log(`Tổng đường chéo chính: ${sumMainDiagonal}`);
            break;

        case 5:  
            if (arr.length !== arr[0].length) {
                console.log("Không phải ma trận vuông, không thể tính tổng đường chéo phụ!");
                break;
            }
            let sumSecondaryDiagonal = 0;
            for (let i = 0; i < arr.length; i++) {
                sumSecondaryDiagonal += arr[i][arr.length - 1 - i];
            }
            console.log(`Tổng đường chéo phụ: ${sumSecondaryDiagonal}`);
            break;
        case 6:  
            let option = prompt("Bạn muốn tính trung bình cộng theo hàng (H) hay cột (C)?").toUpperCase();
            if (option === "H") {
                let rowIndex = +prompt("Nhập số hàng cần tính trung bình cộng:");
                if (rowIndex >= 0 && rowIndex < arr.length) {
                    let rowSum = 0;
                    for (let j = 0; j < arr[rowIndex].length; j++) {
                        rowSum += arr[rowIndex][j];
                    }
                    let avg = rowSum / arr[rowIndex].length;
                    console.log(`Trung bình cộng hàng ${rowIndex}: ${avg.toFixed(2)}`);
                } else {
                    console.log("Hàng không hợp lệ!");
                }
            } else if (option === "C") {
                let colIndex = +prompt("Nhập số cột cần tính trung bình cộng:");
                if (colIndex >= 0 && colIndex < arr[0].length) {
                    let colSum = 0, count = arr.length;
                    for (let i = 0; i < arr.length; i++) {
                        colSum += arr[i][colIndex];
                    }
                    let avg = colSum / count;
                    console.log(`Trung bình cộng cột ${colIndex}: ${avg.toFixed(2)}`);
                } else {
                    console.log("Cột không hợp lệ!");
                }
            } else {
                console.log("Lựa chọn không hợp lệ!");
            }
            break;
        case 7:  
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại!");
            break;
    }
} while (choice !== 7);
