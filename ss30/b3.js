let phones = [
    { id: 1, name: "iPhone 14", price: 25000000, quantity: 10, company: "Apple" },
    { id: 2, name: "Samsung Galaxy S23", price: 20000000, quantity: 15, company: "Samsung" },
    { id: 3, name: "Xiaomi Mi 13", price: 15000000, quantity: 20, company: "Xiaomi" }
];
let cart = [];

while (true) {
    let choice = prompt(`Chọn chức năng:
    1. Hiển thị điện thoại theo hãng
    2. Thêm điện thoại mới
    3. Tìm kiếm điện thoại
    4. Mua điện thoại
    5. Thanh toán
    6. Sắp xếp theo giá
    7. Tổng tiền điện thoại trong kho
    8. Tổng số lượng theo hãng
    9. Thoát
    Nhập số để chọn: `);

    switch (choice) {
        case '1': displayByCompany(); break;
        case '2': addPhone(); break;
        case '3': searchPhone(); break;
        case '4': buyPhone(); break;
        case '5': checkout(); break;
        case '6': sortPhones(); break;
        case '7': totalStockValue(); break;
        case '8': countPhonesByCompany(); break;
        case '9': alert("Thoát chương trình!"); break;
        default: alert("Vui lòng chọn từ 1 đến 9!");
    }
    if (choice === '9') break;
}

function displayByCompany() {
    let company = prompt("Nhập hãng điện thoại muốn xem: ");
    let filteredPhones = phones.filter(p => p.company.toLowerCase() === company.toLowerCase());
    if (filteredPhones.length === 0) {
        alert("Không có điện thoại thuộc hãng này!");
    } else {
        alert(JSON.stringify(filteredPhones, null, 2));
    }
}

function addPhone() {
    let id = Math.floor(Math.random() * 1000000);
    let name = prompt("Nhập tên điện thoại:");
    let price = parseFloat(prompt("Nhập giá điện thoại:"));
    let quantity = parseInt(prompt("Nhập số lượng:"));
    let company = prompt("Nhập hãng điện thoại:");
    phones.push({ id, name, price, quantity, company });
    alert("Thêm điện thoại thành công!");
}

function searchPhone() {
    let keyword = prompt("Nhập tên hoặc ID điện thoại cần tìm:");
    let result = phones.filter(p => p.name.toLowerCase().includes(keyword.toLowerCase()) || p.id == keyword);
    alert(result.length ? JSON.stringify(result, null, 2) : "Không tìm thấy điện thoại!");
}

function buyPhone() {
    let id = parseInt(prompt("Nhập ID điện thoại muốn mua:"));
    let phone = phones.find(p => p.id === id);
    if (!phone) {
        alert("Không tìm thấy điện thoại!");
        return;
    }
    let quantity = parseInt(prompt("Nhập số lượng muốn mua:"));
    if (quantity > phone.quantity) {
        alert("Không đủ số lượng trong kho!");
        return;
    }
    cart.push({ ...phone, quantity });
    phone.quantity -= quantity;
    alert("Mua thành công!");
}

function checkout() {
    if (cart.length === 0) {
        alert("Giỏ hàng trống!");
        return;
    }
    let total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);
    alert(`Tổng tiền: ${total} VND\nThanh toán thành công!`);
    cart = [];
}
function sortPhones() {
    let order = prompt("Sắp xếp theo giá tăng dần (1) hay giảm dần (2)?");
    phones.sort((a, b) => order === '1' ? a.price - b.price : b.price - a.price);
    alert("Đã sắp xếp điện thoại!");
}
function totalStockValue() {
    let total = phones.reduce((sum, p) => sum + p.price * p.quantity, 0);
    alert(`Tổng giá trị kho hàng: ${total} VND`);
}
function countPhonesByCompany() {
    let counts = {};
    phones.forEach(p => counts[p.company] = (counts[p.company] || 0) + p.quantity);
    alert(JSON.stringify(counts, null, 2));
}