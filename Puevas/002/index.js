var Animal; // variable global

function Proves() {

    Pregunta();

    if (Animal) { // si es...
        alert('has dicho que si')
    } else {
        alert('has dicho que no')
    }

}

function Pregunta() {
    Animal = confirm('Tens Algun Animal');
}

function AbrirPageNueva() {
    window.open("Page1.html", "Pregunta", "width=300, height=200")
}