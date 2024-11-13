let dataEvents;
let eventosPasados; 
let eventosProximos; 

const container = document.querySelector('.container-fluid');
const loader = container.querySelector('.loader');

const events_statistics = document.getElementById('events_statistics');
const upcoming_events = document.getElementById('upcoming_events');
const past_events = document.getElementById('past_events');


fetch('/assets/js/data.json')
    .then(response => response.json())
    .then(data => {
        dataEvents = data;
        eventosPasados = buscarEventosPasados(dataEvents);
        eventosProximos = buscarEventosProximos(dataEvents)
        pintarTablaEventos(eventosPasados);
    })
    .catch(error => console.log(error));

// FUNCIONES

function buscarEventosPasados(data) {
    const eventosPasados = data.events.filter(evento => evento.date < data.currentDate);
    return eventosPasados;
}

function buscarEventosProximos(data) {
    const eventosProximos = data.events.filter(evento => evento.date >= data.currentDate);
    return eventosProximos;
}

function calcularPorcentaje(asistencia) {
    const porcentaje = asistencia.map(evento => {
        const porcentajeAsistencia = ((evento.assistance / evento.capacity) * 100).toFixed(2);
        return { ...evento, porcentajeAsistencia };
    });
    return porcentaje;
}

function categorizarEventos(eventos) {
    return eventos.reduce((acc, evento) => {
        if (!acc[evento.category]) {
            acc[evento.category] = [];
        }
        acc[evento.category].push(evento);
        return acc;
    }, {});
}

function estadisticasPorCategoria(eventos, tabla) {
    const eventosPorCategoria = categorizarEventos(eventos);
    const estadisticasPorCategoria = Object.keys(eventosPorCategoria).map(category => {
        const eventosCategoria = eventosPorCategoria[category];
        const capacidadTotal = eventosCategoria.reduce((acc, evento) => acc + evento.capacity, 0);
        const asistenciaTotal = eventosCategoria.reduce((acc, evento) => acc + (evento.assistance || evento.estimate), 0);
        const porcentajeAsistencia = ((asistenciaTotal / capacidadTotal) * 100).toFixed(2);
        const ingresosTotales = eventosCategoria.reduce((acc, evento) => acc + (evento.price * (evento.assistance || evento.estimate)), 0);

        return {
            category,
            porcentajeAsistencia,
            ingresosTotales
        };
    });
    estadisticasPorCategoria.forEach((evento) => {
        tabla.innerHTML += `
        <tr>
        <td>${evento.category}</td>
            <td>${evento.ingresosTotales.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
            <td>${evento.porcentajeAsistencia}%</td>
        </tr>
        `;
    });
    return estadisticasPorCategoria;
}

function pintarTablaEventos(evento) {
    const porcentajeAsistencia = calcularPorcentaje(evento);
    porcentajeAsistencia.sort((a, b) => b.porcentajeAsistencia - a.porcentajeAsistencia);
    const asistenciaMayor = porcentajeAsistencia.slice(0, 1);
    const asistenciaMenor = porcentajeAsistencia.slice(-1)
    const eventoConMayorCapacidad = evento.reduce((event1, event2) => {
        if (event1.capacity > event2.capacity) {
            return event1;
        } else {
            return event2;
        }
    });

    events_statistics.innerHTML = `
            <tr>
                <td>${asistenciaMayor[0].name} (${asistenciaMayor[0].porcentajeAsistencia}%)</td>
                <td>${asistenciaMenor[0].name} (${asistenciaMenor[0].porcentajeAsistencia}%)</td>
                <td>${eventoConMayorCapacidad.name} (${eventoConMayorCapacidad.capacity})</td>
            </tr>`;
    estadisticasPorCategoria(eventosPasados, past_events);
    estadisticasPorCategoria(eventosProximos, upcoming_events);
}