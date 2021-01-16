function welcome() {
    let name = document.querySelector('#Name');
    let pays = document.querySelector('#s1');
    let i = s1.selectedIndex;
    var v = s1.options[i].value;

    d1.innerHTML = 'Hello Mr.' + name.value + '<br>From' + v;
}