//variables
const resultado = document.querySelector('#resultado')
const year = document.querySelector('#year')

const max = new Date().getFullYear();
const min = max - 10;
//eventos
document.addEventListener('DOMContentLoaded', () => {

    mostrarAutos();//Muestra los autos al cargar



    // Lenar las opciones de años
    llenarSelect();
})


//funciones
function mostrarAutos() {
    autos.forEach(auto => {
        const { marca, modelo, year, puertas, tranmision, precio, color } = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
        ${marca} ${modelo} -${year} -${puertas} Puertas - Transmision:${tranmision} - Precio:${precio} - Color${color}  `;

        //insertar en el HTML
        resultado.appendChild(autoHTML)

    })

}

function llenarSelect() {

    for (let i = max; i > min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.innerText = i;
        year.appendChild(opcion)//Agrega las opciones de año al select
    }

}