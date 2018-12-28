'use strict'
//variabili per contentuo titolo
var greeting = 'Howdy ';//salve
var name = 'John';
var message = ', please check your order:';
//concateno i 3 messaggi
var welcome = greeting + name + message;
//Variabili dettagli ta
var shipping = 7;
var signTitle = 'Montague House';
var totalTiles = signTitle.length;
var subTotal = totalTiles * 5;
var grandTotal = subTotal + shipping;

//Salvo elemento(div id="greeting") e gli aggiorno il contenuto(text.Content) della variabile welcome
var elementGreeting = document.getElementById('greeting');
elementGreeting.textContent = welcome;

var elementSign = document.getElementById('userSign')
elementSign.textContent = signTitle;

var elementTiles = document.getElementById('tiles');
elementTiles.textContent = totalTiles;

var elementSubTotal = document.getElementById('subTotal');
elementSubTotal.textContent = '\u20AC ' + subTotal;

var elementShipping = document.getElementById('shipping');
elementShipping.textContent = '\u20AC ' + shipping;

var elementGrandTotal = document.getElementById('grandTotal')
elementGrandTotal.textContent = '\u20AC ' + grandTotal;
