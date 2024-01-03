/*Crear una clase Libro que contenga al menos las siguientes propiedades:
-ISBN -Título -Autor -Número de páginas
- Crear sus respectivos métodos get y set correspondientes para cada propiedad. 
- Crear el método mostrarLibro() para mostrar la información relativa al libro con el 
siguiente formato:
            “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
- Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
- Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libro {
  constructor(isbn, titulo, autor, numPag) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.numPag = numPag;
  }
  //metodos computados: getter and setter
  //la pro que ingresa debe de ser distinta a la de retorno sino genera un buqle
  get nuevoisbn() {
    return this.isbn;
  }
  //la prop que ingresa debe de ser distinta tanto a la de retorno como al parametro que toma de valor sino genera un bucle
  set nuevoisbn(isbnnuevo) {
    this.isbn = isbnnuevo;
  }
  get nuevotitulo() {
    return this.titulo;
  }
  set nuevotitulo(titulonuevo) {
    this.titulo = titulonuevo;
  }
  get nuevoautor() {
    return this.autor;
  }
  set nuevoautor(autornuevo) {
    this.autor = autornuevo;
  }
  get nuevonumPag() {
    return this.numPag;
  }
  set nuevonumPag(numPagnuevo) {
    this.numPag = numPagnuevo;
  }
//metodo mostrar
  mostrarLibro() {
    document.write(`<h2>EL libro: ${this.titulo}</h2>
    Con ISBN ${this.isbn}, creado por el autor ${this.autor},
    tiene páginas ${this.numPag}.`);
  }
}

let CronicaDeUnaMuerteAnunciada = new Libro (1023, "Cronica de una muerte anunciada", "Garcia Marquez", 156);
CronicaDeUnaMuerteAnunciada.mostrarLibro();
let AlamosTalados = new Libro (1667 , "Alamos Talados", "Abelardo Arias", 158 )
AlamosTalados.mostrarLibro();
