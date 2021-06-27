const d = document;
const w = window;
export default function red() {
    console.log(window.navigator);
    w.addEventListener("offline", () =>{
        alert("no hay intenet");
        /* if (!navigator.onLine) {
            location.href="errorConeccion.html"
        } */
        
    })
    w.addEventListener("online", () =>{
        alert("ya llego")
        /* if (navigator.onLine) {
            location.href="errorConeccion.html"
        } */
        
    })

}