/**
 * @copyright Nurlan 2024
 */

'use strict';

import { addEventOnElements,getGreetingMsg } from "./utils";
import { Tooltip } from "./components/Tooltip";






const  $sidebar = document.querySelector('[data-sidebar');

const  $sidebarTogglers = document.querySelectorAll('data-sidebar-toggler');

const $overlay = document.querySelector('data-sidebar-overlay');


addEventOnElements($sidebarTogglers,'click', function(){
    $sidebar.classList.toggle('active');
    $overlay.classList.toggle('active');
});

const $tooltipElems = document.querySelectorAll('[data-tooltip]');
$tooltipElems.forEach($elem => Tooltip($elem));

const $greetElem = document.querySelector('[data-greeting]');
const currentHour = new Date().getHours();

$greetElem.textContent = getGreetingMsg(currentHour);

const  $currentDataElem = document.querySelector('[data-current-date]');
$currentDataElem.textContent = new Date().toDateString().replace('',',')