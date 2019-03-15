'use strict'

var score = 75//PUNTEGGIO
var msg //MESSAGGIO

if (score >= 50) {
    msg = 'Congratulation ! <br>'
    msg += 'Proced to the next round.'
}

var elAnswer = document.getElementById('answer')
elAnswer.innerHTML = msg

