/*(async () => {

  const { value: password } = await Swal.fire({
    title: 'Ingrese la "contraseña"',
    input: 'password',
    inputPlaceholder: 'Ingrese la contraseña',
    allowOutsideClick:false,
    backdrop:"#D5DBDB ",
    inputAttributes: {
      maxlength: 20,
      autocapitalize: 'off',
      autocorrect: 'off'
    },
    preConfirm: (res) => {
      if (res=="" || res==null || res!=="2018") {
        Swal.showValidationMessage(
          `La contraseña es incorrecta`
         )
        }
      }
  })
  if (password) {
    if (password==="2018") {
      Swal.fire({
        title: `Bienvenido!`,
        icon:"success"
      })
    } 
  }
  })()
/*dsadsadad
let objetClases = {
    DomClases:{nombre:"clases de dom manejp de estilos con css "}
}
console.log(`objetClases`,(Object.keys(objetClases)).length )
let accordion=` <div class="accordion mt-5" id="accordionExample">`;
for (let i = 0; i < (Object.keys(objetClases)).length; i++) {
            
     accordion+=`<div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#a${i}" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="a${i}" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
    </div>`
  accordion+=accordion;
}
accordion+=`</div>`;
document.querySelector("#accordion").innerHTML=accordion;
 */

/* practica usando los selectore  */
const $titulo = document.querySelector(".th");
$titulo.style.setProperty("color", "red")
$titulo.style.color = "blue";
$titulo.style.margingLeft = "auto"
$titulo.style.margingRight = "auto"
$titulo.style.textAlign = "center"
$titulo.setAttribute("atributo", "su atributo")
const $darkMode = document.querySelectorAll("a")[4];
$darkMode.style.setProperty("text-decoration", "none")
//$darkMode.style.setProperty("color", "black")

let clave = "";
const dark_mode = () => {
  if (clave == "fondo claro") {
    console.log(`entro`)
    const $body = document.querySelector("body");
    $body.style.backgroundColor = "white";
    $titulo.style.setProperty("color", "red")
    clave = $darkMode.textContent = "fondo oscuro";
  } else {
    const $body = document.querySelector("body");
    $body.style.backgroundColor = "black";
    $darkMode.style.setProperty("color", "black")
    $titulo.style.setProperty("color", "yellow")
    clave = $darkMode.textContent = "fondo claro";
  }

}
let letra = document.querySelectorAll("a")[4];
letra.classList.toggle("text-danger")
let $html = document.documentElement;
// la importancia  getcomputestyle
/*
let darkMode = getComputedStyle($html).getPropertyValue("--darkMode");
const $body2=document.querySelector("body");
$body2.style.setProperty("background-color",darkMode)
const $th = document.querySelectorAll("th")[3];
$th.innerHTML="hola mundo2 ";
$th.classList.remove("colorRojo")
 let objeto={nombre: "juan", apellido:"perez"}
 for (const i in objeto) {
   console.log(objeto.nombre)
 } */

//clase de classList
/*const darkMode = () => {
  let $body = document.querySelector("body");
  $body.classList.toggle("darkMode");
  let $th = document.querySelector("th");
  $th.classList.toggle("th")
  let $navs = document.querySelector("nav");
 $navs.classList.toggle("navDark")

}*/
/* const $cards = document.querySelector(".cards")
console.log($cards.children[2]);// hijo de el elemento padre 
console.log($cards.parentElement);// padre del elemento seleccionado 
console.log($cards.firstElementChild);//accedemos al primer elemento hijo 
console.log($cards.lastElementChild);//accedemos al ultimo hijo del elemento seleccionado
console.log($cards.closest("body"));//obtenemos el antecesor del parametro que le pasamos */

//recordando las promesas 
/* 
const sumaPromise = (num1,num2) => {
  if(typeof num1 !== "number" || typeof num2 !== "number"){
    return (Promise.reject("hay eror"));
  }
  return( new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve({
        num1,
        num2,
        suma:(num1+num2)
      })
    }, Math.random()*3000);
   
  }))
}
sumaPromise(5,2)
.then((resultado)=>{
  console.log(` nuemro 1 => ${resultado.num1}`)
  console.log(` nuemro 2 => ${resultado.num2}`)
  console.log(` suma ${resultado.suma}`)
  return(sumaPromise(5,5));
})
.then((objeto) => {
  console.log(` nuemro 1 => ${objeto.num1}`)
  console.log(` nuemro 2 => ${objeto.num2}`)
  console.log(` suma ${objeto.suma}`)
})
.catch((error)=>{console.log(`error`, error)});

 */

/* // practica para acceder a los elementos 
let $cards = document.querySelector(".cards");
console.log($cards.children[1]);//accedemos a los hijos
console.log($cards.parentElement);//accede,os al padre 
let $hijosCards = document.querySelectorAll(".     
console.log($cards.closest("div"));//accedemos al antecesor elemento a este, el padre anterior 
console.log($cards.previousElementSibling);// capturamos el hermand siguiente 
console.log($cards.nextElementSibling);// capturamos el heremano anteriosr


// esto es para insertar elementos en posisiciones


app.insertAdjacentElement("beforebegin", div);
// Opción 1: <div>Ejemplo</div> <div id="app">App</div>

app.insertAdjacentElement("afterbegin", div);
// Opción 2: <div id="app"> <div>Ejemplo</div> App</div>

app.insertAdjacentElement("beforeend", div);
// Opción 3: <div id="app">App <div>Ejemplo</div> </div>

app.insertAdjacentElement("afterend", div);
*/

// clase de creacion de elementos del DOM

/* //creando un elemento estatico 
let $p=document.createElement("p");
$p.setAttribute("id","parrafo")
$p.textContent="hola mundo";
$contenedor.appendChild($p)
console.log(`$contenedor`, $contenedor)
// crear elementos dinamicos
let  obj= ["futbol","voley","basqueball", "tenis", "natacion", "batminton", "surf","carreras"];
for (const x of obj) {
  let $a = document.createElement("a");
  $a.setAttribute("href",`www.${x}.com`);
  $contenedor.appendChild($a)
}
console.log(`$contenedor`, $contenedor)
*/
//forma para no chancar el elemento del dom constantemente

/* const $contenedor = document.querySelector("div .llegaElements"),
      fragmento=document.createDocumentFragment(),
      obj= ["futbol","voley","basqueball", "tenis", "natacion", "batminton", "surf","carreras"];
      obj.forEach(e => {
          let $p = document.createElement("p");
          $p.textContent=e;
          fragmento.appendChild($p);
      });
      $contenedor.appendChild(fragmento)
      console.log($contenedor) */
/* 
      const $template =  document.getElementById("template").content,
            $contenedor = document.querySelector("div .llegaElements"),
            $fragmento = document.createDocumentFragment(),
            array = [{"header": "arquitectura",
                      "imagen": "https://placeimg.com/200/200/arch"},
                      {"header": "animales",
                      "imagen": "https://placeimg.com/200/200/animals"},{"header": "naturaleza",
                      "imagen": "https://placeimg.com/200/200/nature"},{"header": "personas",
                      "imagen": "https://placeimg.com/200/200/people"}];
                      $contenedor.classList.add("text-center")
           let  $header = $template.querySelector(".card-header");
           let  $h1= document.createElement("h1");
           $h1.classList.add("text-center","text-danger","k");

          for (const i of array) {
            let $img = $template.querySelector(".card-body img");
            $h1.textContent=i.header;
                 $header.appendChild($h1)
            
            $img.setAttribute("src",i.imagen)
            $img.setAttribute("alt",i.header)
            let $clon = document.importNode($template,true);
            $fragmento.appendChild($clon)
          }
          $contenedor.appendChild($fragmento)
 */
// mas metodos para interactuar con los nodos

/*          let  $table = document.querySelector(".table")
         let tbody = document.querySelector(".table tbody")
         let row = document.createElement("tr");
         let row2 = document.createElement("tr");
         let column2 = document.createElement("td");
         let column = document.createElement("td");
         column.textContent="este es un insercion dinamica"
         column2.textContent="este es la segunda insercion dinamica"
         row2.appendChild(column2)
         row.appendChild(column)
         tbody.insertBefore(row,tbody.firstElementChild)
         tbody.replaceChild(row2,tbody.firstElementChild)
         console.log(`object`, tbody.firstElementChild) //fin */

         /* let  $table = document.querySelector(".table")
         let tbody = document.querySelector(".table tbody")
         let row= document.createElement("tr")
         tbody.insertBefore(row,tbody.firstElementChild) */

//maa metdos para interactuar con los nodos eliminar, remplazar, inserar en una posicion en especifico

/*    let  $table = document.querySelector(".table")
   let  $contTable = document.querySelector("#cont-table")
   let clon = $table.cloneNode(true);
   let tbody = document.querySelector(".table tbody")
   $contTable.insertBefore(clon,$contTable.firstElementChild);
   console.log(`fds`, firstElementChild) */

// interaccion con los eventos
/*  let button = document.getElementById("event")
 // evento semantico: solo se puede asignar una accion en especifico 
 button.onclick=(e) => {
  console.log("hola mundo");
 }
 button.onclick=(e) => {
  console.log("hola mundo 2");
 }
 //eventos multiples 
 button.addEventListener("click", (e) => {
   console.log("hola mundo!!!!!!!!!!");
 }) */
//asignacion de parametros la funcion manejadora de eventos

/*   const evento = (nombre) => {
   alert("hola "+nombre)
 }
  const manejador = (e) =>{
    evento("juan");
    button.removeEventListener("dblclick",manejador)
  }
  let button = document.getElementById("event")
  button.addEventListener('dblclick', manejador,) */

// metodos propagacion evento burbuja y captura 
/* const $caja = document.querySelectorAll(".cajas div");
console.log($caja);
function eventoMultiple (e) {
  let $classOne = this.className.split(" ");
  let $classTwo = e.target.className.split(" ");
  console.log(` contenedor ${$classOne[0]} evento ${$classTwo[0]}`)
}
$caja.forEach(a => {
  a.addEventListener("click",eventoMultiple,false)
});

const $caja = document.querySelectorAll(".cajas div"); */

/* class Persona {
static cont = 0;
  constructor(nombre,apellido,edad){
    this.id=++Persona.cont;
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;

  }
  get getId(){
    return this.id;
  }
  get getNombre(){
    return this.nombre;
  }
  set setNombre(nom){
    this.nombre=nom;
  }
 static saludar (){
   return `este es un metodo estatico`;
 }
}
console.log(Persona.saludar());
const juan = new Persona("juan","perez",12); 
juan.setNombre="julia";
console.log(`Nombre:`, juan.getNombre); */

/*
//practica de eventos 
 const input = document.getElementById("input");
const texto = document.getElementById("texto");
console.log(input.value);
input.addEventListener("input", (e) =>{
 let h3 = document.createElement("h3");
texto.appendChild(h3)
const nodeh3 = document.querySelector("#texto h3");
nodeh3.textContent=input.value;
}) */

//delegacion de eventos evitar la propagacinon  de eventos

// 
/* const $caja = document.querySelectorAll(".cajas div");
console.log($caja);
function eventoMultiple (e) {
  let $classOne = this.className.split(" ");
  let $classTwo = e.target.className.split(" ");
  console.log(` contenedor ${$classOne[0]} evento ${$classTwo[0]}`)
  e.preventDefault();
}
$caja.forEach(a => {
  a.addEventListener("click",eventoMultiple,false)
});
 console.log(window); */


// delegancion de eventos 
/* asignamos el evento directamente al document  para que no haya una propagacion de los eventos  */
/* document.addEventListener("click", () => {
  console.log(event.target);
  if (event.target.matches(".tres")) {
    console.log("hola");
  }
  if (event.target.matches(".tres a")) {
    event.preventDefault();
  }
  
}) */

// bom browser objet model
console.log(window.innerHeight);//son la parte visible de la pantalla
console.log(window.innerWidth);//son la parte visible de la pantalla
console.log(window.outerHeight);
console.log(window.outerWidth);
/* document.body.style.setProperty("width","2000px") */
window.addEventListener("resize", () => {

})
window.addEventListener("scroll", () => {
  console.clear();
console.log(window.scrollX);
console.log(window.scrollY);

})
window.addEventListener("load", () => {
  console.log(`este es el load normal okey?`);
})

/* document.addEventListener("DOMContentLoaded", () => {
  console.log(`este es el load raro okey?`);

}) */
// metodos del BOM alert (), open (), close (), prompt (), confirm();


const hola = function (){
 open("https://altiiro.com")
}

// objetos del objeto window padre de padres geolocation, location, history,navigator 
/* console.log(window.location);
location.href
location.assign() 
location.reload()*/ 
/* console.log(history)
history.back //atras
history.forward//adelante
history.go(referenciaen 0)// ir delante y atras de acuerdo el numero la pagina actual es 0 y para moverse a los laod s usar -3,-2,-1,0,1,2 */

/* **********     Curso JavaScript: 79. BOM: Objetos: URL, Historial y Navegador - #jonmircha     ********** */
/* console.log("********** Objeto URL (location) **********");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname);
//location.reload();
console.log("********** Objeto Historial (history) **********");
console.log(history);
console.log(history.length);
//history.forward(1);
//history.go(-3);
//history.back(2);
console.log("********** Objeto Navegador (navigator) **********");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent); */
console.log(navigator.mediaDevices);
/* if ("geolocation" in navigator) {
  console.log(navigator.geolocation.getCurrentPosition());
} else {
  console.log(false);
} */
/* var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log('Latitude : ' + crd.latitude);
  console.log('Longitude: ' + crd.longitude);
  console.log('More or less ' + crd.accuracy + ' meters.');
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options); */
/*
const maxMin = (...array) => {

  let pares=[];
let impares=[];
  array.forEach(element => {
    parseInt(element)
    if (element % 2 == 0) {
      pares.push(element);
    }else{
      impares.push(element);
    }
  });
  return console.log({
    pares,
    impares
  })
}
maxMin(1,2,4,5,10) */
let $modal=`<div class="modal fade" id="exampleModal"  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-sm">
  <div class="modal-content">
    <div class="modal-body text-center">
      <img src="https://altiiro.com/img/logo.png" class="mb-3" alt="Altiiro"><br>
      <button type="button" id="si" class="btn btn-sm btn-dark"> si, aceptar</button>
      <button type="button" id="no" class="btn btn-sm btn-warning">cancelar</button>
    </div>
  </div>
</div>
</div>`;


/* //recordando las promesas 
const alerta = () => {
  return( new Promise((resolve,reject)=>{
    let contModal = document.getElementById("contenedor-modal");
  contModal.innerHTML=$modal;
  var myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
  myModal.show()
      let confirmacion = document.getElementById("si");
      confirmacion.addEventListener("click", () => { resolve(true) })
      let denegacion = document.getElementById("no");
      denegacion.addEventListener("click", () => { 
        event.preventDefault();
        myModal.hide()
         resolve(false) })

  }))
}
alerta()
.then((resultado)=>{
console.log(resultado);
})
.catch((error)=>{console.log(`error`, error)}); */

// alerta para altiiro !
/* let evento = document.getElementById("evento");
evento.addEventListener("click", () => {
  event.preventDefault()
})
 */
/* 
setInterval(()=>{
  let Hora = new Date().toLocaleTimeString('en-US');
  console.log(Hora);
},1000 
)
 */
