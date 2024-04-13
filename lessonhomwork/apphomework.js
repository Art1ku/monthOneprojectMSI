var blockWrapper = document.querySelector(".blockWrapper")
console.log(blockWrapper)
var blockArr = [
    {
        img: 'asset/Navbar/conversation.svg',
        text: 'Order'
    },
    {
        img: 'asset/Navbar/computer.svg',
        text: 'Drivers'
    },
    {
        img: 'asset/Navbar/user.svg',
        text: 'Support'
    },
    {
        img: 'asset/Navbar/set-up.svg',
        text: 'Repair'
    }
]

blockArr.forEach(function(item){
    var block = document.createElement('div')
    var img = document.createElement('img')
    var text = document.createElement('p')

    img.setAttribute("src", item.img)
    text.textContent = item.text
    block.append(img)
    block.append(text)

    block.classList.add('block')

    blockWrapper.append(block)
})