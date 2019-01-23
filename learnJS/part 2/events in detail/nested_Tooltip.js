/*

Напишите код, который будет показывать всплывающую подсказку над элементом, если у него есть атрибут data-tooltip.

*/

let showingTooltip = null;

$(document).bind('mouseover', showTooltip);
$(document).bind('mouseout', hideTooltip);



function showTooltip(event) {
    let target = event.target;
    let tooltip = null;

    while (target !== this) {
        tooltip = $(target).attr('data-tooltip'); // text message.
        if (tooltip) break;
        target = target.parentNode;
    }

    if (!tooltip) return;

    showingTooltip = createTooltip(tooltip, target);
}



function createTooltip(tooltip, target) {
    
    const tooltipElem = document.createElement('div');

    $(tooltipElem).addClass('tooltip');
    $(tooltipElem).html(tooltip);
    
    $("body").append(tooltipElem);

    const coords = target.getBoundingClientRect();

    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 5;

    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) {
        top = coords.top + target.offsetHeight + 5;
    }

    $(".tooltip").css('left', left + 'px');
    $(".tooltip").css('top', top + 'px');


    return tooltipElem;
}



function hideTooltip() {
    if (showingTooltip) {
        $(".tooltip").remove();
        showingTooltip = null;
    }
}