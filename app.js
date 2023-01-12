const navSlide=()=>{
    const bar =document.querySelector('.bar');
    const nav =document.querySelector('.nav-links');
    const icon=document.querySelector('.icon');
    const navLinks=document.querySelectorAll('.nav-links li');
    
    bar.addEventListener('click',()=>{
        //toggle nav
        nav.classList.toggle('nav-active');
    
        //toggle icon
        if(icon.innerHTML=== "menu"){
            icon.innerHTML="clear";
        } else{
         icon.innerHTML="menu";}
    
         //animate links
         navLinks.forEach((link,index)=>{
             if(link.style.animation){
                link.style.animation='';
             }else{
               link.style.animation=`navLinksFade 0.5s ease forwards ${index/5 + 0.5}s`;
               // index/5 is delay for each link (0.2 0.4 0.6)  - 0.3 delay
            }
    
         });
    });
    
    
    }
    navSlide();