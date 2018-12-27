'use sctrict'
var price,
    quanity,
    total,
price = 5;
quanity = 14;
total = price * quanity;

var element = document.getElementById('cost');
element.textContent = '\u20AC ' + total;