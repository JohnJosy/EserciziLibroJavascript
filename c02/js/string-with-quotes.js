'use strict'
var title,
    message;

title = "Molly's Special Offers";
message = '<a href=\"sale.html\">25% off!</a>';

var elementTitle = document.getElementById('title')
elementTitle.innerHTML = title;

var elementMessage = document.getElementById('note')
elementMessage.innerHTML = message;