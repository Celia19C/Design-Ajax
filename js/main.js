// Menú desplegable
var realmenu = document.querySelector('.real-menu');
var button = realmenu.querySelector('.button');
var menuClose = realmenu.querySelector('.menu-close');
var option = document.querySelector('.menu');


// Functiones para abrir y cerrar
function openNavMenu() {
	realmenu.classList.add('realmenu--menu-open');
};

function closeNavMenu() {
	realmenu.classList.remove('realmenu--menu-open');
};

//Hacer el 'click'
button.addEventListener('click', openNavMenu);
menuClose.addEventListener('click', closeNavMenu);
option.addEventListener('click', closeNavMenu);
