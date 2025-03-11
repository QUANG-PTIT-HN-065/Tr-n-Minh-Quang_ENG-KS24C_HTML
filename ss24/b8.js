let str = ""; 
let choice;
do {
     choice = +prompt(`------ MENU ------
1. Nhập chuỗi ký tự
2. Hiển thị chuỗi ký tự
3. Tìm tất cả các từ con trùng lặp và số lần xuất hiện
4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi
5. Tìm ký tự xuất hiện nhiều nhất trong chuỗi
6. Chuyển đổi chuỗi thành dạng snake_case
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
            let words = str.toLowerCase().trim().split(/\s+/);
            let wordCount = {};
            words.forEach(word => {
                wordCount[word] = (wordCount[word] || 0) + 1;
            });
            console.log("Các từ con trùng lặp:");
            for (let word in wordCount) {
                if (wordCount[word] > 1) {
                    console.log(`"${word}" xuất hiện ${wordCount[word]} lần`);
                }
            }
            break;
        }
        case 4: { 
            let words = str.trim().split(/\s+/);
            let minWord = words[0];
            let maxWord = words[0];
            for (let word of words) {
                if (word.length > maxWord.length) maxWord = word;
                if (word.length < minWord.length) minWord = word;
            }
            console.log(`Từ dài nhất: "${maxWord}" (${maxWord.length} ký tự)`);
            console.log(`Từ ngắn nhất: "${minWord}" (${minWord.length} ký tự)`);
            break;
        }
        case 5: { 
            let charCount = {};
            for (let char of str) {
                if (char !== " ") { 
                    charCount[char] = (charCount[char] || 0) + 1;
                }
            }
            let maxCount = Math.max(...Object.values(charCount));
            let maxChars = Object.keys(charCount).filter(char => charCount[char] === maxCount);
            console.log(`Ký tự xuất hiện nhiều nhất: ${maxChars.join(", ")} (${maxCount} lần)`);
            break;
        }
        case 6: { 
            let snakeCaseStr = str.trim().toLowerCase().replace(/\s+/g, "_");
            console.log(`Chuỗi dạng snake_case: "${snakeCaseStr}"`);
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
