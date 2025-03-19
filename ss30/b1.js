let products = [
    { id: 1, name: "mèn mén", price: 20000, quantity: 20, category: "món ăn dân tộc Mông" },
    { id: 2, name: "mứt", price: 80000, quantity: 21, category: "món ăn dân tộc Kinh" },
    { id: 3, name: "cơm lam", price: 40000, quantity: 15, category: "món ăn dân tộc Mông" },
    { id: 4, name: "bánh đậu xanh", price: 60000, quantity: 30, category: "món ăn dân tộc Kinh" }
];

let cart = [];

while (true) {
    let choice = prompt(`Chọn chức năng:
    1. Hiển thị sản phẩm theo danh mục
    2. Chọn sản phẩm để mua
    3. Sắp xếp sản phẩm theo giá (Tăng dần)
    4. Sắp xếp sản phẩm theo giá (Giảm dần)
    5. Hiển thị giỏ hàng & tính tổng tiền
    6. Thoát
    Nhập số để chọn:`);

    switch (choice) {
        case '1':
            displayProductsByCategory();
            break;
        case '2':
            buyProduct();
            break;
        case '3':
            sortProduct()
            break;
        case '4':
            displayCart();
            break;
        case '5':
            break;
        default:
            alert("Vui lòng chọn từ 1 đến 6!");
    }

    if (choice === '6') break;
}
function displayProductsByCategory() {
    let categories = [...new Set(products.map(p => p.category))];
    let output = "Danh sách sản phẩm theo danh mục:\n";
    categories.forEach(category => {
        output += `\n${category}:\n`;
        products.filter(p => p.category === category).forEach(p => {
            output += `- ID: ${p.id}, Tên: ${p.name}, Giá: ${p.price} VND, Số lượng: ${p.quantity}\n`;
        });
    });
    alert(output);
}
function buyProduct() {
    let id = parseInt(prompt("Nhập ID sản phẩm muốn mua:"));
    let product = products.find(p => p.id === id);

    if (!product) {
        alert("Sản phẩm không có trong cửa hàng!");
        return;
    }

    let quantity = parseInt(prompt(`Nhập số lượng muốn mua (${product.name} - Còn ${product.quantity} sản phẩm):`));

    if (quantity > product.quantity) {
        alert("Số lượng không đủ trong kho!");
        return;
    }

    if (quantity <= 0) {
        alert("Số lượng không hợp lệ!");
        return;
    }

    let cartItem = cart.find(p => p.id === id);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, quantity });
    }

    product.quantity -= quantity;
    alert("Thêm vào giỏ hàng thành công!");
}
function sortProduct(params) {
    let choice = prompt(`a. tăng dần 
b. giảm dần`)
    if (choice == 'a') {
        sortProductsByPrice(true);
    }else if (choice == 'b') {
        sortProductsByPrice(false);
    }
}
function sortProductsByPrice(ascending) {
    products.sort((a, b) => ascending ? a.price - b.price : b.price - a.price);
    let order = ascending ? "tăng dần" : "giảm dần";
    alert(`Sản phẩm đã được sắp xếp theo giá ${order}.`);
    displayProductsByCategory();
}
function displayCart() {
    if (cart.length === 0) {
        alert("Giỏ hàng trống.");
        return;
    }

    let total = 0;
    let output = "Giỏ hàng của bạn:\n";
    cart.forEach(item => {
        output += `- ${item.name}: ${item.quantity} x ${item.price} VND = ${item.quantity * item.price} VND\n`;
        total += item.quantity * item.price;
    });

    output += `\nTổng tiền: ${total} VND`;
    alert(output);
}
