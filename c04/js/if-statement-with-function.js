'use strict'
var score = 75
var msg = ''

function congratulations () {
    msg += 'Congratulations ! <br>'
}

if (score >= 50) {
    congratulations()
    msg += 'Proced to the next Round'
}

var elAnswer = document.getElementById('answer')
elAnswer.innerHTML = msg