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

//se obtiene el tema del localstorage, si no hay uno se asigna uno por defecto
let temaConfigurado = JSON.parse(localStorage.getItem("tema")) || "light";
cambiarTema(temaConfigurado);

let botonTemaOscuro = document.querySelector("#btnTemaOscuro");
let botonTemaClaro = document.querySelector("#btnTemaClaro");

botonTemaOscuro.addEventListener("click", () => cambiarTema("dark"));
botonTemaClaro.addEventListener("click", () => cambiarTema("light"));

function cambiarTema(colorTema) {
  document.querySelector("body").setAttribute("data-bs-theme", colorTema);
  //guardar en localstorage
  localStorage.setItem("tema", JSON.stringify(colorTema));
  //cabiar el icono del dropdown segun el tema
  let logoDropdown = document.querySelector(".logoTema");
  if (colorTema === "dark") {
    logoDropdown.innerHTML = `<i class="bi bi-moon-fill  fs-5 me-2"></i>`;
  } else {
    logoDropdown.innerHTML = `<i class="bi bi-brightness-high-fill fs-5 me-2">`;
  }
}
