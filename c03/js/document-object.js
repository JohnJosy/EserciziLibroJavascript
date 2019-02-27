'use strict'

var msg = '<p><b>Page title: </b> ' + document.title + '<br>'
    msg += '<b>Page Adress: </b>' + document.URL + '<br>'
    msg += '<b>Last modified: </b>' + document.lastModified + '</p>'

var elFooter = document.getElementById('footer')
elFooter.innerHTML = msg