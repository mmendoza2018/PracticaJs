const d = document;
export function alarma2 (id,fecha) {
    let fechaLimite = new Date(fecha).getTime(); 
   let interval = setInterval(()=>{
        let fechaHoy = Date.now();
        let limiteTiempo = fechaLimite-fechaHoy;
        let dia = Math.floor(limiteTiempo/(1000*60*60*24)),
            hora = Math.floor(limiteTiempo%(1000*60*60*24)/(1000*60*60)),
            minuto = Math.floor(limiteTiempo%(1000*60*60*24)%(1000*60*60)/(1000*60)),
            second = Math.floor(limiteTiempo%(1000*60*60*24)%(1000*60*60)%(1000*60)/1000);
            d.getElementById(id).innerHTML = `dias ${dia} horas: ${hora} Mninuto: ${minuto} segndo : ${second}`;


        if (limiteTiempo<=0) {
            clearInterval(interval);
            d.getElementById(id).textContent= "<h1>El timpo vencio :)</h1>";
        }
    },1000)   

}