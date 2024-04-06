// Evento fecha o menu ao clicar fora
const cliqueFora = (event) => {
    let menu = document.getElementById("menu");

    if(!menu.contains(event.target)) {
        menu.style.display = "none"
        document.removeEventListener('click', cliqueFora, false);
    }


}

// Evento abre o menu
const abreMenu = () => {
    let menu = document.getElementById("menu");
    menu.style.display = "block"
    setTimeout(() => { document.addEventListener('click', cliqueFora, false)},200);
}


// Modo tela
function modoTela() {
    const html = document.documentElement
    html.classList.toggle("light")
}