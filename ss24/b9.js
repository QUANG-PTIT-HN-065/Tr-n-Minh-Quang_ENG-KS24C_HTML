let str = ""; 
let choice;
do {
     choice = +prompt(`------ MENU ------
1. Nhập chuỗi ký tự
2. Hiển thị chuỗi ký tự
3. Đếm số lượng ký tự chữ cái và số trong chuỗi
4. Chuyển đổi chữ hoa thành chữ thường và ngược lại
5. Trộn lẫn các ký tự của chuỗi gốc với chuỗi thứ 2
6. Sắp xếp từ trong chuỗi theo độ dài tăng dần
7. Thoát chương trình
Lựa chọn của bạn:`);
    switch (choice) {
        case 1:
            str = prompt("Nhập chuỗi:");
            break;
        case 2:
            console.log(`Chuỗi hiện tại: "${str}"`);
            break;
        case 3: { 
            let letters = 0, digits = 0;
            for (let char of str) {
                if (/[a-zA-Z]/.test(char)) letters++;
                else if (/[0-9]/.test(char)) digits++;
            }
            console.log(`Số lượng chữ cái: ${letters}, Số lượng chữ số: ${digits}`);
            break;
        }

       case 4: { 
            let convertedStr = str.split("").map(char => 
                char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
            ).join("");
            console.log(`Chuỗi sau khi chuyển đổi: "${convertedStr}"`);
            break;
        }
        case 5: { 
            let str2 = prompt("Nhập chuỗi thứ hai:");
            let mixedStr = "";
            let maxLength = Math.max(str.length, str2.length);
            for (let i = 0; i < maxLength; i++) {
                if (i < str.length) mixedStr += str[i];
                if (i < str2.length) mixedStr += str2[i];
            }
            console.log(`Chuỗi sau khi trộn: "${mixedStr}"`);
            break;
        }

       case 6: {
            let sortedWords = str.trim().split(/\s+/).sort((a, b) => a.length - b.length);
            console.log(`Chuỗi sau khi sắp xếp: "${sortedWords.join(" ")}"`);
            break;
        }
        case 7:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ! Vui lòng nhập từ 1 đến 7.");
            break;
    }
} while (choice !== 7);
