'use strict'

var numCasuale = Math.floor((Math.random() * 10)  + 1)
var elInfo = document.getElementById('info')

elInfo.innerHTML = '<h2>Random Number: </h2><p>' + numCasuale + '</p>' 