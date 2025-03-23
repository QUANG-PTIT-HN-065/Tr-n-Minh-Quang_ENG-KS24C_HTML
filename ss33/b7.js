var total = 0;
const products = [
    {
        id: 1,
        name: 'Điện thoại Samsung Galaxy A54',
        price: 7490000,
        image: 'https://cdn.tgdd.vn/Products/Images/42/335177/samsung-galaxy-a56-5g-green-thumb-600x600.jpg'
    },
    {
        id: 2,
        name: 'Laptop Dell Inspiron 15',
        price: 15990000,
        image: 'https://bizweb.dktcdn.net/100/446/400/products/laptop-dell-vostro-3490-1-gia-loc.jpg?v=1699258008053'
    },
    {
        id: 3,
        name: 'Tai nghe AirPods Pro',
        price: 4990000,
        image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH?wid=750&hei=556&fmt=jpeg&qlt=90&.v=1724041668836'
    },
    {
        id: 4,
        name: 'Đồng hồ thông minh Apple Watch',
        price: 8990000,
        image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=TnVrdDZWRlZzTURKbHFqOGh0dGpVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzR2eDMxaWg4TFhITTVrUW41Z084dENpYmZuSTdFUnErS0g3SWYxazQrNDdyRzE3K0tORmZaUy9vOVdqTEp2dmJNL3gwYlE3R0w4Z1RCbG9qQTd1MjYyL1owaE5aVCt2Ri82aDRacTg0bXlaZA'
    },
    {
        id: 5,
        name: 'Máy ảnh Canon EOS M50',
        price: 12490000,
        image: 'https://cdn.vjshop.vn/may-anh/mirrorless/canon/canon-eos-r50/black-18-45/canon-eos-r50-lens-18-45mm-500x500.jpg'
    },
    {
        id: 6,
        name: 'Loa Bluetooth JBL Flip 5',
        price: 2190000,
        image: 'https://bizweb.dktcdn.net/100/445/498/products/jbl-go-4-3-4-left-black-48178-x1.jpg?v=1732646465910'
    },
    {
        id: 7,
        name: 'Bàn phím cơ Logitech G Pro',
        price: 2490000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MvD76Mt-Ne0IC2DPMMsTZpG05xDxJOzkqw&s'
    },
    {
        id: 8,
        name: 'Chuột không dây Logitech MX Master',
        price: 1890000,
        image: 'https://product.hstatic.net/200000722513/product/h_mx_master_3_wireless__graphite_.jpg_1e5491e35f754dcc90b90582a9c3be95_ca0c63ca59de4ed1b4d46fcc5c81c1ed.png'
    }
];
let cart = [];
function showProducts() {
    let resultElement = document.getElementById("product-grid");
    resultElement.innerHTML = "";
    products.forEach(function (product) {
        let div = document.createElement("div");
        div.innerHTML = `<div class="product-card">
            <img src="${product.image}" alt="${product.name}" />
            <h4>${product.name}</h4>
            <p class="p">${product.price.toLocaleString()} <sup><u>đ</u></sup></p>
            <button class="button1" onclick="addToCart(${product.id})">thêm vào giỏ hàng</button></div>`;
        resultElement.appendChild(div);
    });
}
function addToCart(productId) {
    let product = products.find(p => p.id === productId);
    let itemInCart = cart.find(item => item.id === productId);
    console.log(itemInCart);
    console.log(product);
    if (itemInCart) {
        itemInCart.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}
function updateCart() {
    let cartElement = document.getElementById("cart-items");
    let totalElement = document.getElementById("cart-total");
    cartElement.innerHTML = "";
    total = 0;
    if (cart.length === 0) {
        let div = document.createElement("div");
        div.innerHTML = `<div class="empty-cart">Giỏ hàng trống</div>`;
        cartElement.appendChild(div);
        totalElement.innerText = "Tổng: " + total.toLocaleString() + " đ";
        return;
    }
    cart.forEach((product) => {
        let div = document.createElement("div");
        let itemTotal = product.price * product.quantity;
        total += itemTotal;
        div.innerHTML = `
            <div class="cart-item1">
                <div class="cart-item-text">
                <p class="p2">${product.name}</p>
                <p class="p">${itemTotal.toLocaleString()} <sup><u>đ</u></sup></p>
                </div>
                <div class="cart-item-buttons">
                <button class="button2" style="background-color:rgb(6, 255, 106); color:white" onclick="changeQuantity(${product.id}, -1)">-</button>
                <span>${product.quantity}</span>
                <button class="button2" style="background-color:rgb(6, 255, 106); color:white" onclick="changeQuantity(${product.id}, 1)">+</button>
                <button class="button2" style="background-color:rgb(223, 21, 21); color:white" onclick="removeFromCart(${product.id})">X</button>
                </div>
            </div>
        `;
        cartElement.appendChild(div);
    });
    totalElement.innerText = "Tổng: " + total.toLocaleString() + " đ";
}
function changeQuantity(productId, amount) {
    let itemInCart = cart.find(item => item.id === productId);
    if (!itemInCart) return;
    itemInCart.quantity += amount;
    if (itemInCart.quantity <= 0) {
        cart = cart.filter(item => item.id !== productId);
    }
    updateCart();
}
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}
function pay() {
    if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống!");
    } else {
        if (confirm(`Bạn có chắc chắn muốn thanh toán ${total.toLocaleString()} đ không?`)) {
            alert("Cảm ơn bạn đã mua hàng");
            cart = [];
            updateCart();
        }
    }
}
showProducts();