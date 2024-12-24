/**
 * @copyright Nurlan 2024
 */

'use strict';

let notekeeperDB = {};

const initDB = function () {
    const  db = localStorage.getItem('notekeeperDB');

    if(db) {
        notekeeperDB = JSON.parse(db);
    }
}

initDB();
