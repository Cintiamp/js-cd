

// Ingreso de datos de cantidad de votos por partido

class Candidato{

    constructor(nombre, votos){
        this.nombre = nombre
        this.votos = votos
    }
    candidatos() {
        console.log('El partido ' + this.nombre + ' obtuvo ' + this.votos + ' votos ')
    }

}



const candidato1 = new Candidato("FDT", "1200000")
const candidato2 = new Candidato("JXC", "1300000")
const candidato3 = new Candidato("FIT", "500000")
const candidato4 = new Candidato("LIB", "800000")
const candidato5 = new Candidato("MST", "200000")


candidato1.candidatos()
candidato2.candidatos()
candidato3.candidatos()
candidato4.candidatos()
candidato5.candidatos()


/*


function candidato (partido, votosxpartido){
    for (let i = 1; i <= 5; i++) {
        partido = prompt('Ingrese el nombre de un partido: ')
        votosxpartido = Number(prompt('Ingrese el número de votos obtenidos: '))
        console.log("El partido " + partido + " obtuvo " + votosxpartido + " votos ")
    }
        
}

candidato ()

*/


// Acá voy a excluir a los partidos que no hayan obtenido el 3% de los votos del total del padrón electoral
let padron = Number(prompt('Número de votantes según padrón electoral'))

let porcentaje = Number((3 * padron) / 100)
console.log('El 3% del total es ' + porcentaje)


let votos1 = candidato1.votos
    if (candidato1.votos >= porcentaje) {
        console.log(candidato1.nombre + " tiene posibilidad de obtener una Banca en el Congreso")
    } else {
        console.log(candidato1.nombre + " queda eliminado del conteo")
    }
let votos2 = candidato2.votos
    if (candidato2.votos >= porcentaje) {
        console.log(candidato2.nombre + " tiene posibilidad de obtener una Banca en el Congreso")
    } else {
        console.log(candidato2.nombre + " queda eliminado del conteo")
    }
let votos3 = candidato3.votos
    if (candidato1.votos >= porcentaje) {
        console.log(candidato3.nombre + " tiene posibilidad de obtener una Banca en el Congreso")
    } else {
        console.log(candidato3.nombre + " queda eliminado del conteo")
    }
let votos4 = candidato4.votos
    if (candidato4.votos >= porcentaje) {
        console.log(candidato4.nombre + " tiene posibilidad de obtener una Banca en el Congreso")
    } else {
        console.log(candidato4.nombre + "queda eliminado del conteo")
    }
let votos5 = candidato5.votos
    if (candidato5.votos >= porcentaje) {
        console.log(candidato5.nombre + " tiene posibilidad de obtener una Banca en el Congreso")
    } else {
        console.log(candidato5.nombre + " queda eliminado del conteo")
    }



// Acá se establecen los dividendos 

 let votos = Number(prompt('Votos válidamente emitidos: '))
 let cargosvacantes = Number(prompt('Número de bancas disponibles: '))


 for (let i = 1 ; i <= cargosvacantes ; i++) {
        console.log('Resultado: ' + (votos / i ))
 } 
 

// Asignación de cargos a los dividendos más altos
const ganadores = []
if (votos1 >= cargosvacantes) {
    ganadores.push(candidato1.nombre)
    console.log (candidato1.nombre + " va a obtener una Banca en el Congreso")
}
if (votos2 >= cargosvacantes) {
    ganadores.push(candidato2.nombre)
    console.log (candidato2.nombre + " va a obtener una Banca en el Congreso")
}
if (votos3 >= cargosvacantes) {
    ganadores.push(candidato3.nombre)
    console.log (candidato3.nombre + " va a obtener una Banca en el Congreso")
}
if (votos4 >= cargosvacantes) {
    ganadores.push(candidato4.nombre)
    console.log (candidato4.nombre + " va a obtener una Banca en el Congreso")
}
if (votos5 >= cargosvacantes) {
    ganadores.push(candidato5.nombre)
    console.log (candidato5.nombre + " va a obtener una Banca en el Congreso")
}
for (let index = 0; index < ganadores.length; index++){
    const element = ganadores[index]
    console.log(element)
}
