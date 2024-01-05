/* Nos piden realizar una agenda telefónica de contactos.
   Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a
 otro cuando sus nombres son iguales.
Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas,
 indicando nosotros el tamaño o con un tamaño por defecto (10).
Los métodos de la agenda serán los siguientes:
- aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar 
más contactos indicar por pantalla.
- existeContacto(Contacto): indica si el contacto pasado existe o no.
- listarContactos(): Lista toda la agenda
- buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
- eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o 
no por pantalla
- agendaLlena(): indica si la agenda está llena.
- huecosLibres(): indica cuántos contactos más podemos ingresar.
Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas
 de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
*/
class Contactos {
  constructor(nombre, numero) {
    this.nombre = nombre;
    this.numero = numero;
  }
  //netodos computados getter and setter
  get nuevonombre() {
    return this.nombre;
  }
  set nuevonombre(nombrenuevo) {
    this.nombre = nombrenuevo;
  }
  get nuevonumero() {
    return this.numero;
  }
  set nuevonumero(numeronuevo) {
    this.numero = numeronuevo;
  }
}

class Agenda {
  constructor(contactos = [], tamanio = 10) {
    this.contactos = contactos;
    this.tamanio = tamanio;
  }
  //metodo
  aniadirContacto(contacto) {
    if (this.contactos.length < this.tamanio) {
      const contactoExixtente = this.existeContacto(contacto);
      if (!contactoExixtente) {
        this.contactos.push(contacto);
      } else {
        console.log("El contacto ya existe");
      }
    } else {
      console.log("Agenda llena");
    }
  }
  existeContacto(contacto) {
    //find busca lo que le envio por parametro y hago la compaciron y asigna a la variable que declaro
    const contactoExistente = this.contactos.find((contact) => {
      contact.nombre === contacto.nombre;
      console.log("El contacto ya existe en la agenda");
    });
  }
}

/*class Agenda extends Contactos (){
  constructor(nombre , numero, ){}  
  //metodos
  /*  contactoExistente(){
    if (this.nombre === ) {
      
    } else {
      
    }
  }
}*/

const contacto1 = new Contactos("guada", 155);
console.log(contacto1.nuevonombre);
contacto1.nuevonombre = "guadalupe";
console.log(contacto1.nuevonombre);
const agenda1 = new Agenda();
console.log(agenda1);
agenda1.aniadirContacto(contacto1);
console.log(agenda1);
console.log(agenda1.existeContacto(contacto1));
