'use strict'

var toDay = new Date();
var year = toDay.getFullYear()
var est = new Date('Apr 16, 1996 15:45:55')

var difference = toDay.getTime() - est.getTime()

difference = (difference / 31556900000)

var elMsg = document.getElementById('message')
elMsg.textContent = Math.floor(difference) + ' years on line travel device'