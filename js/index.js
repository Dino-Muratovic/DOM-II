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


let images = document.querySelectorAll('.img-content');
images.forEach(function(element){
    console.log(`heller`, element);
    element.addEventListener('click', function (event){
        event.target.style.transform = "rotate(7deg)";
        console.log(event.target);
        console.log(`This event type is ${event.type}`);       
        event.target.style.width = '70%';
        event.target.style.border = '1px solid black';
    })
})




//nav links start here - CLICK
let navLinks = document.querySelectorAll('.nav .nav-link');
Array.from(navLinks).forEach(function(element,index){ 
    // preventDefault();   // can't use it here --- I click
    console.log(`this is a link `, element);
    console.log(`this is index`, index);
    element.addEventListener('click', function (event){  
    element.textContent = 'Nope!!';            
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
    event.target.style.backgroundColor = 'salmon';
    event.target.style.color = '#fff';
})
//double click ends here



//double click again
let destinationP = document.querySelectorAll('.destination p');
destinationP.forEach(function(element){
    console.log(element);
    element.addEventListener('dblclick', function(event){
        console.log(`This event type is ${event.type}`); 
        event.target.style.backgroundColor = 'black';
        event.target.style.color = "#fff";
        event.target.style.marginLeft = "15px";
        event.target.style.borderRadius = "10px"; 
    })    
})


//on click
let destinationImg = document.querySelector(".content-destination img");
destinationImg.addEventListener('click', function(){
    console.log(`This event type is ${event.type}`);
    event.target.setAttribute ("src", "https://thebulletin.org/wp-content/uploads/2019/07/Forest-1024x665.jpg" );
})
// console.log(destinationImg);


























