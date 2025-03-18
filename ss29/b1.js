let contacts = [];

while (true) {
    let choice = prompt(`Chọn chức năng:
    1. Thêm liên hệ mới
    2. Hiển thị danh sách liên hệ
    3. Tìm kiếm liên hệ theo số điện thoại
    4. Cập nhật liên hệ theo ID
    5. Xóa liên hệ theo ID
    6. Thoát
    Nhập số để chọn: `);

    switch (choice) {
        case '1':
            addContact();
            break;
        case '2':
            displayContacts();
            break;
        case '3':
            searchContact();
            break;
        case '4':
            updateContact();
            break;
        case '5':
            deleteContact();
            break;
        case '6':
            alert("Thoát chương trình!");
            break;
        default:
            alert("Vui lòng chọn từ 1 đến 6!");
    }

    if (choice === '6') break;
}

function addContact() {
    let id = Math.floor(Math.random() * 1000000);
    let name = prompt("Nhập tên liên hệ:");
    let email = prompt("Nhập email liên hệ:");
    let phone = prompt("Nhập số điện thoại liên hệ:");

    let newContact = { id, name, email, phone };
    contacts.push(newContact);
    console.log("Thêm liên hệ thành công!");
}

function displayContacts() {
    if (contacts.length === 0) {
        console.log("Danh bạ trống.");
        return;
    }
    let output = "Danh sách liên hệ:\n";
    contacts.forEach(contact => {
        output += `ID: ${contact.id}, Tên: ${contact.name}, Email: ${contact.email}, SĐT: ${contact.phone}\n`;
    });
    console.log(output);
}

function searchContact() {
    let phoneSearch = prompt("Nhập số điện thoại cần tìm:");
    let results = contacts.filter(contact => contact.phone.includes(phoneSearch));

    if (results.length > 0) {
        let output = "Kết quả tìm kiếm:\n";
        results.forEach(contact => {
            output += `ID: ${contact.id}, Tên: ${contact.name}, Email: ${contact.email}, SĐT: ${contact.phone}\n`;
        });
        console.log(output);
    } else {
        console.log("Không tìm thấy liên hệ nào!");
    }
}

function updateContact() {
    let id = parseInt(prompt("Nhập ID liên hệ cần cập nhật:"));
    let contact = contacts.find(contact => contact.id === id);

    if (contact) {
        contact.name = prompt("Nhập tên mới:", contact.name);
        contact.email = prompt("Nhập email mới:", contact.email);
        contact.phone = prompt("Nhập số điện thoại mới:", contact.phone);
        console.log("Cập nhật thành công!");
    } else {
        console.log("Không tìm thấy liên hệ với ID này!");
    }
}

function deleteContact() {
    let id = parseInt(prompt("Nhập ID liên hệ cần xóa:"));
    let index = contacts.findIndex(contact => contact.id === id);

    if (index !== -1) {
        let confirmDelete = confirm(`Bạn có chắc muốn xóa liên hệ ${contacts[index].name} không?`);
        if (confirmDelete) {
            contacts.splice(index, 1);
            console.log("Liên hệ đã được xóa!");
        } else {
            console.log("Hủy thao tác xóa.");
        }
    } else {
        console.log("Không tìm thấy liên hệ với ID này!");
    }
}
