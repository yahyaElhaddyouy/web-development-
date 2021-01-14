function afficher() {
    var s1 = document.querySelector('#s1');
    var d1 = document.querySelector('#d1');

    var i = s1.selectedIndex;
    if (i != 0) {
        var v = s1.options[i].value;
        var t = s1.options[i].text;
        d1.innerHTML = "index : " + i + "<br>value = " + v + "<br>text = " + t;
    } else {
        d1.innerHTML = "Error in section input";
    }
}

function afficher2() {

    let s1 = document.querySelector('#s1');
    let d2 = document.querySelector('#d2');

    let i = s1.selectedIndex;
    for (; i < s1.length; i++) {
        var v = s1.options[i].value;
        var t = s1.options[i].text;
        d2.innerHTML += "index : " + i + "<br>value = " + v + "<br>text = " + t;
    }
}

function ajouter() {
    var s1 = document.querySelector('#s1');
    var t = "Brazil";
    var v = "4";
    var o = new Option(t, v);
    s1.options.add(o);
    //s1.options.remive(position);


    //s1.options[s1.options.lenght] = o;
}