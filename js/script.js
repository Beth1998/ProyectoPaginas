// Variables globales
const botonPagina1 = document.getElementById('botonPagina1');
const botonPagina2 = document.getElementById('botonPagina2');
const botonRegresar = document.getElementById('botonRegresar');
const botonRegresar2 = document.getElementById('botonRegresar2');
const inicio = document.getElementById('inicio');
const pagina1 = document.getElementById('pagina1');
const pagina2 = document.getElementById('pagina2');

// Función para ir a una página específica
function irAPagina(paginaInicio) {
    // Ocultar todas las páginas
    inicio.classList.add('oculta');
    pagina1.classList.add('oculta');
    pagina2.classList.add('oculta');
    
    // Mostrar la página seleccionada
    document.getElementById(paginaInicio).classList.remove('oculta');
}

// Función para regresar al inicio
function regresarAlInicio() {
    inicio.classList.remove('oculta');
    pagina1.classList.add('oculta');
    pagina2.classList.add('oculta');
}

// Asignamos los eventos de los botones
botonPagina1.addEventListener('click', function() {
    irAPagina('pagina1');
});
botonPagina2.addEventListener('click', function() {
    irAPagina('pagina2');
});
botonRegresar.addEventListener('click', regresarAlInicio);
botonRegresar2.addEventListener('click', regresarAlInicio);
