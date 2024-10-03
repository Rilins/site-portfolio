document.addEventListener('DOMContentLoaded', function() {

    const path = window.location.pathname.includes('/pags/') ? '..' : '.';

    // Função para carregar a barra de navegação
    fetch(`${path}/partials/navbar.html`)
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));

    fetch('${path}/partials/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;   
        })
        .catch(error => console.error('Error loading footer', error));
});

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
