// Mostrar y ocultar imagen para dispositivos medianos y grandes en Seccion Recomendados
let imagenMostrada = document.getElementById('imagenRecomendados')

function mostrarImagen(urlImagen) {
    imagenMostrada.src = urlImagen;
  }

  function imagenPorDefecto() {
    let imagenMostrada = document.getElementById("imagenRecomendados");
    imagenMostrada.src = 'img/Gif_logo_negro.gif';
  }