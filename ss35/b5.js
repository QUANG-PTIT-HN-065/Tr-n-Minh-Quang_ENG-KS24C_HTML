document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("modal");
    let btnAdd = document.getElementById("btnAdd");
    let btnSave = document.getElementById("btnSave");
    let closeBtn = document.querySelector(".close");
    let categoryList = document.getElementById("categoryList");
    let searchInput = document.getElementById("searchInput");
    let statusFilter = document.getElementById("statusFilter");

    let categories = JSON.parse(localStorage.getItem("categories")) || [];

    function displayCategories() {
        categoryList.innerHTML = "";
        let filteredCategories = categories.filter(cat => {
            return (statusFilter.value === "all" || cat.status === statusFilter.value) &&
                   (searchInput.value === "" || cat.name.toLowerCase().includes(searchInput.value.toLowerCase()));
        });

        filteredCategories.forEach((cat, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${cat.id}</td>
                <td>${cat.name}</td>
                <td class="status">
                    <div class="${cat.status === "active" ? "status-active" : "status-inactive"}">
                        ${cat.status === "active" ? "🟢 Đang hoạt động" : "🔴 Ngừng hoạt động"}
                    </div>
                </td>
                <td>
                    <button class="btn-delete" data-index="${index}" title="Xóa danh mục">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            `;
            categoryList.appendChild(row);
        });

        localStorage.setItem("categories", JSON.stringify(categories));
    }

    btnAdd.addEventListener("click", () => {
        document.getElementById("categoryId").value = "";
        document.getElementById("categoryName").value = "";
        document.querySelector('input[name="status"][value="active"]').checked = true;

        // Xóa lỗi khi mở modal
        resetValidation();
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => modal.style.display = "none");

    btnSave.addEventListener("click", function () {
        const categoryId = document.getElementById("categoryId").value.trim();
        const categoryName = document.getElementById("categoryName").value.trim();
        const categoryStatus = document.querySelector('input[name="status"]:checked').value;

        let isValid = true;

        // Xóa lỗi trước khi kiểm tra
        resetValidation();

        if (!categoryId) {
            showError("categoryId", "Mã danh mục không được để trống!");
            isValid = false;
        }
        if (!categoryName) {
            showError("categoryName", "Tên danh mục không được để trống!");
            isValid = false;
        }
        if (categories.some(cat => cat.id === categoryId)) {
            showError("categoryId", "Mã danh mục đã tồn tại! Vui lòng nhập mã khác.");
            isValid = false;
        }

        if (!isValid) return; 

        categories.push({ id: categoryId, name: categoryName, status: categoryStatus });
        localStorage.setItem("categories", JSON.stringify(categories));
        displayCategories();
        modal.style.display = "none";
    });

    categoryList.addEventListener("click", function (e) {
        let deleteBtn = e.target.closest(".btn-delete");
        if (deleteBtn) {
            const index = deleteBtn.getAttribute("data-index");
            if (confirm("Bạn có chắc chắn muốn xóa danh mục này không?")) {
                categories.splice(index, 1);
                displayCategories();
            }
        }
    });

    searchInput.addEventListener("input", displayCategories);
    statusFilter.addEventListener("change", displayCategories);

    function showError(inputId, message) {
        let input = document.getElementById(inputId);
        let errorSpan = document.getElementById(`error-${inputId}`);

        input.style.border = "1px solid red";
        errorSpan.textContent = message;
        errorSpan.style.color = "red";
    }

    function resetValidation() {
        ["categoryId", "categoryName"].forEach(id => {
            let input = document.getElementById(id);
            let errorSpan = document.getElementById(`error-${id}`);

            input.style.border = "";
            errorSpan.textContent = "";
        });
    }

    displayCategories();
});
