let playButton =document.getElementById("button");
playButton.addEventListener("click",()=>{
  V();
});

const text= document.getElementById("text");


let receivenotes=document.getElementById("button2");
let count=0;
let k=0;
let buttonid="";
let n=1;
let countdelete=0;
let butttonet="";


receivenotes.addEventListener("click",()=>{
       
         let gettext=document.getElementById("text");
         
   
      if(gettext.value.trim()==""){
        alert("Please write something");
      }

      else if(count==1){
       localStorage.setItem("l"+buttonid,text.value);
       let b=  document.getElementById("l"+buttonid);
       let b1 =document.getElementById(buttonid);

        if(n==2){
            b1.innerText="Modify";
            n=1;
        }
       
  
       b.textContent=gettext.value;
       count=0;
      }

      else{
       
        countdelete++;
        n=1;
        count=0;
        let mytext= document.createElement("div");
            mytext.textContent=gettext.value;
            mytext.id="l"+k+"th";
            mytext.style.width="80%";
            mytext.style.height="fit-content";
            mytext.style.color="black";
            mytext.style.marginLeft="auto";
            mytext.style.marginRight="auto";
            mytext.style.marginBottom="2%";
            mytext.style.marginTop="2%";
            mytext.style.backgroundColor="cyan";
            mytext.style.whiteSpace="pre-wrap"
            mytext.style.fontSize="50px";
            mytext.style.padding="2%";
            let mybutton= document.createElement("button");
            
            mybutton.id=k+"th";
            mybutton.innerHTML="Modify"
            mybutton.style.width="10%"
            mybutton.style.height="30%"
            mybutton.style.backgroundColor="#230303";
            mybutton.style.color="#eec36e";
            mybutton.style.marginLeft="10%";
            mybutton.style.marginRight="auto";
            mybutton.style.marginBottom="2%";
            mybutton.style.marginTop="2%";
            mybutton.style.fontSize="20px"
            mybutton.style.padding="2%";
             mybutton.style.paddingBottom="1%";
              mybutton.style.paddingTop="1%";


          
              
              mybutton.addEventListener("click",()=>{
                 if(n==1){
                     mybutton.innerHTML="Delete";
                     gettext.value=mytext.textContent;
                     buttonid=mybutton.id;
                      count=1;
                      n=2;
                      
                    
                 }


               else if(n==2){
                   n=1;
                   countdelete--;
                   count=3;
                   buttonid=mybutton.id;
                   butttonet=mybuttonn.id;
                   let bbbbbb=document.getElementById(butttonet);
                  let bb=document.getElementById(buttonid);
                  let bbb=document.getElementById("l"+buttonid)
                  if(countdelete==0){
                      back.style.backgroundColor="transparent";
                  }
                    
                
                  bbbbbb.remove();
                  bbb.remove();
                  bb.remove();
                  
                }
              
              

               
              }
            
            
              
            )

             let mybuttonn= document.createElement("button");
            
            mybuttonn.id=k+"t";
            mybuttonn.innerHTML="Make pdf"
            mybuttonn.style.width="10%"
            mybuttonn.style.height="30%"
            mybuttonn.style.backgroundColor="#230303";
            mybuttonn.style.color="#eec36e";
            mybuttonn.style.marginLeft="1vw";
            mybuttonn.style.marginRight="auto";
            mybuttonn.style.marginBottom="2%";
            mybuttonn.style.marginTop="2%";
            mybuttonn.style.fontSize="20px"
            mybuttonn.style.padding="2%";
            mybuttonn.style.paddingBottom="1%";
            mybuttonn.style.paddingTop="1%";

            mybuttonn.addEventListener("click",()=>{
              
                  const {jsPDF}=window.jspdf;
                  const mydoc=new jsPDF({
                    orientation:"portrait",
                             format:"a4"
                                });
                         buttonid=mybutton.id;
                   let ttt=document.getElementById("l"+buttonid);
                

                   const line=mydoc.splitTextToSize(ttt.textContent, 180);

                    mydoc.text(line,10,10);
                    mydoc.save(text.pdf);

            })

           
          
            const back=document.getElementById("back2");
            back.style.height="fit-content";
            back.style.width="100%";
            back.style.backgroundColor="#402929"
           
            back.style.paddingTop="2vh"
            back.appendChild(mytext);
            back.appendChild(mybutton);
            back.appendChild(mybuttonn);
            k++;
           
          
        
      }

  
})









function V(){
  let link1 = document.getElementById("in").value;
   let l=link1.length;
   let count;
   let id="";
  
   for( let i=0;i<l;i++){
        if(link1[i]=="b" && link1[i+1]=='e' &&link1[i+2]=="/"){
            count=i+3;
            break;

        }

   }

  for(let i=count;i<l;i++){
    id=id+link1[i];
  }



  document.getElementById("video").src="https://www.youtube.com/embed/"+id;

  setTimeout(()=>{
    document.getElementById("in").value="";
  },2000)


}