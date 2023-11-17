/*1- Crea un objeto llamado auto que tenga algunas características como el color, 
marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir 
encender y apagar el auto.
Output:                 objeto.encender();                  auto encendido
                        objeto.apadar()                     El auto se apagó
*/

const auto = {
  //carcteristicas
  color : "rojo",
  marca : "Peugeot",
  modelo : 208,
  
  encender: function () {
    document.write("<p> Auto Encendido</p>")
  },
  apagar: function () {
    document.write("<p>Auto apagado</p>")
  },
};
document.write(`<h2>${auto.marca} ${auto.modelo}</h2>`);
auto.encender();
auto.apagar();
