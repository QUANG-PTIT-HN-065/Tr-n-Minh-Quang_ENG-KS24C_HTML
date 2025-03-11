let arr = [3,1,2,3,4,5,6,7,8]
function search (arr){
    let count = 0;
    let min = Infinity;
    if (arr.length == 0) {
        return `mảng không chứa phần tử`
    }
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            if (arr[i] < min) {
                min = arr[i];
            }
            count++;
        }
    } 
    if (count == 0) {
        return ` giá trị không hợp lệ`
    }else {
        return `số nhỏ nhất ${min}`
    }
}
console.log(search(arr))