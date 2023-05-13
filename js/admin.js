import Juego from "./classJuego.js"
import { sumarioValidacion } from "./helpers.js"

let formularioAdminJuego = document.getElementById(`formJuego`);

let btnCrearJuego = document.getElementById(`btnCrearJuego`);
let modalJuegos = new bootstrap.Modal(document.getElementById(`modalJuegos`));
let codigo = document.getElementById(`codigo`);
let nombre = document.getElementById(`nombre`);
let precio = document.getElementById(`precio`);
let precioOferta = document.getElementById(`precioOferta`);
let descripcion = document.getElementById(`descripcion`); 
let imagen = document.getElementById(`imagen`); 
let trailer = document.getElementById(`trailer`); 
let categoria = document.getElementById(`categoria`); 
let desarrollador = document.getElementById(`desarrollador`); 
let almacenamiento = document.getElementById(`almacenamiento`); 
let placaGrafica = document.getElementById(`placa`); 
let ram = document.getElementById(`ram`); 
let procesador = document.getElementById(`procesador`);

btnCrearJuego.addEventListener(`click`, mostrarFormularioJuego)

function mostrarFormularioJuego(){
    limpiarFormulario()
    modalJuegos.show()
}
function limpiarFormulario(){
    formularioAdminJuego.requestFullscreen()
}