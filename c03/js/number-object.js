'use strict'
var numeroOriginale = 10.864123

var msg =  '<h2>numeroOriginale</h2> <p>' + numeroOriginale + '</p>'
    msg += '<h2>3 Decimali</h2> <p>' + numeroOriginale.toFixed(3) + '</p>'
    msg += '<h2>Primi 3 Digitati</h2> <p>' + numeroOriginale.toPrecision(3) + '</p>'
    msg += '<h2>Potenza del numero</h2> <p>' + numeroOriginale.toExponential(2) + '</p>'

var elNumber = document.getElementById('info')
elNumber.innerHTML = msg