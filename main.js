

let salida
let estadoWhile = true ;
let promedio

const notas = []

const alumno = {
    nombre: "",
    apellido: ""
}
/*
function promedio(notaA, notaB, notaC) {

    return ((notaA + notaB +notaC ) / 3 );

}
*/
function nota(notaIngresada) {

    let repetir = true
    let nota = parseFloat(notaIngresada) ;

    do{
         
        if ( nota>=0  && nota<=10 ) {

           repetir = false ;

        }else{

            nota = parseFloat(prompt ( "Error: ingresa la nota entre valores 1 al 10" )) ;
 
        }

        }while(repetir)

        return nota ;

}


while(estadoWhile){

   alumno.nombre = prompt ("Ingresa el nombre del alumno");
   alumno.apellido = prompt (`Ingresa el apellido del ${alumno.nombre}`);

if (alumno.nombre != "" && alumno.nombre != Number) {

    notas.push( nota(parseFloat(prompt ( `ingresa la nota del 1 ªTrimestre de ${alumno.nombre} `))) ) ;

    notas.push( nota(parseFloat(prompt (`ingresa la nota del 2 ªTrimestre de ${alumno.nombre} ` ))) ) ;

    notas.push( nota(parseFloat(prompt ( `ingresa la nota del 3 ªTrimestre de ${alumno.nombre} `))) );

    const total = notas.reduce((acumulador, elemento) => acumulador + elemento)
    promedio = total / notas.length

    alert("El promedio de las notas de "+ alumno.nombre +" es: " + promedio);

    salida = prompt("Si deseas salir escribe SI , encaso contrario solo presione ACEPTAR  ").toUpperCase();

    if (salida === "SI"){

        estadoWhile = false ;

    }

}else{

    alert("Error: Ingresar nombre y apellido") ;
}

}
