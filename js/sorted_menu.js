document.querySelector('a#sort-asc').onclick = function () {
    sortList('data-price');
}
document.querySelector('a#sort-desc').onclick = function () {
    sortListDesc('data-price');
}
document.querySelector('a#sort-rating').onclick = function () {
    sortListDesc('data-rating');
}

function sortList(sortType) {
    let items = document.querySelector('.cbp-rfgrid');
    for (let i = 0; i < items.children.length - 1; i++) {
        for (let j = i; j < items.children.length; j++) {
            if (+items.children[i].getAttribute(sortType) > +items.children[j].getAttribute(sortType)) {
                console.log(1);
                let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                insertAfter(replacedNode, items.children[i]);
            }
        }
    }
}

function sortListDesc(sortType) {
    let items = document.querySelector('.cbp-rfgrid');
    for (let i = 0; i < items.children.length - 1; i++) {
        for (let j = i; j < items.children.length; j++) {
            if (+items.children[i].getAttribute(sortType) < +items.children[j].getAttribute(sortType)) {
                console.log(1);
                let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                insertAfter(replacedNode, items.children[i]);
            }
        }
    }
}


function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}




