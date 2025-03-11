let arr = [];
let choice;
do {
    choice = +prompt(`------ MENU ------
1. Nhập mảng số nguyên
2. Hiển thị mảng
3. tìm các phần tử chẵn lẻ
4. Tính trung bình cộng của mảng
5. Xóa phần tử tại vị trí chỉ định
6. Tìm phần tử lớn thứ hai trong mảng
7. Thoát chuong trình
Lựa chọn của bạn là gì?`);
    switch (choice) {
        case 1:
            let n = +prompt(`nhập số lượng cần thêm `);
            for (let i = 0; i < n; i++) {
                let valu = +prompt(`nhập phần tử thứ ${i + 1}`)
                arr[i] = valu;
            }
            break;
        case 2:
            for (const i of arr) {
                console.log(`${i}`)
            }
            break;
        case 3:
            let max = 0;
            let min = 0;
            for (const i of arr) {
                if (i % 2 == 0) {
                    console.log(`phần tử chẵn ${i}`)
                }
            }
            for (const i of arr) {
                if (i % 2 != 0) {
                    console.log(` phần tử lẻ ${i}`)
                }
            }
            break;
        case 4:
            let total = 0;
            let idex = 0;
            for (const i of arr) {
                total += i;
                count++;
            }
            if (count > 0) {
                total = total / count;
                console.log(`Giá trị trung bình: ${total}`);
            } else {
                console.log("Mảng rỗng, không thể tính trung bình.");
            }
            break;
        case 5:
            let m = +prompt(`nhập vị trí muốn xoá`);
            if (m > 0 && m < arr.length) {
                arr.splice(m, 1);
            } else {
                alert(`không hợp lệ`);
            }
            break;
        case 6:
            let max1 = -Infinity; 
            let max2 = -Infinity;
            for (const i of arr) {
                if (i > max1) {
                    max2 = max1
                    max1 = i
                } else if (i > max2 && i < max1) { 
                    max2 = i; 
                }
            }
            alert(`phần tử lớp thứ 2 ${max2}`);
            break;
        case 7:
            break;
        default:
            break;
    }
} while (choice != 7);