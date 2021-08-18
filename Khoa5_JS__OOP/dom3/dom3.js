function getEle(id) {
    return document.getElementById(id);
}

function changeLi() {
    var Ul = document.getElementsByTagName("ul");
    var firstUl = Ul[0];
    var Li = document.getElementsByTagName("li");
    var firstLi = Li[0];
    firstLi.innerHTML = "Changed content"
    firstLi.style.fontSize = "30px";
    firstLi.style.color = "red";
}

function changeTagP() {
    var Div = getEle('demoTagP');
    var TagP = Div.getElementsByTagName("p");
    var secondTagP = TagP[1];
    secondTagP.innerHTML = "Changed";
    secondTagP.style.fontSize = "30px";
    secondTagP.style.color = "Green";
    // changeByClass();
    // testQuerySelector();
    // testQueryAll();
    testQuerySelector2();
}

function changeByClass() {
    var className = document.getElementsByClassName("testClass");
    var class1 = className[1];
    // class1.innerHTML = "Class1";
    // class1.style.fontSize = "30px";
    // class1.style.color = "red";
    for (var item of className) {
        item.style.color = "red";
        item.style.fontSize = "20px";

    }
}

function testQuerySelector() {
    var query1 = document.querySelector("p");
    query1.style.fontSize = "50px";
    query1.style.color = "blue";
}
function testQuerySelector2() {
    var query2 = document.querySelector("#demoTagP p:last-child");
    query2.style.fontSize = "40px";
    query2.style.color = "orange";
}

function testQueryAll() {
    var query = document.querySelectorAll('p');
    for (var item of query) {
        item.style.color = "blue";
        item.style.fontSize = "40px"
    }
}
//================
function createElement() {
    var btn = document.createElement("button");
    btn.innerHTML = "Thẻ được tạo";
    document.body.appendChild(btn); // Tạo btn

    // Tạo btn trong div
    var pInDiv = document.createElement("p");
    pInDiv.innerHTML = "Nội dung được tạo mới";
    pInDiv.style.color = "red";
    pInDiv.style.fontSize = "30px";
    var div = getEle("divCre");
    div.appendChild(pInDiv);

}
getEle("createEle").onclick = function () {
    createElement();
}