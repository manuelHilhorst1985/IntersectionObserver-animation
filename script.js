//--------------------->Vertical scrolling<---------------------

const testObject1  = document.querySelector('.grid3');

const option1 = {
    root: null,                             //viewport
    treshhold: 0,                           //how much of the elemant is in the vieport
    rootMargin: '-300px 0px -300px 0px'     //margin viewport
};

const observer1 = new IntersectionObserver(function(entries1, observer1) {
    entries1.forEach(entry1 => {
        console.log(entry1)
        entry1.target.classList.toggle('enlarge--picture')
    })

}, option1)

observer1.observe(testObject1)                                        


// --------------------->Horizontal scrolling<---------------------


const alternativeRoot = document.querySelector('.grid2')

const listItems = document.querySelectorAll('.list-items')


const option2 = {
    root: null, 
    treshhold: 0, 
    rootMargin: '0px -700px 0px -700px'
}

const observer2 = new IntersectionObserver(function(entries2, observer2) {
    
    entries2.forEach(entry2 => {
        console.log(entry2)
        entry2.target.classList.toggle('green')
        
    });
    
}, option2)

listItems.forEach(list => {
    observer2.observe(list)
})

