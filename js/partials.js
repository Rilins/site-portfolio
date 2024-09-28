// Botões
function showArticle(articleId) {
    const articles = document.querySelectorAll(".blocoEstudo");
    articles.forEach(article => {
        article.classList.remove('active');
    });

    const activeArticle = document.getElementById(articleId);
    if (activeArticle){
        activeArticle.classList.add('active');
    }
}

// Carrossel 
document.querySelectorAll('.carrosel').forEach(carrosel => {
    const prevButton = carrosel.querySelector('.prev');
    const nextButton = carrosel.querySelector('.next');
    const conteudoCarrosel = carrosel.querySelector('.conteudo-carrosel');
    const blocos = carrosel.querySelectorAll('.ccc');

    let currentIndex = 0;

    function updateCarrosel() {
        const offset = -currentIndex * 100; // Movimenta 100% por bloco
        conteudoCarrosel.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < blocos.length - 1) {
            currentIndex++;
            updateCarrosel();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarrosel();
        }
    });

    updateCarrosel();
});