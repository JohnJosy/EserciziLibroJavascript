'use strict'

function Hotel (name, rooms, booked) {//PROPRIETA
    this.name = name;
    this.rooms = rooms;
    this.booked = booked

    this.checkAvailability = function () {//METODO
        return this.rooms - this.booked
    }
}

var quayHotel = new Hotel('Quay', 40, 25)
var parkHotel = new Hotel('Park', 120, 77)

var detailsQuay = quayHotel.name + ' rooms: ';
    detailsQuay += quayHotel.checkAvailability();
var elQuayHotel = document.getElementById('hotel1')
elQuayHotel.innerHTML = detailsQuay;

var detailsPark = parkHotel.name + ' rooms ';
    detailsPark += parkHotel.checkAvailability();
var elParkHotel = document.getElementById('hotel2')
elParkHotel.innerHTML = detailsPark;