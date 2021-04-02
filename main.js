
let objetClases = {
    DomClases:{nombre:"clases de dom manejp de estilos con css "},
    DomApis:{nombre:"clases de dom manejp de estilos con css "}
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
