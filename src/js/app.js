/**
 * @copyright Nurlan 2024
 */

'use strict';

import { addEventOnElements,getGreetingMsg } from "./utils";






const  $sidebar = document.querySelector('[data-sidebar');

const  $sidebarTogglers = document.querySelectorAll('data-sidebar-toggler');

const $overlay = document.querySelector('data-sidebar-overlay');


addEventOnElements($sidebarTogglers,'click', function(){
    $sidebar.classList.toggle('active');
    $overlay.classList.toggle('active');
});

const $greetElem = document.querySelector('[data-greeting]');
const currentHour = new Date().getHours();

$greetElem.textContent = getGreetingMsg(currentHour){
    const greeting =
    currentHour < 5 ? 'Night' :
    currentHour < 12 ? 'Morning' :
    currentHour < 15 ? 'Noon' :
    currentHour < 17 ? 'Afternoon' :
    currentHour <20 ? 'Evening' :
    'Night';

    return `Good ${greeting}`;
}