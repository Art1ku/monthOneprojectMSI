// const obj = {
//     name: "jhon",
//     age: 22
// }

// const obj2 = JSON.stringify(obj)

// const obj3 = JSON.parse(obj2)

// console.log(obj, 'original obj')
// console.log(obj2, 'stringifyed')
// console.log(obj3, 'parsed')



// const arr = [1,2,3,4,5]

// const arr2 = JSON.parse(JSON.stringify(arr)) // deep copy

// arr2.push(6)

// console.log(arr)
// console.log(arr2)


const contentWrapper = document.querySelector(".contentWrapper")
let nextPage = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10'

const handleRequest = () => {
    const request = new XMLHttpRequest() // создание запроса
    request.open("GET", nextPage) //объявление метода и пути запроса
    request.setRequestHeader("Content-Type", "applocation/json") // добавление запроса
    request.send() // отправка запроса

    request.addEventListener("load", () => { // ожидание ответа
        const response = JSON.parse(request.response)
        console.log(response)

        nextPage = response.next
        // console.log(contentWrapper)

        const contentWrapperData = document.querySelectorAll('.item')
        contentWrapperData.forEach((item) => {
            item.remove()
        })

        response.results.forEach((item) => {
            const pokemon = document.createElement('p')
            pokemon.classList.add('item')
            pokemon.textContent = item.name
            contentWrapper.append(pokemon)
        })

    })
}
handleRequest()

const handleRequest2 = () => {
    const request = new XMLHttpRequest() // создание запроса
    request.open("GET", previousPage) //объявление метода и пути запроса
    request.setRequestHeader("Content-Type", "applocation/json") // добавление запроса
    request.send() // отправка запроса

    request.addEventListener("load", () => { // ожидание ответа
        const response = JSON.parse(request.response)
        console.log(response)

        nextPage = response.next
        // console.log(contentWrapper)

        const contentWrapperData = document.querySelectorAll('.item')
        contentWrapperData.forEach((item) => {
            item.remove()
        })

        response.results.forEach((item) => {
            const pokemon = document.createElement('p')
            pokemon.classList.add('item')
            pokemon.textContent = item.name
            contentWrapper.append(pokemon)
        })

    })
}
handleRequest2()