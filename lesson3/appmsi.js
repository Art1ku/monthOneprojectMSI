var mobileMenu = document.querySelector(".mobileMenu")
var mobileMenuOpened = document.querySelector(".mobileMenuOpened")

console.log(mobileMenuOpened)
mobileMenu.addEventListener("click", function () {
    console.log("clicked")
    var menu = document.createElement("div")
    menu.innerText = "HELLOOOOOOOOOOOOOOOOOOOOOOO"
    mobileMenuOpened.append(menu)
    mobileMenuOpened.classList.add('visible')
})















