function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(capitalizeWords("hello world")); 
console.log(capitalizeWords("rIKKei acaDEMy"));
