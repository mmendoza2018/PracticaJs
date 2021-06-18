export default function responsive (idMapa,vistaPc, vistaMovil){
    const d= document;
    const responsive = (e) =>{
        if (e.matches) {
            console.log(e.matches);
        }else{
            console.log(e.matches);
        }
    }

    let breakpoint = window.matchMedia("(min-width: 500px)")
    breakpoint.addListener(responsive)
    responsive(breakpoint)
    console.log("innerWidht"+ window.innerWidth);
}