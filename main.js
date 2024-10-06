import { navBarDiv } from "./components/navBar/navBar.js";
import { proyectos } from "./components/project/project.js";
import { contenedor } from "./components/menu/menulateral.js"; 
import { contendorform } from "./components/menu/formulario.js";

/* COMPONENTES DE LA PÁGINA */ 

let DOM = document.querySelector("#root");

/* navBar */
let navBar = document.createElement('section');
navBar.className = "nav-bar";
navBar.appendChild(navBarDiv);
navBar.appendChild(contenedor);
navBar.appendChild(contendorform);
DOM.appendChild(navBar);

let proyect = document.createElement('section');
proyect.className = "proyect";
proyect.appendChild(proyectos());
DOM.appendChild(proyect);
