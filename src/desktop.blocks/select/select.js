'use strict'

$(function(){
    $('.custom-select').customSelect({
        placeholder: 'Сколько гостей'
    });

    function setQuantityGuests() {
        let guests = quantityAdult + quantityChild;
        if(guests) guests = guests + ' гостя';
        if(quantityBaby !== 0) guests = guests + ', ' + quantityBaby + ' младенeц';
        $('.custom-select__option--value').text(guests);
    }
    $('.custom-select__dropdown .quantity-clear').css('display', 'none');

    let quantityAdult = 0;
    let quantityChild = 0;
    let quantityBaby = 0;
    let quantityOptionSelector = '.custom-select__dropdown .custom-select__option:nth-of-type';

    let $adult = $('<label class = "quantity for-quantity-adult">Взрослые</label><span class = "quantity quantity-adult">0</span>');
    let $child = $('<label class = "quantity for-quantity-child">Дети</label><span class = "quantity quantity-child">0</span>');
    let $baby = $('<label class = "quantity for-quantity-baby">Младенцы</label><span  class = "quantity quantity-baby">0</span>');

    $(quantityOptionSelector + '(1)').before($adult);
    $(quantityOptionSelector + '(3)').before($child);
    $(quantityOptionSelector + '(5)').before($baby);

    $(quantityOptionSelector + '(1)').off().on('click', function() {
        quantityAdult++;
        $('.custom-select__dropdown .quantity-adult').text(quantityAdult);
        setQuantityGuests();
    });
    $(quantityOptionSelector + '(2)').off().on('click', function() {
        if(quantityAdult !== 0) quantityAdult--;
        $('.custom-select__dropdown .quantity-adult').text(quantityAdult);
        setQuantityGuests();
    });
    $(quantityOptionSelector + '(3)').off().on('click', function() {
        quantityChild++;
        $('.custom-select__dropdown .quantity-child').text(quantityChild);
        setQuantityGuests();
    });
    $(quantityOptionSelector + '(4)').off().on('click', function() {
        if(quantityChild !== 0) quantityChild--;
        $('.custom-select__dropdown .quantity-child').text(quantityChild);
        setQuantityGuests();
    });
    $(quantityOptionSelector + '(5)').off().on('click', function() {
        quantityBaby++;
        $('.custom-select__dropdown .quantity-baby').text(quantityBaby);
        setQuantityGuests();
    });
    $(quantityOptionSelector + '(6)').off().on('click', function() {
        if(quantityBaby !== 0) quantityBaby--;
        $('.custom-select__dropdown .quantity-baby').text(quantityBaby);
        setQuantityGuests();
    });
    $(quantityOptionSelector + '(7)').off().on('click', function() {
        $('.custom-select__dropdown').css('display', 'none');
        $('.custom-select').removeClass('custom-select--active');
    });
    $(quantityOptionSelector + '(8)').off().on('click', function() {
        quantityAdult = 0;
        quantityChild = 0;
        quantityBaby = 0;
        $('.custom-select__dropdown .quantity-adult').text(quantityAdult);
        $('.custom-select__dropdown .quantity-child').text(quantityChild);
        $('.custom-select__dropdown .quantity-baby').text(quantityBaby);
        $('.custom-select__option--value').text('Сколько гостей');
        $('.custom-select__dropdown .quantity-clear').css('display', 'none');
    });
    $('.custom-select__dropdown .custom-select__option').on('click', function() {
        if(quantityAdult || quantityChild || quantityBaby) $('.custom-select__dropdown .quantity-clear').css('display', 'block');
            else {
            $('.custom-select__option--value').text('Сколько гостей');
            $('.custom-select__dropdown .quantity-clear').css('display', 'none');
        }
    });
});