/*1- Crea un objeto llamado auto que tenga algunas características como el color, 
marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir 
encender y apagar el auto.
Output:                 objeto.encender();                  auto encendido
                        objeto.apadar()                     El auto se apagó
*/
/*Pra la creacion de obj:
notacion literal: const pelicula = {
            //van las propiedades/caracteristicas ->  clave: valor 
                        
} */

const auto ={
            //carcteristicas
            color : 'rojo',
            marca : 'peugeot',
            modelo : 208,
            //metodos -- si o si tiene que poner
            encender: function (){
                        document.write('<p>Auto Encendido</p>')
            }
