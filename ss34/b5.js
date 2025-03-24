let employees = JSON.parse(localStorage.getItem("employees")) || [];
function showEmployees() {
    let employeeList = document.getElementById("employeeList");
    employeeList.innerHTML = ""; 

    employees.forEach((employee, index) => {
        let row = `<tr>
                    <td>${index + 1}</td>
                    <td>${employee.name}</td>
                    <td>${employee.role}</td>
                   </tr>`;
        employeeList.innerHTML += row;
    });
}
function addEmployee() {
    let name = document.getElementById("employeeName").value.trim();
    let role = document.getElementById("employeeRole").value.trim();

    if (name === "" || role === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    employees.push({ name, role }); 
    localStorage.setItem("employees", JSON.stringify(employees)); 

    showEmployees(); 
    document.getElementById("employeeName").value = ""; 
    document.getElementById("employeeRole").value = "";
}
function deleteEmployee(index) {
    if (confirm("Bạn có chắc chắn muốn xóa nhân viên này?")) {
        employees.splice(index, 1); 
        localStorage.setItem("employees", JSON.stringify(employees)); 
        showEmployees(); 
    }
}
showEmployees();
