function chunkArray(array) { 
    if (!array.every(item => Number.isInteger(item))) {
        return `không hợp lệ`;
    }    
    return array.sort((a ,b) => b - a )
}
let n = prompt()
console.log(chunkArray(n.split("").map(Number)));
