'use strict';

/**
 * 
 * @param {*} $elements 
 * @param {*} eventType 
 * @param {*} callback 
 */
window.addEventOnElements = ($elements, eventType, callback)  => {
    for(const $element of $elements){
        $element.addEventListener(eventType, callback);
    }

}