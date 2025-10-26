
function check(){

let parentDiv1=document.getElementById("flex");
let div2buttonprevious=document.getElementById("controls");
let div1childs=document.getElementsByClassName("f1");
let div2childs=document.getElementsByClassName("f2");
let parentDiv2=document.getElementById("flex21");


const width=window.innerWidth;

if(width<=1000){
    parentDiv1.style.display="block";
    parentDiv1.style.marginBottom="70vh";
 
    parentDiv2.style.display="block";
    parentDiv2.style.marginBottom="70vh";
  
    div2buttonprevious.style.width="60%";

    for(let i=0;i<div1childs.length;i++){
        div1childs[i].style.width="100%"
    }

     for(let i=0;i<div1childs.length;i++){
        div2childs[i].style.width="100%"
    }

  



}

else if(width>1000){
    parentDiv1.style.display="flex";
    parentDiv1.style.marginBottom="0vh";
    parentDiv1.style.width="100%";
    parentDiv1.style.justifyContent="center";

    parentDiv2.style.display="flex";
    parentDiv2.style.marginBottom="0vh";
    parentDiv2.style.width="100%";
    parentDiv2.style.justifyContent="center";
    parentDiv2.style.marginLeft="auto";
    div2buttonprevious.style.width="30vw";

    for(let i=0;i<div1childs.length;i++){
        div1childs[i].style.width="50%"
    }

     for(let i=0;i<div1childs.length;i++){
        div2childs[i].style.width="50%"
    }



}
}
check();

 window.addEventListener("resize", check);
