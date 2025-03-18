let products = [];

while (true) {
    let choice = prompt(`Chọn chức năng:
    1. Thêm sản phẩm
    2. Hiển thị tất cả sản phẩm
    3. Hiển thị chi tiết sản phẩm theo ID
    4. Cập nhật sản phẩm theo ID
    5. Xóa sản phẩm theo ID
    6. Lọc sản phẩm theo khoảng giá
    7. Thoát
    Nhập số để chọn:`);

    switch (choice) {
        case '1':
            addProduct();
            break;
        case '2':
            displayProducts();
            break;
        case '3':
            displayProductById();
            break;
        case '4':
            updateProduct();
            break;
        case '5':
            deleteProduct();
            break;
        case '6':
            filterProductsByPrice();
            break;
        case '7':
            alert("Thoát chương trình!");
            break;
        default:
            alert("Vui lòng chọn từ 1 đến 7!");
    }

    if (choice === '7') break;
}
function addProduct() {
    let id = Math.floor(Math.random() * 1000000);
    let name = prompt("Nhập tên sản phẩm:");
    let price = parseFloat(prompt("Nhập giá sản phẩm:"));
    let category = prompt("Nhập danh mục sản phẩm:");
    let quantity = parseInt(prompt("Nhập số lượng sản phẩm:"));

    let newProduct = { id, name, price, category, quantity };
    products.push(newProduct);
    console.log("Thêm sản phẩm thành công!");
}
function displayProducts() {
    if (products.length === 0) {
        console.log("Danh sách sản phẩm trống.");
        return;
    }
    let output = "Danh sách sản phẩm:\n";
    products.forEach(product => {
        output += `ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price} VND, Danh mục: ${product.category}, Số lượng: ${product.quantity}\n`;
    });
    console.log(output);
}
function displayProductById() {
    let id = parseInt(prompt("Nhập ID sản phẩm cần xem:"));
    let product = products.find(p => p.id === id);

    if (product) {
        console.log(`Chi tiết sản phẩm:
        ID: ${product.id}
        Tên: ${product.name}
        Giá: ${product.price} VND
        Danh mục: ${product.category}
        Số lượng: ${product.quantity}`);
    } else {
        console.log("Không tìm thấy sản phẩm với ID này!");
    }
}
function updateProduct() {
    let id = parseInt(prompt("Nhập ID sản phẩm cần cập nhật:"));
    let product = products.find(p => p.id === id);

    if (product) {
        product.name = prompt("Nhập tên mới:", product.name);
        product.price = parseFloat(prompt("Nhập giá mới:", product.price));
        product.category = prompt("Nhập danh mục mới:", product.category);
        product.quantity = parseInt(prompt("Nhập số lượng mới:", product.quantity));
        console.log("Cập nhật sản phẩm thành công!");
    } else {
        console.log("Không tìm thấy sản phẩm với ID này!");
    }
}
function deleteProduct() {
    let id = parseInt(prompt("Nhập ID sản phẩm cần xóa:"));
    let index = products.findIndex(p => p.id === id);

    if (index !== -1) {
        let confirmDelete = confirm(`Bạn có chắc muốn xóa sản phẩm "${products[index].name}" không?`);
        if (confirmDelete) {
            products.splice(index, 1);
            console.log("Sản phẩm đã được xóa!");
        } else {
            console.log("Hủy thao tác xóa.");
        }
    } else {
        console.log("Không tìm thấy sản phẩm với ID này!");
    }
}
function filterProductsByPrice() {
    let minPrice = parseFloat(prompt("Nhập giá thấp nhất:"));
    let maxPrice = parseFloat(prompt("Nhập giá cao nhất:"));

    let filteredProducts = products.filter(p => p.price >= minPrice && p.price <= maxPrice);

    if (filteredProducts.length > 0) {
        let output = "Danh sách sản phẩm trong khoảng giá:\n";
        filteredProducts.forEach(product => {
            output += `ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price} VND, Danh mục: ${product.category}, Số lượng: ${product.quantity}\n`;
        });
        console.log(output);
    } else {
        console.log("Không có sản phẩm nào trong khoảng giá này!");
    }
}
