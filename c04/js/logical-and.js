'use strict'

var score1 = 8 //Round1 - Punteggio
var score2 = 8 //Round1 - Punteggio
var pass1 = 6 //Round1 - Punteggio minimo
var pass2 = 6 //Round1 - Punteggio minimo

//Se l'utente passa in entrambi i Round salva il riisultato in una variabile
var score = (score1 >= pass1) && (score2 >= pass2)

var msg = 'Both rounds passed: ' + score
var elAnswer = document.getElementById('answer')
elAnswer.textContent = msg