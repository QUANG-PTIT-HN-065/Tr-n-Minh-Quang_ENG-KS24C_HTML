function studentManager() {
    let students = [];
    while (true) {
        let choice = prompt(`----menu------:
1. Nhập danh sách sinh viên
2. Hiển thị danh sách sinh viên
3. Tìm sinh viên theo tên
4. Xóa sinh viên khỏi danh sách
5. Thoát`);
        if (choice === '5') {
            alert("Thoát chương trình.");
            break;
        }
        switch (choice) {
            case '1':
                let count = parseInt(prompt("Nhập số lượng sinh viên:"));
                for (let i = 0; i < count; i++) {
                    let name = prompt(`Nhập tên sinh viên thứ ${i + 1}:`);
                    students.push(name);
                }
                break;
            case '2':
                if (students.length === 0) {
                    alert("Danh sách sinh viên trống.");
                } else {
                    console.log(students)
                }
                break;
            case '3':
                let searchName = prompt("Nhập tên sinh viên cần tìm:");
                let found = students.find(student => student === searchName);
                if (found) {
                    alert(`Sinh viên tìm thấy: ${found}`);
                } else {
                    alert("Không tìm thấy sinh viên trong danh sách.");
                }
                break;
            case '4':
                let deleteName = prompt("Nhập tên sinh viên cần xóa:");
                let index = students.indexOf(deleteName);
                if (index !== -1) {
                    students.splice(index, 1);
                    alert("Đã xóa sinh viên thành công.");
                } else {
                    alert("Không tìm thấy sinh viên để xóa.");
                }
                break;
            default:
                alert("Lựa chọn không hợp lệ, vui lòng thử lại.");
        }
    }
}
studentManager();
