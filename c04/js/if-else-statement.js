'use strict'
var score = 5
var pass = 50
var msg

if (score >= pass) {
    msg = 'Congratulations, you have passed!'
} else {
    msg = 'Have another chance!'
}

var elAnswer = document.getElementById('answer')
elAnswer.innerHTML = msg