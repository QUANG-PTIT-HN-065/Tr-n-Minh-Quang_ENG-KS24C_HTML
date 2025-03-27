let employees = JSON.parse(localStorage.getItem("employees")) || [];
let currentPage = 1;
const rowsPerPage = 3;

function displayEmployees() {
    let table = document.getElementById("employeeTable");
    table.innerHTML = "";

    let start = (currentPage - 1) * rowsPerPage;
    let end = start + rowsPerPage;
    let paginatedEmployees = employees.slice(start, end);

    paginatedEmployees.forEach((emp, index) => {
        let row = `<tr>
            <td>${start + index + 1}</td>
            <td>${emp.name}</td>
            <td>${emp.position}</td>
        </tr>`;
        table.innerHTML += row;
    });

    updatePagination();
}

function addEmployee() {
    let name = document.getElementById("nameInput").value.trim();
    let position = document.getElementById("positionInput").value.trim();

    if (name === "" || position === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    employees.push({ name, position });
    localStorage.setItem("employees", JSON.stringify(employees));
    document.getElementById("nameInput").value = "";
    document.getElementById("positionInput").value = "";
    
    currentPage = Math.ceil(employees.length / rowsPerPage);
    displayEmployees();
}

function updatePagination() {
    let totalPages = Math.ceil(employees.length / rowsPerPage);
    let pageNumbers = document.getElementById("pageNumbers");
    pageNumbers.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        let button = document.createElement("button");
        button.innerText = i;
        button.classList.add("page-btn");
        if (i === currentPage) button.classList.add("active-page");
        button.onclick = function() {
            currentPage = i;
            displayEmployees();
        };
        pageNumbers.appendChild(button);
    }

    document.getElementById("prevPage").disabled = currentPage === 1;
    document.getElementById("nextPage").disabled = currentPage === totalPages;
}


function changePage(direction) {
    let totalPages = Math.ceil(employees.length / rowsPerPage);
    currentPage += direction;

    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;

    displayEmployees();
}

displayEmployees();
