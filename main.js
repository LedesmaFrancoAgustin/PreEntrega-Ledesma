let nombreAlumno

let notaA
let notaB
let notaC

let salida
let estadoWhile = true ;


function promedio(notaA, notaB, notaC) {

    return ((notaA + notaB +notaC ) / 3 );

}

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

   nombreAlumno = prompt ("Ingresa el nombre del alumno");

if (nombreAlumno != "" && nombreAlumno != Number) {

    notaA = nota(parseFloat(prompt ( "ingresa la nota del 1 ªTrimestre de "+ nombreAlumno))) ;

    notaB = nota(parseFloat(prompt ( "ingresa la nota del 2 ªTrimestre de "+ nombreAlumno))) ;

    notaC = nota(parseFloat(prompt ( "ingresa la nota del 3 ªTrimestre de "+ nombreAlumno))) ;

    alert("El promedio de las notas de "+ nombreAlumno +" es: " + promedio(notaA,notaB,notaC));

    salida = prompt("Si deseas salir escribe SI , encaso contrario solo presione ACEPTAR  ").toUpperCase();

    if (salida === "SI"){

        estadoWhile = false ;

    }

}else{

    alert("Error: Ingresar nombre y apellido") ;
}

}
