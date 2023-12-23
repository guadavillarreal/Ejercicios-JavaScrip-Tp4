/*5- Crea una clase llamada Persona que siga las siguientes 
condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer),
 peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
 - mostrarGeneracion: este método debe mostrar un mensaje indicando 
    a qué generación pertenece la persona creada y cual es el rasgo 
    característico de esta generación.Para realizar este método tener 
    en cuenta la siguiente tabla de generaciones:
 - esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje 
    indicando que la persona es mayor de edad.
 - mostrarDatos: devuelve toda la información del objeto.
 - generaDNI(): genera un número aleatorio de 8 cifras.*/

class Persona {
  #nombre;
  #edad;
  #dni;
  #sexo;
  #peso;
  #altura;
  #nacimiento;
  constructor(
    nombreParam,
    edadParam,
    sexoParam,
    pesoParam,
    alturaParam,
    nacimientoParam
  ) {
    this.#nombre = nombreParam;
    this.#edad = edadParam;
    this.#dni = this.generarDNI();
    this.#sexo = sexoParam;
    this.#peso = pesoParam;
    this.#altura = alturaParam;
    this.#nacimiento = nacimientoParam;
  }
  //metodos computados
  get nuevonombre() {
    return this.#nombre;
  }
  set nuevonombre(nombreParam) {
    this.#nombre = nombreParam;
  }
  get nuevaedad() {
    return this.#edad;
  }
  set nuevaedad(edadParam) {
    if (nuevaedad > 0) {
      this.#edad = edadParam;
    } else {
      console.log("EL número ingresado no es valido");
    }
  }
  get nuevodni() {
    return this.#dni;
  }
  set nuevodni(generarDNI) {
    this.#dni = generarDNI;
  }
  get nuevosexo() {
    return this.#sexo;
  }
  set nuevosexo(sexoParam) {
    this.#sexo = sexoParam;
  }
  get nuevoPeso() {
    return this.#peso;
  }
  set nuevoPeso(pesoParam) {
    if (nuevoPeso > 0) {
      this.#peso = pesoParam;
    } else {
      console.log("El peso ingresa no es valido");
    }
  }
  get nuevaaltura() {
    return this.#altura;
  }
  set nuevaaltura(alturaParam) {
    if (nuevaaltura > 0) {
      this.#altura = alturaParam;
    } else {
      console.log("La altura ingresa no es valida");
    }
  }
  get nacimiento() {
    return this.#nacimiento;
  }
  set nacimiento(nuevonacimiento) {
    if (nuevonacimiento > 0) {
      this.#nacimiento = nuevonacimiento;
    } else {
      console.log("El año ingresa no es valido");
    }
  }
  //metodos
  mostrarGeneracion() {
    let generacion = "";
    let razgo = "";
    if (this.nacimiento >= 1930 && this.nacimiento <= 1948) {
      generacion = "Silent Generation";
      razgo = "la AUSTERIDAD";
    } else {
      if (this.nacimiento >= 1949 && this.nacimiento <= 1968) {
        generacion = "Baby Boom";
        razgo = "Ambición";
      } else {
        if (this.nacimiento >= 1969 && this.nacimiento <= 1980) {
          generacion = "Generación X";
          razgo = "Obseción por el éxito";
        } else {
          if (this.nacimiento >= 1981 && this.nacimiento <= 1993) {
            generacion = "Generacion Y MILLENNIALS";
            razgo = "Frustración";
          } else {
            if (this.nacimiento >= 1994 && this.nacimiento <= 2010) {
              generacion = "Generación Z";
              razgo = "Irreverencia";
            } else {
              generacion = "no tenemos parametros para su generación";
              razgo = " ";
            }
          }
        }
      }
    }
    document.write(`La persona pertenece a la generación:${generacion}`);
    document.write(`Su razgo caracteristico es: ${razgo}`);
  }
  esMayorDeEdad() {
    if (this.edad >= 18) {
      console.log(`La persona es mayor de edad`);
    } else {
      console.log(`La persona es menor de edad`);
    }
  }
  mostrarDatos() {
    document.write(`<h2>Persona: ${this.#nombre}</h2>
        <ul>
        <li>Edad: ${this.#edad}</li>
        <li>DNI: ${this.#dni}</li>
        <li>Sexo: ${this.#sexo}</li>
        <li>Peso:${this.#peso}</li>
        <li>Altura: ${this.#altura}</li>
        <li>Año de Nac:${this.#nacimiento}</li>
        </ul>
        `);
  }

  generarDNI() {
    return parseInt(Math.random() * 99999999);

    //    return parseInt(Math.random() * 99999999);
  }
}
let nombreParam = prompt("Ingrese un Nombre");
let edadParam = prompt("Ingrese la edad");
let sexoParam = prompt("Ingrese un genero: H(hombre) M(mujer)");
let pesoParam = prompt("Ingrese el peso");
let alturaParam = prompt("Ingrese la altura");
let nacimientoParam = prompt("Ingrese el año de nacimiento");

let nuevaPersona = new Persona(
  nombreParam,
  edadParam,
  sexoParam,
  pesoParam,
  alturaParam,
  nacimientoParam
);

document.write(nuevaPersona.mostrarDatos());
personalbar.mostrarGeneracion();
