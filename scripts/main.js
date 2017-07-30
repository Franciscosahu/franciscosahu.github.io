// Alternado entre dos imagenes
var miImage = document.querySelector ('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute ('src');
    if (miSrc === 'images/andromeda.jpg') {
      miImage.setAttribute ('src','images/andromeda1.jpg');
    } else {
      miImage.setAttribute ('src','images/andromeda.jpg');
    }
}

// Mensaje de bienvenida personalizado

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Por favor ingrese su nombre');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla is Cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

/* else es con minusculas Else es incorrecto*/
