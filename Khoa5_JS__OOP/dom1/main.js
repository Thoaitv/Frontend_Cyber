//=== Đầy đủ
// function changeText() {
//     document.getElementById("tagP").innerHTML = "Đã thay đổi";
// }
// function thayDoiText() {
//     document.getElementById("content").innerHTML = "Content thay đổi"
// }

// ===Tách hàm getElementById
// function getELe(id) {
//     return document.getElementById(id);
// }

// function changeText(id) {
//     getELe("tagP").innerHTML = "Thoai";
// }


// === Tách hàm getElementById và innerHTML
function getEle(id) {
    return document.getElementById(id);
}
function changeText(id, text) {
    return getEle(id).innerHTML = text;
}

function change1() {
    changeText("tagP", "Thoai");
}
function change2() {
    changeText("content", "Test Change")
}

//==================================
// function hide() {
//     document.getElementById('hide').style.display = "none";
// }

function changeStyle(id) {
    var tag = getEle(id);
    tag.style.fontSize = "50px";
    tag.style.color = "red";
}
function hide() {
    getEle('hide').style.display = "none";
}
function getStyleInfo(id) {
    var s = getEle(id);
    return s.style.color;
}

function getStyle() {
    changeStyle("styleInfo");
    changeText("styleInfo", getStyleInfo("styleInfo"));

}


//==================================Bật tắt bóng đèn
function turnOn() {
    getEle("image").src = "https://www.w3schools.com/js/pic_bulbon.gif";
}
function turnOff() {
    getEle("image").src = "https://www.w3schools.com/js/pic_bulboff.gif";
}

//==================================Disable
function clickToDisable() {
    getEle("btn").setAttribute("disabled", "");
}


