import { header } from "../header/header.js"

function proyectos(){

    let section = document.createElement('section');
    section.className = 'section-proyectos';
    section.appendChild(header());
    section.appendChild(item());


    return section;
}



function item(){
    let div = document.createElement('div');
    div.innerText = "Item de Lista";

    return div;
}


export {proyectos}