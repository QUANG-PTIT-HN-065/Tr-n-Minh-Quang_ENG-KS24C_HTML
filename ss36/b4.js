let products = JSON.parse(localStorage.getItem("productList")) || [
    { id: 1, name: "Laptop", price: 15000000, img: "https://laptop88.vn/media/product/7475_photo_2022_08_05_17_25_57.jpg" },
    { id: 2, name: "Giày Sneaker", price: 1500000, img: "https://product.hstatic.net/200000456065/product/artboard_2_cef0ebb13d4d46cf9c0470f2bbfa8172.png" },
    { id: 3, name: "Đồng Hồ", price: 2000000, img: "https://bizweb.dktcdn.net/100/175/988/articles/rolex-daytona-rainbow-4-of-5-min.jpg?v=1561811575807" }
];

let productList = document.getElementById("productList");
let themeToggleBtn = document.getElementById("themeToggleBtn");

function renderProducts() {
    productList.innerHTML = "";
    products.forEach(product => {
        let productCard = document.createElement("div");
        productCard.classList.add("productCard");
        
        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <div class="productInfo">
                <div><b>${product.name}</b></div>
                <div class="productPrice">${product.price.toLocaleString('vi-VN')} đ</div>
                <button class="buyBtn">Mua ngay</button>
            </div>
        `;
        
        productList.appendChild(productCard);
    });
}

renderProducts();

themeToggleBtn.onclick = function() {
    document.body.classList.toggle("darkModeBody");
    document.getElementById("header").classList.toggle("darkModeText");
    document.querySelectorAll(".productInfo").forEach(element => {
        element.classList.toggle("darkModeText");
    });
};
