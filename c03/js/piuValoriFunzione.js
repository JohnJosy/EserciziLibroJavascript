'use strict'
var elementArea = document.getElementById('messageArea')
var elementVolume = document.getElementById('messageVolume')

function getSize (width, height, depth) {
    var area = width * height;
    var volume = width * height * depth;
    var sizes = [area, volume];

    return sizes
}

var widthPerson = prompt('Inserire Larghezza')
var heightPerson = prompt('Inserie Altezza')
var depthPerson = prompt('Inserire Profondità')

var areaOne = getSize(widthPerson, heightPerson, depthPerson)[0];
var volumeOne = getSize(widthPerson, heightPerson, depthPerson)[1];

elementArea.textContent = ('Risultato Area ' + areaOne)
elementVolume.textContent = ('Il valore del volume \xE9: ' + volumeOne)

