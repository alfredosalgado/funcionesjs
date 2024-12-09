// Selección de divs iniciales
const a = document.getElementById("blue");
const b = document.getElementById("red");
const c = document.getElementById("green");
const d = document.getElementById("yellow");

// Función para asignar el elemento y color
function pintar(elemento, color) {
    elemento.style.backgroundColor = color;
}

// Asignar eventos de clic para cambiar a negro
a.addEventListener("click", () => pintar(a, 'black'));
b.addEventListener("click", () => pintar(b, 'black'));
c.addEventListener("click", () => pintar(c, 'black'));
d.addEventListener("click", () => pintar(d, 'black'));

// Div especial que cambia con teclas
const keyDiv = document.getElementById('key');

document.addEventListener('keydown', function(event) {
  const pressedKey = event.key.toLowerCase(); // Normaliza la tecla a minúsculas, en caso que se escriba con mayusculas, para que siempre funcione.
  if (pressedKey === 'a') {
      keyDiv.style.backgroundColor = 'pink'; // Rosado
  } else if (pressedKey === 's') {
      keyDiv.style.backgroundColor = 'orange'; // Naranjo
  } else if (pressedKey === 'd') {
      keyDiv.style.backgroundColor = 'lightblue'; // Celeste
  } else if (pressedKey === 'q') {
      createDiv('purple'); // Morado
  } else if (pressedKey === 'w') {
      createDiv('gray'); // Gris
  } else if (pressedKey === 'e') {
      createDiv('brown'); // Café
  }
});


// Función para crear nuevos divs
function createDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    newDiv.style.margin = '10px';
    document.body.appendChild(newDiv);
}