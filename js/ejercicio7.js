/*Nos piden realizar una -agenda- telefónica de contactos.
  Un contacto está definido por un nombre y un teléfono. 
  Se considera que un contacto es igual a otro cuando sus nombres son iguales.

  Una agenda de contactos está formada por un conjunto de contactos. 
-Se podrá crear de dos formas,indicando nosotros el tamaño o con un tamaño por defecto (10).
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
  //me falta el metodo mostrar que tiene que ir en la clase contactos
  mostrarDatos() {
    document.write(`Nombre: ${this.nombre} Telefono: ${this.numero}`);
  }
}

class Agenda {
  constructor(tamanio) {
    this.contactos = []; //indica que es un array
    this.tamanio = tamanio; //solo indica la cantidad de contactos que puede tener
  }

  //metodo
  aniadirContacto(contacto) {
    console.log(this.tamanio);
    this.agendaLlena();
    if (!this.agendaLlena()) {
      //en el metdodo agendallena poner si es true o false
      this.existeContacto();
      if (!this.existeContacto) {
        this.contactos.push(contacto);
        document.write("Se agrego un contacto nuevo");
      } else {
        document.write("El contacto ya existe en la agenda");
      }
    } else {
      document.write("Agenda llena");
    }
    //se llama a la funcion para verificar si existe el contacto en la agenda
    //if () {
    //  this.existeContacto(contacto);
    /*     const contactoExixtente = this.existeContacto(contacto);
      if (!contactoExixtente) {
      } else {
      }*/
    // } else {
    //}
  }
  agendaLlena() {
    //this.cpmtactps.length por lo que el obj length es quien me indica el pamaño del obj array para poder comparar con el obj tamanio que no debe de ser mas de 10 por defecto
    //si hay espacio se guarda en un espacio un nuevo contacto
    if (this.contactos.length === this.tamanio) {
      //devuelve un verdadero si est allena
      return true;
    } else {
      //caso contrario un false
      return false;
    }
  }
  existeContacto(contacto) {
    //find busca lo que le envio por parametro y hago la compaciron y el resultado lo asigna a la variable que declaro
    const contactoExistente = this.contactos.find((contact) => {
      contact.nombre === contacto.nombre;
      if (contactoExistente) {
        return true;
      } else {
        return false;
      }
    });
  }
  buscarContactos (contacto){
    const contactoExistente = this.contactos.find((contact) => {
      contact.nombre === contacto.nombre;
      if (contactoExistente) {
        //ver como mostrar el contacto
        document.write(`Nombre del contacto: ${this.contactos.nombre} Telefono: ${this.contacto.telefono}`);
        return true;
      } else {
        document.write("El contacto buscado no existe en la Agenda");
        return false;
      }
    });
  }
  listarContactos() {
    for (let index = 0; index < this.contactos.length; index++) {
      document.write(`<h2>Lista de Contactos:</h2>
      <ul>
      <li> Contacto: ${this.contactos[index].mostrarDatos()} </li>
      </ul>
      `);
    }
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
//document.write(contacto1.nuevonombre);
//contacto1.nuevonombre = "guadalupe";
//console.log(contacto1.nuevonombre);
const agenda1 = new Agenda();
//console.log(agenda1);
//agenda1.aniadirContacto(contacto1);
//console.log(agenda1);
//console.log(agenda1.existeContacto(contacto1));
//console.log(agenda1.listarContactos);
agenda1.listarContactos();
agenda1.buscarContactos("guada");
