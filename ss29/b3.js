let menu = {};

while (true) {
    let choice = prompt(`Chọn chức năng:
    1. Thêm món ăn vào danh mục
    2. Xóa món ăn theo tên
    3. Cập nhật thông tin món ăn
    4. Hiển thị toàn bộ menu
    5. Tìm kiếm món ăn theo tên
    6. Thoát
    Nhập số để chọn: `);

    switch (choice) {
        case '1':
            addDish();
            break;
        case '2':
            deleteDish();
            break;
        case '3':
            updateDish();
            break;
        case '4':
            displayMenu();
            break;
        case '5':
            searchDish();
            break;
        case '6':
            alert("Thoát chương trình!");
            break;
        default:
            alert("Vui lòng chọn từ 1 đến 6!");
    }

    if (choice === '6') break;
}
function addDish() {
    let category = prompt("Nhập tên danh mục:");
    let name = prompt("Nhập tên món ăn:");
    let price = parseFloat(prompt("Nhập giá món ăn:"));
    let description = prompt("Nhập mô tả món ăn:");

    if (!menu[category]) {
        menu[category] = [];
    }

    menu[category].push({ name, price, description });
    console.log(`Đã thêm món "${name}" vào danh mục "${category}".`);
}
function deleteDish() {
    let category = prompt("Nhập tên danh mục:");
    if (!menu[category]) {
        console.log("Danh mục không tồn tại!");
        return;
    }

    let name = prompt("Nhập tên món ăn cần xóa:");
    let index = menu[category].findIndex(dish => dish.name === name);

    if (index !== -1) {
        menu[category].splice(index, 1);
        console.log(`Món "${name}" đã được xóa khỏi danh mục "${category}".`);
    } else {
        console.log("Không tìm thấy món ăn này!");
    }
}
function updateDish() {
    let category = prompt("Nhập tên danh mục:");
    if (!menu[category]) {
        console.log("Danh mục không tồn tại!");
        return;
    }

    let name = prompt("Nhập tên món ăn cần cập nhật:");
    let dish = menu[category].find(dish => dish.name === name);

    if (dish) {
        dish.name = prompt("Nhập tên mới:", dish.name);
        dish.price = parseFloat(prompt("Nhập giá mới:", dish.price));
        dish.description = prompt("Nhập mô tả mới:", dish.description);
        console.log("Cập nhật thành công!");
    } else {
        console.log("Không tìm thấy món ăn này!");
    }
}
function displayMenu() {
    if (Object.keys(menu).length === 0) {
        console.log("Menu hiện đang trống.");
        return;
    }

    let output = "===== MENU NHÀ HÀNG =====\n";
    for (let category in menu) {
        output += `\n** ${category.toUpperCase()} **\n`;
        menu[category].forEach(dish => {
            output += `- ${dish.name}: ${dish.price} VND\n  Mô tả: ${dish.description}\n`;
        });
    }
    console.log(output);
}
function searchDish() {
    let searchName = prompt("Nhập tên món ăn cần tìm:");
    let results = [];

    for (let category in menu) {
        menu[category].forEach(dish => {
            if (dish.name.toLowerCase().includes(searchName.toLowerCase())) {
                results.push(`- ${dish.name} (${dish.price} VND) - ${category}\n  Mô tả: ${dish.description}`);
            }
        });
    }

    if (results.length > 0) {
        console.log("Kết quả tìm kiếm:\n" + results.join("\n"));
    } else {
        console.log("Không tìm thấy món ăn nào!");
    }
}
