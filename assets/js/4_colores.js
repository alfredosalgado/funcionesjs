// Selección de divs iniciales
const a = document.getElementById("blue");
const b = document.getElementById("red");
const c = document.getElementById("green");
const d = document.getElementById("yellow");

// Función para asignar el elemento y color
function colores(elemento, color) {
    elemento.style.backgroundColor = color;
}

// Asignar eventos de clic para cambiar a negro
a.addEventListener("click", () => colores(a, 'black'));
b.addEventListener("click", () => colores(b, 'black'));
c.addEventListener("click", () => colores(c, 'black'));
d.addEventListener("click", () => colores(d, 'black'));

// Div especial que cambia con teclas
const keyDiv = document.getElementById('key');

document.addEventListener('keydown', function(event) {
    if (event.key === 'a' || event.key === 'A') {
        colores(keyDiv, 'pink'); // Cambia a rosado
    } else if (event.key === 's' || event.key === 'S') {
        colores(keyDiv, 'orange'); // Cambia a naranjo
    } else if (event.key === 'd' || event.key === 'D') {
        colores(keyDiv, 'lightblue'); // Cambia a celeste
    } else if (event.key === 'q' || event.key === 'Q') {
        createDiv('purple'); // Morado
    } else if (event.key === 'w' || event.key === 'W') {
        createDiv('gray'); // Gris
    } else if (event.key === 'e' || event.key === 'E') {
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
