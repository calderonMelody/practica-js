// ------ Ejercicio 1 - 2 - 3
function Computadora (ram, cpu, disco, monitor, gpu, getDetalles){
    this.ram = ram;
    this.cpu = cpu;
    this.disco = disco;
    this.monitor = monitor;
    this.gpu = gpu;

    // var getDetalles = () => {
    //     return (`Componentes:
    // RAM:${this.ram}
    // CPU:${this.cpu}
    // DISCO:${this.disco}
    // MONITOR:${this.monitor}
    // GPU:${this.gpu}
    // `)};
    // this.getDetalles = getDetalles()
}

computadorasCreadas = [];
let computadora1 = computadorasCreadas.push(new Computadora("16GB","Ryzen5 3600", "ssd 500gb", "17p",true))
let computadora2 = computadorasCreadas.push(new Computadora("32GB","Ryzen5 3600", "ssd 1t", "24p",true))
let computadora3 = computadorasCreadas.push(new Computadora("16GB","Ryzen5 3600", "ssd 1t", "22p",false))
let computadora4 = computadorasCreadas.push(new Computadora("64GB","Ryzen5 3600", "ssd 500gb", "24p",true))
let computadora5 = computadorasCreadas.push(new Computadora("32GB","Ryzen5 1200", "ssd 500gb", "32p",false))
let computadora6 = computadorasCreadas.push(new Computadora("16GB","Ryzen5 3600", "ssd 1t", "24p",true))

let compusConGpu = computadorasCreadas.filter(computadora => (computadora.gpu== true))
// const compu = [computadora1
//     // , computadora2, computadora3, computadora4, computadora5
// ]

// console.log(`Las computadoras disponibles son: ${JSON.stringify(computadorasCreadas)}`)
console.log('--- Las computadoras disponibles son: ', computadorasCreadas)
console.log('--- Las computadoras con GPU son: ', compusConGpu)


// ------ Ejercicio 4
let calcularNafta = ((kilometros, precioNafta)=>{
    let gastaPorKilometro = (kilometros/100)*2
    let precioDeLaNafta = gastaPorKilometro*precioNafta
    console.log(`Gasta por kilometro ${gastaPorKilometro} litros de nafta. Deberias cargar $ ${precioDeLaNafta} de nafta`)
}) 
calcularNafta(100,10)


// ------ Ejercicio 5 - 7
let numerosArray = []
for (let i = 0; i < 10; i++) {
    numerosArray.push( i + 1)
}
console.log(`Array principal de numeros del 1 al 10: ${numerosArray}`)

let numerosMultiplicados = numerosArray.map(numero => {
    return (numero * 2)
});
console.log(`Numeros multiplicados por 2: ${numerosMultiplicados}`)

let numeroMayoresCinco = numerosMultiplicados.filter(numero => {
    return (numero > 5)
})
console.log(`Numeros mayores a 5: ${numeroMayoresCinco}`)

let primerNumeroMayorADiez = numeroMayoresCinco.find(numero => numero > 10)
console.log(`El primer numero primer numero mayor a 10 es: ${primerNumeroMayorADiez}`)


// ------ Ejercicio 8

let pokemons = [ 
    { nombre: 'pikachu', poder: 12 },
     { nombre: 'bulbasaur', poder: 6 },
     { nombre: 'charizard', poder: 19 },
     { nombre: 'squirtle', poder: 3 },
     { nombre: 'mewtwo', poder: 6 }, 
    ]
let pokemonsDebiles = pokemons.filter(pokemon => {
    return (pokemon.poder <= 10)
})
console.log('Los pokemons con poder menos a 10 son: ', pokemonsDebiles)