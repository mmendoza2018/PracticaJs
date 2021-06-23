const d = document;
export default function scroll (boton) {
    window.addEventListener("scroll", () => {
        let btn =  d.querySelector(boton);
        if (window.scrollY>100) {
           btn.classList.remove("hidden")
        }else{
            btn.classList.add("hidden")
        }
    })
    d.addEventListener("click", (e)=>{
        
        if (e.target.matches(boton)) {
            window.scroll(0, 0);
        } 
       
    })
    
}