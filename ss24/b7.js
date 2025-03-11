let str = ""; 
let choice;
do {
     choice = +prompt(`------ MENU ------
1. Nhập chuỗi
2. Hiển thị chuỗi
3. Loại bỏ khoảng trắng ở đầu và cuối chuỗi
4. Đảo ngược chuỗi ký tự
5. Đếm số lượng từ trong chuỗi ký tự
6. Tìm kiếm và thay thế ký tự trong chuỗi
7. Thoát chương trình
Lựa chọn của bạn:`);
    switch (choice) {
        case 1:
            str = prompt("Nhập chuỗi:");
            break;
        case 2:
            console.log(`Chuỗi hiện tại: "${str}"`);
            break;
        case 3: 
            str = str.trim();
            console.log(`Chuỗi sau khi loại bỏ khoảng trắng: "${str}"`);
            break;
        case 4: 
            let reversedStr = str.split("").reverse().join("");
            console.log(`Chuỗi sau khi đảo ngược: "${reversedStr}"`);
            break;

        case 5:
            let wordCount = str.split(" ").length;
            console.log(`Số lượng từ trong chuỗi: ${wordCount}`);
            break;
        case 6: 
            let findChar = prompt("Nhập ký tự cần tìm:");
            if (str.includes(findChar)) {
                let replaceChar = prompt("Nhập ký tự thay thế:");
                str = str.replaceAll(findChar, replaceChar);
                console.log(`Chuỗi sau khi thay thế: "${str}"`);
            } else {
                console.log("Không tìm thấy ký tự trong chuỗi.");
            }
            break;
        case 7:
            console.log("Thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ! Vui lòng nhập từ 1 đến 7.");
            break;
    }
} while (choice !== 7);
