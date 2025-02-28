let r = parseFloat(prompt("Nhập bán kính của hình cầu (đơn vị: cm):"));
let theTich = (4 / 3) * Math.PI * Math.pow(r, 3);
let dienTich = 4 * Math.PI * Math.pow(r, 2); 
let chuVi = 2 * Math.PI * r;
document.write("hể tích hình cầu: " + theTich.toFixed(2) + "<br>");
document.write("iện tích bề mặt: " + dienTich.toFixed(2) + "<br>");
document.write("hu vi lớn nhất: " + chuVi.toFixed(2) + "<br>");