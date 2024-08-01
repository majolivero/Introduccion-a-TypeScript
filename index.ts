//CONCEPTOS DE PROGRAMACIÓN EN TYPESCRIPT
//1. Variables y constantes: Tipos,Tipos Personalizados
//Crea un tipo personalizado para un objeto Producto con propiedades id, nombre, y precio.

type Product = {
    id: number,
    name:string
    price: number 
}


//2.Operadores (aritméticos, booleanos)
//Implementa una función que determine si un número es par utilizando operadores aritméticos y booleanos.

function esPar(numero : number):boolean {
    return numero % 2 === 0;
}
console.log(esPar(4));


//3. Estructuras de decisión (if, switch, ternarios)
//Implementa una función que clasifique un número en positivo, negativo o cero usando if y switch.

//USANDO IF
function clasificarNumero(value:number){
    if(value > 0){
        return "El número es positivo"
    }else if(value < 0){
        return "El número es negativo"
    }else{
        return "El número es cero"
    }
}

let resultadoClasificar = clasificarNumero(4);
console.log(resultadoClasificar);

//USANDO SWITCH 
function clasificarNumeroSwitch(number:number){
    switch(true){
        case(number > 0):
            return "El número es positivo";
        case(number < 0):
            return "El número es negativo";
        case(number === 0):
            return "El número es cero"
    }
}

let resultadoClasificarSwitch = clasificarNumeroSwitch(0);
console.log(resultadoClasificarSwitch);


//4.Estructuras de iteración (while, for, foreach, map)
//Implementa una función que recorra un array de nombres y los imprima en consola.

function mostrarNombres(nombres:string[]){
    for(let i = 0 ; i < nombres.length ; i++){
        console.log(nombres[i]);
    }
}
let arrayNombres = ["Ana", "Juan", "Pedro", "Andres"];
mostrarNombres(arrayNombres);


//ESTRUCTURAS DE DATOS Y FUNCIONES
//ARRAYS / LISTAS
//TAREA 1: Crea un array de números y calcula la suma de todos sus elementos utilizando un metodo reduce.

let arrayNumbers: number[] = [1,2,3,4,5,6];

const initialValue = 0;
const sumReduce = arrayNumbers.reduce(
    (accumulator,currentValue) => accumulator + currentValue,
    initialValue,
);
console.log(sumReduce);

//TAREA 2: Implementa una función que reciba un array de strings y retorne la concatenación de todos los elementos.

function concatenarElementos(array:string[]){
    return array.join('');
}
const miArray2 = ['Hola!',' ','soy',' ','TypeScript'];
const resultado2 = concatenarElementos(miArray2);
console.log(resultado2);

//TAREA 3:Define un array de objetos `User` con propiedades `id` y `name`, e imprime el nombre de cada usuario en consola.

interface User {
    id:number;
    name:string;
}

const users : User[] = [
    {id:1, name:"Andres"},
    {id:2, name:"Jose"},
    {id:3, name:"Maria"}
];

users.forEach(user => {
    console.log(user.name);
})

//TAREA 4: Implementa una función que reciba un array de números y retorne el mayor valor.

function obtenerMayorNumero(arrayNumeros:number[]):number{
    return Math.max(...arrayNumeros) //Utiliza el operador de propagación para expandir los elementos del array y pasarlos como argumentos individuales a la función Math.max, que devuelve el mayor de los valores proporcionados
}

const miArray = [1,2,3,4,5];
console.log(obtenerMayorNumero([2,4,10,15,20]));


// 2. Objetos
//Tarea 1. Define un objeto `Car` con propiedades `marca`, `modelo` y `año`. Crea una instancia de `Car` e imprime sus propiedades en consola.

interface Car{
    marca:string;
    modelo:string;
    año:number
}

let myCar: Car = {
    marca: 'Suzuki',
    modelo:'ABC123',
    año:2024
}

console.log(`Marca: ${myCar.marca}`);
console.log(`Modelo: ${myCar.modelo}`);
console.log(`Año: ${myCar.año}`);

//Tarea 2. Con base en el objeto `Car`, crea una clase que posea un metodo estatico que reciba un objeto `Car` y retorne un string con la información del carro.

//En TypeScript, los métodos estáticos son aquellos que pertenecen a la clase en sí misma en lugar de a una instancia específica de la clase.
//Esto significa que puedes llamar a un método estático directamente desde la clase sin necesidad de crear una instancia de la misma. 
//Para definir un método estático, se utiliza la plabra clave static en la declaración del método dentro de la clase.

class carInfo{
    static obtenerInfo(car:Car):string{
        let info:string = `Marca: ${car.marca} Modelo: ${car.modelo} Año: ${car.año}`;
        return info;
    }
}

let resultado = carInfo.obtenerInfo(myCar);
console.log(resultado);

//Tarea 3.Implementa una función que reciba un objeto `Car` y retorne un nuevo objeto con las mismas propiedades, pero con el año incrementado en 1.

function recibirObjeto(car:Car):Car{
    let newCar:Car = {
        marca:car.marca,
        modelo:car.modelo,
        año:car.año + 1
    }
    return newCar;
}

let resultadoInfo = recibirObjeto(myCar);
console.log(resultadoInfo);

//3.Funciones
//Tarea 2.  Implementa una funcion que reciba rest parameters y retorne error si al menos uno de los parametros pasados no es del tipo de los dos primeros parametros. 
//Asegurarse que los dos primeros parametros sean del mismo tipo.

//Los rest parameters en TypeScript permiten a una función aceptar un número indefinido de argumentos como un array.
//Esto es útil cuando no sabes cuantos argumentos se pasarán a la función. 
//Se definen usando tres puntos(...)antes del nombre del parámetro.
//Algunos reglas importantes sobre los rest parameters:
//1.Solo puede haber un rest parameter en una función.
//2.Debe ser el último parámetro en la lista de parámetros.

function recibirRestParameters(numero1:number,numero2:number,...numeros:any[]):string{

    let respuesta:string = "Los valores corresponden al mismo tipo de dato";

    for(let i=0 ; i <= numeros.length - 1 ; i++){
        if(typeof numero1 === typeof numero2 && typeof numero2 !== typeof numeros[i]){
            respuesta = "error: Los valores no corresponden al mismo tipo de dato";
        }
    }
    return respuesta;
}

console.log(recibirRestParameters(2,3,"a"));

//Tarea 3. Define una funcion que reciba una matriz cuadrada de numeros como parametros y devuelva la matriz girada 90 grados en sentido horario. (2 Riwi points)

function girarMatrizCuadrada(matriz:number[][]):number[][]{

    let newMatriz:number[][] = [];
    for (let i = 0; i < matriz.length; i++) {
        newMatriz[i] = [];
        for (let j = 0; j < matriz.length; j++) {
            newMatriz[i][j] = matriz[matriz.length - j - 1][i];
        }
    }

    return newMatriz;

}

console.log(girarMatrizCuadrada([[1, 2], [3, 4]]));
