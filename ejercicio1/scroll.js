const d = document;
export default function scroll (boton) {
    window.addEventListener("scroll", () => {
        let btn =  d.querySelector(boton);
        if (window.scrollY>100) {
            console.log(window.scrollY);
           btn.classList.remove("hidden")
          console.log("agrega");
        }else{
            btn.classList.add("hidden")
            console.log("quita");
        }
       
    })
    d.addEventListener("click", (e)=>{
        
        if (e.target.matches(boton)) {
            window.scroll(0, 0);
        } 
       
    })
    
}