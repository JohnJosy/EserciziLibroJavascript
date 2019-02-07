'use strict'

var hotel = {
    name: 'Park',
    rooms: 120,
    booked: 77,
    checkAvailability: function () {
        return this.rooms - this.booked;
    }
};

var el = document.getElementById('hotelName')
el.textContent = hotel.name

var roomsFree = document.getElementById('rooms')
roomsFree.innerHTML = hotel.checkAvailability()