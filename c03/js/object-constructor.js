'use strict'

var hotel = new Object();
hotel.name = 'Park';
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function () {
    return this.rooms - this.booked
}

/* Per mofidicare un elemento basta sovrascriverlo
    shotel.rooms = 100
   Per eliminare una proprietà mettima delete d'avanti
    delete hotel.name;
*/

var elName = document.getElementById('hotelName')
elName.textContent = hotel.name;

var elFreeRoms = document.getElementById('rooms')
elFreeRoms.textContent = hotel.checkAvailability()