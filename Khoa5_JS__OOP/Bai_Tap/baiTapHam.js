function findMax(a, b, c) {
    var temp = a;
    if (b > temp) {
        temp = b;
    }
    if (c > temp) {
        temp = c;
    }
    return temp;
}

function findSum(a, b, c) {
    return tong = a + b + c;
}
function onClick() {
    var max = findMax(10, 7, 5);
    var sum = findSum(1, 2, 3);
    console.log(max);
    console.log(sum);
}
onClick();