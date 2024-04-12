// var navbarContent = ["О НАС", "КАТАЛОГ", "НАШИ РАБОТЫ", "КОНТАКТЫ"]

var navbarContent = [
    {
        title:"О НАС",
        link: "about/"
    },
    {
        title:"КАТАЛОГ",
        link: "catalog/"
    },
    {
        title:"НАШИ РАБОТЫ",
        link: "works/"
    },
    {
        title:"КОНТАКТЫ",
        link: "contacts/"
    },
]

var navbar = document.querySelector(".navbar")

navbarContent.forEach(function(item){
    var linkEL = document.createElement("a")
    linkEL.textContent = item.title
    linkEL.setAttribute("href", '/${item.link}')
    navbar.append(linkEL)
})

for(var i = 0; i < 100; i++){
    console.log(i)
}