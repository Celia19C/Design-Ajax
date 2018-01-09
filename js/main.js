// Menú desplegable
var realmenu = document.querySelector('.container');
var button = document.querySelector('.button');
var menuClose = document.querySelector('.menu-close');
var option = document.querySelector('.menu');
var body = document.querySelector('.body');
var enlaces = document.querySelector('.item');


// Functiones para abrir y cerrar
function openNavMenu() {
	body.classList.add('menu-open')
};

function closeNavMenu() {
	body.classList.remove('menu-open');

};

//Hacer el 'click'
button.addEventListener('click', openNavMenu);
menuClose.addEventListener('click', closeNavMenu);
option.addEventListener('click', closeNavMenu);
// enlaces.addEventListener('click', closeNavMenu);

// AJAX
function requestFetch (){
fetch('https://three-random-reasons-izwfjpgbqm.now.sh')
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    var reasons = json.reasons;
    var listHTML = '';
var newReasons = document.querySelector('.div-reasons');
    for (var i = 0; i < reasons.length; i++) {
      listHTML += '<div> <h3 class="reason-minititle">' + reasons[i].title + '</h3><p class="reason-text">'+reasons[i].description+ '</p></div>';
    }

    newReasons.innerHTML += listHTML;
  });
}
var buttonRequest= document.querySelector('.btn-more-reasons');
buttonRequest.addEventListener('click', requestFetch);
