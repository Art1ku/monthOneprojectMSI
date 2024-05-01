const tabsContent = document.querySelectorAll('.tabcontent')
const tabs = document.querySelectorAll(".tabheader__item")

const hideTabContent = () => {
    tabsContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tabheader__item_active')
    })
}
hideTabContent()

const showTabContent = (i=0) => {
    tabsContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}

let i = 0

setInterval(() => {
    hideTabContent()
    showTabContent(i)
    i++
}, 2000)