let d = document;
export function tecla() {
d.addEventListener("keydown", (e) => {
        console.log(e.altKey);
        console.log(e.key);
        console.log(e);
        if (e.ctrlKey && e.key==="c" && e.altKey) {
         for (let i = 0; i < 19; i++) {
               console.log(i);  
         }   
        }
})


}
var contador=1;
var contador2=1;
export function pacman () {
     
 d.addEventListener("keydown", e => {
        
       let pelota = d.getElementById("pacman");
       
       console.log(e);
       if (e.key === "ArrowRight") {
            pelota.style.setProperty("transform",`translate(${contador}px, ${contador2}px) `);
        pelota.style.setProperty("color","red");
        contador+=5;
        e.preventDefault();
        console.log(contador);
       }
       if (e.key === "ArrowLeft") {
             
             if (pelota.getBoundingClientRect().left>186) {
                  console.log (pelota.getBoundingClientRect());
                  contador-=5;
                  pelota.style.setProperty("transform",`translate(${contador}px, ${contador2}px) `);
                  pelota.style.setProperty("color","red");
                  console.log(contador);
                  e.preventDefault();
             }
           
      }
      if (e.key === "ArrowUp") {
             
            if (pelota.getBoundingClientRect().top>430) {
                 contador2-=5;
                 pelota.style.setProperty("transform",`translate(${contador}px, ${contador2}px) `);
                 console.log(contador2);
                 e.preventDefault();
            }
          
     }
     if (e.key === "ArrowDown") {
      console.log (pelota.getBoundingClientRect());
      if (pelota.getBoundingClientRect().right>422.3357849121094) {
            
           contador2+=5;
           console.log(pelota);
           pelota.style.setProperty("transform",`translate(${contador}px, ${contador2}px) `);
           console.log(contador2);
           e.preventDefault();
      }
}
 })
}