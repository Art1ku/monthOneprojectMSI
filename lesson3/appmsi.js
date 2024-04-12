let mobileMenu = document.querySelector(".mobileMenu")
let mobileMenuOpened = document.querySelector(".mobileMenuOpened")
let mobileMenuClose = document.querySelector(".mobileMenuClose")

mobileMenu.addEventListener("click", function () {
    mobileMenuOpened.classList.add("visible")
    document.body.classList.add("overflowHidden")
})
mobileMenuClose.addEventListener("click", function(){
    mobileMenuOpened.classList.remove("visible")
    document.body.classList.remove("overflowHidden")
   
})
if(window.innerWidth < 1050) {
    var body = (document.getElementByTagName("mobileMenuOpened"))[0];
    body.className = "mobileMenuOpened";
}

servicesData.forEach(service => {
    const seritem = document.createElement('div')
    seritem.classList.add('serItem')

    const img = document.createElement('img')
    img.src = 
})















