const cards = document.querySelector(".world")

function cardClick(event) {
    const targetElem = event.target;
    
    if(targetElem.classList.contains('world')) {
        return;
    }

    if (targetElem.dataset.flip === "false") {
        // targetElem.setAttribute('data-flip', 'true');
        targetElem.dataset.flip = "true"
    } else{
        targetElem.dataset.flip = "false"
    }
}


cards.addEventListener("click", cardClick)