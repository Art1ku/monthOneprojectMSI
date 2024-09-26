var data = [['a',1],['b',2]]
function myFunc(arr){
    var obj = {}
    arr.forEach(function(item){
        obj[item[0]] = item[1]
    })
    return obj
}
console.log(myFunc(data))

var without3 = (array, ...args) => {
    return array.filter(item => !args.includes(item)
)}
var data = [1,2,3,1,2]
console.log(without3(data, 1, 2))

var a = [1,2,3,1,2]
var b = a.filter(function(c, index){
    return a.indexOf(c) === index
})
console.log(b)