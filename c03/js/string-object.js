'use strict'
var benvenuto = 'Home sweet Home!'
var msg = '<h2>length</h2> ' + benvenuto.length + '<br>'//lunghezza stringa benvenuto
    msg += '<h2>uppercase</h2> ' + benvenuto.toUpperCase() + '<br>'//trasforma tutti i caratteri di benvenuto in MAIUSCOLO
    msg += '<h2>lowercase</h2> ' + benvenuto.toLocaleLowerCase() + '<br>'//trasforma tutti i caratteri di benvenuto in MINUSCOLO
    msg += '<h2>Indice carattere: 12</h2> ' + benvenuto.charAt(12) + '<br>'//trova il carattare nel indici indicato(12 => o)
    msg += '<h2>First e</h2> ' + benvenuto.indexOf('ee') + '</br>'//Trova il primo elemento indicato nell'argomento
    msg += '<h2>last e</h2> ' + benvenuto.lastIndexOf('e') + '</br>'//Trova la posizione dell'argomento indicato
    msg += '<h2>Indice carattere da-a</h2> ' + benvenuto.substring(2,11)//Trova la stringa da a ma nonc onta l ultimo carattere
    msg += '<h2>Replace</h2> ' + benvenuto.replace('me', 'w')//trova le stringhe da

var elStampa = document.getElementById('info')
elStampa.innerHTML = msg