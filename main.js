
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
$titulo.style.setProperty("color","red")
$titulo.style.color="blue";
$titulo.style.margingLeft="auto"
$titulo.style.margingRight="auto"
$titulo.style.textAlign="center"
$titulo.setAttribute("atributo","su atributo")
const $darkMode = document.querySelectorAll("a")[4];
$darkMode.style.setProperty("text-decoration", "none")
//$darkMode.style.setProperty("color", "black")

let clave="";
const dark_mode = () =>{
  if (clave=="fondo claro") {
    console.log(`entro`)
  const $body=document.querySelector("body");
  $body.style.backgroundColor="white";
  $titulo.style.setProperty("color","red")
  clave=$darkMode.textContent="fondo oscuro";
  } else {
    const $body=document.querySelector("body");
    $body.style.backgroundColor="black";
    $darkMode.style.setProperty("color", "black")
    $titulo.style.setProperty("color","yellow")
    clave=$darkMode.textContent="fondo claro";
  }

}
let letra = document.querySelectorAll("a")[4];
letra.classList.toggle("text-danger")
let $html = document.documentElement;
let darkMode = getComputedStyle($html).getPropertyValue("--darkMode");
const $body2=document.querySelector("body");
$body2.style.setProperty("background-color",darkMode)
const $th = document.querySelectorAll("th")[3];
$th.innerHTML="hola mundo";
$th.classList.remove("colorRojo")
 let objeto={nombre: "juan", apellido:"perez"}
 for (const i in objeto) {
   console.log(objeto.nombre)
 } 

