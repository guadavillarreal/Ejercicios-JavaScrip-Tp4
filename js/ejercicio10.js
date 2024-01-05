/*crear una CLASE AEROPUERTO con las propiedades -nombreAeropuerto y -lista de aviones, esta clase deberá contener 
el método -agregarAvion-, el cual recibirá un objeto de tipo Avión, además 
de un método -buscarAvion- el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, 
si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. 
Los aviones tienen el método -abordar- el cual permite que un pasajero suba al avión solo si hay capacidad disponible 
en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.
-- Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", 
-- Crear 3 objetos aviones con diferentes destinos. 
-- Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.
*/
//clase padre
class Avion {
  //lo que yo paso al crear el obj de la clase
  constructor(nombreAvion, capacidad, destino, listaPasajeros = []) {
    //listaPasajeros = [ ] se define por defecto un array vacio
    this.nombreAvion = nombreAvion;
    this.capacidad = capacidad;
    this.destino = destino;
    this.listaPasajeros = listaPasajeros;
  }
  //metodo
  abordar(capacidad) {
    if (this.listaPasajeros.length < capacidad) {
      //ver capacidad del avion
      document.write(
        "Los pasajeros deben de abordar el avion: " + this.nombreAvion
      );
    } else {
      document.write(
        "Capacidad maxima del avion alcanzada, no podra abordar este avion"
      );
    }
  }
}

//clase hija
class Aeropuerto {
  constructor(nombreAeropuerto, listaAviones = []) {
    this.nombreAeropuerto = nombreAeropuerto;
    this.listaAviones = listaAviones;
  }
  //metodo
  agregarAvion(avion) {
    this.listaAviones.push(avion);
  }
  buscarAvion(nombreAvion) {
    for (let index = 0; index < this.listaAviones.length; index++) {
      
      
    }
  }
}

const avion1 = new Avion("avion1", 100, "Bs As", []);
const areopuerto1 = new Aeropuerto("areopuerto1", []);
areopuerto1.agregarAvion(avion1);
console.log(areopuerto1);
