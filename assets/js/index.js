// Llamando elementos
const checkboxs = document.getElementById("categorias")
const buscador = document.getElementById("buscador")
const tarjetas = document.getElementById("tarjetas")

// FUNCIONES PARA CREAR CHECKBOXS Y EL BUSCADOR

function crearCategorias(elemento) {
    return `<div class="form-check form-check-inline">
        <input class="form-check-input categoria-checkbox" type="checkbox" id="${elemento}" value="${elemento}">
        <label class="form-check-label" for="${elemento}">${elemento}</label>
    </div>`;
}

function crearVariosCheckbox(categorias, contenedor) {
    let checkboxes = "";
    for (const categoria of categorias) {
        checkboxes += crearCategorias(categoria);
    }

    // Agregar el formulario de búsqueda al contenedor
    const formularioBusqueda = `
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="searchInput">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        `;

    contenedor.innerHTML = checkboxes + formularioBusqueda;
}

function categoriasUnicas(data) {
    const categorias = new Set();
    for (const evento of data.events) {
        categorias.add(evento.category);
    }
    return Array.from(categorias);
}

console.log(categoriasUnicas(data));

//FUNCIONES PARA CREAR LAS TARJETAS DE EVENTOS

function crearTarjetas(data) {
    return `<div class="col w-75">
    <div class="card w-200 border-secondary">
        <img src="${data.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">${data.description.slice(0, 20) + '...'}</p>
            <button type="button" class="btn btn-success btn-sm ">Price</button>
            <button id="detailsButton_${data._id}" type="button" class="btn btn-danger btn-sm text-end">Details</button>
        </div>
    </div>
</div>`;
}

function pintarVariasTarjetas(datosEventos, contenedor) {
    let tarjetasHTML = " ";
    for (const data of datosEventos) {
        tarjetasHTML += crearTarjetas(data)
    }
    contenedor.innerHTML = tarjetasHTML
}

// FUNCIONES DE LOGICA PARA LOS CHECKBOXS 

const inputCheck = document.getElementsByClassName("form-check-input categoria-checkbox")

// Esta función filtra los eventos según las categorías seleccionadas y muestra las tarjetas correspondientes.
function mostrarEventosFiltrados(data, categoriasSeleccionadas, contenedor) {
    const eventosFiltrados = data.events.filter(evento => categoriasSeleccionadas.includes(evento.category));

    if (eventosFiltrados.length === 0) {
        contenedor.innerHTML = "<p>No se encontraron eventos para estas categorías.</p>";
    } else {
        const tarjetasHTML = eventosFiltrados.map(evento => crearTarjetas(evento)).join("");
        contenedor.innerHTML = tarjetasHTML;
    }
}

// Esta función maneja los cambios en los checkboxes y actualiza la visualización de tarjetas.
function manejarCambiosEnCheckboxes(data, checkboxElements, tarjetasContainer) {
    const categoriasSeleccionadas = [];

    // Agregar un evento de cambio a cada checkbox.
    checkboxElements.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            categoriasSeleccionadas.length = 0; // Limpiar el arreglo de categorías seleccionadas.

            // Obtener las categorías seleccionadas.
            checkboxElements.forEach(checkbox => {
                if (checkbox.checked) {
                    categoriasSeleccionadas.push(checkbox.value);
                }
            });

            // Mostrar los eventos filtrados.
            mostrarEventosFiltrados(data, categoriasSeleccionadas, tarjetasContainer);
        });
    });
}

// FUNCIONES DE LOGICA PARA EL BUSCADOR 

// Esta función filtra los eventos según el término de búsqueda y muestra las tarjetas correspondientes.
function buscarEventos(data, terminoBusqueda, contenedor) {
    const eventosFiltrados = data.events.filter(evento => {
        const nombreEvento = evento.name.toLowerCase();
        return nombreEvento.includes(terminoBusqueda.toLowerCase());
    });

    if (eventosFiltrados.length === 0) {
        contenedor.innerHTML = "<p>No se encontraron eventos que coincidan con la búsqueda.</p>";
    } else {
        const tarjetasHTML = eventosFiltrados.map(evento => crearTarjetas(evento)).join("");
        contenedor.innerHTML = tarjetasHTML;
    }
}

// Esta función maneja los cambios en el campo de búsqueda y actualiza la visualización de tarjetas.
function manejarCambiosEnBusqueda(data, inputBusqueda, tarjetasContainer) {
    inputBusqueda.addEventListener("input", () => {
        const terminoBusqueda = inputBusqueda.value.trim();

        // Mostrar eventos filtrados por el término de búsqueda.
        buscarEventos(data, terminoBusqueda, tarjetasContainer);
    });
}


//MUESTRA LAS CATEGORIAS Y EL BUSCADOR
let datosGenerales = []
let datosGeneralesTarjetas = []

function traerDatos() {
    datosGenerales = categoriasUnicas(data)
}

function traerTodosLosDatos() {
    datosGeneralesTarjetas = data.events
    console.log(datosGeneralesTarjetas);
}

document.addEventListener("DOMContentLoaded", function () {
    traerDatos()
    crearVariosCheckbox(datosGenerales, checkboxs);
    traerTodosLosDatos()
    pintarVariasTarjetas(datosGeneralesTarjetas, tarjetas)


    // Obtener todos los elementos de checkbox
    const checkboxElements = document.querySelectorAll(".categoria-checkbox");

    // Configurar el manejo de cambios en los checkboxes.
    manejarCambiosEnCheckboxes(data, checkboxElements, tarjetas);

    // Obtener el elemento de búsqueda por su ID
    const inputBusqueda = document.getElementById("searchInput");

    // Configurar el manejo de cambios en el campo de búsqueda.
    manejarCambiosEnBusqueda(data, inputBusqueda, tarjetas);

});