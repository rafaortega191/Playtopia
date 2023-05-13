import Juego from "./classJuego.js"
import { sumarioValidacion } from "./helpers.js"
// listas de juegos y juegos en oferta
let listaJuegos = [];
let listaJuegosOferta = [];
// traigo el modal, el formulario y el boton de crear juego
let formularioAdminJuego = document.getElementById(`formJuego`);
let btnCrearJuego = document.getElementById(`btnCrearJuego`);
let modalJuegos = new bootstrap.Modal(document.getElementById(`modalJuegos`));
// traigo los campos del formulario
let codigo = document.getElementById(`codigo`);
let nombre = document.getElementById(`nombre`);
let precio = document.getElementById(`precio`);
let precioParaJuegoEnOferta = null;
let descripcion = document.getElementById(`descripcion`); 
let imagen = document.getElementById(`imagen`); 
let trailer = document.getElementById(`trailer`); 
let categoria = document.getElementById(`categoria`); 
let desarrollador = document.getElementById(`desarrollador`); 
let almacenamiento = document.getElementById(`almacenamiento`); 
let placaGrafica = document.getElementById(`placa`); 
let ram = document.getElementById(`ram`); 
let procesador = document.getElementById(`procesador`);
// variable que cambia a true si el administrador pone que SI esta en oferta
let enOferta = false;
// traigo los type radio del formulario
let siOferta = document.getElementById(`siOferta`)
let noOferta = document.getElementById(`noOferta`)
// eventos para si elige Si esta en oferta o No esta en oferta
siOferta.addEventListener(`click`, ponerEnOferta)
noOferta.addEventListener(`click`, noPonerEnOferta)
// Funciones relacionadas a poner o no juego en oferta
function ponerEnOferta(){
    enOferta = true;
    let divPrecioOferta = document.getElementById(`divPrecioOferta`);
    divPrecioOferta.className = `mb-3`
    let precioOferta = document.getElementById(`precioOferta`);
    precioParaJuegoEnOferta = precioOferta;
    agregarJuegoEnOferta(juego)
}
function agregarJuegoEnOferta(juego){
    if(enOferta == true){
        listaJuegosOferta.push(juego)
    }
}
function noPonerEnOferta(){
    enOferta = false;
    let divPrecioOferta = document.getElementById(`divPrecioOferta`);
    divPrecioOferta.className = `mb-3 d-none`
}


// Aqui empiezan los eventos de botones
btnCrearJuego.addEventListener(`click`, mostrarFormularioJuego)

// Aqui empiezan las funciones
function mostrarFormularioJuego(){
    limpiarFormulario()
    modalJuegos.show()
}
function limpiarFormulario(){
    formularioAdminJuego.reset()
}
