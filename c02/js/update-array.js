'use strict'

var colors = ['white',
              'black',
              'custom'];

//MODIFICO il valore colors[2] con beige
colors[2] = 'beige';

var elementColor =  document.getElementById('colors')
elementColor.textContent = colors[2]