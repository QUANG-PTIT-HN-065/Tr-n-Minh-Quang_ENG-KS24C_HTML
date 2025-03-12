function filterValidEmails(arr) {
    if (arr.length == 0) {
        return `mảng khong có phần tử`
    }
    if (!Array.isArray(arr)) {
        return `dữ liệu không hợp lệ`
    }else {
        return arr.map(str => str.replace(/-/g, '/'));
    }
}
console.log(filterValidEmails(["2025-03-10", "2024-12-25", "2023-07-01"]));
console.log(filterValidEmails([]));
console.log(filterValidEmails('áddadd'));


