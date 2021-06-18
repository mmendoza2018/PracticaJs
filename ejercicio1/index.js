import vistaPanel from "../ejercicio1/vistaPanel.js";
import {verReloj,alarma} from "../ejercicio1/reloj.js";
import {tecla, pacman} from "../ejercicio1/eventKey.js";
import {alarma2} from "../ejercicio1/alarma.js";
import scroll from "../ejercicio1/scroll.js";
import darkMode from "../ejercicio1/darkMode.js"
import responsive from "../ejercicio1/responsive.js"

darkMode("#darkMode", "data-dark",localStorage.getItem("darkMode"))

verReloj("llegaReloj","#startReloj","#stopReloj")
vistaPanel(".panel-btn",".panel",".menu a")
alarma("#sonar","#pausar");
alarma2("alarma","jun 6, 2021 23:39:00");
pacman();
scroll("#scroll");
responsive(
    "#mapa",
    `<iframe class="mt-3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.3941849729517!2d-71.50225378584086!3d-16.404794888674367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424b74c43bb7fd%3A0xc4ccb3f34c76448!2sParque%20Ulrich%20Neisser!5e0!3m2!1ses!2spe!4v1622955283797!5m2!1ses!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`,
        `<a href="https://www.google.com/maps/place/U,+Miraflores+04004/@-16.3794939,-71.4967531,17z/data=!3m1!4b1!4m5!3m4!1s0x91424b9367ccaa41:0x4504d07beef6fe2!8m2!3d-16.3794256!4d-71.4947748">clack para ver el mapa</a>`)

//tecla()
