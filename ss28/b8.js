let arr = [];

while (true) {
    let con = prompt(`Chọn chức năng:
    1. Thêm nhân viên
    2. Xóa nhân viên theo ID
    3. Cập nhật lương nhân viên
    4. Tìm kiếm nhân viên theo tên
    5. Thoát
    Nhập số để chọn: `);

    switch (con) {
        case '1':
            addEmployee(arr);
            break;
        case '2':
            deleteEmployee(arr);
            break;
        case '3':
            updateSalary(arr);
            break;
        case '4':
            searchEmployee(arr);
            break;
        case '5':
            alert("Thoát chương trình!");
            break;
        default:
            alert("Vui lòng chọn từ 1 đến 5!");
    }
    if (con === '5') break;
}
function addEmployee(arr) {
    let name = prompt("Nhập tên nhân viên:");
    let position = prompt("Nhập vị trí nhân viên:");
    let salary = parseFloat(prompt("Nhập lương nhân viên:"));
    let id = Math.floor(Math.random() * 99999943 + new Date().getMilliseconds());

    let newEmployee = { id, name, position, salary };
    arr.push(newEmployee);
    alert("Nhân viên đã được thêm thành công!");
}
function deleteEmployee(arr) {
    let id = prompt("Nhập ID nhân viên cần xóa:");
    let index = arr.findIndex(emp => emp.id == id);

    if (index !== -1) {
        let confirmDelete = confirm(`Bạn có chắc muốn xóa nhân viên ${arr[index].name}?`);
        if (confirmDelete) {
            arr.splice(index, 1);
            alert("Nhân viên đã bị xóa!");
        } else {
            alert("Hủy thao tác xóa.");
        }
    } else {
        alert("Không tìm thấy nhân viên với ID này!");
    }
}
function updateSalary(arr) {
    let id = prompt("Nhập ID nhân viên cần cập nhật lương:");
    let employee = arr.find(emp => emp.id == id);

    if (employee) {
        let newSalary = parseFloat(prompt(`Nhập lương mới cho ${employee.name}:`));
        employee.salary = newSalary;
        alert("Cập nhật lương thành công!");
    } else {
        alert("Không tìm thấy nhân viên với ID này!");
    }
}
function searchEmployee(arr) {
    let nameSearch = prompt("Nhập tên nhân viên cần tìm:");
    let results = arr.filter(emp => emp.name.toLowerCase().includes(nameSearch.toLowerCase()));
    if (results.length > 0) {
        let output = "Danh sách nhân viên tìm thấy:\n";
        results.forEach(emp => {
            output += `ID: ${emp.id}, Tên: ${emp.name}, Vị trí: ${emp.position}, Lương: ${emp.salary}\n`;
        });
        alert(output);
    } else {
        alert("Không tìm thấy nhân viên nào!");
    }
}
