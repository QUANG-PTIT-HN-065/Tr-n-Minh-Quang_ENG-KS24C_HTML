function geometryCalculator() {
    while (true) {
        let choice = prompt(`Chọn chức năng:
1. Tính diện tích hình tròn
2. Tính chu vi hình tròn
3. Tính diện tích hình chữ nhật
4. Tính chu vi hình chữ nhật
5. Thoát`);
        if (choice === '5') {
            alert("Thoát chương trình.");
            break;
        }
        let result;
        switch (choice) {
            case '1':
                let radius = parseFloat(prompt("Nhập bán kính hình tròn:"));
                if (radius > 0) {
                    result = Math.PI * radius * radius;
                    alert(`Diện tích hình tròn: ${result.toFixed(2)}`);
                } else {
                    alert("Bán kính phải lớn hơn 0.");
                }
                break;
            case '2':
                radius = parseFloat(prompt("Nhập bán kính hình tròn:"));
                if (radius > 0) {
                    result = 2 * Math.PI * radius;
                    alert(`Chu vi hình tròn: ${result.toFixed(2)}`);
                } else {
                    alert("Bán kính phải lớn hơn 0.");
                }
                break;
            case '3':
                let length = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
                let width = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
                if (length > 0 && width > 0) {
                    result = length * width;
                    alert(`Diện tích hình chữ nhật: ${result.toFixed(2)}`);
                } else {
                    alert("Chiều dài và chiều rộng phải lớn hơn 0.");
                }
                break;
            case '4':
                length = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
                width = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
                if (length > 0 && width > 0) {
                    result = 2 * (length + width);
                    alert(`Chu vi hình chữ nhật: ${result.toFixed(2)}`);
                } else {
                    alert("Chiều dài và chiều rộng phải lớn hơn 0.");
                }
                break;
            default:
                alert("Lựa chọn không hợp lệ, vui lòng thử lại.");
        }
    }
}
geometryCalculator();
