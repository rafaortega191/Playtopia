let listaJuegos = JSON.parse(localStorage.getItem("listaJuegos")) || [];

//dibujar columnas
listaJuegos.map((juego) => {
  crearColumna(juego);
});

function crearColumna(juego) {
  let grilla = document.querySelector("#grillaJuegos");
  grilla.innerHTML += `
  <div class="col-6 col-md-3 col-lg-2 rounded mb-4 position-relative containerImagenJuegos overflow-hidden">
  </button>
  <img src="${juego.imagen}"
    alt="${juego.nombre}" class="imagenJuegos rounded" />
  <div class="infoCardJuego text-light d-flex flex-column justify-content-between pe-4 ps-2">
    <h5 class="fw-bold">${juego.nombre}</h5>
    <div class="d-flex flex-row-reverse mb-2">
      <p class="me mb-0 badge text-bg-success fs-6">$${juego.precio}</p>
    </div>
    <button class="btn mb-2 btnVerMas text-light" onclick="navegarDetallesJuego('${juego.codigo}')">Ver detalle</button>
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
