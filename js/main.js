
const notas = []
const alumno = {
    nombre: [],
    apellido:[],
    notaA:[],
    notaB:[],
    notaC:[],
}

let promedio
let ultimoValor 

let btnLimpiar = document.getElementById("btnLimpiar")
btnLimpiar.addEventListener("click",limpiar)

let btnBuscarAlumno= document.getElementById("btnBuscarAlumno")
btnBuscarAlumno.addEventListener("click",buscarAlumnos)

let optionsNombre = document.getElementById("optionsNombre")
optionsNombre.addEventListener("click",insertarNombre)

let form =  document.getElementById("miFormulario")
form.addEventListener("submit",function(event){
    event.preventDefault()
    if (form == null){
        alert("Formulario no enviado")
    }else{
        
        verificacionNotas()
        
    }

})

function guardarNotas (){

  
   


    alumno.nombre.push(document.getElementById("inputNombre").value)
    alumno.apellido.push( document.getElementById("inputApellido").value)

    alumno.notaA.push(parseFloat(document.getElementById("notaA").value))
    alumno.notaB.push(parseFloat(document.getElementById("notaB").value))
    alumno.notaC.push(parseFloat(document.getElementById("notaC").value))

    ultimoValor = alumno.nombre.length-1
    promedio = promedioNotas()
                    
    tabla.innerHTML += `
                        <tr>
                        <td> ${alumno.nombre[ultimoValor] + " " + alumno.apellido[ultimoValor] } </td>
                        <td> ${alumno.notaA[ultimoValor]} </td>
                        <td> ${alumno.notaB[ultimoValor]} </td>
                        <td> ${alumno.notaC[ultimoValor]} </td>
                        <td> ${promedio}</td>
                        </tr>`;
                    
    localStorage.setItem("nombre",document.getElementById("inputNombre").value)
    localStorage.setItem("apellido",document.getElementById("inputApellido").value)
    localStorage.setItem("Promedio",promedio)
    

    miFormulario.reset()

}

//------------------------------------------------------------------------------------

function vaciarNotas(){

    alumno.nombre.splice(0,alumno.nombre.length)
    alumno.apellido.splice(0,alumno.apellido.length)
    alumno.notaA.splice(0,alumno.notaA.length)
    alumno.notaB.splice(0,alumno.notaB.length)
    alumno.notaC.splice(0,alumno.notaC.length)
}

function promedioNotas (){

   /* const total = notas.reduce((acumulador, elemento) => acumulador + elemento)  
    promedio = total / notas.length
*/
    ultimoValor = alumno.nombre.length-1
    const promedio = (alumno.notaA[ultimoValor]+alumno.notaB[ultimoValor]+alumno.notaC[ultimoValor]) /3

    return promedio
}

// ------------------------------------------------------------------------------------

function verificacionNotas(){

    let notaA =  parseFloat(document.getElementById("notaA").value)
    let notaB =  parseFloat(document.getElementById("notaB").value)
    let notaC =  parseFloat(document.getElementById("notaC").value)

   
    if (notaA <0 || notaA >10 ||  isNaN(notaA)){
        Toastify({

            text: "Nota A no valida - Solo valores entre 1 a 10 ",
            className: "info",
            duration: 3000
            
            }).showToast();
    }else if (notaB <0 || notaB >10 ||  isNaN(notaB)){
        Toastify({

            text: "Nota B no valida - Solo valores entre 1 a 10 ",
            className: "info",
            duration: 3000
            
            }).showToast();
    }else if (notaC <0 || notaC >10 ||  isNaN(notaC)) {
        Toastify({

            text: "Nota C no valida - Solo valores entre 1 a 10 ",
            className: "info",
            duration: 3000
            
            }).showToast();
    }else{
        
        guardarNotas()

    }
}

function limpiar(){

    vaciarNotas()

    tabla.innerHTML = `<tr>
                    <th>Alumnos</th>
                    <th>Nota A</th>
                    <th>Nota B</th>
                    <th>Nota C</th>
                    <th>Promedio</th>
                    </tr>`;

}

function insertarNombre(){

    let inputNombre = document.getElementById("inputNombre")
    inputNombre.value = optionsNombre.value
    
}


function buscarAlumnos(){
    let nombreContenedor = document.getElementById("optionsNombre");

fetch('https://api.escuelajs.co/api/v1/users')
    .then( (resp) => resp.json() )
    .then( (data) => {
       
        data.forEach((post) => {
            const option = document.createElement('option')
            option.innerHTML = `
                <option value="${post.name}">${post.name} </option>
               
            `
            nombreContenedor.append(option)
        })
    })

}

 
