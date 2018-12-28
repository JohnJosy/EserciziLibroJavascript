'use strict'
var inStock,
    shipping;

inStock = true;
shipping = false;

var elementStock = document.getElementById('stock')
elementStock.className = inStock;

var elementShipping = document.getElementById('shipping');
elementShipping.className = shipping;