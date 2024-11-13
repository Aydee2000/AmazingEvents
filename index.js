const checkboxs = document.getElementById("categorias");
const buscador = document.getElementById("buscador");
const tarjetas = document.getElementById("tarjetas");

let url = './assets/js/data.json'; // Actualiza si es necesario

let eventos = [];

// Llamada inicial para obtener los datos
getData(url);

// EVENTO: Filtrar al escribir en el buscador
buscador.addEventListener('input', () => {
    let filtro = filtrarPorTexto(buscador.value, eventos);
    let filtro2 = filtroPorCheckboxs(filtro);
    pintarCardHome(filtro2, tarjetas);
});

// EVENTO: Filtrar al seleccionar categorías
checkboxs.addEventListener('change', () => {
    let filtro = filtroPorCheckboxs(eventos);
    let filtro2 = filtrarPorTexto(buscador.value, filtro);
    pintarCardHome(filtro2, tarjetas);
});

// FUNCIONES HOME

function crearCardHome(data) {
    // Crear HTML para cada evento
    return `<div class="col w-75">
        <div class="card w-200 border-secondary">
            <img src="${data.image}" class="card-img-top" alt="${data.name}">
            <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <p class="card-text">${data.description.slice(0, 20) + '...'}</p>
                <button type="button" class="btn btn-success btn-sm ">Price: ${data.price}</button>
                <a href="./assets/pages/details.html?id=${data.id}" class="btn btn-danger btn-sm text-end">Details</a>
            </div>
        </div>
    </div>`;
}

function pintarCardHome(data, contenedor) {
    if (data.length == 0) {
        contenedor.innerHTML = mensajeError();
        return;
    }
    let html = " ";
    data.forEach(element => html += crearCardHome(element));
    contenedor.innerHTML = html;
}

function mensajeError() {
    return `
    <div class="card text-center text-bg-danger border-secondary" style="width: 70rem;">
        <div class="card-body">
            <h5 class="card-title">ERROR 404</h5>
            <p class="card-text">Category not found, it may be because the category does not exist or because it is misspelled.</p>
        </div>
    </div>`;
}

// Función para filtrar por texto ingresado
function filtrarPorTexto(texto, arreglo) {
    return arreglo.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()));
}

// Función para filtrar por checkbox seleccionados
function filtroPorCheckboxs(arreglo) {
    let categoriasSeleccionadas = Array.from(document.querySelectorAll("input[type='checkbox']"))
        .filter(check => check.checked)
        .map(check => check.value);

    if (categoriasSeleccionadas.length > 0) {
        return arreglo.filter(elemento => categoriasSeleccionadas.includes(elemento.category));
    }

    return arreglo;
}

// Crear los checkboxes de categorías
function createCheckboxes(arreglo) {
    let html = '';
    let categorias = [...new Set(arreglo.map(elemento => elemento.category))];
    categorias.forEach(categoria => html += pintarCheckboxes(categoria));
    checkboxs.innerHTML = html;
}

// Crear HTML para cada checkbox
function pintarCheckboxes(categoria) {
    return `<div class="form-check form-check-inline">
        <input class="form-check-input categoria-checkbox" type="checkbox" id="${categoria}" value="${categoria}">
        <label class="form-check-label" for="${categoria}">${categoria}</label>
    </div>`;
}

function getData(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then(datosDeInternet => {
            console.log("Datos obtenidos de la API:", datosDeInternet); // Verifica el contenido
            if (Array.isArray(datosDeInternet.events)) {
                eventos = datosDeInternet.events; // Asigna directamente el arreglo de eventos
                createCheckboxes(eventos);
                pintarCardHome(eventos, tarjetas);
            } else {
                console.error("Los datos no contienen un arreglo de eventos.");
            }
        })
        .catch(error => console.error("Error al obtener datos:", error));
}
