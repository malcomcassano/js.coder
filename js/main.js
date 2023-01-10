const nombre = prompt("Ingrese su nombre");
console.log ("Su nombre es " + nombre)

const edad = parseInt(prompt("Ingrese su edad"));

// if (edad >= 18) {
//     console.log ("Puede continuar con la reserva")
// } 
// if (edad < 18); {
//     alert ("Usted es menor de edad, por lo tanto no puede continuar con la reserva")
// }

while (edad <= 18) {
    alert ("¡Si sos menor de edad, no podrás continuar con la reserva!")
    console.log ("Acceso denegado: menor de edad")
}
alert ("¡Ok, puedes seguir con la reserva!")
console.log ("La edad es " + edad)


let cantidadDeDiasAReservar = parseInt (prompt("Indique la cantidad de dias que desea reservar"));

// if (cantidadDeDiasAReservar <= 2) {
//     alert ("Usted solo puede reservar a partir de dos noches")
//     console.log ("Cantidad de noches menor a 2")
// } else if (cantidadDeDiasAReservar >=3) {
//     alert (`Usted desea reservar ${cantidadDeDiasAReservar}`)
//     console.log (`Cantidad de noches:${cantidadDeDiasAReservar}`)
// }

while (cantidadDeDiasAReservar <3) {
    alert ("Usted no puede reservar menos de 2")
    console.log (`Cantidad de noches:${cantidadDeDiasAReservar}`)
cantidadDeDiasAReservar = parseInt(prompt("Indique la cantidad de dias que desea reservar. Recuerde que deben ser más de 3, es decir, 2 noches"))
}
alert ("Usted desea reservar " + cantidadDeDiasAReservar + " dias")
console.log ("Dias a reservar " + cantidadDeDiasAReservar)


const precioReservaHabitacion1 = parseInt(2500)
const precioReservaHabitacion2 = parseInt(3500)
const precioReservaHabitacion3 = parseInt(3900)

let cantidadDePersonas = parseInt(prompt("Ingrese la cantidad de personas"))

if (cantidadDePersonas <= 4) {
    alert ("De acuerdo a la cantidad de días que usted ingreso, el precio final será de " + precioReservaHabitacion1 * cantidadDeDiasAReservar);
    console.log (precioReservaHabitacion1 * cantidadDeDiasAReservar)
    
}
else if (cantidadDePersonas >=5 <=9) {
    alert ("De acuerdo a la cantidad de días que usted ingreso, el precio final será de " + precioReservaHabitacion2 * cantidadDeDiasAReservar);
    console.log (precioReservaHabitacion2 * cantidadDeDiasAReservar)
}
else if (cantidadDePersonas >9 ) {
    alert ("De acuerdo a la cantidad de días que usted ingreso, el precio final será de " + precioReservaHabitacion3 * cantidadDeDiasAReservar);
    console.log (precioReservaHabitacion3 * cantidadDeDiasAReservar)
}

