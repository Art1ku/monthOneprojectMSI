// var myValue = 'a'

// function myFunc(){
//     console.log(myValue)
//     var mySecValue = 'b'
//     console.log(mySecValue)
//     function mySecFunc(){
//         console.log(mySecValue)
//     }
//     mySecFunc()
// }
// myFunc()

// if(myValue){
//     console.log(myValue)
//     var c = 'c'
//     console.log(c)
// }

// console.log(c)

// for(var i = 0; i<1; i++){
//     console.log(myValue)
//     var d = 'd'
// }

// console.log(d)





// console.log(a)

// var a = 10





// console.log(a)
// var a  = 'a'
// a = 'b'

// function myFunc(){
//     var b = 'c'
// }
// не сработает




// // не всплывает 
// let a = 'a'
// console.log(a)
// a = 'b' // может менять значение
// console.log(a)
// if(true){
//     console.log(a)
//     let b='d'// имеет область видимости через {}
// }
// console.log(b)



// // console.log(a)
// const a = 'a'
// // a='b'
// console.log(a)

// if(true){
//     const b = 'b'
// }
// console.log(b)



// const obj = {
//     name: 'Ilya'
// }

// obj = {name: 'john'}

// console.log(obj)

// const arr = [1,2,3,4,5]

// arr.pop()
// console.log(arr)

// const - {} [] / html el
// let - for/ str/ num/ bool 

// for(const i =0 ; i < 100; i++){
//     console.log(i)
// }


// function myFunc(){

// }





const myFunc = () => (
    'a'
)
console.log(myFunc())










































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
