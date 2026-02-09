// On sélectionne le bouton burger et la liste des liens
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

// Quand on clique sur le burger...
burger.addEventListener('click', () => {
    // On ajoute ou enlève la classe "nav-active" à la liste
    nav.classList.toggle('nav-active');
});