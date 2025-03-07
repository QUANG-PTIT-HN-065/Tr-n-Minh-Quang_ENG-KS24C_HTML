let numbers = [1,2,4,5,6,7,8,9,10]; 
let soLe = 0, soChan = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0){
        soChan += numbers[i];
    }else {
         soLe += numbers[i];
    }
}
alert("Mảng: " + numbers.join(", ") + "\nTổng lẻ: " + soLe + "\nTổng chẵn: " + soChan);
