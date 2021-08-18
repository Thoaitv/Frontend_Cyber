// Khai báo các mảng giá cho các loại xe
const ARRAY_GIA_UBER_X = [8000, 12000, 10000];
const GIA_CHO_UBER_X = 2000;

const ARRAY_GIA_UBER_SUV = [9000, 14000, 12000];
const GIA_CHO_UBER_SUV = 3000;

const ARRAY_GIA_UBER_BLACK = [10000, 16000, 14000];
const GIA_CHO_UBER_BLACK = 4000;

// Kiếm tra loại xe khi người dùng chọn
function getELe(id) {
    return document.getElementById(id);
}
function kiemTraLoaiXe() {
    var uberX = getELe("uberX");
    var uberSUV = getELe("uberSUV");
    var uberBlack = getELe("uberBlack");
    if (uberX.checked) {
        return "uberX";
    } else if (uberSUV.checked) {
        return "uberSUV";
    } else if (uberBlack.checked) {
        return "uberBlack";
    }
    // } else {
    //     alert("Vui lòng chọn loại xe")
    // }
}
// Tính tiền chờ trên 3 phút bắt đầu tính tiền chờ.
// Cứ 3 phút tính tiền chờ 1 lần
function tinhTienCho(thoiGianCho, giaCho) {
    var tienCho = 0;
    // if (thoiGianCho < 3) {
    //     tienCho = 0;
    // } else {
    //     tienCho = Math.round(thoiGianCho / 3.0) * giaCho;
    // }
    if (thoiGianCho >= 3) {
        tienCho = Math.round(thoiGianCho / 3.0) * giaCho;
        console.log(tienCho);

    }
    return tienCho;
}

// Tính tiền dựa trên số km đi được: Số Km, giá tiền của mỗi loại xe, thời gian chờ và giá chờ
function tinhTienTrenKm(soKm, thoiGianCho, giaCho, arrayGia) {
    var tienCho = tinhTienCho(thoiGianCho, giaCho);
    if (soKm <= 1) {
        console.log("x" + arrayGia[0]);
        return tienCho + arrayGia[0];
    } else if (soKm > 1 && soKm <= 20) {
        return arrayGia[0] + arrayGia[1] * (soKm - 1) + tienCho;
    } else if (soKm > 1 && soKm > 20) {
        return arrayGia[0] + arrayGia[1] * 19 + arrayGia[2] * (soKm - 20) + tienCho;
    }

}
// Tính tổng tiền dựa trên loại uber
function tinhTongTien() {
    var tongTien = 0
    var thoiGianCho = getELe("thoiGianCho").value;
    var soKm = getELe("soKM").value;
    var loaiXe = kiemTraLoaiXe();

    soKm = parseFloat(soKm);
    thoiGianCho = parseFloat(thoiGianCho);

    switch (loaiXe) {
        case "uberX":
            tongTien = tinhTienTrenKm(soKm, thoiGianCho, GIA_CHO_UBER_X, ARRAY_GIA_UBER_X);
            break;
        case "uberSUV":
            tongTien = tinhTienTrenKm(soKm, thoiGianCho, GIA_CHO_UBER_SUV, ARRAY_GIA_UBER_SUV);
            break;

        case "uberBlack":
            tongTien = tinhTienTrenKm(soKm, thoiGianCho, GIA_CHO_UBER_BLACK, ARRAY_GIA_UBER_BLACK);
            break;
        default:
            alert("Check");
    }
    return tongTien;
}


// Gán sự kiện cho tính tiền
getELe("btnTinhTien").onclick = function () {
    kiemTraLoaiXe();
    tinhTienCho(3, 1000);
    var tongTien = tinhTongTien();
    // console.log(tongTien);
    getELe("divThanhTien").style.display = "block";
    getELe("xuatTien").innerHTML = tongTien;

}