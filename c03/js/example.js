/* Lo script è collocata in un IIFE (Immediately-invoked Function Expressions) per protegegre la fisibilità delle variabili */

(function () {
    /* Si Parte creando un Oggetto hotel usando la sintasssi letterale */
    var hotel = {
        name: 'Park',
        prezzoCamera: 240, //Importo
        sconto: 15, //Percentuale Sconto
        prezzoScontato: function () {
            var offertaPrezzo = this.prezzoCamera * ((100 - this.sconto) / 100)
            return offertaPrezzo
        }
    }
    /* Scrivo nomeHotel, prezzoHotel, prezzoScontato */
    var hotelName, prezzoCamera, prezzoScontato
    /* Assegno gli elementi */
    hotelName = document.getElementById('hotelName')
    prezzoCamera = document.getElementById('roomRate')
    prezzoScontato = document.getElementById('specialRate')
    
    /* Passo le propietà e metodi dell'oggetto hotel */
    hotelName.textContent = hotel.name
    prezzoCamera.textContent = '\u20AC ' + hotel.prezzoCamera.toFixed(2)
    prezzoScontato.textContent = '\u20AC ' + hotel.prezzoScontato()

    /* Parte Seconda Calcolo e visualizzazione della scadenza dell'offerta */
    //Dichiaro 3 variabili: Messaggio agli Utenti, data odierna, Messaggio Scadenza Offerta
    var scadenzaMsg, today, fineOfferta
    function scadenzaOfferta(today) {
        //dichiaro variabili date
        var weekFromToday, day, date, month, year, dayNames, monthNames
        //Aggiungo 7 giorni (misurati millisecondi)
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)
        //Creo gli Array per salvare nimi giorni e mesi
        dayNames = ['Domenica', 'Luned\u00CD;', 'Marted\u00CD', 'Mercoled\u00CD', 'Gioved\u00CD;','Venerd\u00CD','Sabato']
        monthNames = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobrre','Novembre','Dicembre']
        //Compongo Le parti della data da presentare
        day = dayNames[weekFromToday.getDay()]
        date = weekFromToday.getDate()
        month = monthNames[weekFromToday.getMonth()]
        year = weekFromToday.getFullYear()
        //Creo il Messaggio
        var scadenzaMsg = 'Offerta scadr\u00C1: '
        scadenzaMsg += day +'<br> (' + date + ' ' + month + ' ' + year + ')'
        return scadenzaMsg
    }
    today = new Date()
    fineOfferta = document.getElementById('offerEnds')
    fineOfferta.innerHTML = scadenzaOfferta(today)
/* Chiude IIFE */
}())