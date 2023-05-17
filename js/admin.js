import Juego from "./classJuego.js";
import { sumarioValidacion } from "./helpers.js";
// listas de juegos
let listaJuegos = JSON.parse(localStorage.getItem("listaJuegos")) || [];

if (listaJuegos.length !== 0) {
  //quiero que sean objetos de tipo juego
  listaJuegos = listaJuegos.map(
    (juego) =>
      new Juego(
        juego.codigo,
        juego.nombre,
        juego.precio,
        juego.descripcion,
        juego.imagen,
        juego.trailer,
        juego.categoria,
        juego.desarrollador,
        juego.almacenamiento,
        juego.placaGrafica,
        juego.ram,
        juego.procesador
      )
  );
}
// traigo el modal, el formulario y el boton de crear juego
let formularioAdminJuego = document.getElementById(`formJuego`);
let btnCrearJuego = document.getElementById(`btnCrearJuego`);
let modalJuegos = new bootstrap.Modal(document.getElementById(`modalJuegos`));
// traigo los campos del formulario
let codigo = document.getElementById(`codigo`);
let nombre = document.getElementById(`nombre`);
let precio = document.getElementById(`precio`);
let descripcion = document.getElementById(`descripcion`);
let imagen = document.getElementById(`imagen`);
let trailer = document.getElementById(`trailer`);
let categoria = document.getElementById(`categoria`);
let desarrollador = document.getElementById(`desarrollador`);
let almacenamiento = document.getElementById(`almacenamiento`);
let placaGrafica = document.getElementById(`placa`);
let ram = document.getElementById(`ram`);
let procesador = document.getElementById(`procesador`);
let crearJuegoNuevo = true;

// Aqui empiezan los eventos de botones
btnCrearJuego.addEventListener(`click`, mostrarFormularioJuego);
formularioAdminJuego.addEventListener("submit", prepararFormulario);

cargaInicial();

// Aqui empiezan las funciones
function cargaInicial() {
  if (listaJuegos.length > 0) {
    //dibujo una fila en la tabla
    listaJuegos.map((juego, indice) => crearFila(juego, indice + 1));
  }
}

function crearFila(juego, indice) {
  let tbody = document.querySelector("#tablaJuegos");
  tbody.innerHTML += `<tr>
  <td scope="col">${indice}</td>
    <td>${juego.nombre}</td>
    <td class="tamanioCelda text-truncate">
    ${juego.descripcion}
    </td>
    <td class="tamanioCelda text-truncate">
    ${juego.imagen}
    </td>
    <td>${juego.categoria}</td>
    <td class="text-center">
      <button class="btn btnEditar" onclick="prepararJuego('${juego.codigo}')">
        <i class="bi bi-pencil fs-5 text-dark"></i>
      </button>
      <button class="btn btnEliminar" onclick="borrarJuego('${juego.codigo}')">
        <i class="bi bi-trash fs-5 text-dark"></i>
      </button>
    </td>
</tr>`;
}

function mostrarFormularioJuego() {
  crearJuegoNuevo= true;
  limpiarFormulario();
  modalJuegos.show();
}
function limpiarFormulario() {
  formularioAdminJuego.reset();
}

//funcion para definir si el juego es nuevo o sera editado.
function prepararFormulario(e) {
  e.preventDefault();
  if(crearJuegoNuevo){
    crearJuego();
  }else{
    editarJuego();
  }
}

function crearJuego() {
  let resumen = sumarioValidacion(
    nombre.value,
    precio.value,
    descripcion.value,
    imagen.value,
    trailer.value,
    categoria.value,
    desarrollador.value,
    almacenamiento.value,
    placaGrafica.value,
    ram.value,
    procesador.value
  );
  if (resumen.length === 0) {
    const juegoNuevo = new Juego(
      undefined,
      nombre.value,
      precio.value,
      descripcion.value,
      imagen.value,
      trailer.value,
      categoria.value,
      desarrollador.value,
      almacenamiento.value,
      placaGrafica.value,
      ram.value,
      procesador.value
    );
    //agrego al array
    listaJuegos.push(juegoNuevo);
    //guardo en LocalStorage
    localStorage.setItem("listaJuegos", JSON.stringify(listaJuegos));
    limpiarFormulario();
    //Creo una nueva fila
    crearFila(juegoNuevo, listaJuegos.length);
    //cierro el modal
    modalJuegos.hide();
  } else {
    let alerta = document.getElementById("alerta");
    alerta.innerHTML = resumen;
    alerta.className = "alert alert-danger mt-3";
  }
}

window.borrarJuego = (codigo) => {
  Swal.fire({
    title: "Se eliminará el juego",
    text: "¿Estás seguro?",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#932fa2",
    cancelButtonColor: "#c967cb",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      //borrar el juego
      let posicionjuego = listaJuegos.findIndex(
        (juego) => juego.codigo === codigo
      );
      listaJuegos.splice(posicionjuego, 1);
      //actualizar el localstorage
      mandaralLocalstorage();
      //borrar la fila de la tabla
      let tbody = document.querySelector("#tablaJuegos");
      tbody.removeChild(tbody.children[posicionjuego]);
      //todo: actualizar el numero de  las filas de la tabla
      Swal.fire({
        text: "Juego eliminado",
        icon: "success",
      });
    }
  });
};

function mandaralLocalstorage() {
  localStorage.setItem("listaJuegos", JSON.stringify(listaJuegos));
}

window.prepararJuego = (codigoJuego)=>{
  //buscar el objeto que quiero mostrar en el form
    let juegoBuscado = listaJuegos.find((juego)=> juego.codigo === codigoJuego);
  //mostrar el formulario con los datos
  modalJuegos.show();
  codigo.value = juegoBuscado.codigo;
  nombre.value = juegoBuscado.nombre;
  precio.value = juegoBuscado.precio;
  descripcion.value = juegoBuscado.descripcion;
  imagen.value = juegoBuscado.imagen;
  trailer.value = juegoBuscado.trailer;
  categoria.value = juegoBuscado.categoria;
  desarrollador.value = juegoBuscado.desarrollador;
  almacenamiento.value = juegoBuscado.almacenamiento;
  placaGrafica.value = juegoBuscado.placaGrafica;
  ram.value = juegoBuscado.ram;
  procesador.value = juegoBuscado.procesador;
  
  //cambiar el estado de la variable crearjuegoNueva a false
  crearJuegoNuevo= false;
}

function editarJuego(){
  //en que posicion esta almancenado el juego que quiero editar
  let posicionjuego = listaJuegos.findIndex((juego)=> juego.codigo === codigo.value);
  //aca se editan los datos del juego
listaJuegos[posicionjuego].nombre = nombre.value;
listaJuegos[posicionjuego].precio = precio.value;
listaJuegos[posicionjuego].descripcion = descripcion.value;
listaJuegos[posicionjuego].imagen = imagen.value;
listaJuegos[posicionjuego].trailer = trailer.value;
listaJuegos[posicionjuego].categoria = categoria.value;
listaJuegos[posicionjuego].desarrollador = desarrollador.value;
listaJuegos[posicionjuego].almacenamiento = almacenamiento.value;
listaJuegos[posicionjuego].placaGrafica = placaGrafica.value;
listaJuegos[posicionjuego].ram = ram.value;
listaJuegos[posicionjuego].procesador = procesador.value;
  //actualizar el localstorage
  mandaralLocalstorage();
  //actualizar la fila de la tabla
  let tbody = document.querySelector("#tablaJuegos");
  tbody.children[posicionjuego].children[1].innerHTML = nombre.value;
  tbody.children[posicionjuego].children[2].innerHTML = descripcion.value;
  tbody.children[posicionjuego].children[3].innerHTML = imagen.value;
  tbody.children[posicionjuego].children[4].innerHTML = categoria.value;
  modalJuegos.hide();
}