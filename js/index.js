

// Ingreso de datos de cantidad de votos por partido

let partido = ""
let votosxpartido = ""

function candidato (partido , votosxpartido) {
    partido = prompt('Ingrese el nombre de un partido: ')
    votosxpartido = prompt('Ingrese el número de votos obtenidos: ')
    console.log("El partido " + partido + " obtuvo " + votosxpartido + " votos ") 
}

candidato (partido, votosxpartido)
candidato (partido, votosxpartido)
candidato (partido, votosxpartido)
candidato (partido, votosxpartido)
candidato (partido, votosxpartido)


// Acá voy a exluir a los partidos que no hayan obtenido el 3% de los votos del total del padrón electoral
let padron = Number(prompt('Número de votantes según padrón electoral'))

let porcentaje = Number((3*padron) / 100)
console.log('El 3% del total es ' + porcentaje)


function finalistas (votosxpartido, porcentaje) {
    if (votosxpartido <= porcentaje) {
        console.log('Va a tener posibilidades de obtener una banca')
} else {
    console.log('Queda excluido')
}
}

finalistas (votosxpartido, porcentaje)
finalistas (votosxpartido, porcentaje)
finalistas (votosxpartido, porcentaje)
finalistas (votosxpartido, porcentaje)
finalistas (votosxpartido, porcentaje)

// Acá voy a obtener los dividendos

let cargosvacantes = prompt('Número de bancas disponibles: ')

for (let i = 1 ; i <= cargosvacantes ; i++) {
       console.log('Resultado: ' + (votosxpartido / i ))
} 

// Asignación de cargos a los dividendos más altos





/*
let padron = ""

function finalistas (votosxpartido, padron) {
    padron = prompt('Número de votantes inscriptos en el padrón electoral: ')
    return candidato
    let porcentaje = (3*padron) / 100
}
/*




if (porcentaje >= ((3*padron)/100)){
    console.log('Va a tener posibilidad de obtener una banca')
} else {
    console.log('Está descartado')
}
/*


// Acá se establecen los dividendos 

 let votos = Number(prompt('Votos válidamente emitidos: '))
 let cargosvacantes = Number(prompt('Número de bancas disponibles: '))


 for (let i = 1 ; i <= cargosvacantes ; i++) {
        console.log('Resultado: ' + (votos / i ))
 } 
 */