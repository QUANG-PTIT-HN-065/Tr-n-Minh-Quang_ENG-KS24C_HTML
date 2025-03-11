function searchEvenNumbers(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }
    let count = 0;
    let evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]) && arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }else if (!isNaN(arr[i])) {
            count++;
        }
    }
    if (count == 0) {
        return`dữ liệu không hợp lệ`
    }
    if (evenNumbers.length === 0) {
        return "Không có số chẵn trong mảng";
    }
    return `Các số chẵn trong mảng: ${evenNumbers.join(", ")}`;
}

let arr = [1,2,3,4,5,6];
console.log(searchEvenNumbers(arr));
