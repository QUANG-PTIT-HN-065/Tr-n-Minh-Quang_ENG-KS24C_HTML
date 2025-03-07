let arr = [4,4,4,6,1,6,4,4,3];
arr.sort((a, b) => a - b);
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
        arr.splice(i, 1);
        i--; 
    }
}
console.log(arr);