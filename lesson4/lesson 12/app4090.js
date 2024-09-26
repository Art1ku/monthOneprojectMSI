const navbarContent = [
    {
        title:"О НАС",
        link: "index4090ti.html",
    },
    {
        title:"КАТАЛОГ",
        link: "index4090ti copy.html",
    },
    {
        title:"НАШИ РАБОТЫ",
        link: "index4090ti copy 2.html",
    },
    {
        title:"КОНТАКТЫ",
        link: "index4090ti copy 3.html",
    },
    {
        title:"ТАБЛИЦА",
        link: "#tableee",
    },
]

const navbar = document.querySelectorAll(".navbar")
console.log(navbar)
navbar.forEach((navBarItem) => {
    navbarContent.forEach((item) => {
        const linkEL = document.createElement("a")
        linkEL.textContent = item.title
        linkEL.setAttribute("href", `/${item.link}`)
        navBarItem.append(linkEL)
    })
})


const tableObj = {
    table1: {
        quantity: ["Количество: ", '5-10', '11-30', '31-50', '51-100', '101-200', '201-300', '301-500', '501-1000', '> 1000'],
        price: ["Цена: ", '2000 сом', '1900 сом', '1700 сом', '1600 сом', '1400 сом', '1350 сом', '1250 сом', '1200 сом', '1075 сом']
    },
    table2: {
        quantity: ["Количество: ", '5-10', '11-30', '31-50', '51-100', '101-200', '201-300', '301-500', '501-1000', '> 1000'],
        price: ["Цена: ", '2000 сом', '1900 сом', '1700 сом', '1600 сом', '1400 сом', '1350 сом', '1250 сом', '1200 сом', '1075 сом']
    },
    table3: {
        quantity: ["Количество: ", '5-10', '11-30', '31-50', '51-100', '101-200', '201-300', '301-500', '501-1000', '> 1000'],
        price: ["Цена: ", '2000 сом', '1900 сом', '1700 сом', '1600 сом', '1400 сом', '1350 сом', '1250 сом', '1200 сом', '1075 сом']
    }
}

const tableWrapper = document.querySelector('.tableWrapper')

function tableMaker(tableData){
    const table = document.createElement('table')//создаем таблицу
    const tableHead = document.createElement('thead')//создаем хэдер
    const tableHeadTitle = document.createElement('th')// 
    tableHeadTitle.textContent = 'Худи стандарт'
    tableHead.append(tableHeadTitle)//заголовок
    const tableBody = document.createElement('tbody')// создаем тело табоицы
    
    for(const row in tableData){//определить количесвто рядов
        const tableRow = document.createElement('tr')// создаем ряд
        tableData[row].forEach(function(item){
            const tableCell = document.createElement('td')//создаем ячейку
            tableCell.textContent = item//присваеваем ее к массиву
            tableRow.append(tableCell)//вставляем ячейку в ряд

        })
    tableBody.append(tableRow)
    }

    table.append(tableHead)
    table.append(tableBody)

    tableWrapper.append(table)
}

for (const key in tableObj){
    tableMaker(tableObj[key])
}



// setTimeout(() => {
//     console.log('hello')
// }, 1000)

// setTimeout(() => {
//     console.log('hello')
// }, 1000.001)
// console.log('1')
// console.log('1')
// console.log('1')


// const interval = setInterval(() => {
//     console.log('interval')
// }, 1000)

// setTimeout(() => {clearInterval(interval)}, 5000)


