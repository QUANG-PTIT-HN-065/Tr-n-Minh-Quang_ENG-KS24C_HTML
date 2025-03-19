let books = [];
let cart = [];
while (true) {
    let choice = prompt(`Chọn chức năng:
    1. Hiển thị danh sách sách theo thể loại
    2. Thêm sách mới vào kho
    3. Tìm kiếm sách theo tên hoặc ID
    4. Mua sách
    5. Sắp xếp sách theo giá (tăng/giảm dần)
    6. Tính tổng số lượng và tổng tiền trong giỏ hàng
    7. Hiển thị tổng số lượng sách trong kho
    8. Thoát
    Nhập số để chọn: `);
    switch (choice) {
        case '1':
            displayBooksByCategory();
            break;
        case '2':
            addBook();
            break;
        case '3':
            searchBook();
            break;
        case '4':
            buyBook();
            break;
        case '5':
            sortBooksByPrice();
            break;
        case '6':
            calculateCartTotal();
            break;
        case '7':
            displayTotalBooksInStock();
            break;
        case '8':
            alert("Thoát chương trình!");
            break;
        default:
            alert("Vui lòng chọn từ 1 đến 8!");
    }
    if (choice === '8') break;
}
function displayBooksByCategory() {
    let category = prompt("Nhập thể loại sách cần xem:");
    let filteredBooks = books.filter(book => book.category.toLowerCase() === category.toLowerCase());
    if (filteredBooks.length > 0) {
        alert(JSON.stringify(filteredBooks, null, 2));
    } else {
        alert("Không có sách thuộc thể loại này.");
    }
}
function addBook() {
    let id = Math.floor(Math.random() * 1000000);
    let name = prompt("Nhập tên sách:");
    let price = parseFloat(prompt("Nhập giá sách:"));
    let quantity = parseInt(prompt("Nhập số lượng sách:", 10));
    let category = prompt("Nhập thể loại sách:");
    books.push({ id, name, price, quantity, category });
    alert("Thêm sách thành công!");
}
function searchBook() {
    let query = prompt("Nhập tên sách hoặc ID sách cần tìm:");
    let foundBooks = books.filter(book => book.name.toLowerCase().includes(query.toLowerCase()) || book.id == query);
    if (foundBooks.length > 0) {
        alert(JSON.stringify(foundBooks, null, 2));
    } else {
        alert("Không tìm thấy sách!");
    }
}
function buyBook() {
    let id = parseInt(prompt("Nhập ID sách muốn mua:"), 10);
    let book = books.find(book => book.id === id);
    if (!book) {
        alert("Sách không có trong kho!");
        return;
    }
    let quantity = parseInt(prompt("Nhập số lượng muốn mua:"), 10);
    if (book.quantity < quantity) {
        alert("Không đủ sách trong kho!");
        return;
    }
    book.quantity -= quantity;
    cart.push({ id: book.id, name: book.name, price: book.price, quantity });
    alert("Mua sách thành công!");
}
function sortBooksByPrice() {
    let order = prompt("Nhập 'tăng' để sắp xếp tăng dần hoặc 'giảm' để sắp xếp giảm dần:");
    books.sort((a, b) => order === 'tăng' ? a.price - b.price : b.price - a.price);
    alert("Đã sắp xếp sách theo giá!");
}
function calculateCartTotal() {
    let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    let totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    alert(`Tổng số sách đã mua: ${totalQuantity}\nTổng tiền: ${totalPrice} VND`);
}
function displayTotalBooksInStock() {
    let totalStock = books.reduce((sum, book) => sum + book.quantity, 0);
    alert(`Tổng số lượng sách trong kho: ${totalStock}`);
}
