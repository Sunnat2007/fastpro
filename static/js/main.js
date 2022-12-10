// Selector
let kalit = document.querySelector("#kalit");
// let tekshir1 = document.querySelector("#tekshir1");
let kalitNav1 = document.querySelector("#kalit-nav1");
//Event litsener
// tekshir1.addEventListener("click", foo1);

//function

function foo1(){
let key = 1234 ;
console.log(kalit.value, kalitNav1.value);

    if(kalit.value == key || kalitNav1.value == key) {
        document.querySelector("#next-btn").removeAttribute("disabled");
        document.querySelector("#next-nav-btn1").removeAttribute("disabled");
        document.querySelector("#next-a").setAttribute("href", "{% url 'html' %}")
        document.querySelector("#next-nav-a1").setAttribute("href", "{% url 'html' %}")
    } else if(kalit.value === "" && kalitNav1.value === ""){
        //---
    } else {
        alert("kalitda xatolik");
    }
}

// ------------------ 2 ----------------------------
// Selector
let kalitNav2 = document.querySelector("#kalit-nav2");
//Event litsener

//function
function foo2(){
let key = 1234;
console.log(kalit.value, kalitNav2.value);

    if(kalit.value == key || kalitNav2.value == key) {
        document.querySelector("#next-btn").removeAttribute("disabled");
        document.querySelector("#next-nav-btn2").removeAttribute("disabled");
        document.querySelector("#next-a").setAttribute("href", "{% url 'html' %}")
        document.querySelector("#next-nav-a2").setAttribute("href", "{% url 'html' %}")
    } else if(kalit.value === "" && kalitNav2.value === ""){
        //---
    } else {
        alert("kalitda xatolik");
    }
}

// ------------------ 3 ----------------------------
// Selector
let kalitNav3 = document.querySelector("#kalit-nav3");
//Event litsener

//function
function foo3(){
let key = 1334;
console.log(kalit.value, kalitNav3.value);

    if(kalit.value == key || kalitNav3.value == key) {
        document.querySelector("#next-btn").removeAttribute("disabled");
        document.querySelector("#next-nav-btn3").removeAttribute("disabled");
        document.querySelector("#next-a").setAttribute("href", "{% url 'html' %}")
        document.querySelector("#next-nav-a3").setAttribute("href", "{% url 'html' %}")
    } else if(kalit.value === "" && kalitNav3.value === ""){
        //---
    } else {
        alert("kalitda xatolik");
    }
}

// ------------------ 4 ----------------------------
// Selector
let kalitNav4 = document.querySelector("#kalit-nav4");
//Event litsener

//function
function foo4(){
let key = 144;
console.log(kalit.value, kalitNav4.value);

    if(kalit.value == key || kalitNav4.value == key) {
        document.querySelector("#next-btn").removeAttribute("disabled");
        document.querySelector("#next-nav-btn4").removeAttribute("disabled");
        document.querySelector("#next-a").setAttribute("href", "{% url 'html' %}")
        document.querySelector("#next-nav-a4").setAttribute("href", "{% url 'html' %}")
    } else if(kalit.value === "" && kalitNav4.value === ""){
        //---
    } else {
        alert("kalitda xatolik");
    }
}

// ------------------ 5 ----------------------------
// Selector
let kalitNav5 = document.querySelector("#kalit-nav5");
//Event litsener

//function
function foo5(){
let key = 15;
console.log(kalit.value, kalitNav5.value);

    if(kalit.value == key || kalitNav5.value == key) {
        document.querySelector("#next-btn").removeAttribute("disabled");
        document.querySelector("#next-nav-btn5").removeAttribute("disabled");
        document.querySelector("#next-a").setAttribute("href", "{% url 'html' %}")
        document.querySelector("#next-nav-a5").setAttribute("href", "{% url 'html' %}")
    } else if(kalit.value === "" && kalitNav5.value === ""){
        //---
    } else {
        alert("kalitda xatolik");
    }
}