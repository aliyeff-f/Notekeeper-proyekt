/**
 * @copyright Nurlan 2024
 */

'use strict';

import { addEventOnElements, getGreetingMsg, activeNotebook } from "./utils";
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


const $sidebarList = document.querySelector('[data-sidebar-list]');
const $addNotebookBtn = document.querySelector('[data-add-notebook]');



const showNotebookField = function () {

    const $navItem = document.createElement('div');
    $navItem.classList.add('nav-item');

    $navItem.innerHTML =  `

    <span class="text text-label-large" data-notebook-field></span>

    <div class="state-layer"></div>

    `;

    $sidebarList.appendChild($navItem);

    const $navItemField = $navItem.querySelector('[data-notebook-field]');

    activeNotebook.call($navItem);

}

$addNotebookBtn.addEventListener('click',showNotebookField);