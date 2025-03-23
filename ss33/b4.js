const products = [
    {
        id: 1,
        name: 'Laptop Dell XPS 15',
        price: 35990000,
        image: 'https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9510/media-gallery/xs9510t_cnb_00055lf110_bk.psd?fmt=pjpg&pscan=auto&scl=1&wid=4000&hei=4000&qlt=100,1&resMode=sharp2&size=4000,4000&chrss=full&imwidth=5000',
        description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.',
    },
    {
        id: 2,
        name: 'iPhone 15 Pro Max',
        price: 32990000,
        image: 'https://th.bing.com/th/id/OIP.PO8M08Vxndz_455at0qGawHaFj?rs=1&pid=ImgDetMain',
        description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.',
    },
    {
        id: 4,
        name: 'Tai nghe Sony WH-1000XM5',
        price: 7990000,
        image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljv36f0uj8xuaf',
        description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.',
    },
    {
        id: 5,
        name: 'Apple Watch Series 9',
        price: 11990000,
        image: 'https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all',
        description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.',
    },
    {
        id: 6,
        name: 'Loa JBL Charge 5',
        price: 3990000,
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS_pD5wQ_35Bt2hr4qhKIgss7iYhhShdLTIz4E4G3I93xAmir9q',
        description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.',
    },
    {
        id: 3,
        name: 'Samsung Galaxy S24 Ultra',
        price: 28990000,
        image: 'https://s.alicdn.com/@sc04/kf/A7c339409cf8345f3b347a337f70464629.jpg_300x300.jpg',
        description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.',
    },
];
function showProducts() {
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = "";
    products.forEach(function (product) {
        let div = document.createElement("div");
        div.innerHTML = `<div class="product">
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>${product.price.toLocaleString()} VND</p>
            <buttuon class="button1">Buy</button></div>`;
        resultElement.appendChild(div);
    });
}
showProducts()