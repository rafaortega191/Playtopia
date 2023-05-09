export default class Juego {
    #codigo;
    #nombre;
    #precio;
    #precioOferta;
    #descripcion;
    #imagen;
    #trailer;
    #categoria;
    #desarrollador;
  
    constructor(codigo = uuidv4()) {
      this.#codigo = codigo;
      this.#titulo = titulo;
      this.#descripcion = descripcion;
      this.#imagen = imagen;
      this.#genero = genero;
      this.#anio = anio;
      this.#duracion = duracion;
      this.#pais = pais;
      this.#director = director;
      this.#reparto = reparto;
    }
  
    get codigo() {
      return this.#codigo;
    }
  
    set codigo(codigo) {
      this.#codigo = codigo;
    }
  
    get titulo() {
      return this.#titulo;
    }
  
    set titulo(titulo) {
      this.#titulo = titulo;
    }
  
    get descripcion() {
      return this.#descripcion;
    }
  
    set descripcion(descripcion) {
      this.#descripcion = descripcion;
    }
  
    get imagen() {
      return this.#imagen;
    }
  
    set imagen(imagen) {
      this.#imagen = imagen;
    }
  
    get genero() {
      return this.#genero;
    }
  
    set genero(genero) {
      this.#genero = genero;
    }
  
    get anio() {
      return this.#anio;
    }
  
    set anio(anio) {
      this.#anio = anio;
    }
  
    get duracion() {
      return this.#duracion;
    }
  
    set duracion(duracion) {
      this.#duracion = duracion;
    }
  
    get pais() {
      return this.#pais;
    }
  
    set pais(pais) {
      this.#pais = pais;
    }
  
    get director() {
      return this.#director;
    }
  
    set director(director) {
      this.#director = director;
    }
  
    get reparto() {
      return this.#reparto;
    }
  
    set reparto(reparto) {
      this.#reparto = reparto;
    }
    // solo para JSON.stringify 
    toJSON(){
        return {
            codigo: this.codigo, // AQUI VA EL NOMBRE DEL GETTER (this.codigo se refiere al getter)
            titulo: this.titulo,
            descripcion: this.descripcion,
            imagen: this.imagen,
            anio: this.anio,
            genero: this.genero,
            pais: this.pais,
            director: this.director,
            reparto: this.reparto,

        }

    }
  }