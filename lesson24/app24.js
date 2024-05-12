// setTimeout(() => {
//     const product = {
//         name: 'Phone',
//         price: 4000
//     }
//     console.log(product, 'product 1')
//     setTimeout(() => {
//         product.color = 'white'
//         console.log(product)
//         setTimeout(() => {
//             product.ordered = true
//             console.log(product, 'product 3')
//         }, 2000)
//     }, 2000)
// }, 2000)


// const request = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const product = {
//             name: 'Phone',
//             price: 4000
//         }
//         console.log(product, '1')
//         // resolve(product)
//         reject()
//     }, 2000)
// }).catch(() => {
//     console.error("error")
// }).finally(() => {
//     console.warn("FINALLY")

// })

// .then((product) => {
//     setTimeout(() => {
//         product.color = 'red'
//         console.log(product, '2')
//     }, 2000)
// })









// fetch('data.json')
// .then((data) => (data.json()))
// .then((json) => (
//     console.log(json)
// )).catch((error) => (
//     console.error(error)
// )).finally(() => (
//     console.warn("finally")
// ))





// fetch('https://jsonplaceholder.typicode.com/todos/2')
// .then(response => response.json())
// .then(json => console.log(json))









const cityName = document.querySelector(".cityName")
const name = document.querySelector(".name")
const temp = document.querySelector(".temp")
const weather = document.querySelector(".weather")

const apiKey = 'e417df62e04d3b1b111abeab19cea714'

const getWeather = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}`)
    .then(data => data.json())
    .then((json) => {
        console.log(json)
        if(json.cod === "404"){
            name.textContent = json.message
        }else{
            name.textContent = json.name
            temp.innerHTML = Math.round(json.main.temp - 273) + "&deg" + "C"
            weather.textContent = json.weather[0].main
        }
    })
}