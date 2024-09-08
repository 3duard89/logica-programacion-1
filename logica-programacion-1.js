/* Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
Debe imprimir los números por consola ordenados de mayor a menor, y de menor a mayor.
Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola.
 */

//me permite pedir por consola
const prompt = require("prompt-sync")({"sigint" : true});

//genero un limite de numeros para el ejemplo son 3
const limite = 3;
//genero mi array para almacenar los numeros ingresados por el usuario
let miArrayNumeros = []

//le pido al usuario que ingres un numero 3 veces
for(i=0 ; i<limite; i++){
    miArrayNumeros.push(parseInt(prompt("Ingrese Un Numero: ")));
}

//para dterminar cual es el del centro generamos una variable
//este numero seria el que se encuentre en la mitad del array
const numeroMedio = parseInt(miArrayNumeros.length / 2);

//para buscar el numero mayor y numero menor podemos hacer uso de la libreria MATH
//para tomar el array como una entrada se utiliza ... expansion de esta manera
//la funcion toma el array como argumentos individuales.
const mayor = Math.max(...miArrayNumeros);
const menor = Math.min(...miArrayNumeros);

//para ordenar los numeros podemos hacer uso de sort de Mayor a Menor
console.log(miArrayNumeros.sort((a, b) => b - a));

//para ordenar los numeros podemos hacer uso de sort de Menor a Mayor
console.log(miArrayNumeros.sort((a, b) => a - b));

//definir si los numeros son iguales en este caso los tres numeros.
let verificar = true;
miArrayNumeros.forEach(element => { 
    if(element != miArrayNumeros[0]){
        verificar = false;
    }
});
if(verificar){
    console.log("todos los numeros son iguales :",miArrayNumeros);
};



