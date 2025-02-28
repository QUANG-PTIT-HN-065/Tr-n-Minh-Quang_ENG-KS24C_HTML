let date1 = prompt(`nhập ngày thàng năm thứ nhất (yyyy-mm-dd)`);
let date2 = prompt(`nhập ngày thàng năm thứ nhất (yyyy-mm-dd)`);
let firstDate = new Date(date1);
let secondDate = new Date(date2);
let Milliseconds = Math.abs(secondDate - firstDate);
let diffDays = Math.floor(Milliseconds / (1000 * 60 * 60 * 24));
document.write(`số ngày chênh lệch ${diffDays} ngày.`);