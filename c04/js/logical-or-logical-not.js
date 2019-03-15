'use strict'
var score1 = 8 //Round1 - punteggio
var score2 = 8 //Round - punteggio
var pass1  = 6 //Round1 - punteggio minimo
var pass2  = 6 //round2 - punteggio minimo

//Se l'utente pasa almeno uno dei round, salva il risultato in una variabile
var minPass = (score1 >= pass1) || (score2 >= pass2)

//Creo il messaggio
var msg = 'Resit required: <br>' + '<strong>' + !minPass + '</strong>'

var elAnswer = document.getElementById('answer')
elAnswer.innerHTML = msg