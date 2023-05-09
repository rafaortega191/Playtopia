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
    #almacenamiento;
    #placaGrafica;
    #ram;
    #procesador;
  
    constructor(codigo = uuidv4(), nombre, precio, precioOferta, descrpcion, imagen, trailer, categoria, desarrollador, almacenamiento, placaGrafica, ram, procesador) {
      this.#codigo = codigo;
      this.#nombre = nombre;
      this.#precio = precio;
      this.#precioOferta = precioOferta;
      this.#descripcion = descripcion;
      this.#imagen = imagen;
      this.#trailer = trailer;
      this.#categoria = categoria;
      this.#desarrollador = desarrollador;
      this.#almacenamiento = almacenamiento;
      this.#placaGrafica = placaGrafica;
      this.#ram = ram;
      this.#procesador = procesador;
    }
    // geters y seters  
    get codigo() {
      return this.#codigo;
    }
  
    set codigo(codigo) {
      this.#codigo = codigo;
    }
  
    get nombre() {
      return this.#nombre;
    }
  
    set nombre(nombre) {
      this.#nombre = nombre;
    }
  
    get precio() {
      return this.#precio;
    }
  
    set precio(precio) {
      this.#precio = precio;
    }
  
    get precioOferta() {
      return this.#precioOferta;
    }
  
    set precioOferta(precioOferta) {
      this.#precioOferta = precioOferta;
    }
  
    get descripcion() {
      return this.#descripcion;
    }
  
    set descripcion(descripcion) {
      this.#descripcio = descripcion;
    }
  
    get imagen() {
      return this.#imagen;
    }
  
    set imagen(imagen) {
      this.#imagen = imagen;
    }
  
    get trailer() {
      return this.#trailer;
    }
  
    set trailer(trailer) {
      this.#trailer = trailer;
    }
  
    get categoria() {
      return this.#categoria;
    }
  
    set categoria(categoria) {
      this.#categoria = categoria;
    }
  
    get desarrollador() {
      return this.#desarrollador;
    }
  
    set desarrollador(desarrollador) {
      this.#desarrollador = desarrollador;
    }
  
    get almacenamiento() {
      return this.#almacenamiento;
    }
  
    set almacenamiento(almacenamiento) {
      this.#almacenamiento = almacenamiento;
    }
    get placaGrafica() {
        return this.#placaGrafica;
      }
    
      set placaGrafica(placaGrafica) {
        this.#placaGrafica = placaGrafica;
      }
      get ram() {
        return this.#ram;
      }
    
      set ram(ram) {
        this.#ram = ram;
      }
      get procesador() {
        return this.#procesador;
      }
    
      set procesador(procesador) {
        this.#procesador = procesador;
      }
    // pasar a formato JSON.stringify 
    toJSON(){
        return {
            codigo: this.codigo,
            nombre: this.nombre,
            precio: this.precio,
            precioOferta: this.precioOferta,
            descripcion: this.descripcion,
            imagen: this.imagen,
            trailer: this.trailer,
            categoria: this.categoria,
            desarrollador: this.desarrollador,
            almacenamiento: this.almacenamiento,
            placaGrafica: this.placaGrafica,
            ram: this.ram,
            procesador: this.procesador
        }

    }
  }