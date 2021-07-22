/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let getSections =document.querySelectorAll('section');
let navList =document.getElementById("navbar__list");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

/* build the nav by creating li elements and adding them to the ul*/
//creating a li elements
for(let i =0; i<getSections.length; i++){
  const listItem = document.createElement('li');
    navList.appendChild(listItem);
}
/*adding a class to li elements and giving it a function to scroll to the
section  
*/
let linkItems = document.querySelectorAll('li');
linkItems.forEach((elm,index)=> {
elm.classList.add('menu__link');
elm.innerHTML='section '+(index+1);
elm.addEventListener('click', function(){
getSections[index].scrollIntoView({behavior: "smooth"})

})

});





// Add class 'active' to section and li when clicking a nav button 
linkItems[0].setAttribute('id','active');
window.addEventListener('scroll',function addActiveClass (){
  getSections.forEach((elm, index)=>{
    let rect =elm.getBoundingClientRect();
    
    if(rect.top>=0 && rect.top<=300){
      document.querySelector('.your-active-class').classList.remove("your-active-class");
      elm.classList.add("your-active-class");
      document.querySelector('#active').removeAttribute('id');
      linkItems[index].setAttribute('id','active');
    }
      });
    });
    /*make a menu button that displays the nav links when it clicked */
let navButton= document.querySelector('#nav-button');
    navButton.addEventListener('click',function(){
    navButton.classList.remove('buttonClass');
    document.querySelector("#navbar__list").classList.toggle('ulClass');

});


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


