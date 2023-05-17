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
  let tablaBgColor = document.querySelector("#seccionTabla");
  document.querySelector("body").setAttribute("data-bs-theme", colorTema);
  //guardar en localstorage
  localStorage.setItem("tema", JSON.stringify(colorTema));
  //cabiar el icono del dropdown segun el tema
  let logoDropdown = document.querySelector(".logoTema");
  if (colorTema === "dark" && window.location.href === window.location.origin + "/pages/admin.html") {
    tablaBgColor.className = "seccionTablaDark";
  }
  if (colorTema === "light" && window.location.href === window.location.origin + "/pages/admin.html") {
    tablaBgColor.className = "seccionTablaLight";
  }
  if (colorTema === "dark") {
    logoDropdown.innerHTML = `<i class="bi bi-moon-fill  fs-5 me-2"></i>`;
  } else {
    logoDropdown.innerHTML = `<i class="bi bi-brightness-high-fill fs-5 me-2">`;
  }
}

verificarUser()

function verificarUser() {
  let estaLogueado = sessionStorage.getItem("estaLogueado");
  if(estaLogueado) {
    document.getElementById("loginNav").className = "d-none"
    document.getElementById("registroNav").className = "d-none"
  } else {
    document.getElementById("logoutNav").className = "d-none"
    document.getElementById("adminLinkNav").className = "d-none"
    let webAdmin = window.location.origin + "/pages/admin.html"
    if (window.location.href === webAdmin) {
      document.querySelector("main").innerHTML = `<h2 class="text-center">No tienes permisos para ver esta página, serás redirigido a la página de inicio en unos segundos</h2>`
      setTimeout(() => {
        window.location.href = window.location.origin;
      }, 3000);
    }
  }
}

function cerrarSesion(){
  sessionStorage.removeItem("estaLogueado", false);
  window.location.href = window.location.origin
}