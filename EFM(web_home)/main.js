//alert("working");
var a = document.getElementById("A");
var b = document.getElementById("B");


function alea() {


    var min, max;
    min = -101;
    max = 101;

    a.value = Math.floor(Math.random() * (max - min)) + min;
    b.value = Math.floor(Math.random() * (max - min)) + min;

    // ------ Clear --------
    add.value = "";
    sub.value = "";
    div.value = "";
    multi.value = "";
    add_res.value = "";
    sub_res.value = "";
    multi_res.value = "";
    div_res.value = "";
}

function verifier() {
    var sum = document.getElementById("add")
    var subs = document.getElementById("sub");
    var mult = document.getElementById("multi");
    var divi = document.getElementById("div");

    if (sum.value == "") {
        sum.style.backgroundColor = "yellow";
        sum.focus();
    } else {
        sum.style.backgroundColor = "white";
    }

    if (subs.value == "") {
        subs.style.backgroundColor = "yellow";
        subs.focus();
    } else {
        subs.style.backgroundColor = "white";
    }
    if (mult.value == "") {
        mult.style.backgroundColor = "yellow";
        mult.focus();
    } else {
        mult.style.backgroundColor = "white";
    }
    if (divi.value == "") {
        divi.style.backgroundColor = "yellow";
        divi.focus();
    } else {
        divi.style.backgroundColor = "white";
    }
}

function Solution() {
    var a = document.getElementById("A");
    var b = document.getElementById("B");

    let sum_res = document.querySelector('#add_res');
    let subs_res = document.getElementById("sub_res");
    let mult_res = document.getElementById("multi_res");
    let divi_res = document.getElementById("div_res");

    sum_res.value = Number(a.value) + Number(b.value);
    subs_res.value = parseFloat(a.value) - parseFloat(b.value);
    mult_res.value = parseFloat(a.value) * parseFloat(b.value);
    divi_res.value = parseFloat(a.value) / parseFloat(b.value);

}