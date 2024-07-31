//CONCEPTOS DE PROGRAMACIÓN EN TYPESCRIPT
//1. Variables y constantes: Tipos,Tipos Personalizados
//Crea un tipo personalizado para un objeto Producto con propiedades id, nombre, y precio.
// type Product = {
//     id: number,
//     name:string
//     price: number 
// }
//2.Operadores (aritméticos, booleanos)
//Implementa una función que determine si un número es par utilizando operadores aritméticos y booleanos.
// function esPar(numero : number):boolean {
//     return numero % 2 === 0;
// }
// console.log(esPar(4));
//3. Estructuras de decisión (if, switch, ternarios)
//Implementa una función que clasifique un número en positivo, negativo o cero usando if y switch.
//USANDO IF
// function clasificarNumero(value:number){
//     if(value > 0){
//         return "El número es positivo"
//     }else if(value < 0){
//         return "El número es negativo"
//     }else{
//         return "El número es cero"
//     }
// }
// let resultadoClasificar = clasificarNumero(4);
// console.log(resultadoClasificar);
//USANDO SWITCH 
// function clasificarNumeroSwitch(number:number){
//     switch(true){
//         case(number > 0):
//             return "El número es positivo";
//         case(number < 0):
//             return "El número es negativo";
//         case(number === 0):
//             return "El número es cero"
//     }
// }
// let resultadoClasificarSwitch = clasificarNumeroSwitch(0);
// console.log(resultadoClasificarSwitch);
//4.Estructuras de iteración (while, for, foreach, map)
//Implementa una función que recorra un array de nombres y los imprima en consola.
function mostrarNombres(nombres) {
    for (var i = 0; i < nombres.length; i++) {
        console.log(nombres[i]);
    }
}
var arrayNombres = ["Ana", "Juan", "Pedro", "Andres"];
mostrarNombres(arrayNombres);
