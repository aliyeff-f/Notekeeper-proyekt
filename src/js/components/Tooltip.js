/**
 * @copyright Nurlan 2024
 */

'use strict';

export const Tooltip = function ($element) {
    const $tooltip = document.createElement('span');
    $tooltip.classList.add('tooltip', 'text-body-small');

    $element.addEventListener('mouseenter', function () {
        $tooltip.textContent = this.dataset.tooltip;

        const {
            top,
            left,
            height,
            width
        } = this.getBoundingClientRect();
    })
}