let navBarDiv = document.createElement('div');
navBarDiv.className = "nav-bar-div";

let imgLogo = document.createElement('img');
imgLogo.src = "https://as2.ftcdn.net/v2/jpg/01/11/97/29/1000_F_111972976_kOwflo6LRULWgz9gshZt0o3uHIEIcMkC.jpg";
imgLogo.className = "img-logo";
navBarDiv.appendChild(imgLogo);

let h2 = document.createElement('h2');
h2.innerText = "Josbiat";
navBarDiv.appendChild(h2);

export { navBarDiv };