// const arr = ['1', '2', '3']

// splice, pop, shift, unshift, push
// slice, map, filter, reduce

// add remove contains toggle

const buttons = document.querySelectorAll('button')

console.log(buttons)
console.log([])


// buttons.forEach((item) => {
//     item.addEventListener("click", (event) => {
//         // console.log(event.target)
//         // event.target.classList.toggle("red")
//         if(event.target.classList.contains("red")){
//             event.target.classList.remove("red")
//         }else{
//             event.target.classlist.add("red")
//             setTimeout(() => {
//                 event.target.classList.remove("red")
//             }, 1000)
//         }
        
//     })
// })

// const newBtn = document.createElement("button")
// newBtn.textContent = 8

// const wrapper = document.querySelector(".wrapper")
// wrapper.append(newBtn)

const wrapper = document.querySelector(".wrapper")

wrapper.addEventListener("click", (e) => {
    if(e.target.tagName === "BUTTON"){
        e.target.classList.toggle("red")
    }
})


const newBtn = document.createElement("button")
newBtn.textContent = 8
wrapper. append(newBtn)