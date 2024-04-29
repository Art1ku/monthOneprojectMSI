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

// for(var i = 0; i < 100; i++){
//     console.log(i)
// }

// var tableObj = {
//     quantity: ['5-10', '5-10', '5-10', '5-10', '5-10', '5-10', '5-10', '5-10', '5-10'],
//     price: ['2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом']
// }

// var tableQuantity = document.querySelector(".tableQuantity")
// var tablePrice = document.querySelector(".tablePrice")

// function tableMaker(arr, tableRow){
//     arr.forEach(function(item){
//         var tCell = document.createElement("td")
//         tCell.textContent = item
//         tableRow.append(tCell)

//     })
// }
// for(var key in tableObj){
//     tableMaker(tableObj[key], key === 'quantity' ? tableQuantity : tablePrice)
// }



// var arr = [
//     [1, 4, 8],
//     [5, 19, 0],
//     [6, 3, 1]
// ]

// function myFunc(oldArr){
//     var newArr = []
//     oldArr.forEach(function(item){
//         item.forEach(function(item){
//             newArr.push(item)
//         })
//     })
//     console.log(newArr)
//     return newArr.reduce(function(acc, curr){
//         return acc + curr
//     }, 0)
// }
// console.log(myFunc(arr))




// var myObj = {
//     name: "Ilya",
//     number: 1
// }

// for(var prop in myObj){
//     console.log(prop)
// }



// var people = {
//     john: {
//         age: 14,
//         weight: 70+" kg",
//         parents: {
//             scott: {
//                 weight: 70+" kg",
//                 age: 40,
//                 parents: {
//                     logan: {
//                         age: 78
//                     }
//                 }
//             },
//             mary: {
//                 weight: 70+" kg",
//                 age:39
//             }
//         }
//     },
//     sam: {
//         age: 14,
//         weight: 70+" kg",
//         parents: {
//             jessy: {
//                 weight: 70+" kg",
//                 age: 40
//             },
//             amy: {
//                 weight: 70+" kg",
//                 age:39
//             }
//         }
//     }
// }

// function parentList (obj){
//     if(obj.parents){
//         for(var parent in obj.parents){
//             console.log(parent, obj.parents[parent].age)
//             if (obj.parents[parent].parents){
//                 parentList(obj.parents[parent])
//             }
//         }
//     }else{
//         console.log('not found!')
//     }
// }

// for (var key in people){
//     parentList(people[key])
// }

var tableObj = {
    table1: {
        quantity: ['5-10', '11-30', '31-50', '51-100', '101-200', '201-300', '301-500', '501-1000', '> 1000'],
        price: ['2000 сом', '1900 сом', '1700 сом', '1600 сом', '1400 сом', '1350 сом', '1250 сом', '1200 сом', '1075 сом']
    },
    table2: {
        quantity: ['5-10', '11-30', '31-50', '51-100', '101-200', '201-300', '301-500', '501-1000', '> 1000'],
        price: ['2000 сом', '1900 сом', '1700 сом', '1600 сом', '1400 сом', '1350 сом', '1250 сом', '1200 сом', '1075 сом']
    },
    table3: {
        quantity: ['5-10', '11-30', '31-50', '51-100', '101-200', '201-300', '301-500', '501-1000', '> 1000'],
        price: ['2000 сом', '1900 сом', '1700 сом', '1600 сом', '1400 сом', '1350 сом', '1250 сом', '1200 сом', '1075 сом']
    }
}

var tableWrapper = document.querySelector('.tableWrapper')

function tableMaker(tableData){
    var table = document.createElement('table')

    var tableHead = document.createElement('thead')
    var tableHeadTitle = document.createElement('th')
    tableHeadTitle.textContent = 'Худи стандарт'
    tableHead.append(tableHeadTitle)

    var tableBody = document.createElement('tbody')
    // var tableQuantity = document.createElement('tr')
    // var tableQuantityTitle = document.createElement('th')
    // tableQuantityTitle.textContent = 'Количество'
    // tableQuantity.append(tableQuantityTitle)
    // var tablePrice = document.createElement('tr')

    // tableData.quantity?.forEach(function(item){
    //     var tableCell = document.createElement('td')
    //     tableCell.textContent = item
    //     tableQuantity.append(tableCell)
    // })

    // table.append(tableQuantity)

    for(var row in tableData){
        console.log(tableData[row])
    }

    
    var tableBodyTitle = document.createElement('th')
    tableBodyTitle.textContent = 'Худи стандарт'
    tableBody.append(tableBodyTitle)


    table.append(tableHead)
    table.append(tableBody)

    tableWrapper.append(table)
}

for (var key in tableObj){
    tableMaker(tableObj[key])
}
