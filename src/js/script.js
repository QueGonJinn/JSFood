import tabs from './modules/tabs';
import timer from './modules/timer';
import cards from './modules/cards';
import calculator from './modules/calculator';
import slider from './modules/slider';
import modalWindow from './modules/modalWindow';
import server from './modules/server';
import {openModal} from './modules/modalWindow';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);
       
tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
timer('.timer', '2021-10-12');
cards();
calculator();
slider({
    container: '.offer__slider',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    slide: '.offer__slide',
    totalCounter: '#total',
    wrapper: '.offer__slider-wrapper',
    currentCounter: '#current',
    field: '.offer__slider-inner'
});
modalWindow('[data-modal]', '.modal', modalTimerId);
server('form', modalTimerId);


});
