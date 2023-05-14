import Juego from "./classJuego.js";
import { sumarioValidacion } from "./helpers.js";
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
let precioOferta = 0;
let descripcion = document.getElementById(`descripcion`);
let imagen = document.getElementById(`imagen`);
let trailer = document.getElementById(`trailer`);
let categoria = document.getElementById(`categoria`);
let desarrollador = document.getElementById(`desarrollador`);
let almacenamiento = document.getElementById(`almacenamiento`);
let placaGrafica = document.getElementById(`placa`);
let ram = document.getElementById(`ram`);
let procesador = document.getElementById(`procesador`);

// traigo los type radio del formulario
let siOferta = document.getElementById(`siOferta`);
let noOferta = document.getElementById(`noOferta`);
// eventos para si elige Si esta en oferta o No esta en oferta
siOferta.addEventListener(`click`, ponerEnOferta);
noOferta.addEventListener(`click`, noPonerEnOferta);
// Funciones relacionadas a poner o no juego en oferta
function ponerEnOferta() {
  let divPrecioOferta = document.getElementById(`divPrecioOferta`);
  divPrecioOferta.className = `mb-3`;
  precioOferta = document.getElementById(`precioOferta`).value;
  agregarJuegoEnOferta(juego);
}
function agregarJuegoEnOferta(juego) {
  listaJuegosOferta.push(juego);
}
function noPonerEnOferta() {
  let divPrecioOferta = document.getElementById(`divPrecioOferta`);
  divPrecioOferta.className = `mb-3 d-none`;
}

// Aqui empiezan los eventos de botones
btnCrearJuego.addEventListener(`click`, mostrarFormularioJuego);
formularioAdminJuego.addEventListener("submit", prepararFormulario);

// Aqui empiezan las funciones
function mostrarFormularioJuego() {
  limpiarFormulario();
  modalJuegos.show();
}
function limpiarFormulario() {
  formularioAdminJuego.reset();
}

function prepararFormulario(e) {
  e.preventDefault();
  crearJuego();
}

function crearJuego() {
  //creo juego
  const juegoNuevo = new Juego(
    undefined,
    "Nombre del juego",
    59.99,
    49.99,
    "Descripción del juego",
    "imagen.jpg",
    "trailer.mp4",
    "Categoría del juego",
    "Desarrollador del juego",
    "1TB",
    "Nvidia RTX 3080",
    "16GB",
    "Intel Core i7-10700K"
  );
  //agrego al array
  listaJuegos.push(juegoNuevo);
  console.log(listaJuegos);
  //guardo en LocalStorage
  localStorage.setItem("listaJuegos", JSON.stringify(listaJuegos));

  //cierro el modal
}
