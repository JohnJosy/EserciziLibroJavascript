'use strict'
var benvenuto = 'Home sweet Home!'
var msg = '<h2>length</h2> ' + benvenuto.length + '<br>'
    msg += '<h2>uppercase</h2> ' + benvenuto.toUpperCase() + '<br>'
    msg += '<h2>lowercase</h2> ' + benvenuto.toLocaleLowerCase() + '<br>'
    msg += '<h2>Indice carattere: 12</h2> ' + benvenuto.charAt(12) + '<br>'
    msg += '<h2>First e</h2> ' + benvenuto.indexOf('ee') + '</br>'
    msg += '<h2>last e</h2> ' + benvenuto.lastIndexOf('e') + '</br>'
    msg += '<h2>Indice carattere da-a</h2> ' + benvenuto.substring(2,11)
    msg += '<h2>Replace</h2> ' + benvenuto.replace('me', 'w')

var elStampa = document.getElementById('info')
elStampa.innerHTML = msg