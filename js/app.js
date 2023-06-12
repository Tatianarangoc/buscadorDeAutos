"use strict"

//variables
const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color')

//Contenedor para los resultados
const resultado = document.querySelector('#resultado')


const max = new Date().getFullYear();
const min = max - 10;

//Generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}
//eventos
document.addEventListener('DOMContentLoaded', () => {

    mostrarAutos(autos);//Muestra los autos al cargar

    // Lenar las opciones de años
    llenarSelect();
})

//Event listener para los select de busqueda
marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value

    filtrarAuto();
})
year.addEventListener('change', (e) => {
    datosBusqueda.year = e.target.value

    filtrarAuto();
})
minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = e.target.value

    filtrarAuto();
})
maximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = e.target.value

    filtrarAuto();
})
puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = e.target.value

    filtrarAuto();
})

transmision.addEventListener('input', e => {
    datosBusqueda.transmision = e.target.value
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});
color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value

    filtrarAuto();
})


//funciones
function mostrarAutos(autos) {

    limpiarHTML();// elimina el HTML previo
    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        autoHTML.innerHTML = `
            <p>${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - Transmisión: ${auto.transmision} - Precio: ${auto.precio} - Color: ${auto.color}</p>
        `;
        contenedor.appendChild(autoHTML);
    })

}

//limpiar HTML
function limpiarHTML() {

    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}

function llenarSelect() {

    for (let i = max; i > min; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.innerText = i;
        year.appendChild(option)//Agrega las opciones de año al select
    }

}
//funcion qu efiltra en base a la busquda--funcion de alto nivel, es una funcion que toma otra funcion

function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    //    console.log(resultado);
    if (resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
}
function noResultado() {
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay Resultados, Intenta con otros términos de búsqueda'
    resultado.appendChild(noResultado);

}
function filtrarMarca(auto) {
    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca
    }
    return auto;
}
function filtrarYear(auto) {
    if (datosBusqueda.year) {
        return auto.year === parseInt(datosBusqueda.year)
    }
    return auto;
}
function filtrarMinimo(auto) {
    if (datosBusqueda.minimo) {
        return auto.precio >= datosBusqueda.minimo
    }
    return auto;
}
function filtrarMaximo(auto) {
    if (datosBusqueda.maximo) {
        return auto.precio <= datosBusqueda.maximo
    }
    return auto;
}
function filtrarPuertas(auto) {
    if (datosBusqueda.puertas) {
        return auto.puertas === parseInt(datosBusqueda.puertas)
    }
    return auto;
}
function filtrarTransmision(auto) {
    if (datosBusqueda.transmision) {
        return auto.transmision === datosBusqueda.transmision;
    }
    return auto;
}
function filtrarColor(auto) {
    if (datosBusqueda.color) {
        return auto.color === datosBusqueda.color
    }
    return auto;
}