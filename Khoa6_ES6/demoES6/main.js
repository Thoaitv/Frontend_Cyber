
// ES5
/**
function xinchao(hello) {
    console.log("xin chào: " + hello);
}
xinchao("Thoai");
console.log("===");


var xinchao1 = function (hello) {
    console.log("Xin chao 1 " + hello);
}
xinchao1("Thoai 1");
console.log("===");

let hocVien = {
    hoVaTen: "Thoai",
    tuoi: 16,
    lop: "3A",
    diem: [1, 2, 3],
    thongTin: function () {
        // Hoặc dùng biến tạm để chứa this,
        // let _bind = this;
        this.diem.map((diem, index) => {
            // Dùng arrow function
            console.log("Tên: " + this.hoVaTen + " Tuổi: " + this.tuoi);
            console.log("index: " + index + " Điểm thi: " + diem);
        });
        // Dùng bind để định nghĩa lại ngữ cảnh của this
    }
}
hocVien.thongTin();

*/

/**
//   ===========================

// ES5:
function hocSinh(ten, tuoi) {
    // // C1: If else
    // if (ten == undefined || tuoi == undefined) {
    //     ten = "TÊN MẶC ĐỊNH"
    //     tuoi = 18;
    // }

    // // C2: Ternary operator
    // ten = ten == undefined ? "TÊN MẶC ĐỊNH" : ten;
    // tuoi = tuoi == undefined ? "18" : tuoi;

    // // C3: Logical Operator
    // ten = ten || "TÊN MẶC ĐỊNH";
    // tuoi = tuoi || 19;

    if (tuoi >= 6 && tuoi < 10) {
        console.log("Học sinh: " + ten + " Là học sinh cấp 1 " + tuoi + " Tuổi");
    } else {
        console.log("Học sinh: " + ten + " Là học sinh cấp 2 " + tuoi + " Tuổi");
    }
}
// hocSinh("Thoai", 19);
hocSinh();
 */

/**
// ES6:
// Gán giá trị mặc định luôn ở tham số truyền vào
function hocSinh(ten = "TÊN MẶC ĐỊNH", tuoi = 19) {
    // C1: If else
    if (tuoi >= 6 && tuoi < 10) {
        console.log("Học sinh: " + ten + " Là học sinh cấp 1 " + tuoi + " Tuổi");
    } else {
        console.log("Học sinh: " + ten + " Là học sinh cấp 2 " + tuoi + " Tuổi");
    }
}
hocSinh();
*/


//   ===========================
/**
// REST PARAMETER
let diemTB = (...diemMonHoc) => {
    console.log(diemMonHoc);
    var diemTong = 0;
    for (let i = 0; i < diemMonHoc.length; i++) {
        diemTong += diemMonHoc[i];
    }
    console.log("Tong diem: " + diemTong);
    let tb = diemTong / diemMonHoc.length;
    console.log("Diem TB: " + tb);
}
diemTB(8, 1, 3, 6);
console.log("===========");

// Spread Operator
// - Thêm phần tử vào mảng
let danhSach = [1, 7, 5];
let danhSachCopy = [...danhSach];
danhSachCopy.push(4);
console.log(danhSach);
console.log(danhSachCopy);
console.log("===========");

// - Thêm thuộc tính mới cho obj
let meo = {
    ten: "MewMew",
    tuoi: 3
}
let meoKeu = {
    ...meo,
    keu: "MeoMeo"
}
console.log(meo);
console.log(meoKeu);
*/


// ==================
/**
// DESTRUCTURING
// Lấy giá trị từ mảng
let ngonNgu = ['C', 'C++', 'Java'];
// ES5
// console.log(ngonNgu[2]);
// ES6
let [ngonNgu1, ngonNgu2, ngonNgu3] = ngonNgu;
console.log(ngonNgu1);
console.log("==============");

// Lấy giá trị từ obj
let conMeo = {
    ten: "Mew Mew",
    tuoi: 2,
    size: {
        weight: 4,
        height: 12
    }
}
// ES5
console.log(conMeo.ten);
console.log(conMeo.tuoi);
console.log(conMeo.size.height);
// ES6
let { ten, tuoi, size } = conMeo;
console.log(ten, tuoi);
console.log(size.weight, size.height);
// Gán định danh cho thuộc tính
let { ten: t, tuoi: ti, size: s } = conMeo;
console.log("Tên: " + t + " Tuổi " + ti + " Cân: " + s.weight);

 */


// ==================
/**
// == TEMPLATE LITERAL(TEMPLATE STRING)
// ES5
let fruit = "Chuối";
let color = "Vàng";
console.log("QUẢ " + fruit + " CÓ MÀU " + color);

// ES6
console.log(`ĐÂY LÀ QUẢ ${fruit} NÈ, VÀ NÓ CÓ MÀU ${color}`);
let a = 2;
let b = 3;
console.log(`Sum of a and b = ${a + b}`);

document.getElementById("test").innerHTML = `
<div class="Thoai">
    <p>Thêm nội dung bằng Template String ${fruit}</p>
</div>
 `;
 */


 // ==================
//  == OBJECT LITERAL