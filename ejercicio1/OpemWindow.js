const d = document;
export default function newVentana(idSubmit,cerrar) {
    let pantallaNueva;
    d.addEventListener("submit", ()=>{
        event.preventDefault();
        console.log(idSubmit);
        console.log(event);
        if (event.target.matches(idSubmit)) {
           if (event.target[0].type==="url") {
               pantallaNueva = window.open(event.target[0].value,"este es el nombre de la ventana ",`width=${event.target[2].value},height=${event.target[1].value},resizable,scrollbars=yes,status=1`)
            
           }else{
               alert("no es un tipo de input indicado")
           }
        }
    })
    d.addEventListener("click", ()=>{
        if (event.target.matches(cerrar)) {
            console.log("entre");
            pantallaNueva.close();
        }
    })
}