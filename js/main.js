// Menú desplegable
var realmenu = document.querySelector('.real-menu');
var button = realmenu.querySelector('.button');
var menuClose = realmenu.querySelector('.menu-close');
var option = document.querySelector('.menu');


// Functiones para abrir y cerrar
function openNavMenu() {
	realmenu.classList.add('realmenu--menu-open')
realmenu.classList.add('gradient');
};

function closeNavMenu() {
	realmenu.classList.remove('realmenu--menu-open');
};

//Hacer el 'click'
button.addEventListener('click', openNavMenu);
menuClose.addEventListener('click', closeNavMenu);
option.addEventListener('click', closeNavMenu);


// AJAX
// //variable de petición
// var request= new XMLHttpRequest();
// var buttonRequest= document.querySelector('.btn-more-reasons');
//
// // function MoreReasons() {
// request.open('GET','https://three-random-reasons-izwfjpgbqm.now.sh/')
// request.addEventListener('load', addReasons);
// function addReasons() {
// var response=request.responseText:
// var responseJSON= JSON.parse(response).reasons;
// var listReasons= '';
// for (var i=0;i<response.length;i++) {
// listReasons += '<div>'+ responseJSON[i]+ '<div>';
// }
// var divReasons= document.querySelector('.div-reasons');
// div.innerHTML=listReasons;
//
// }
// buttonRequest.addEventListener('click',newRequest);
// function newRequest() {
// 	request= new XMLHttpRequest();
// // moreReasons();
// }
// // moreReasons();
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
      listHTML += '<div> <h3>' + reasons[i].title + '</h3><p>'+reasons[i].description+ '</p></div>';
    }

    newReasons.innerHTML += listHTML;
  });
}
var buttonRequest= document.querySelector('.btn-more-reasons');
buttonRequest.addEventListener('click', requestFetch);
