/*

1. Сделайте список, элементы которого можно выделять кликом.

2. Добавьте мульти-выделение. Если клик с нажатым Ctrl (Cmd под Mac), то элемент добавляется-удаляется из выделенных.

3.Добавьте выделение промежутков. Если происходит клик с нажатым Shift, то к выделению добавляется 
промежуток элементов от предыдущего кликнутого до этого. При этом не важно, какое именно действие делал предыдущий клик.

*/


const list = document.querySelector('ul');
let last = null;

list.onmousedown = function() {
    return false;
}

list.addEventListener('click', selection);

function selection(event) {
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
}



function toggleSelect(target) {
    target.classList.toggle('selected');
}



function selectFromLast(target) {
    const start = last || list.children[0];

    const isLastClickedBefore = start.compareDocumentPosition(target) & 4;

    if (isLastClickedBefore) {
        for (let item = start; item !== target; item = item.nextElementSibling) {
            item.classList.add('selected');
        }
    } else {
        for (let item = start; item !== target; item = item.previousElementSibling) {
            item.classList.add('selected');
        }
    }

    target.classList.add('selected');
}


function selectSingle(target) {
    deselectAll();
    target.classList.add('selected');
}

function deselectAll() {
    for (let i = 0; i < list.children.length; i++) {
        list.children[i].classList.remove('selected');
    }
}