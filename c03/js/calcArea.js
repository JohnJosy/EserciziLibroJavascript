'use strict'

function areaElemento(width, height) {
    var area = width * height
    return area
}


var el = window.document.getElementById('message');
var larghezza = el.offsetWidth;
var altezza = el.offsetHeight;
console.log(larghezza, altezza)


var risultato = areaElemento(larghezza, altezza)
var fraseRisultato = 'L\'area di questo elemento \xE9 ' + '<br>' + risultato;
el.textContent = fraseRisultato;





