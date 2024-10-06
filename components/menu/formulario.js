// Contenedor del formulario
let contendorform = document.createElement('div');
contendorform.className = "contendorform";

let titulodeform = document.createElement('h2');
titulodeform.className = "tituloform";
titulodeform.innerText = "Contáctanos";

// Div1: Nombre
let div1 = document.createElement('div');
div1.className = "div1";


// Div2: Email
let div2 = document.createElement('div');
div2.className = "div2";


// Comentario
let comentario = document.createElement('div');
comentario.className = "comentario";


// Botón
let btn = document.createElement('div');
btn.className = "btn";
btn.innerText = "Enviar"; // Simulando un botón

// Añadir todos los elementos al contendorform
contendorform.appendChild(titulodeform);
contendorform.appendChild(div1);
contendorform.appendChild(div2);
contendorform.appendChild(comentario);
contendorform.appendChild(btn);

export { contendorform };
