function getEle(id) {
    return document.getElementById(id);
}

function dis() {
    var tk = getEle('tk');
    var pass = getEle('pass');
    tk.disabled = true;
    pass.disabled = true;
}
function change() {
    getEle("notification").innerHTML = "THoaidd";
}

function login() {
    var tk = getEle('tk');
    var pass = getEle('pass');
    var noti = getEle('notification');

    if (tk.value == "a" && pass.value == "a") {
        noti.innerHTML = "Login Successfully";
        noti.style.color = "green";
        noti.style.fontSize = "30px"

    } else {
        noti.innerHTML = "Login Failed"
        noti.style.color = "red";
        noti.style.fontSize = "30px"
    }
}