const dataWrapper = document.querySelector('.dataWrapper')

let page = 'https://pokeapi.co/api/v2/pokemon/'

const next = async (url, proverka) => {
    // console.log(url)
    const proverka = async () => {
        const response = await fetch(page)
        const data = await response.json()
        page = data.next
    }
    proverka()
    const pokemonContent = document.querySelectorAll('p')
    pokemonContent.forEach((item) => {
        item.remove()
    })

    data.results.forEach((item) => {
        const pokemon = document.createElement('p')
        pokemon.textContent = item.name
        dataWrapper.append(pokemon)
    })
}
const previous = async (url) => {
    // console.log(url)
    const proverka = async () => {
        const response = await fetch(page)
        const data = await response.json()
        page = data.previous
    }
    proverka()
    page = data.prevoius
    const pokemonContent = document.querySelectorAll('p')
    pokemonContent.forEach((item) => {
        item.remove()
    })

    data.results.forEach((item) => {
        const pokemon = document.createElement('p')
        pokemon.textContent = item.name
        dataWrapper.append(pokemon)
    })
}

next()























































































