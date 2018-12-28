'use strict'
var greeting = 'Howdy ';//salve
var name = 'Molly';
var message = ', please check your order:';
var shipping = 7;

var welcome = greeting + name +message;
var signTitle = 'Montague House';
var totalTiles = signTitle.length;
var subTotal = totalTiles * 5;
var grandTotal = subTotal + shipping;

//Salvo elemento(div id="greeting") e gli stampo(text.Content) il nuovo contenuto della variabile welcome
var elementGreeting = document.getElementById('greeting');
elementGreeting.textContent = welcome;

var elementSign = document.getElementById('userSign')
elementSign.textContent = signTitle;

