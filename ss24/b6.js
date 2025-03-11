let str = "";
let choice;
do {
     choice = +prompt(`------ MENU ------
1. Nhập chuỗi
2. Hiển thị chuỗi
3. Tính độ dài của chuỗi
4. Đếm số lần xuất hiện của một ký tự
5. Kiểm tra chuỗi có phải là chuỗi đối xứng không
6. Chuyển đổi chuỗi thành chữ in hoa ký tự đầu tiên của mỗi từ
7. Thoát chương trình
Lựa chọn của bạn là gì?`);
    switch (choice) {
        case 1:
            str = prompt("Nhập chuỗi:");
            break;
        case 2:  
            console.log(`Chuỗi hiện tại: "${str}"`);
            break;
        case 3:  
            console.log(`Độ dài của chuỗi: ${str.length}`);
            break;
        case 4: 
            let charToFind = prompt("Nhập ký tự cần đếm:");
            let count = 0;
            for (let i = 0; i < str.length; i++) {
                if (str[i] === charToFind) {
                    count++;
                }
            }
            console.log(`Số lần xuất hiện của '${charToFind}': ${count}`);
            break;
        case 5:  
            let reversedStr = str.split("").reverse().join("");
            console.log(str === reversedStr ? "Chuỗi đối xứng." : "Chuỗi không đối xứng.");
            break;
        case 6:  
            let capitalizedStr = str.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
            console.log(`Chuỗi sau khi chuyển đổi: "${capitalizedStr}"`);
            break;
        case 7:  
            console.log("Thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại!");
            break;
    }
} while (choice !== 7);
