window.addEventListener('DOMContentLoaded', () => {
 const tabs = require('./modules/tabs'),
       timer = require('./modules/timer'),
       cards = require('./modules/cards'),
       calculator = require('./modules/calculator'),
       slider = require('./modules/slider'),
       modalWindow = require('./modules/modalWindow'),
       server = require('./modules/server');

tabs();
timer();
cards();
calculator();
slider();
modalWindow();
server();


});
