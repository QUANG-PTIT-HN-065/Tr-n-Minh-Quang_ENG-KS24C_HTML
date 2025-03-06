document.write("Các số Armstrong có 3 chữ số: <br>");
for (let n = 100; n <= 999; n++) {
    let so = n;
    let hangTram = Math.floor(so / 100); 
    let hangChuc = Math.floor((so % 100) / 10); 
    let hangDonVi = so % 10; 
    let tongLapPhuong = Math.pow(hangTram, 3) + Math.pow(hangChuc, 3) + Math.pow(hangDonVi, 3);
    if (tongLapPhuong === n) {
        document.write(n + "<br>");
    }
}
