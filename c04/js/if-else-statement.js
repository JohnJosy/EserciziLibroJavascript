'use strict'
var score = 5
var pass = 50
var msg1

if (score >= pass) {
    msg1 = 'Congratulations, you have passed!'
} else {
    msg1 = 'Have another chance!'
}

var elAnswer = document.getElementById('answer')
elAnswer.innerHTML = msg1