let listaJuegos = JSON.parse(localStorage.getItem("listaJuegos")) || [];
let buscador = document.querySelector("input");

buscador.addEventListener("keyup", filtrar);

function crearColumna(juego) {
  let grilla = document.querySelector("#grillaJuegos");
  grilla.innerHTML += `
  <div class="col-6 col-md-3 col-lg-2">
  <div class="p-0 rounded mb-4 containerJuego overflow-hidden">
  </button>
  <img src="${juego.imagen}"
    alt="${juego.nombre}" class="imagenJuegos rounded" />
  <div class="infoCardJuego text-light d-flex flex-column justify-content-between w-100 px-2">
    <h5 class="fw-bold tituloJuego">${juego.nombre}</h5>
    <div class="d-flex flex-row-reverse mb-2">
      <p class="me mb-0 badge text-bg-success fs-6">$${juego.precio}</p>
    </div>
    <button class="btn mb-2 btnVerMas text-light" onclick="navegarDetallesJuego('${juego.codigo}')">Ver detalle</button>
  </div>
  </div>
  </div>
    `;
}

function navegarDetallesJuego(codigo) {
  console.log(codigo);
  console.log(window.location);
  // Nombre de dominio
  console.log(window.location.origin + "/pages/detalles.html?codigo=" + codigo);
  window.location.href = window.location.origin + "/pages/detalles.html?codigo=" + codigo;
}

function filtrar() {
  let busqueda = buscador.value.toLowerCase();
  let resultados = 0;
  let juego = document.querySelectorAll(".containerJuego");
  let sinResultados = document.getElementById('mensajeError');

  juego.forEach((juego) => {
    let titulo = juego.querySelector(".tituloJuego").textContent.toLowerCase();
    if (titulo.includes(busqueda)) {
      juego.style.display = "block";
      resultados++;
    } else {
      juego.style.display = "none";
    }
  });

  if (resultados === 0 && sinResultados.className === "d-none") {
    sinResultados.className = "text-center";
  } else if (resultados > 0 && sinResultados.className === "text-center") {
    sinResultados.className ="d-none";
  }
}


//dibujar columnas
listaJuegos.map((juego) => {
  crearColumna(juego);
});