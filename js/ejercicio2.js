/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar 
la descripción del estado de la cuenta. */

const cuenta = {
  titular: "Alex",
  saldo: 0,

  ingresar: function (cantidad) {
    if (cantidad > 0) {
      this.saldo = this.saldo + cantidad;
      console.log(`Su saldo actual es:  ${this.saldo}`);
    } else {
      console.log("Ingrese un monto valido");
    }
  },
  extraer: function (cantidad) {
    if (cantidad > 0 && cantidad <= this.saldo) {
      this.saldo = this.saldo - cantidad;
      console.log(`Operacion exitosa`);
    } else {
      alert("No hay suficiente saldo en la cuenta");
    }
  },
  informar: function () {
    console.log(`<h2>Titular ${this.titular}</h2>`);
    console.log(`<h2>Su saldo es: ${this.saldo}</h2>`);
  },
};

cuenta.informar();
cuenta.ingresar();
cuenta.informar();
cuenta.extraer();
cuenta.informar();
