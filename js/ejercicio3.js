/*3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las 
propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus 
propiedades, calcular el perímetro y el área*/

class Rectángulos{
            #alto
            #ancho
            constructor(altoParam, anchoParam){
                        this.#alto=altoParam,
                        this.#ancho=anchoParam;
            }
            get alto (){
                        return this.#alto;
            }
            set alto (alto){
                        this.#alto= alto;
            }
            get ancho(){
                        return this.#ancho;
            }
            set ancho (ancho){
                        this.#ancho=ancho;
            }
            mostrar(){
                        console.log(`El alto del rectangulo es: ${alto}`);
                        console.log(`El ancho del rectangulo es: ${anchoParam}`);
            }
            modificarAlto (altoParam){
                        this.alto=altoParam;
            }
            modificarAncho(anchoParam){
                        this.ancho=anchoParam;
            }
            calcularPerimetro( altoParam,anchoParam){
                        perimetro=altoParam*2+anchoParam*2;
                        console.log('El perimetro del rectangulo es:'+ perimetro); 
            }
            calcularArea( altoParam, anchoParam){
                        area = altoParam*anchoParam;
                        console.log(`El área del rectangulo es: ${area}`);
            }

}
const rectangulo1 = new Rectángulos(5,10);
 console.log (rectangulo1);
 rectangulo1.mostrar();
 rectangulo1.calcularArea();
 rectangulo1.calcularPerimetro();