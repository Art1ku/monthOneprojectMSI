const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const jpy = document.querySelector('#jpy')


// som.addEventListener("input", (e) => {
//     const request = new XMLHttpRequest()
//     request.open("GET", "data23.json")
//     request.setRequestHeader("Content-Type", "applocation/json")
//     request.send()

//     request.addEventListener("load", () => {
//         const response = JSON.parse(request.response)
//         console.log(response.usd)

//         usd.value = (e.target.value / response.usd).toFixed(2)
//     })
// })


const convert = (element, target, target2, isSom, isUsd, isJpy) => {
    element.addEventListener("input", (e) => {
        const request = new XMLHttpRequest()
        request.open("GET", "data23.json")
        request.setRequestHeader("Content-Type", "applocation/json")
        request.send()

        request.addEventListener("load", () => {
            const response = JSON.parse(request.response)
            if(isSom){
                target.value = (e.target.value / response.usd).toFixed(2)
                target2.value = (e.target.value / response.jpy).toFixed(2)
            }else{
                target.value = (e.target.value * response.usd).toFixed(2)
                target2.value = (e.target.value * response.jpy).toFixed(2)
            }
            e.target.value === "" && (target.value = "")
            // e.target2.value === "" && (target2.value = "")
        })
    })
}

convert(som, usd, jpy, true)
convert(usd, som, jpy, false, true)
convert(jpy, som, usd, false, false, true)





































