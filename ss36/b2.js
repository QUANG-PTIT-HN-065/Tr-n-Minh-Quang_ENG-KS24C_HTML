let foodList = [
    { id: 1, name: "Phở bò", image: "https://fohlafood.vn/cdn/shop/articles/bi-quyet-nau-phi-bo-ngon-tuyet-dinh.jpg?v=1712213789", likes: 0 },
    { id: 2, name: "Bún chả", image: "https://khaihoanphuquoc.com.vn/wp-content/uploads/2023/08/cach-lam-nuoc-mam-bun-cha-02.jpg", likes: 0 },
    { id: 3, name: "Bánh mì", image: "https://thuonghieuquocgia.congthuong.vn/stores/news_dataimages/2024/032024/16/09/top-1-mon-sandwich-ngon-nhat-the-gioi-goi-ten-banh-my-viet-nam1710498007-182420240316092132.jpg?rt=20240316092204", likes: 0 }
];

let storedFood = localStorage.getItem("foodLikes");
if (storedFood) {
    let savedLikes = JSON.parse(storedFood);

    foodList.forEach(food => {
        let savedFood = savedLikes.find(item => item.id === food.id);
        if (savedFood) {
            food.likes = savedFood.likes;
        }
    });
}
function renderFoodList() {
    let foodContainer = document.getElementById("foodContainer");
    foodContainer.innerHTML = "";

    foodList.forEach((food, index) => {
        let foodItem = document.createElement("div");
        foodItem.classList.add("food-item");

        foodItem.innerHTML = `
            <img src="${food.image}" alt="${food.name}">
            <div class="food-details">
                <div class="food-name">${food.name}</div>
                <div>👍 Thích <span id="like-count-${food.id}">${food.likes}</span></div>
                <button class="like-button" onclick="likeFood(${index})">Thích +1</button>
            </div>
        `;

        foodContainer.appendChild(foodItem);
    });
}
function likeFood(index) {
    foodList[index].likes += 1;
    document.getElementById(`like-count-${foodList[index].id}`).innerText = foodList[index].likes;
    localStorage.setItem("foodLikes", JSON.stringify(foodList));
}

renderFoodList();
