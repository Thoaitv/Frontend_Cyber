// Cho mảng:
// a = [3, -6, 8, -9, -4, 5, 12];
// 1. Tổng các số trong a
// 2. Tìm phần tử âm lowns nhất. Xuất giá trị và chỉ số
// 3. Tổng số lẻ
// 4. Số tìm lớn nhất. Xuất chỉ số

// ===Phương pháp===
// 1. Đầu vào
// 2. Đầu ra
/** 3. Giải thuật
 * 1- Đặt biến chỉ số âm đầu tiên = -1 // Không tìm thấy số âm nào
 * 2.Nếu tìm thấy số âm thì gan soAmDauTien là chỉ số âm hiện tại
 * 2- Nếu không có số âm nào thì im ra không có số âm
 * 3- Nếu có số âm thì duyệt mảng và tìm soAmDauTien
 * 4- Duyệt soAmDauTien + 1 để lấy ra các số âm lớn hơn soAmDauTien
 * 5- Gán soAmMax khi nó là số âm lớn nhất
 * 5- Tạo 1 mảng mangChuaSoAm để chứa các số âm lớn nhất
 * 5- Duyệt mảng và tìm ra chỉ số và value của nó
*/


var a = [3, -6, 8, -3, -9, -4, -3, 5, 12, -4];
// console.log("=====1=======");
var chiSoAmDauTien = -1; // Chưa tìm thấy số âm
for (var i = 0; i < a.length; i++) {
    if (a[i] < 0) {
        chiSoAmDauTien = i; // Gán chỉ số âm đầu tiên = chiSoAmDauTien
        break;
    }
}
// if (chiSoAmDauTien === -1) {
//     console.log('Không có số âm trong mảng');
// } else {
//     var soAmMax = 0;
//     for (var i = chiSoAmDauTien + 1; i < a.length; i++) {
//         console.log(chiSoAmDauTien + 1);
//     }
// }

