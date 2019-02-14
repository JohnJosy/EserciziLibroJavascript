'use strict'
var msg = '<h2>Browser Window</h2><p>width: ' + window.innerWidth + '</p>';
    msg += '<p>height: ' + window.innerHeight + '</p>';
    msg += '<hr>';
    msg += '<h2>History</h2><p>items : ' + window.history.length + '</p>';
    msg += '<hr>';
    msg += '<h2>Screen</h2><p>width: ' + window.screen.width + '</p>';
    msg += '<p>height: ' + window.screen.height + '</p>';

var elInfo = document.getElementById('info')
elInfo.innerHTML = msg;
alert('Pagina Corrente: ' + window.location)