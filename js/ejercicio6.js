/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
        ISBN
        Título
        Autor
        Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. 
Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

    “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.*/

class libro {
    constructor(isbnParam,tituloParam,autorParam,pagParam){
        this.isbn=isbnParam;
        this.titulo=tituloParam;
        this.autor=autorParam;
        this.pag=pagParam;
    }
    get nuevoisbn(){
        return this.isbn;
    }
    set nuevoisbn(isbnParam){
        this.isbnParam;
    }
}