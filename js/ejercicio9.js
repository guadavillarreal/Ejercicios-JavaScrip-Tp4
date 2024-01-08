/*9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" 
y "edad", y el método "emitirSonido". Luego, crea dos clases hijas 
llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio 
método "emitirSonido". Finalmente, crea dos objetos, uno de la clase 
"Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" 
para verificar que cada animal emite el sonido adecuado.  */

class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  get nuevonombre() {
    return this.nombre;
  }
  set nuevonombre(nombrenuevo) {
    this.nombre = nombrenuevo;
  }
  get nuevaedad() {
    return this.edad;
  }
  set nuevaedad(edadnueva) {
    this.edad = edadnueva;
  }
  emitirSonido() {
    document.write("Soy " + nombre);
  }
}
class Gato extends Animal {
  constructor(nombre, edad, tipoanimal) {
    super(nombre, edad);
    this.tipoanimal = tipoanimal;
  }
  get nuevotipoanimal() {
    return this.tipoanimal;
  }
  set nuevotipoanimal(tipoanimalnuevo) {
    this.tipoanimal = tipoanimalnuevo;
  }
  emitirSonido() {
    document.write("Soy un gato y mi nombre es  " + this.nombre);
    document.write(" MIAU ");
  }
}
class Perro extends Animal {
  constructor(nombre, edad, tipoanimal) {
    super(nombre, edad);
    this.tipoanimal = tipoanimal;
  }
  get nuevotipoanimal() {
    return this.tipoanimal;
  }
  set nuevotipoanimal(tipoanimalnuevo) {
    this.tipoanimal = tipoanimalnuevo;
  }
  emitirSonido(){
            document.write("soy un perro y mi nomnre es " + this.nombre);
            document.write(" GUAU ");
  }
}

let gato1 = prompt("Ingrese el nombre del gato");
let edad1 = prompt ("Ingrese la edad");
let tipoanimal1 = prompt ("Ingrese el tipo de animal");
let nuevoGato = new  Gato (gato1, edad1, tipoanimal1);
nuevoGato.emitirSonido();
