document.addEventListener('DOMContentLoaded', function() {
    // Função para carregar a barra de navegação
    fetch('../partials/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;

            // Adicionar botões específicos após a barra de navegação ser carregada
            const navbarLinks = document.getElementById('navbar-links');
            if (navbarLinks) {
                addPageSpecificButton(navbarLinks);
            }
        })
        .catch(error => console.error('Error loading navbar:', error));

    fetch('../partials/footer.html')
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
