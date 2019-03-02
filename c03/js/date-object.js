'use strict'

var date = new Date()
var year = date.getFullYear()
var elFooter = document.getElementById('footer')

elFooter.innerHTML = '<p>Copyright &copy ' + year + '</p>'