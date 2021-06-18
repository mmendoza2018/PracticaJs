export default function darkMode (btn, dtAttr,storage) {
    
    const d = document;
    const boton = d.querySelector(btn);
    let sun = "☀️",
    moon ="🌜";
        console.log(storage);
        if(storage ==="true"){
            boton.textContent=moon;
            console.log("true");
        }else{
            boton.textContent=sun;
            console.log("false");
        }
        console.log(boton.textContent);
    const dataAttributes = d.querySelectorAll("[data-dark]");
    d.addEventListener("click", ()=>{
        if (event.target.matches(btn)) {
            if (boton.textContent=== sun) {
               
                localStorage.setItem('darkMode', true);
                dataAttributes.forEach(element => {
                    element.classList.add("bg-dark");
                    
                });
                boton.textContent=moon;
            }else{
                localStorage.setItem('darkMode', false);
                boton.textContent=sun;
                dataAttributes.forEach(element => {
                    element.classList.remove("bg-dark");
                });
            }
            
           
        }
    })
    document.addEventListener("DOMContentLoaded", ()=>{
        if (localStorage.getItem("darkMode")==="true") {
            const dataAttributes = document.querySelectorAll("[data-dark]");
            dataAttributes.forEach(element => {
                element.classList.add("bg-dark");
            });
        }
    })

}