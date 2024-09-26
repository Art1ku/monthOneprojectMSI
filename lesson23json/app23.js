const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const jpy = document.querySelector('#jpy')

const convert = (element, target, target2) => {
    const elName = element.attributes.id.nodeValue
    element.addEventListener("input", (e) => {
        const request = new XMLHttpRequest()
        request.open("GET", "data23.json")
        request.setRequestHeader("Content-Type", "applocation/json")
        request.send()

        request.addEventListener("load", () => {
            const response = JSON.parse(request.response)
            
            // if (isSom) {
            //     target.value = (e.target.value / response.usd).toFixed(2);
            //     target2.value = (e.target.value / response.jpy).toFixed(2);
            // } else if (isUsd) {
            //     target.value = (e.target.value / response.som).toFixed(2);
            //     target2.value = (e.target.value / response.jpy).toFixed(2);
            // } else if (isJpy) {
            //     target.value = (e.target.value / response.som).toFixed(2);
            //     target2.value = (e.target.value / response.usd).toFixed(2);
            // // }

            // if (e.target.value === "") {
            //     target.value = "";
            //     target2.value = "";
            // }
            // if(isSom){
            //     target.value = (e.target.value / response.usd).toFixed(2)
            //     target2.value = (e.target.value / response.jpy).toFixed(2)
            // }else{
            //     target.value = (e.target.value * response.usd).toFixed(2)
            //     target2.value = (e.target.value * response.jpy).toFixed(2)
            // }
            if(elName === 'som'){
                target.value = (e.target.value / response.usd).toFixed(2)
                target2.value = (e.target.value / response.jpy).toFixed(2)
            } else if(elName === 'usd'){
                target.value = (e.target.value * response.som).toFixed(2)
                target2.value = (e.target.value / response.jpy).toFixed(2)
            } else if(elName === 'jpy'){
                target.value = (e.target.value * response.som).toFixed(2)
                target2.value = (e.target.value / response.jpy).toFixed(2)
            } 
            e.target.value === "" && (target.value = "")
        })
    })
}

convert(som, usd, jpy)
convert(usd, som, jpy)
convert(jpy, som, usd)






























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








