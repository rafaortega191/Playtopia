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
  let resumen = sumarioValidacion(nombre.value, precio.value, precioOferta.value, descripcion.value, imagen.value, trailer.value, categoria.value, desarrollador.value, almacenamiento.value, placaGrafica.value, ram.value, procesador.value);
  if (resumen.length === 0) {
    const juegoNuevo = new Juego(
      undefined,
      nombre,
      precio,
      precioOferta,
      descripcion,
      imagen,
      trailer,
      categoria,
      desarrollador,
      almacenamiento,
      placaGrafica,
      ram,
      procesador
    );
    //agrego al array
    listaJuegos.push(juegoNuevo);
    console.log(listaJuegos);
    //guardo en LocalStorage
    localStorage.setItem("listaJuegos", JSON.stringify(listaJuegos));
    limpiarFormulario()
    //cierro el modal
  } else {
    let alerta = document.getElementById("alerta");
    alerta.innerHTML = resumen;
    alerta.className = "alert alert-danger mt-3";
  }
}
