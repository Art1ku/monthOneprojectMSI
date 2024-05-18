const dataWrapper = document.querySelector('.dataWrapper')
const BtnNext = document.querySelector('.BtnNext')
const BtnPrev = document.querySelector('.BtnPrev')
console.log(BtnNext)
let nextPage = 'https://pokeapi.co/api/v2/pokemon/'
let prevPage = null

const handleGetPokemons = async (url) => {
    // console.log(url)
    if(prevPage === null){
        BtnPrev.style.dislpay = 'none'
    }else{
        BtnNext.style.dislpay = 'inline'
    }
    const response = await fetch(url)
    const data = await response.json()
    nextPage = data.next
    prevPage = data.previous
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
handleGetPokemons(nextPage)

BtnNext.addEventListener('click',() => {
    handleGetPokemons(nextPage)
}) 
BtnPrev.addEventListener('click',() => {
    handleGetPokemons(prevPage)
})
