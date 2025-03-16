let books = [];

while (true) {
    let choice = prompt(`Chọn chức năng:
    1. Thêm sách mới
    2. Hiển thị danh sách sách
    3. Tìm kiếm sách theo tiêu đề
    4. Cập nhật trạng thái mượn/trả sách
    5. Xóa sách theo ID
    6. Sắp xếp sách theo giá tăng dần
    7. Thoát
    Nhập số để chọn: `);

    switch (choice) {
        case '1':
            addBook();
            break;
        case '2':
            displayBooks();
            break;
        case '3':
            searchBook();
            break;
        case '4':
            updateBookStatus();
            break;
        case '5':
            deleteBook();
            break;
        case '6':
            sortBooksByPrice();
            break;
        case '7':
            alert("Thoát chương trình!");
            break;
        default:
            alert("Vui lòng chọn từ 1 đến 7!");
    }

    if (choice === '7') break;
}

function addBook() {
    let id = Math.floor(Math.random() * 1000000);
    let title = prompt("Nhập tên sách:");
    let author = prompt("Nhập tên tác giả:");
    let year = parseInt(prompt("Nhập năm xuất bản:"));
    let price = parseFloat(prompt("Nhập giá sách:"));
    let isAvailable = confirm("Sách có sẵn để mượn không? (OK: Có, Cancel: Không)");

    let newBook = { id, title, author, year, price, isAvailable };
    books.push(newBook);
    alert("Thêm sách thành công!");
}
function displayBooks() {
    if (books.length === 0) {
        alert("Không có sách nào trong thư viện.");
        return;
    }
    let output = "Danh sách sách trong thư viện:\n";
    books.forEach(book => {
        output += `ID: ${book.id}, Tên: ${book.title}, Tác giả: ${book.author}, Năm: ${book.year}, Giá: ${book.price} VND, Trạng thái: ${book.isAvailable ? "Có sẵn" : "Đã mượn"}\n`;
    });
    alert(output);
}
function searchBook() {
    let titleSearch = prompt("Nhập tiêu đề sách cần tìm:");
    let results = books.filter(book => book.title.toLowerCase().includes(titleSearch.toLowerCase()));

    if (results.length > 0) {
        let output = "Kết quả tìm kiếm:\n";
        results.forEach(book => {
            output += `ID: ${book.id}, Tên: ${book.title}, Tác giả: ${book.author}, Giá: ${book.price} VND, Trạng thái: ${book.isAvailable ? "Có sẵn" : "Đã mượn"}\n`;
        });
        alert(output);
    } else {
        alert("Không tìm thấy sách nào!");
    }
}
function updateBookStatus() {
    let id = parseInt(prompt("Nhập ID sách cần cập nhật trạng thái:"));
    let book = books.find(book => book.id === id);

    if (book) {
        book.isAvailable = !book.isAvailable;
        alert(`Cập nhật trạng thái thành công! Sách hiện tại: ${book.isAvailable ? "Có sẵn" : "Đã mượn"}`);
    } else {
        alert("Không tìm thấy sách với ID này!");
    }
}
function deleteBook() {
    let id = parseInt(prompt("Nhập ID sách cần xóa:"));
    let index = books.findIndex(book => book.id === id);

    if (index !== -1) {
        let confirmDelete = confirm(`Bạn có chắc muốn xóa sách "${books[index].title}" không?`);
        if (confirmDelete) {
            books.splice(index, 1);
            alert("Sách đã được xóa!");
        } else {
            alert("Hủy thao tác xóa.");
        }
    } else {
        alert("Không tìm thấy sách với ID này!");
    }
}
function sortBooksByPrice() {
    if (books.length === 0) {
        alert("Không có sách nào để sắp xếp.");
        return;
    }
    books.sort((a, b) => a.price - b.price);
    alert("Đã sắp xếp sách theo giá tăng dần!");
}
