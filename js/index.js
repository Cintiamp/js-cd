

// Ingreso de datos de cantidad de votos por partido

let partido = ""
let votosxpartido = ""

function candidato(partido, votosxpartido) {
    partido = prompt('Ingrese el nombre de un partido: ')
    votosxpartido = Number(prompt('Ingrese el número de votos obtenidos: '))
    console.log("El partido " + partido + " obtuvo " + votosxpartido + " votos ")
    return candidato
}

candidato()
candidato()
candidato()
candidato()
candidato()


// Acá voy a excluir a los partidos que no hayan obtenido el 3% de los votos del total del padrón electoral
let padron = Number(prompt('Número de votantes según padrón electoral'))

let porcentaje = Number((3 * padron) / 100)
console.log('El 3% del total es ' + porcentaje)

let finalistas = function (votosxpartido, porcentaje) {
    if (votosxpartido >= porcentaje) {
        console.log(" y tiene posibilidad de obtener una Banca en el Congreso")
    } else {
        console.log(" queda eliminado del conteo")
    }
}

finalistas()
finalistas()
finalistas()
finalistas()
finalistas()
finalistas()


/*
// Acá se establecen los dividendos 

 let votos = Number(prompt('Votos válidamente emitidos: '))
 let cargosvacantes = Number(prompt('Número de bancas disponibles: '))


 for (let i = 1 ; i <= cargosvacantes ; i++) {
        console.log('Resultado: ' + (votos / i ))
 } 
 

// Asignación de cargos a los dividendos más altos

if (finalistas >= cargosvacantes) {
    console.log ("El partido va a obtener una Banca en el Congreso")
}
*/
