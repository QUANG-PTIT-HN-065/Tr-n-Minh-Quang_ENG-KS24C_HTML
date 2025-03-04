let thang= parseInt(prompt("Mời bạn nhập tháng bất kỳ (1-12): "));
switch (thang) {
    case 1: 
    case 3: 
    case 5: 
    case 7: 
    case 8: 
    case 10: 
    case 12:
        alert(`Tháng ${thang} có 31 ngày`);
        break;
    case 4: 
    case 6: 
    case 9: 
    case 11:
        alert(`Tháng ${thang} có 30 ngày`);
        break;
    case 2:
        alert(`Tháng 2 có 28 hoặc 29 ngày (nếu là năm nhuận)`);
        break;
    default:
        alert("Số tháng bạn nhập không hợp lệ! Vui lòng nhập từ 1 đến 12.");
}