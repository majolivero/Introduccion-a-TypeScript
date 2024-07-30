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

function esPar(numero : number):boolean {
    return numero % 2 === 0;
}

console.log(esPar(4));

