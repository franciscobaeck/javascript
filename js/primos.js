//Algoritmo para determinar números primos

let num = prompt("ingese un número");
let isNotNumber = isNaN(num);
let noSigue = (
    isNotNumber == true ||
    num == null ||
    num == ""
    );

console.log("iteración 0: "+ noSigue + num)

let n = 1

while(noSigue == true)

{alert ("No ha ingresado un número");
num = prompt("ingese un número")
isNotNumber = isNaN(num);
    noSigue = (
    isNotNumber == true ||
    num == null ||
    num == ""
    );
    console.log("iteración " + n + noSigue + num);
    n = n+1
};