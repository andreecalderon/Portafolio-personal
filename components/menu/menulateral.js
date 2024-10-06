
let contenedor = document.createElement('div');
contenedor.className = "contendor";


let herramienta1 = document.createElement('div');
herramienta1.className = "herramienta-div"; 
let colorBlock1 = document.createElement('div');
colorBlock1.className = "color-block"; 
colorBlock1.style.backgroundColor = 'purple';
let herramientaTitle1 = document.createElement('h3');
herramientaTitle1.textContent = 'Herramienta 1';
herramientaTitle1.className = "herramientanombre"; 
herramienta1.appendChild(colorBlock1);
herramienta1.appendChild(herramientaTitle1);
contenedor.appendChild(herramienta1);

let herramienta2 = document.createElement('div');
herramienta2.className = "herramienta-div"; 
let colorBlock2 = document.createElement('div');
colorBlock2.className = "color-block"; 
colorBlock2.style.backgroundColor = 'turquoise';
let herramientaTitle2 = document.createElement('h3');
herramientaTitle2.textContent = 'Herramienta 2';
herramientaTitle2.className = "herramientanombre"; 
herramienta2.appendChild(colorBlock2);
herramienta2.appendChild(herramientaTitle2);
contenedor.appendChild(herramienta2);

let herramienta3 = document.createElement('div');
herramienta3.className = "herramienta-div"; 
let colorBlock3 = document.createElement('div');
colorBlock3.className = "color-block"; 
colorBlock3.style.backgroundColor = 'orange';
let herramientaTitle3 = document.createElement('h3');
herramientaTitle3.textContent = 'Herramienta 3';
herramientaTitle3.className = "herramientanombre"; 
herramienta3.appendChild(colorBlock3);
herramienta3.appendChild(herramientaTitle3);
contenedor.appendChild(herramienta3);

let herramienta4 = document.createElement('div');
herramienta4.className = "herramienta-div"; 
let colorBlock4 = document.createElement('div');
colorBlock4.className = "color-block"; 
colorBlock4.style.backgroundColor = 'green';
let herramientaTitle4 = document.createElement('h3');
herramientaTitle4.textContent = 'Herramienta 4';
herramientaTitle4.className = "herramientanombre"; 
herramienta4.appendChild(colorBlock4);
herramienta4.appendChild(herramientaTitle4);
contenedor.appendChild(herramienta4);

let herramienta5 = document.createElement('div');
herramienta5.className = "herramienta-div"; 
let colorBlock5 = document.createElement('div');
colorBlock5.className = "color-block"; 
colorBlock5.style.backgroundColor = 'red';
let herramientaTitle5 = document.createElement('h3');
herramientaTitle5.textContent = 'Herramienta 5';
herramientaTitle5.className = "herramientanombre"; 
herramienta5.appendChild(colorBlock5);
herramienta5.appendChild(herramientaTitle5);
contenedor.appendChild(herramienta5);

let herramienta6 = document.createElement('div');
herramienta6.className = "herramienta-div"; 
let colorBlock6 = document.createElement('div');
colorBlock6.className = "color-block"; 
colorBlock6.style.backgroundColor = 'black';

let herramientaTitle6 = document.createElement('h3');
herramientaTitle6.textContent = 'Herramienta 6';
herramientaTitle6.className = "herramientanombre"; 
herramienta6.appendChild(colorBlock6);
herramienta6.appendChild(herramientaTitle6);
contenedor.appendChild(herramienta6);
export{contenedor};