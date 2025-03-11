let arr = [];
do {
    let choice = +prompt(`------ MENU ------
1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
4. tỉnh tổng các phần tử trong mảng
5. Tìm số lần xuất hiện của phần tử trong mảng
6. Sắp xếp mảng tăng dần
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
                if (i > max) {
                    max = i;
                }else if (i < min) {
                    min = i ;
                }
            }
            console.log(`lớp nhất ${max} \n nhỏ nhất ${min}`)
            break;
        case 4:
            let total =0; 
            for (const i of arr) {
                total += i;
            }
            break;
        case 5:
            let count = 0;
            let m = +prompt(`nhập số muốn tìm`);
            for (const i of arr) {
                if (i == m) {
                    count ++;
                }
            }
            if (count == 0) {
                console.log(`ko có phần tủ trong mảng`);
            }else {
                console.log(`phần tử xuất hiện ${count} lần`)
            }
            break;
        case 6:
            arr.sort((a, b) => a - b);
            break;
        case 7:
            break;
        default:
            break;
    }
} while (choice != 7);
