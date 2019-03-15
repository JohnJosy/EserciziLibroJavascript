'use strict'

const hotel = {
    name : 'Hotel Le Querce',
    roomRate : 350,
    discount: 30,
    discountRate : function () {
        let finalRate =  (this.roomRate * this.discount) / 100
        return finalRate
    }
}

console.log('Prezzo ' + hotel.discountRate())
console.log('Nome: ' + hotel.name)

var elName = document.getElementById('hotelName')
elName.textContent = hotel.name

var elroomRate = document.getElementById('roomRate')
elroomRate.textContent = '\u20AC ' + hotel.roomRate.toFixed(2)

var elDiscountRate = document.getElementById('specialRate')
elDiscountRate.textContent = '\u20AC ' + hotel.discountRate()

/* Parte Seconda Calcolo e visualizzazione della scadenza dell'offerta */
//Dichiaro 3 variabili: Messaggio agli Utenti, data odierna, Messaggio Scadenza Offerta
var scadenzaMsg, today, fineOfferta
function expireRate (today) {
    var weekFromToday, day, date, month, year, dayNames, monthNames
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)
    dayNames = ['Domenica', 'Luned\u00CD;', 'Marted\u00CD', 'Mercoled\u00CD', 'Gioved\u00CD;','Venerd\u00EC','Sabato']
    monthNames = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobrre','Novembre','Dicembre']
    date = weekFromToday.getDate()//numero del giorno
    day = dayNames[weekFromToday.getDay()]//nome del giorno
    month = monthNames[weekFromToday.getMonth()]
    year = weekFromToday.getFullYear()
    console.log(day + '-' + date + '-' +  month + '-' + year)

    scadenzaMsg = 'L\'offerta scadr\u00C1: <br>'
    scadenzaMsg += day + '<br>' + '( ' + date + ' '  + month + ' ' + year + ' )'

    return scadenzaMsg
}

today = new Date()

var fineOfferta = document.getElementById('offerEnds')
fineOfferta.innerHTML = expireRate(today)