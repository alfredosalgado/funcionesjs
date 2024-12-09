// Selecciona el elemento al cargar la página
const ele = document.getElementById("ele1");

// Función para cambiar el color del elemento, recibe el elemento clickeado al pasarlo como argumento.
function pintar(elemento, color = 'green') {
  elemento.style.backgroundColor = color;
}


// Establece el elemento como ele y como no se declara un valor para el color, el color inicial es verde por defecto
pintar(ele);

// Agrega el evento para cambiar a amarillo al hacer clic
ele.addEventListener("click", () => pintar(ele, 'yellow')); // Cambia a amarillo al hacer clic

