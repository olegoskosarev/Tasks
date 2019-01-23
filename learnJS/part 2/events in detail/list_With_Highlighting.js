/*

1. Сделайте список, элементы которого можно выделять кликом.

2. Добавьте мульти-выделение. Если клик с нажатым Ctrl (Cmd под Mac), то элемент добавляется-удаляется из выделенных.

3.Добавьте выделение промежутков. Если происходит клик с нажатым Shift, то к выделению добавляется 
промежуток элементов от предыдущего кликнутого до этого. При этом не важно, какое именно действие делал предыдущий клик.

*/


const list = $("ul");
let last = null;

list.mousedown(function() {
    return false;
});


list.click(function(event) {
    const target = event.target;
    if (target.tagName !== "LI") return;

    if (event.ctrlKey || event.metaKey) {
        toggleSelect(target);
    }
    else if (event.shiftKey) {
        selectFromLast(target);
    }
    else {
        selectSingle(target);
    }

    last = target;
});


function toggleSelect(target) {
    $(target).toggleClass('selected');
}


function selectFromLast(target) {
    const start = last || list.children[0];

    const isLastClickedBefore = start.compareDocumentPosition(target) & 4;

    if (isLastClickedBefore) {
        $(start).nextUntil(target).addClass('selected');
    } else {
        $(start).prevUntil(target).addClass('selected');
    }

    $(target).addClass('selected');
}


function selectSingle(target) {
    deselectAll();
    $(target).addClass('selected');
}

function deselectAll() {
    list.children().removeClass('selected');
}