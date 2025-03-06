do {
    var thang = parseInt(prompt("tháng:"));
} while (thang <= 0 && thang > 12);
do {
    var ngay = parseInt(prompt("ngày:"));
} while (ngay <= 0 && ngay > 31);
if (thang == 1) {
    if (ngay >= 20) {
        alert(`bảo bình`);
    }
    if (ngay <= 19) {
        alert(`ma kết`);
    }
}
if (thang == 2) {
    if (ngay >= 19) {
        alert(`song ngư`);
    }
    if (ngay <= 18) {
        alert(`bảo bình`);
    }
}
if (thang == 3) {
    if (ngay >= 21) {
        alert(`bạch dương`);
    }
    if (ngay <= 20) {
        alert(`song ngư`);
    }
}
if (thang == 4) {
    if (ngay >= 21) {
        alert(`kim ngư`);
    }
    if (ngay <= 20) {
        alert(`bạch dương`);
    }
}
if (thang == 5) {
    if (ngay >= 21) {
        alert(`song tư`);
    }
    if (ngay <= 20) {
        alert(`kim ngư`);
    }
}
if (thang == 6) {
    if (ngay >= 22) {
        alert(`cự giải`);
    }
    if (ngay <= 21) {
        alert(`song tử`);
    }
}
if (thang == 7) {
    if (ngay >= 23) {
        alert(`sư tử`);
    }
    if (ngay <= 22) {
        alert(`cự giải`);
    }
}
if (thang == 8) {
    if (ngay >= 23) {
        alert(`xử nữ`);
    }
    if (ngay <= 22) {
        alert(`sử tử`);
    }
}
if (thang == 9) {
    if (ngay >= 23) {
        alert(`thiên bình`);
    }
    if (ngay <= 22) {
        alert(`xử nữ`);
    }
}
if (thang == 10) {
    if (ngay >= 24) {
        alert(`bọ cạp`);
    }
    if (ngay <= 23) {
        alert(`thiên bình`);
    }
}
if (thang == 11) {
    if (ngay >= 23) {
        alert(`nhân mã`);
    }
    if (ngay <= 22) {
        alert(`bộ cạp`);
    }
}
if (thang == 12) {
    if (ngay >= 22) {
        alert(`ma kết`);
    }
    if (ngay <= 21) {
        alert(`nhân mã`);
    }
}