let arr = [1,5]
function search (arr){
    let count = 0;
    let min = Infinity;
    if (arr.length == 0) {
        return `mảng không chứa phần tử`
    }
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])|| !Number.isInteger(arr[i])) {
            return ` dữ liệu không hoppwj lệ`
        }else {
            count += arr[i];
        }
    } 
    if (count == 0) {
        return ` giá trị không hợp lệ`
    }else {
        return `tổng ${count}`
    }
}
console.log(search(arr))