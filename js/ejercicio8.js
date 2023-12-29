/*8- Crea una clase llamada "Persona" que tenga las propiedades "nombre",
 "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, 
 crea dos objetos de la clase "Persona" con diferentes valores para sus 
 propiedades y llama a sus métodos "saludar" y "despedirse". */

class Persona {
  constructor(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
  }
  //metodos computados
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
  get nuevaprofesion() {
    return this.profesion;
  }
  set nuevaprofesion(profesionnueva) {
    this.profesion = profesionnueva;
  }
  saludar() {
    document.write("Hola, buenas soy " + this.nombre);
    document.write(`<ul>
    <li>Tengo ${edad} años</li>
    <li>Soy ${profesion}</li>
  </ul>`);
    alert("Hola, buenas soy " + this.nombre);
  }
  despedirse() {
    document.write("Muhcas gracias, me retiro");
    alert();
  }
}

let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");
let profesion = prompt("Ingrese su profeción");

let persona1 = new Persona(nombre, edad, profesion);

persona1.saludar();
