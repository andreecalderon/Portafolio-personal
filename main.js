import { navBarDiv } from "./components/navBar/navBar.js"
import { proyectos } from "./components/project/project.js";


/* COMPONENTES DE LA PÁGINA */ 

let DOM = document.querySelector("#root");

/* navBar */
let navBar = document.createElement('section');
navBar.className = "nav-bar";
navBar.appendChild(navBarDiv);
DOM.appendChild(navBar);

let proyect = document.createElement('section');
proyect.className = "proyect";
proyect.appendChild(proyectos());
DOM.appendChild(proyect);
