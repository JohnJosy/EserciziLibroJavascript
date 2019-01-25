'use strict'

var elhotelName = document.getElementById('hotelName');
var elroomsFree = document.getElementById('rooms');

var hotel = {
   name: 'Quay',
   rooms: 40,
   booked: 25,
   checkAvailability: function () {
      return this.rooms - this.booked 
   }
};

//altro modo di istanziare un oggetto
/* var hotelName = hotel['name']
var roomsFree = hotel['checkAvailability'](); */

var hotelName = hotel.name;
var roomsFree = hotel.checkAvailability();

elhotelName.innerHTML = hotelName;
elroomsFree.textContent = roomsFree;



