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
1-Đặt biến chiSoAmDauTien = -1 // Chưa tìm thấy số âm đầU tiên
2-Duyệt vòng for để tìm số âm đầu tiên. Gán số âm vừa tìm thấy đó = soAmDauTien
3-Duyệt vòng lặp từ soAmDautien +1
4- Nếu phần tử âm tiếp theo là số âm và lớn hơn soAmDauTien thì gán = chiSoMax
5-Tạo 1 mảng rỗng để chứa những số âm max = nhau
6-Duyệt mảng từ soAmMax và push vào mảng đã tạo
7.In ra index và value

*/


var a = [3, -6, 8, 12, -3, - 9, -4, -3, 5, 12, -4];
// var a = [1, 2, 3, 2, 1, 3]
console.log("======= 1 =======");
var sum = 0;
for (var i = 0; i < a.length; i++) {
    sum += a[i];
}
console.log("tong mang a: " + sum);
// for (var item of a) {
//     sum += item;
// }
// console.log(sum);


console.log("======= 2 =======");
var chiSoAmDauTien = -1; // Chưa tìm thấy số âm
for (var i = 0; i < a.length; i++) {
    if (a[i] < 0) {
        chiSoAmDauTien = i; // Gán chỉ số âm đầu tiên = chiSoAmDauTien
        break;
    }
}

var chiSoMax = chiSoAmDauTien;
if (chiSoAmDauTien != -1) {
    // console.log("co so am");
    for (var i = chiSoMax + 1; i < a.length; i++) {
        if (a[i] < 0 && a[i] > a[chiSoMax]) {
            chiSoMax = i;
        }
    }
    // console.log("index " + chiSoMax + " = " + a[chiSoMax]);
    var mangSoAmMax = [];
    for (var i = a[chiSoMax]; i < a.length; i++) {
        if (a[i] === a[chiSoMax]) {
            mangSoAmMax.push(i); // Đẩy những số âm lớn nhất = nhau vào 1 mảng
        }
    }
    for (var i = 0; i < mangSoAmMax.length; i++) {
        console.log("index: " + mangSoAmMax[i] + " - value:" + a[mangSoAmMax[i]]);
    }
    for (var item of mangSoAmMax) {
        console.log(item + "a" + a[item]);
    }

} else {
    console.log("Khong co so am");
}

console.log("======= 3 =======");
/**
 *Tạo biến sum để tính tổng
 Duyệt mảng và tìm ra những số lẻ
 Gán và cộng dồn số lẻ vào sum
 In ra
 */
var sumOfOdd = 0;
for (var item of a) {
    if (item % 2 != 0) {
        sumOfOdd += item
    }
}
console.log("Tong so le:" + sumOfOdd);

console.log("======= 4 =======");
/**
 *1. Gán phần tử đầu tiên = indexMax
 2.Duyệt vòng for xét nếu giá trị của indexMax > giá trị của phần tử hiện tại
 3.Gán lại indexMax = index hiện tại
 4.Tạo 1 mảng để cho push các index của các phần từ lớn nhấT vào
 5. In ra các phần tử và vị trí
 */
var indexMax = 0
for (var i = 0; i < a.length; i++) {
    if (a[indexMax] < a[i]) {
        indexMax = i;
    }
}
// console.log(indexMax);
var mangMoi = [];
for (var i = indexMax; i < a.length; i++) {
    if (a[indexMax] === a[i]) {
        mangMoi.push(i)
    }
}
// console.log(indexMax);
for (var item of mangMoi) {
    console.log("index Max: " + item + " -- value: " + a[item]);
}
console.log(a[[0]]);

