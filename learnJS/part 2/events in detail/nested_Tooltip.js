/*

Напишите код, который будет показывать всплывающую подсказку над элементом, если у него есть атрибут data-tooltip.

*/

let showingTooltip = null;

document.addEventListener('mouseover', showTooltip);
document.addEventListener('mouseout', hideTooltip);



function showTooltip(event) {
    let target = event.target;
    let tooltip = null;

    while (target !== this) {
        tooltip = target.getAttribute('data-tooltip'); // text message.
        if (tooltip) break;
        target = target.parentNode;
    }

    if (!tooltip) return;

    showingTooltip = createTooltip(tooltip, target);
}



function createTooltip(tooltip, target) {
    
    const tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltip;
    document.body.appendChild(tooltipElem);

    const coords = target.getBoundingClientRect();

    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 5;

    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) {
        top = coords.top + target.offsetHeight + 5;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';

    return tooltipElem;
}



function hideTooltip() {
    if (showingTooltip) {
        document.body.removeChild(showingTooltip);
        showingTooltip = null;
    }
}