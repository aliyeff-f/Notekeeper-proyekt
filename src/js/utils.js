/**
 * @copyright Nurlan 2024
 */

'use strict';



const addEventOnElements = function ($element, eventType, callback) {
    $elements.forEach($element => $element.addEventOnElements(eventType,callback));
}

const getGreetingMsg = function (currentHour) {

}

export{
    addEventOnElements,
    getGreetingMsg
}