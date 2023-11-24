/*4- Escribe una clase Producto para crear objetos. Estos objetos, deben 
presentar las propiedades código, nombre y precio, además del método imprime datos, 
el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores 
de los tres objetos instanciados.*/
const mercaderia = [producto1,producto2,producto3];
class Producto {
  constructor(codigoParam, nombreParam, precioParam) {
    this.codigo = codigoParam;
    this.nombre = nombreParam;
    this.precio = precioParam;
  }
  mostrarDatos() {
    console.log(`<p>Datos del Producto <br>${this.codigo}
                        <br>${this.nombre}
                        <br> ${this.precio}</p>`);
  }
}

const producto1 = new Producto(10,cocacola,100);
const producto2 = new Producto(20,pepsi,100);
const producto3 = new Producto (30,fanta,90);
console.log(mercaderia);
