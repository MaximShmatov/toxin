'use strict'

import('./quantity-select.sass');
import('../button/button');

$(function(){
    let $quantitySelect = $('.quantity-select');
    let selected = $quantitySelect.find('.quantity-select__selected');
    let dropdown = $quantitySelect.find('.quantity-select__dropdown');
    let dropdownItems = $quantitySelect.find('.quantity-select__picker');
    let quantityGroupMinus = $quantitySelect.find('.quantity-select__picker-minus');
    let quantityGroupPlus = $quantitySelect.find('.quantity-select__picker-plus');
    let quantity = $quantitySelect.find('.quantity-select__quantity');
    let clear = $quantitySelect.find('.quantity-select__clear');
    let submit = $quantitySelect.find('.quantity-select__submit');

    function toggleItemsDisplay() {
        if(dropdownItems.css('visibility') === 'hidden') {
            dropdownItems.css('visibility', 'visible');
        } else dropdownItems.css('visibility', 'hidden');
    }
    function setSelectedCaption() {
        let guestsQuantity = Number($(quantity[0]).text()) + Number($(quantity[1]).text());
        let selectedMessage = '';
        if(guestsQuantity) selectedMessage = guestsQuantity + ' гостя';
        if(Number($(quantity[2]).text())) selectedMessage = selectedMessage + ', ' + $(quantity[2]).text() + ' младенец'
        selected.text(selectedMessage);
    }

    dropdown.on('click', function(){
        toggleItemsDisplay();
    });

    clear.on('click', function(){
        $(quantity[0]).text('0');
        $(quantity[1]).text('0');
        $(quantity[2]).text('0');
        clear.css('visibility', 'hidden');
        selected.text('Сколько гостей');
    });
    submit.on('click', function(){
        dropdownItems.css('visibility', 'hidden');
    });

    $(quantityGroupMinus[0]).on('click', function(){
        Number($(quantity[0]).text()) ? $(quantity[0]).text(Number(Number($(quantity[0]).text())-1)) : clear.css('visibility', 'hidden');
        setSelectedCaption();
    });
    $(quantityGroupMinus[1]).on('click', function(){
        Number($(quantity[1]).text()) ? $(quantity[1]).text(Number(Number($(quantity[1]).text())-1)) : clear.css('visibility', 'hidden');
        setSelectedCaption()
    });
    $(quantityGroupMinus[2]).on('click', function(){
        Number($(quantity[2]).text()) ? $(quantity[2]).text(Number(Number($(quantity[2]).text())-1)) : clear.css('visibility', 'hidden');
        setSelectedCaption()
    });
    $(quantityGroupPlus[0]).on('click', function(){
       $(quantity[0]).text(Number(Number($(quantity[0]).text())+1));
        clear.css('visibility', 'visible');
        setSelectedCaption()
    });
    $(quantityGroupPlus[1]).on('click', function(){
        $(quantity[1]).text(Number(Number($(quantity[1]).text())+1));
        clear.css('visibility', 'visible');
        setSelectedCaption()
    });
    $(quantityGroupPlus[2]).on('click', function(){
        $(quantity[2]).text(Number(Number($(quantity[2]).text())+1));
        clear.css('visibility', 'visible');
        setSelectedCaption()
    });

    dropdownItems.on('blur', function(){
        dropdownItems.css('visibility', 'hidden');
        console.log('dropdown blur');
    });
});