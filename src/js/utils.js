/**
 * @copyright Nurlan 2024
 */

'use strict';



const addEventOnElements = function ($element, eventType, callback) {
    $elements.forEach($element => $element.addEventOnElements(eventType,callback));
}


export{
    addEventOnElements
}