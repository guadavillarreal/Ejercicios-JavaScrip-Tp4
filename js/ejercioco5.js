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
    dniParam,
    sexoParam,
    pesoParam,
    alturaParam,
    nacimientoParam
  ) {
    this.#nombre = nombreParam;
    this.#edad = edadParam;
    this.#dni = dniParam;
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
  set nuevodni(dniParam) {
    if (nuevodni > 0) {
      this.#dni = dniParam;
    } else {
      console.log("El dni ingresa no es valido");
    }
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
    console.log(`La persona pertenece a la generación:${generacion}`);
    console.log(`Su razgo caracteristico es: ${razgo}`);
  }
  esMayorDeEdad() {
    if (this.edad >= 18) {
      console.log(`La persona es mayor de edad`);
    } else {
      console.log(`La persona es menor de edad`);
    }
  }
  mostrarDatos() {
    console.log(`<h2>Persona: ${this.nombre}</h2>
        <ul>
        <li>${this.edad}</li>
        <li>${this.dni}</li>
        <li>${this.sexo}</li>
        <li>${this.peso}</li>
        <li>${this.altura}</li>
        <li>${this.nacimiento}</li>
        </ul>
        `);
  }
}
//me falta ver lo del dni ---    generaDNI(): genera un número aleatorio de 8 cifras.
