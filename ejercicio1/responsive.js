export default function responsive (idMapa,vistaPc, vistaMovil){
    const d= document;
    const responsive = (e) =>{
            if (e.matches) {
                document.querySelector(idMapa).innerHTML=vistaPc
            }else{
                document.querySelector(idMapa).innerHTML=vistaMovil
            }
    }

    let breakpoint = window.matchMedia("(min-width: 500px)")
    breakpoint.addListener(responsive)
    responsive(breakpoint)
    console.log("innerWidht"+ window.innerWidth);
}