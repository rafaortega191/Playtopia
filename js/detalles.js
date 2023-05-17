const parametroCodigo = new URLSearchParams(window.location.search);

let listaJuegos = JSON.parse(localStorage.getItem("listaJuegos")) || [];

const juegoBuscado = listaJuegos.find((juego) => juego.codigo === parametroCodigo.get("codigo"));

const url = new URL(juegoBuscado.trailer);
const searchParams = new URLSearchParams(url.search);
const videoId = searchParams.get("v") || url.pathname.substring(1);

let seccion = document.getElementById("seccionDetalle");
seccion.innerHTML = `
  <h1 class="display-3 text-center fw-bold" id="tituloDetalle">${juegoBuscado.nombre}</h1>
  <h4 class="fs-5 fw-bolder">Categoría: <span class="badge rounded-pill fs-6 fw-bold">${juegoBuscado.categoria}</span></h4> 
  <div class="fs-6 mt-lg-3 mb-3 d-flex row flex-lg-row">
      <aside class="col-md-6 col-lg-3 mb-2 mb-md-0">
          <img src="${juegoBuscado.imagen}"  class="img-fluid rounded-2" alt="${juegoBuscado.nombre}">
      </aside>
      <aside class="col-md-6 col-lg-6">
          <h5 class="fw-bold">Descripción</h5>
          <hr class="my-1 hrDetalle">
          <p class="fw-bold">${juegoBuscado.descripcion}</p>
          <p class="fw-bold pt-2">Desarrollador: ${juegoBuscado.desarrollador}</p>
      </aside>
      <aside class="col-lg-3 py-md-3 py-md-0">
          <p class="text-center fs-4 fw-bold">Precio: $${juegoBuscado.precio} ARS</p>
          <div class="d-flex flex-column align-items-center">
            <a href="./error404.html"> <button type="button" class="btn btnComprar btnDetalle">Comprar ahora</button></a>
            <a href="./error404.html"> <button type="button" class="btn btnCarrito btnDetalle my-3"><i class="fs-5 bi bi-bag-plus-fill"></i>  Agregar al carrito</button></a>
            <a href="./error404.html">  <button type="button" class="btn btnDeseos btnDetalle"><i class="fs-5 bi bi-bag-heart-fill"></i>  Agregar a lista de deseos</button></a>
            <div class='rating my-3 text-secondary'>
            <div>
              <h5>Calificá este juego</h5>
              <i class="bi bi-star-fill estrella"></i>
              <i class="bi bi-star-fill estrella"></i>
              <i class="bi bi-star-fill estrella"></i>
              <i class="bi bi-star-fill estrella"></i>
              <i class="bi bi-star-fill estrella"></i>
            </div>  
          </div>
      </aside>
  </div>
  <article class="d-flex justify-content-center">
  <iframe src="https://www.youtube-nocookie.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </article>
  <article class="mt-4">
      <h6 class="fs-5 fw-bold">Requisitos del sistema:</h6>
      <hr class="hrDetalleRequisitos">
      <ul class="row fw-bolder p-0" id="listaRequisitos">
        <div class="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
          <li class="itemRequisito d-flex">Procesador:<span class="componenteRequisitos">${juegoBuscado.procesador}<span></li>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
          <li class="itemRequisito d-flex">Graficos:<span class="componenteRequisitos">${juegoBuscado.placaGrafica}<span></li>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
          <li class="itemRequisito d-flex">RAM:<span class="componenteRequisitos">${juegoBuscado.ram}<span></li>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
          <li class="itemRequisito d-flex">Almacenamiento:<span class="componenteRequisitos">${juegoBuscado.almacenamiento}<span></li>
        </div> 
      </ul>
  </article>
`;

// Funcion para agregar reseñas del juego
let formularioComentario = document.getElementById(`formularioComentario`);
let contenedorParaComentarios = document.getElementById(`contenedorParaComentarios`);
let alertComentarios = document.getElementById(`alertComentarios`)

formularioComentario.addEventListener(`submit`, agregarComentario);

function agregarComentario(e){
  e.preventDefault();
  let nombreUsuario = document.getElementById(`nombreUsuario`).value
  let comentarioUsuario = document.getElementById(`comentarioUsuario`).value
  let resumen = validarComentarios(nombreUsuario, comentarioUsuario)
  if(resumen.length === 0){
    let comentario = document.createElement(`li`);
  comentario.className=`list-group-item d-flex align-items-center mb-4`
  comentario.innerHTML = `
  <i class="bi bi-person-circle fs-3 me-3" id="iconoUsuarioComentario"></i>
  <div>
    <p class="fs-6 fw-bold m-0">${nombreUsuario}</p>
    <p class="fs-6 lead m-0">${comentarioUsuario}</p>
  </div>
 `
 alertComentarios.className= `alert alert-danger mt-3 d-none`
 contenedorParaComentarios.appendChild(comentario)
 limpiarFormComentarios()
  }
  else{
    alertComentarios.innerHTML = resumen;
    alertComentarios.className= `alert alert-danger mt-3`
  }
}
function limpiarFormComentarios(){
  formularioComentario.reset()
}

function validarCantidadCaracteres(texto, min, max) {
  if (texto.length >= min && texto.length <= max) {
    return true;
  } else {
    return false;
  }
}

function validarComentarios(nombre, comentario){
  let resumen = ``
  if(!validarCantidadCaracteres(nombre, 2, 50)){
      resumen += `El nombre debe tener entre 2 y 50 caracteres.<br>`
  }
  if(!validarCantidadCaracteres(comentario, 1, 500)){
    resumen += `Tu comentario no puede tener mas de 500 caracteres.`
  }
  return resumen
}
// funcion para calificacion

const estrellas = document.querySelectorAll('.estrella');
estrellas.forEach(function(estrella,i) {
  estrella.addEventListener('click', function(){
    for (let j=0; j<= i; j++) {
      estrellas[j].classList.add('checked');
    }
    for (let j=i+1; j < estrellas.length; j++) {
      estrellas[j].classList.remove('checked');
    }
  })
})