/*document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form', function() {
        let affi_div = document.querySelector('#aff_div');
        let aff_div1 = document.querySelector('#aff_div1');
        if (affi_div.checked) {
            d1.style.visibility = 'visible';
        } else {
            d1.style.visibility = 'hidden';
        }
    });
});*/


function visibl() {
    d1.style.visibility = "visible";
}

function cache() {
    d1.style.visibility = "hidden";
}

function submt() {
    let paswd = document.querySelector('#password');
    let nom = document.querySelector('#nom');
    let vis = document.querySelector('#aff_div');
    let s1 = document.querySelector('#s1');
    let i = s1.selectedIndex;
    var rg = new RegExp('^[a-zA-Z]+$', 'g');
    if (rg.test(nom.value) == false) {
        alert('name field must not content numbers and symbols');
        nom.value = '';
    } else if (paswd.value == '') {
        alert('Enter a paswd!');
    } else if (vis.checked) {
        if (s1.options[i].value == '') {
            alert('chose a city');
        }
    }



}