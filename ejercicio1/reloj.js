const d = document;
export function verReloj(destino, btnActivar, btnDetener) {
    
    var intervalId;
    d.addEventListener("click", () => {

        if (event.target.matches(btnActivar)) {
            d.querySelector(btnActivar).disabled = true;
            intervalId = setInterval(() => {
                let hora = new Date().toLocaleTimeString();
                d.getElementById(destino).innerHTML = `<h2>${hora}</h2>`;
            }, 1000)
        }
        if (event.target.matches(btnDetener)) {
            d.querySelector(btnActivar).disabled = false;
            let hora = new Date().toLocaleTimeString();
            d.getElementById(destino).innerHTML = `<h2>${hora}</h2>`;
            clearInterval(intervalId)
        }

    })

}
export function alarma(btnActivar, btnDetener) {
    let d = document;
    let alarma = d.getElementById("sonido");
        d.addEventListener("click", () => {
        if (event.target.matches(btnActivar)) {
            document.querySelector(btnDetener).disabled=false;
            document.querySelector(btnActivar).disabled=true;
            alarma.play();
        }
        if (event.target.matches(btnDetener)) {
            document.querySelector(btnActivar).disabled=false;
            document.querySelector(btnDetener).disabled=true;
            alarma.pause();
        }
    })

}