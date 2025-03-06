let countChan = 0, countLe = 0;
for (let i = 1; i <= 5; i++) {
    let so = parseInt(prompt(`Nhập số nguyên thứ ${i}:`));
    if (!isNaN(so)) {
        if (so % 2 === 0) {
            countChan++;
        } else {
            countLe++;
        }
    } else {
        alert("ko phải số hãy nhập lại");
        i--; 
    }
}

alert(`Số lượng số chẵn: ${countChan}\nSố lượng số lẻ: ${countLe}`);
