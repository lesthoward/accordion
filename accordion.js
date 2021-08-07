const accordion = document.querySelectorAll('.accordion');
const accordionMakeExpand = document.querySelectorAll('.accordion__title');

const makeAccordionExpandable = (clickedElement) => {
    
    if (clickedElement.classList.contains('accordion__title--active')) {
        clickedElement.classList.remove('accordion__title--active')
    } else {
        clickedElement.classList.add('accordion__title--active')
    }

    accordionMakeExpand.forEach(expaned => {
        // Si mi elemento las clases del elemento clicado son diferentes a las del expandidod (con la clase "active"), entonces quiero que borres su clase de activo.
        if (clickedElement.classList !== expaned.classList) {
            expaned.classList.remove('accordion__title--active')
        }
    })
}


accordion.forEach(element => { 
    element.addEventListener('click',(e) => makeAccordionExpandable(e.target))
 })
