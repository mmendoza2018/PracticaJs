export default function vistaPanel (btnHamburguesa, sidebar,links) {
    const d= document;
 /*    d.querySelector("#"+btnHamburguesa); */
    d.addEventListener("click", (e) => {
        if( e.target.matches(btnHamburguesa+" *")){
            console.log(d.querySelector(sidebar));
            d.querySelector(sidebar).classList.toggle("is-active")
            d.querySelector(btnHamburguesa).classList.toggle("is-active")
        }
        if( e.target.matches(links)){
            d.querySelector(sidebar).classList.remove("is-active")
            d.querySelector(btnHamburguesa).classList.remove("is-active")
        }
    })
  }