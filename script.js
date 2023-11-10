function getReferenceTitle() {
    return document.getElementById("hola-nombre");
}

function askForName() {
    return prompt("Escribe tu nombre");
}

function changeText() {
    let name = askForName();
    let refTitle = getReferenceTitle();
    refTitle.innerHTML = `Hola ${name}`;
}