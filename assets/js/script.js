const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const limit = 5;
let offset = 0;

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
        
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" 
                    alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit);
})

// O fetch retorna uma promisse. Conceito de assincronimos.

        
    // pokemonsLists.innerHTML += pokemons.map(convertPokemonToLi).join('') // -> Todo código resumindo em uma linha.
    
    // const newList = pokemons.map((pokemon) => return convertPokemonToLi(pokemon))

    // const newHtml = newList.join(''); // Fazendo a junção com o Join sem separadores. Default = ','

    // pokemonsLists.innerHTML += newHtml

    //pokemon
    // const listItems = []
    
    // for(let i = 0; i < pokemons.length; i++){
    //     const pokemon = pokemons[i]
    //     listItems.push(convertPokemonToLi(pokemon))
    // }
    // pokemonsLists.innerHTML += convertPokemonToLi(pokemon))