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
    }, 1000)
    
}
funk1()
if(i===3){
    i=0
    funk1()
}else{
    i=0
}





// слайдер все

const modal = document.querySelector('.modal')
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