let numberArray = [10, 11, 30, 4, 5, 6, 3];
for (let index = 0; index < numberArray.length; index++) {
    let check = true;
    let num = +prompt(`nhập số bất kỳ`);
    for (let i = 0; i < numberArray.length; i++) {
        if (num == numberArray[i]) {
            check = false;
            alert(`bingo`);
            break;
        }
    }
    if (check == true) {
        alert(`chúc bn may nắm lần sau`);
    }
}
