//Desafio complementario 1
//Solicitar al usuario que ingrese su nombre y el numero de veces que desea ser saludado

let nombre = prompt ('Por favor ingrese su nombre');

let saludos = Number (prompt('Ingrese la cantidad de veces que desee ser saludado'));

console.log(nombre)

if(isNaN(saludos)) {
    alert('Error: ingrese un numero');
}

for (i = 0; i < saludos; i++){
    alert(`Bienvenido ${nombre}`);
}

