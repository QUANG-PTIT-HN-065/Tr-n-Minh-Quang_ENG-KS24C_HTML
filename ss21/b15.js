let soTien = parseInt(prompt("Nhập số tiền cần rút (phải chia hết cho 1000):"));
if (soTien % 1000 !== 0) {
    console.log("Số tiền nhập vào không hợp lệ! Vui lòng nhập số chia hết cho 1000.");
} else {
    console.log(`Số tiền cần rút: ${soTien}`);
    let menhGia = 500000; 
    while (soTien > 0) {
        let soTo = Math.floor(soTien / menhGia);
        if (soTo > 0) {
            console.log(`${menhGia} - ${soTo} tờ`);
            soTien -= soTo * menhGia;
        }
        if (menhGia === 500000) menhGia = 200000;
        else if (menhGia === 200000) menhGia = 100000;
        else if (menhGia === 100000) menhGia = 50000;
        else if (menhGia === 50000) menhGia = 20000;
        else if (menhGia === 20000) menhGia = 10000;
        else if (menhGia === 10000) menhGia = 5000;
        else if (menhGia === 5000) menhGia = 2000;
        else if (menhGia === 2000) menhGia = 1000;
        else break;
    }
}
