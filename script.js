const text=[
"AI & ML Student",
"Python Developer",
"Software Engineer",
"Machine Learning Enthusiast"
];

let i=0;
let j=0;
let current="";
let isDeleting=false;

function type(){

current=text[i];

if(!isDeleting){

document.getElementById("typing").textContent=current.substring(0,j++);

if(j>current.length){

isDeleting=true;

setTimeout(type,1200);

return;

}

}

else{

document.getElementById("typing").textContent=current.substring(0,j--);

if(j==0){

isDeleting=false;

i++;

if(i==text.length)i=0;

}

}

setTimeout(type,isDeleting?60:120);

}

type();

const reveal=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

reveal.forEach(sec=>{

const top=sec.getBoundingClientRect().top;

const visible=150;

if(top<window.innerHeight-visible){

sec.classList.add("active");

sec.classList.add("reveal");

}

})

});
