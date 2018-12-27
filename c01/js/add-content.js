'use sctrict'
var toDay = new Date();
var hourNow = toDay.getHours()
var greeting;

if (hourNow > 18) {
    greeting = 'Good Evening!'
}
else if (hourNow > 12,01){
    greeting = 'Good Afternoon!'
}
else if (hourNow > 5) {
    greeting = 'Good Morning'
}
else if(hourNow > 23) {
    greeting = 'Good Night'
}
else {
    greeting = 'Welcome!'
}

document.write('<h3>' + greeting + '</h3>')