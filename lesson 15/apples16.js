// console.log("digger".split("d").join("n"))
// console.log([1,2,3,4,5,6, false, {a: 1}].join(" ").split(" "))


// function arrayMSI(length, value) {
//     var newArr = []
//     for(var i = 0; i < length; i++){
//         newArr.push(value)
//     }
//     return newArr
// }
// console.log(arrayMSI(10, "banana"))

// function arrNew(arr){
//     console.log(arr)
//     var newArr = []
//     arr.forEach(function (item){
//         if (item){
//             newArr.push(item) 
//         }        
//     });
//     return newArr
//     }
// var arr = ["", 12, 0, false, true]
// console.log(arrNew(arr))

// console.log(Infinity - Infinity)

// console.log("ilyA".toUpperCase())

// function toUpFiLet(string){
//     var newArrr = []
//     string.split("").forEach(function (item, index){
//         if(index <= 1){
//             newArrr.push(item.toUpperCase())
//         } else {
//             newArrr.push(item.toLowerCase())
//         }
//     })
//     return newArrr.join("")
// }
// console.log(toUpFiLet("ilya"))



// function myFunc(){
//     return 'AAA '
// }

// console.log(typeof myFunc())

// var arrra = []
// arrra.push('1')
// arrra.unshift('0', false, {})
// console.log(arrra)
// console.log(arrra.slice(2,4))

// var month = ["Jan", "Feb","Mart"]
// var result = []
// function myFuncc(){
//     var month1 = []
//     for(var i = 0; i < month.length; i++){
//         month1.push(month1[i] + i)
//     }
//     return month1
// }
// console.log(myFuncc(month))

// var arr = ['apple', 'peach', 'watermelon', 'banana']
// var newArr = arr.map(function(item, index){
//     return item+index+' ha is not number'
// })
// console.log(arr)
// console.log(newArr)

// var arr = [1, 12, '', "hello", false, {}]
// function myFunc (filterdAdd){
//     filterdAdd.forEach(function(item){
//        if(item){
//         arr.push(item)
//        } 
//     });
//     return arr
// }

// console.log(arr)
// console.log(myFunc(arr))

// var arr = [1, 12, '', "hello", "apple", false, {}]

// var newArr = arr.filter(function(item){
//     return item 
// }).map(function(item){
//     return item
// })

// console.log(arr)
// console.log(newArr)














var data = [['a',1],['b',2]]
function myFunc(arr){
    var obj = {}
    arr.forEach(function(item){
        console.log(item)
        obj[item[0]] = item[1]
    })
    return obj
}
console.log(myFunc(data))




const arrray = [1, 2, 1, 2, 3];
const arrray1 = [...new Set(arrray)];
console.log(arrray1);

















// var arr = [1,2,3,4,5,6,7,8,9,10]

// function myFunc(arr) {
//     var sum = 1 
//     arr.forEach(function(item, index){
//         console.log(item)
//         sum = sum + item
//         sum = sum / arr.length

//     })
//     return sum

// }
// console.log(myFunc(arr))

// var arr = [1,2,3,4,5,6,7,8,9,10]

// var sum = arr.reduce(function(acc, curr){
//     console.log(acc, curr)
//     return acc + curr 
// })
// console.log(arr)
// console.log(sum)