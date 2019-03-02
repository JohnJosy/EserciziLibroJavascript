'use strict'

var oggi = new Date()
var year = oggi.getFullYear()
var nascita = new Date('Feb 15, 1994 14:30:00')
var differenza = oggi - nascita
var anni = differenza / 31556900000
var mesi = differenza / 2629800000
var settimane = differenza / 604800016.56
var giorni = differenza / 86400000
var ore = differenza / 3600000
var minuti = differenza / 60000
var secondi = differenza / 1000
var millisecondi = differenza / 1


var msg = '<h3><strong>Tempo Passato dalla nascita di Nostra Padrona Elisa</strong></h3><p>Anni: ' + Math.floor(anni) + '<br>'
    msg += 'Mesi : ' + Math.floor(mesi) + '<br>'
    msg += 'Settimane : ' + Math.floor(settimane) + '<br>'
    msg += 'Giorni : ' + Math.floor(giorni) + '<br>'
    msg += 'Ore : ' + Math.floor(ore) + '<br>'
    msg += 'minuti : ' + Math.floor(minuti) + '<br>'
    msg += 'secondi : ' + Math.floor(secondi) + '<br>'
    msg += 'millisecondi : ' + Math.floor(millisecondi) + '<br>'

var elMessage = document.getElementById('message')
elMessage.innerHTML = msg
setInterval(() => {
    console.log(Math.floor(secondi))
    window.location.reload(true);
}, 2000);


 