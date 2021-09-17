//Consignas
//1.Obtener el nombre de tu pokemon favorito utilizando async/await o promesas
//2.Obtener el nombre de 15 pokemones
//3.Obtener el nombre de 15 pokemones. De estos 15, mostrar por consola los que tengan peso mayor a 150
//El ejercicio 3 se desestimo por que no se podian encontrar los valores facilmente

const api = 'https://pokeapi.co/api/v2/pokemon/'

async function getPokemon(pokemonFav = "vulpix-alola") {
    let response = await fetch(`${api}${pokemonFav}`)
    let data = await response.json()
    console.log(data.name)
}
getPokemon()

async function bring15(numberPoke = "?limit=15") {
    let response = await fetch(`${api}${numberPoke}`)
    let data = await response.json()
    let names = data.results.map(pokeName => pokeName.name)
    console.log(names)
}
bring15()

async function heavyPokemons(numberPoke = "?limit=15") {
    let response = await fetch(`${api}${numberPoke}`)
    let data = await response.json()
    let weightpokemons = data.results.filter(weightpoke => ((weightpoke.weight) >= 150))
    console.log(weightpokemons)
}
heavyPokemons()