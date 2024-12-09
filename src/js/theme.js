/**
 * @copyright Nurlan 2024
 */

'use strict';


const  storedTheme = localStorage.getItem('theme');

const systemThemeIsDark = window.matchMedia('prefers-color-scheme: dark').matches;

const initialTheme = storedTheme ?? (systemThemeIsDark ? 'dark' : 'light');

document.documentElement.setAttribute('data-theme',initialTheme);



window.addEventListener('DOMContentLoaded',function (){
    const  $themeBtn = this.document.querySelector('[data-theme-btn]');
    if ($themeBtn) $themeBtn.addEventListener('click', toggleTheme);
})