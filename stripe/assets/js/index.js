let $productos = document.getElementById("productos");
let template = document.getElementById("template").content;
let fragmento = document.createDocumentFragment();
let cabecera = {
    headers: {
        Authorization: `Bearer sk_test_51JQ28ELcTNF29PiQ2zdXwuGlZCF6mFqAH66T6dG19QB11V9pspTf4RgSefmnyd58PohiYEDd9tPXCqtxEWjOKrjk00Fn09sTOI`
    }
}
Promise.all([
        fetch("https://api.stripe.com/v1/products", cabecera),
        fetch("https://api.stripe.com/v1/prices", cabecera)
    ])
    .then(respuesta => Promise.all(respuesta.map((res) => res.json())))
    .then(json => {
        console.log(json);
        json[1].data.forEach(e => {
            let producto = json[0].data.filter(res => e.product === res.id)
            console.log(producto);
            template.querySelector("#btn-enviar").setAttribute("onclick", `pagar("${e.id}")`);
            template.querySelector(".card-header").textContent = producto[0].name;
            template.querySelector("img").src = producto[0].images[0];
            template.querySelector(".descripcion").textContent = producto[0].description;
            template.querySelector("#btn-enviar").textContent = cortarNumero(e.unit_amount_decimal)
            let clone = document.importNode(template, true);
            fragmento.appendChild(clone)
        });
        $productos.appendChild(fragmento)
    })
const cortarNumero = (numero) => {
    console.log(numero);
    let decimales = numero.slice(-2);
    let precioReal = numero.slice(0, -2);
    return `S/ ${precioReal}.${decimales} `;
}
const pagar = (id) => {
    console.log(id);

    Stripe("pk_test_51JQ28ELcTNF29PiQcjSUHXg7swibp7yFPGiTtO7utdkSW5ERUjxHoGQNuu8LfYNtG3fk6TTKWilT6KsefkQJ3M3e00K7JmYA7m").redirectToCheckout({
            lineItems: [{
                price: id,
                quantity: 1
            }],
            mode: "payment",
            successUrl: "http://127.0.0.1:5500/stripe/exito.html",
            cancelUrl: "http://127.0.0.1:5500/stripe/error.html"
        })
        .then(res => {
            console.log(res);
            if (res.error) {
                console.log(res.error);
            }
        });
}