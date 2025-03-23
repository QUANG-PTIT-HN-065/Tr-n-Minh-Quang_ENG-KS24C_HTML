let dish = [
    {
        name: "Cơm rang dưa bò",
        category: "Đồ ăn",
    },
    {
        name: "Thịt lợn",
        category: "Đồ ăn",
    },
    {
        name: "Cá",
        category: "Đồ ăn",
    },
    {
        name: "Cơm",
        category: "Đồ ăn",
    },
    {
        name: "Cà phê",
        category: "Đồ uống",
    },
    {
        name: "Nước lọc",
        category: "Đồ uống",
    },
    {
        name: "Nước ngọt",
        category: "Đồ uống",
    },
    {
        name: "Cờ lê",
        category: "Dụng cụ",
    },
    {
        name: "Tua vít",
        category: "Dụng cụ",
    }
];

function filterCategory() {
    let category = document.getElementById("category").value;
    let result = dish.filter(function (dish) {
        return dish.category === category;
    });

    let resultElement = document.getElementById("result");
    resultElement.innerHTML = "";
    result.forEach(function (dish) {
        let li = document.createElement("li");
        li.innerHTML = `Tên đồ ăn: ${dish.name}-Danh mục: ${dish.category}`;  
        resultElement.appendChild(li);
    });
}
