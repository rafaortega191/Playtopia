// Mostrar y ocultar imagen para dispositivos medianos y grandes en Seccion Recomendados
let imagenMostrada = document.getElementById("imagenRecomendados");

function mostrarImagen(urlImagen) {
  imagenMostrada.src = urlImagen;
}

function imagenPorDefecto() {
  let imagenMostrada = document.getElementById("imagenRecomendados");
  imagenMostrada.src = "img/Gif_logo_negro.gif";
}
//Cambiar temas de las paginas
let botonTemaOscuro = document.querySelector("#btnTemaOscuro");
let botonTemaClaro = document.querySelector("#btnTemaClaro");

botonTemaOscuro.addEventListener("click", () =>cambiarTema("dark"));
botonTemaClaro.addEventListener("click", () =>cambiarTema("light"));

function cambiarTema(colorTema){
  document.querySelector("body").setAttribute("data-bs-theme", colorTema);
}