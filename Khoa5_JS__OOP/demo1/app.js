// ========== Mảng ==========
console.log('thoai');
var people = [];
people = ['cyber', 'thoai', 'abc', 123, true];
// people[3] = 'add3';
// people[4] = '4';
console.log(people);

// ====================
var food = ['ga', 'vit', 'heo', 'ga'];
food.push('meo'); // Thêm vào cuối mảng 
console.log(food);
var food1 = food.indexOf('ga'); //0: Lấy chỉ số của index đầu tiên tìm thấy
console.log(food1);
var food2 = food.lastIndexOf('ga');//3
console.log(food2);
console.log("=====for index=========");

// ========== for index ==========
var animal = ['meo', 'cho', 'ga'];
for (let i = 0; i < animal.length; i++) {
    console.log(animal[i]);
}
console.log("======= For...of =======");

// For...of
for (var item of animal) {
    console.log(item);
}
console.log("======== white ======");

//White: Khi không biết số lần lặp
var i = 0;
while (i < animal.length) {
    console.log(animal[i]);
    i++;
}