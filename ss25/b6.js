function areArraysEqual(arr1) {
    let arr2 = arr1.split("").reverse().join("");
    if (arr1.length !== arr2.length) {
        return `không phải chuối đối xứng`;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return `không phải chuối đối xứng`;
        }
    }
    return `là chuối đối xứng`;
}
console.log(areArraysEqual("aloola")); 
console.log(areArraysEqual("alola12"));
