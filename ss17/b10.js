let n = parseInt(prompt("Nhập một số nguyên dương:"));
let result = Number.isInteger(Math.sqrt(n)) ? `${n} là số chính phương.` : `${n} không phải số chính phương.`;
alert(result);