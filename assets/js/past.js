const checkboxs = document.getElementById("categorias")
const buscador = document.getElementById("buscador")
const tarjetas = document.getElementById("tarjetas")

let url = '/assets/js/data.json'

let eventos = []

getData(url)

buscador.addEventListener('input', () => {
    let filtro = filtrarPorTexto(buscador.value, eventos)
    let filtro2 = filtroPorCheckboxs(filtro)
    pintarCard(filtro2, tarjetas)
})

checkboxs.addEventListener('change', () => {
    let filtro = filtroPorCheckboxs(eventos)
    let filtro2 = filtrarPorTexto(buscador.value, filtro)
    pintarCard(filtro2, tarjetas)
})

function crearCard(data) {
    const currentDate = new Date();
        const eventDate = new Date(data.date);
    
        if (eventDate < currentDate) {
            return  `<div class="col w-75">
            <div class="card w-200 border-secondary">
                <img src="${data.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <p class="card-text">${data.description.slice(0, 20) + '...'}</p>
                    <button type="button" class="btn btn-success btn-sm ">Price: ${data.price}</button>
                    <a href="/assets/pages/details.html?_id=${data._id}" class="btn btn-danger btn-sm text-end">Details</a>
                </div>
            </div>
        </div>`;
        } else {
            return ''; // No mostrar eventos futuros
        }
}

function pintarCard(data, contenedor) {
    if (data.length == 0) {
        contenedor.innerHTML = mensajeError()
        return
    }
    let html = " "
    data.forEach(element => html += crearCard(element));
    contenedor.innerHTML = html
}

function mensajeError() {
    return `
    <div class="card text-center text-bg-danger border-secondary" style="width: 70rem;">
    <div class="card-body">
    <h5 class="card-title">ERROR 404</h5>
    <p class="card-text">Category not found, it may be because the category does not exist or because it is misspelled.</p>
    </div>
</div>`
}

function filtrarPorTexto(texto, arreglo) {
    return arreglo.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
}

function filtroPorCheckboxs(arreglo) {
    let categoriasSeleccionadas = Array.from(document.querySelectorAll("input[type='checkbox']"))
        .filter(check => check.checked)
        .map(check => check.value);

    if (categoriasSeleccionadas.length > 0) {
        return arreglo.filter(elemento => categoriasSeleccionadas.includes(elemento.category));
    }

    return arreglo;
}

function createCheckboxes(arreglo) {
    let html = ''
    let categorias = [... new Set(arreglo.map(elemento => elemento.category))]
    categorias.forEach(categoria => html += pintarCheckboxes(categoria))
    checkboxs.innerHTML = html
}

function pintarCheckboxes(categoria) {
    return `<div class="form-check form-check-inline">
        <input class="form-check-input categoria-checkbox" type="checkbox" id="${categoria}" value="${categoria}">
        <label class="form-check-label" for="${categoria}">${categoria}</label>
    </div>`;
}

function getData(url) {
    fetch(url)
        .then(response => response.json())
        .then(datosDeInternet => {
            console.log(datosDeInternet);  // Verifica la estructura de los datos

            // Verifica si "events" es un array antes de continuar
            if (Array.isArray(datosDeInternet.events)) {
                eventos = datosDeInternet.events; // Asegúrate de asignar los eventos correctamente
                createCheckboxes(datosDeInternet.events); // Crea los checkboxes con los eventos

                pintarCard(datosDeInternet.events, tarjetas); // Pinta las tarjetas
            } else {
                console.error("La propiedad 'events' no es un arreglo válido.");
            }
        })
        .catch(error => console.error("Error al obtener los datos:", error));  // Captura errores de la petición
}
