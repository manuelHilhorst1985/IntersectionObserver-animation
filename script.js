//--------------------->Vertical scrolling<---------------------

const testObject1  = document.querySelector('.grid3');

const gridImages  =  document.querySelectorAll('.grid__container img');


const option1 = {
    root: null,                             //viewport
    treshhold: 0,                           //how much of the elemant is in the vieport
    rootMargin: '-250px 0px 0px 0px'     //margin viewport
};

const observer1 = new IntersectionObserver(function(entries1, observer1) {
    entries1.forEach(entry1 => {
        if(entry1.isIntersecting) {
            console.log(entry1);
            entry1.target.classList.add('show--image');
        } else entry1.target.classList.remove('show--image');
        
    });
}, option1)

gridImages.forEach(images => {
    observer1.observe(images)
});
                                  


// --------------------->Horizontal scrolling<---------------------


const alternativeRoot = document.querySelector('.grid2');

const listItems = document.querySelectorAll('.list-items');


const option2 = {
    root: null, 
    treshhold: 0, 
    
    rootMargin: '0px -400px 0px -400px'
}

const observer2 = new IntersectionObserver(function(entries2, observer2) {
    entries2.forEach(entry2 => {
        // entry2.target.classList.toggle('change-color')
        if(entry2.isIntersecting) {
        entry2.target.classList.add('change-color');
        } else entry2.target.classList.remove('change-color')
    });
    
}, option2)

listItems.forEach(list => {
    observer2.observe(list)
})


// --------------------->Scroll buttons<---------------------


const scrollButtonLeft = document.querySelector('.button--scroll--left').addEventListener('click', ()=> {
    
    const containerGrid2 = document.querySelector('.grid2');
    scrollAmount = 0;
    const slideTimer = setInterval( () => {
        containerGrid2.scrollLeft += 20;
        scrollAmount += 5;
        if(scrollAmount >= 100){
            window.clearInterval(slideTimer)
        }
    }, 25);
})


const scrollButtonRight = document.querySelector('.button--scroll--right').addEventListener('click', () => {

    const containerGrid2 = document.querySelector('.grid2');
    scrollAmount = 0;
    const slideTimer = setInterval( () => {
        containerGrid2.scrollLeft -= 20;
        scrollAmount += 5;
        if(scrollAmount >= 100){
            window.clearInterval(slideTimer)
        }
    }, 25);
})

