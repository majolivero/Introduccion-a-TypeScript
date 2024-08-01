//CONCEPTOS DE PROGRAMACIÓN EN TYPESCRIPT
//1. Variables y constantes: Tipos,Tipos Personalizados
//Crea un tipo personalizado para un objeto Producto con propiedades id, nombre, y precio.
var myCar = {
    marca: 'Suzuki',
    modelo: 'ABC123',
    año: 2024
};
// console.log(`Marca: ${myCar.marca}`);
// console.log(`Modelo: ${myCar.modelo}`);
// console.log(`Año: ${myCar.año}`);
//Tarea 2. Con base en el objeto `Car`, crea una clase que posea un metodo estatico que reciba un objeto `Car` y retorne un string con la información del carro.
//En TypeScript, los métodos estáticos son aquellos que pertenecen a la clase en sí misma en lugar de a una instancia específica de la clase.
//Esto significa que puedes llamar a un método estático directamente desde la clase sin necesidad de crear una instancia de la misma. 
//Para definir un método estático, se utiliza la plabra clave static en la declaración del método dentro de la clase.
var carInfo = /** @class */ (function () {
    function carInfo() {
    }
    carInfo.obtenerInfo = function (car) {
        var info = "Marca: ".concat(car.marca, " Modelo: ").concat(car.modelo, " A\u00F1o: ").concat(car.año);
        return info;
    };
    return carInfo;
}());
var resultado = carInfo.obtenerInfo(myCar);
console.log(resultado);
