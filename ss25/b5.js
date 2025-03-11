let arr = [3,1,12.2,-1]
function search (arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]) && arr[i] > 0) {
            count++;
        }
    } 
    if (count == 0) {
        return ` không có só nguyên dương`
    }else {
        return `số nguyên dương trong mảng là ${count}`
    }
}
console.log(search(arr))