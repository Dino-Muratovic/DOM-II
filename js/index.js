// Your code goes here


//Header logo wheel event zoom in
let header = document.querySelector('header');
header.addEventListener('wheel', zoomIn);
function zoomIn (event){
    event.preventDefault();
    scale += event.deltaY * -0.02;
  // Restrict scale
  scale = Math.min(Math.max(.1, scale), 2);
  // Apply scale transform
  element.style.transform = `scale(${scale})`
}
let scale = 1;
const element = document.querySelector('header .logo-heading');
element.onwheel = zoomIn;
//header logo wheel zoom ends here



//nav links start here - CLICK
let navLinks = document.querySelectorAll('.nav .nav-link');
Array.from(navLinks).forEach(function(element,index){    
    console.log(`this is a link `, element);
    console.log(`this is index`, index);
    element.addEventListener('click', function (event){  
    element.textContent = 'Nope';            
    console.log(`This event type is ${event.type}`);    
    })
 })


//mouseover 
//show what type of the event is 
//change the background of targeted element to red followed with green
let signMeUp = document.querySelectorAll('.destination .btn')
signMeUp.forEach(function(element){
    element.addEventListener('mouseover', function (event){
    console.log(`This event type is ${event.type}`);    
    event.target.style.backgroundColor = '#ff0000'; 
    setTimeout(function(){
    event.target.style.backgroundColor = "";
    event.target.style.fontSize ="3rem";
    }, 500);
    }, false);    
});
//mouseover finished here




//keydown for the entire document
document.addEventListener('keydown', typeTheKeys);
function typeTheKeys(event){
    console.log(`This event type is ${event.type}`); 
    console.log(`This is the letter I just typed `, event.key.toUpperCase());
}
//keydown for the entire document


//double click
let theFooter = document.querySelector('.footer');
theFooter.addEventListener('dblclick', function (event){
    console.log(`This event type is ${event.type}`);
    console.log(`You double clicked here!`);
    // console.log(`bla bla`, event.target);
    event.target.backgroundColor = 'red';
})

//double click ends here




let destinationP = document.querySelectorAll('.destination p');



















