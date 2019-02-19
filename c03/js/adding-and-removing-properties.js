'use strict'

var hotel = {
    name: 'Park',
    rooms: 120,
    booked: 77
}

hotel.pool = false;
hotel.gym = true;

var elPool = document.getElementById('pool');
elPool.className = hotel.pool;

var elGym = document.getElementById('gym');
elGym.className = hotel.gym;