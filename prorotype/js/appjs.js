const tabsContent = document.querySelectorAll('.tabcontent')
const tabs = document.querySelectorAll(".tabheader__item")
const tabsWrapper = document.querySelector(".tabheader__items")

const hideTabContent = () => {
    tabsContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tabheader__item_active')
    })
}
// hideTabContent()

const showTabContent = (i=0) => {
    tabsContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}

let i = 0
hideTabContent()
// showTabContent()

tabsWrapper.addEventListener("click", (e) => {
    const target = e.target
    if(target.classList.contains("tabheader__item")){
        tabs.forEach((item, idx) => {
            if(target === item){
                console.log(target, idx)
                hideTabContent()
                showTabContent(idx)
            }
        })
    }
})

    
function funk1(){
    setInterval(() => {
        hideTabContent()
        showTabContent(i)
        i++   
        if(i===4)(
            i=0
        )
    }, 2000) 
}


setTimeout(funk1(), 0)
if(i===3){
    i=0
    funk1()
}else{
    i=0
}


// слайдер все

const modal = document.querySelector('.modal')
const modall = document.querySelector('.modall')
const modalOpenBtn = document.querySelector(".btn_white")
const modalCloseBtn = document.querySelector(".modal__close")

const handleOpenModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
}
const handleCloseModal = () => {
    modal.classList.remove('show')
    modal.classList.add('hide')
}

modalOpenBtn.addEventListener("click", handleOpenModal)
modalCloseBtn.addEventListener("click", handleCloseModal)

console.log(modalCloseBtn)
console.log(modalOpenBtn)

function disableScroll(){
    document.body.classList.add("remove-scrolling");
}
function enableScroll(){
    document.body.classList.remove("remove-scrolling");
}



const btnOff = document.querySelector('.btn_white')

const btnOn = document.querySelector('.modal__close')

const body = document.body

function disableScroll(){
    body.classList.add('disable-scroll')
}
function enableScroll(){
    body.classList.remove('disable-scroll')
}

btnOff.addEventListener('click', (e) => {
    disableScroll()
})

btnOn.addEventListener('click', (e) => {
    enableScroll()
})

const addImg = (i) => {
    modal.classList.toggle("hide")
}

// const img111 = document.querySelector(".img111")
// const img112 = document.querySelector(".img112")
// const img113 = document.querySelector(".img113")
// const img114 = document.querySelector(".img114")

const hideee = () => {
    modall.classList.remove('show')
    modall.classList.add('hide')

    enableScroll()
}
// const hideee2 = () => {
//     modall.classList.remove('show')
//     modall.classList.add('hide')
//     img112.classList.remove('show')
//     img112.classList.add('hide')
//     enableScroll()
// }
// const hideee3 = () => {
//     modall.classList.remove('show')
//     modall.classList.add('hide')
//     img113.classList.remove('show')
//     img113.classList.add('hide')
//     enableScroll()
// }
// const hideee4 = () => {
//     modall.classList.remove('show')
//     modall.classList.add('hide')
//     img114.classList.remove('show')
//     img114.classList.add('hide')
//     enableScroll()
// }

// const img1 = () => {
//     img111.classList.remove('hide')
//     modall.classList.add('show')
//     img111.classList.add('show')
//     img111.classList.add('showww')

//     disableScroll()

// }
// const img2 = () => {
//     img112.classList.remove('hide')
//     modall.classList.add('show')
//     img112.classList.add('show')
//     img112.classList.add('showww')
//     disableScroll()
// }
// const img3 = () => {
//     img113.classList.remove('hide')
//     modall.classList.add('show')
//     img113.classList.add('show')
//     img113.classList.add('showww')
//     disableScroll()
    
// }
// const img4 = () => {
//     img114.classList.remove('hide')
//     modall.classList.add('show')
//     img114.classList.add('show')
//     img114.classList.add('showww')
//     disableScroll()
    
// }




// timer

const deadline = "2024-5-1"

console.log(deadline)
console.log(new Date)
console.log(new Date(deadline))
console.log(new Date(deadline) - new Date)


const getTime = (deadline) => {
    const time = new Date(deadline) - new Date
    const days = Math.floor(time / (1000 * 60 * 60 * 24))
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((time / (1000 * 60)) % 60)
    const seconds = Math.floor((time / 1000) % 60)
    return{
        total: time,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    }

}

// class Dog{
//     constructor(size, color){
//         this.size = size
//         this.color = color
//     }
//     bark(){
//         console.log(`bark bark bark!!! I'm dog ${this.size} meters and with ${this.color} color`)
//     }

// }

// console.log(new Dog(10, 'white').bark())

class Menu {
    constructor(img, alt, title, description, price){
        this.img = img
        this.alt = alt
        this.title = title
        this.description = description
        this.price = price
    }
    render(){
        const wrapper = document.querySelector("#cardWrapper")
        const block = document.createElement("div")

        block.innerHTML = `
        <div class="menu__item">
				<img src="${this.img}" alt="${this.alt}">
				<h3 class="menu__item-subtitle">${this.title}</h3>
				<div class="menu__item-descr">${this.description}</div>
				<div class="menu__item-divider"></div>
				<div class="menu__item-price">
					<div class="menu__item-cost">Цена:</div>
					<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
				</div>
			</div>
        `

        wrapper.append(block)
    }
}

console.log(getTime(deadline))

const setTime = (deadline) => {
    const days = document.querySelector("#days")
    const hours = document.querySelector("#hours")
    const minutes = document.querySelector("#minutes")
    const seconds = document.querySelector("#seconds")

    const makeZero = (num) => {
        if(num > 0 && num < 10){
            return `0${num}`
        }else{
            return num
        }
    }
    


    const updateClock = () => {
        const t = getTime(deadline)
        days.innerHTML=makeZero(t.days)
        hours.innerHTML=makeZero(t.hours)
        minutes.innerHTML=makeZero(t.minutes)
        seconds.innerHTML=makeZero(t.seconds)

        console.log()
    }
    const intervalll = setInterval(updateClock, 1000)
    const stopInter = () => {
        clearInterval(intervalll)
        
        
    }
    
        if(new Date(deadline) <= new Date){
            stopInter()
        }else{
            
        }
}
setTime(deadline)



