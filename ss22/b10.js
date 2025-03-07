let choice;
let arr = [];
let n;
do {
    choice = +prompt(`1. nhập vào mảng
2. hiển thị mảng
3. thêm phần tử
4. sửa phần tử
5. xoá phần tử
6. nhập vào mảng`);
    switch (choice) {
        case 1:
            n = +prompt(`nhập số lượng phần tử muốn nhập`);
            for (let index = arr.length; index < n; index++) {
                let valu = prompt(`nhập vào phần tử thứ ${index + 1}:`);
                arr[index] = valu;
            }
            console.log(arr);
            break;
        case 2:
            for (let index = 0; index < arr.length; index++) {
                document.write(`${arr[index]} <br>`);
            }
            break;
        case 3:
            let valu = prompt(`nhập vào phần tử thứ ${index + 1}:`);

            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        default:
            alert(`lỗi.....`);
            break;
    }
} while (choice != 6);
