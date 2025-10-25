
const pdfjsLib = window['pdfjs-dist/build/pdf'];
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

      const  can =document.getElementById("can");
       const ctx=can.getContext("2d");
       const pn = document.getElementById("pn");
       const pc = document.getElementById("pc");

       let pdfdoc=null;
       let pagenum=1;
       let scale=1;
       let pagerender=false;

       function renderpage(num){
        pagerender=true;
        pdfdoc.getPage(num).then(function(_page){
            const vport =_page.getViewport({scale:scale});
            can.width = vport.width;
            can.height = vport.height;
           
            
             let c3=document.getElementById("flex21");
                 c3.style.height="fit-content";
              
                  let  c2 =(c3.getBoundingClientRect().height)*1.5+"px";
                        c3.style.height=c2;
                
            const rendercontext={
                canvasContext:ctx,
                viewport:vport
            }

            const rendertask =_page.render(rendercontext);
             rendertask.promise.then(function() {
             pagerender = false;
             pn.textContent = num;
        });
        })
       }


 document.getElementById("p").addEventListener("click", () => {
      if (pagenum <= 1) return;
      pagenum--;
   
      renderpage(pagenum);
    });

    
    document.getElementById("n").addEventListener("click", () => {
      if (pagenum >= pdfdoc.numPages) return;
      pagenum++;
     
      renderpage(pagenum);
    });

  
   
    document.getElementById("pdf").addEventListener("change",(e)=>{
        const file2= e.target.files[0];
        if(file2){
              const url =URL.createObjectURL(file2);
              pdfjsLib.getDocument(url).promise.then(function(pdfdoc_){
                pdfdoc=pdfdoc_;
                pc.textContent=pdfdoc.numPages;
                pagenum=1;
            
                renderpage(pagenum);
              })
        }
    })


    let receivenotes1=document.getElementById("button22");
let count1=0;
let p=0;
let k1=0;
let buttonid1="";
let buttonrt="";
let n1=1;


receivenotes1.addEventListener("click",()=>{
       
         let gettext1=document.getElementById("text2");
        
   
      if(gettext1.value.trim()==""){
        alert("Please write something");
      }

      else if(count1==1){
       let b21=  document.getElementById("o"+buttonid1);
       let b12 =document.getElementById(buttonid1);

        if(n1==2){
            b12.innerText="Modify";
            n1=1;
        }
       
  
       b21.textContent=gettext1.value;
       count1=0;
      }

      else{
        n1=1;
        count1=0;
        let mytext1= document.createElement("div");
            mytext1.textContent=gettext1.value;
            mytext1.id="o"+p+"th";
            mytext1.style.width="80%";
            mytext1.style.height="fit-content";
            mytext1.style.color="black";
            mytext1.style.marginLeft="auto";
            mytext1.style.marginRight="auto";
            mytext1.style.marginBottom="2%";
            mytext1.style.marginTop="2%";
            mytext1.style.backgroundColor="cyan";
            mytext1.style.whiteSpace="pre-wrap"
            mytext1.style.fontSize="50px";
            mytext1.style.padding="2%";
            let mybutton1= document.createElement("button");
            
            mybutton1.id=p+"th";
            mybutton1.innerHTML="Modify"
            mybutton1.style.width="10%"
            mybutton1.style.height="30%"
            mybutton1.style.backgroundColor="#230303";
            mybutton1.style.color="#eec36e";
            mybutton1.style.marginLeft="10%";
            mybutton1.style.marginRight="auto";
            mybutton1.style.marginBottom="2%";
            mybutton1.style.marginTop="2%";
            mybutton1.style.fontSize="20px"
            mybutton1.style.padding="2%";
             mybutton1.style.paddingBottom="1%";
              mybutton1.style.paddingTop="1%";
              
              mybutton1.addEventListener("click",()=>{
                 if(n1==1){
                     mybutton1.innerHTML="Delete";
                     gettext1.value=mytext1.textContent;
                     buttonid1=mybutton1.id;
                      count1=1;
                      n1=2;
                    
                 }


               else if(n1==2){
                   n1=1;
                   count1=3;
                   buttonid1=mybutton1.id;
                   buttonrt=mybuttonn1.id;

                  let bb1=document.getElementById(buttonid1);
                  let bbb1=document.getElementById("o"+buttonid1);
                  let bbbb1=document.getElementById(buttonrt);


                
                  bbb1.remove();
                  bb1.remove();
                  bbbb1.remove();
                  
                }
              
              

               
              })

               let mybuttonn1= document.createElement("button");
            
            mybuttonn1.id=p+"t";
            mybuttonn1.innerHTML="Make pdf"
            mybuttonn1.style.width="10%"
            mybuttonn1.style.height="30%"
            mybuttonn1.style.backgroundColor="#230303";
            mybuttonn1.style.color="#eec36e";
            mybuttonn1.style.marginLeft="1vw";
            mybuttonn1.style.marginRight="auto";
            mybuttonn1.style.marginBottom="2%";
            mybuttonn1.style.marginTop="2%";
            mybuttonn1.style.fontSize="20px"
            mybuttonn1.style.padding="2%";
            mybuttonn1.style.paddingBottom="1%";
            mybuttonn1.style.paddingTop="1%";

            mybuttonn1.addEventListener("click",()=>{
              
                  const {jsPDF}=window.jspdf;
                  const mydoc=new jsPDF({
                    orientation:"portrait",
                             format:"a4"
                                });
                         buttonid1=mybutton1.id;
                   let ttt1=document.getElementById("o"+buttonid1);
                  

                   const line=mydoc.splitTextToSize(ttt1.textContent, 180);

                    mydoc.text(line,10,10);
                    mydoc.save(text.pdf);

            })

           
          
            const back=document.getElementById("back");
            back.style.height="fit-content";
            back.style.width="100%";
            back.appendChild(mytext1);
            back.appendChild(mybutton1);
            back.appendChild(mybuttonn1);
            p++;
           
          
        
      }

  
})
