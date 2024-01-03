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
  constructor(nombreAvion, capacidad, destino, listaPasajeros) {
    this.nombreAvion = nombreAvion;
    this.capacidad = capacidad;
    this.destino = destino;
    this.listaPasajeros = listaPasajeros;
  }
  //porq no me toma el metodo
  /*  abordar : function () {
    document.write(
      "Los pasajeros deben de abordar el avion: " + this.nombreAvion
    );
  }*/
  //metodo
  abordar(pasajero, capacidad) {
    if (capacidad <= pasajero) {
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
class Aeropuerto extends Avion {
  constructor(
    nombreAvion,
    capacidad,
    destino,
    listaPasajeros,
    nombreAeropuerto,
    listaAviones
  ) {
    super(nombreAvion, capacidad, destino, listaPasajeros);
    this.nombreAeropuerto = nombreAeropuerto;
    this.listaAviones = listaAviones;
  }
  //metodo
  agregarAvion(avion) {}
  buscarAvion(nombreAvion) {}
}
