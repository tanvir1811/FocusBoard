
function check(){

let parentDiv1=document.getElementById("flex");
let div2buttonprevious=document.getElementById("controls");

let parentDiv2=document.getElementById("flex21");


const width=window.innerWidth;

if(width<=1100){
    parentDiv1.style.display="block";
    parentDiv1.style.marginBottom="70vh";
    parentDiv1.style.width="180%";
    parentDiv1.style.justifyContent="center";
    
    parentDiv2.style.display="block";
    parentDiv2.style.marginBottom="70vh";
    parentDiv2.style.width="180%";
    parentDiv2.style.justifyContent="center";
    parentDiv2.style.marginLeft="3vw";
    div2buttonprevious.style.width="80%";


  



}

else if(width>1100){
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


}
}
check();

 window.addEventListener("resize", check);
