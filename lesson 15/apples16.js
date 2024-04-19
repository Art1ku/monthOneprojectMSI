console.log("digger".split("d").join("n"))
console.log([1,2,3,4,5,6, false, {a: 1}].join(" ").split(" "))


function arrayMSI(length, value) {
    var newArr = []
    for(var i = 0; i < length; i++){
        newArr.push(value)
    }
    return newArr
}
console.log(arrayMSI(10, "banana"))

function arrNew(arr){
    console.log(arr)
    var newArr = []
    arr.forEach(function (item){
        if (item){
            newArr.push(item) 
        }        
    });
    return newArr
    }
var arr = ["", 12, 0, false, true]
console.log(arrNew(arr))

console.log(Infinity - Infinity)

console.log("ilyA".toUpperCase())

function toUpFiLet(string){
    var newArrr = []
    string.split("").forEach(function (item, index){
        if(index <= 1){
            newArrr.push(item.toUpperCase())
        } else {
            newArrr.push(item.toLowerCase())
        }
    })
    return newArrr.join("")
}

console.log(toUpFiLet("ilya"))

const arrray = [1, 2, 1, 2, 3];
const arrray1 = [...new Set(arrray)];

console.log(arrray1);

const fromPairs = (array) => array.reduce((acc, value) => {
    var acc = []
    if (Array.isArray(value)) {
      acc[value[0]] = value[1];
    }
    return acc;
    }, {});