var obj = {
    key: "value",
    keytwo: "value two",
};

// console.log(Object.keys(obj));
// console.log(Object.values(obj))
console.log(Object.entries(obj))

var arr = ['one','one','one','one','one','one',]
//console.log(ray.length)

//if ([].length){
//    console.log("true")
//}else{
//    console.log("false")
//}
arr.shift()
arr.push("hello", false, {a: "100"})// добовляет элементы в конец
console.log(arr.pop())// убирает последний элемент
console.log(arr.shift())// убирает 1 элемент
console.log(arr)
arr.pop()
arr.unshift(546)// добовляет элементы в начало
// return

console.log(arr.slice(2, 4))// копирует и берет
console.log(arr.splice(2, 3))// ворует и не отдает

console.log(
    arr.forEach(function(item, index){
        //console.log(item, index)
        console.log(item +"test")
    })
)

function myFunc(){
    "hello"
}

console.log(myFunc())

var month = ["Jan", "Feb","Mart","April","May"]
console.log(month)
a = month.slice(0, 1) + "0"
b = month.slice(1, 2) + "1"
c = month.slice(2, 3) + "2"
d = month.slice(3, 4) + "3"
e = month.slice(4, 5) + "4"
f = [a , b , c , d , e]
console.log(f)

var month = ["Jan", "Feb","Mart","April","May",]
var result = []
for(var i = 0 ; i < month.length; i++){
    result.push(month[i] + i)
}
console.log(result)

var month1 = ["Jan", "Feb","Mart","April","May",]
for(var i = 0 ; i < month1.length; i++){
    // month1[i] = month1[i] + i // способ 1
    month1[i] += i
}
console.log(month1)

var month2 = ["Jan", "Feb","Mart","April","May",]
var result2 = []
for(var i = 0 ; i < month2.length; i++){
    result2.unshift(month2[i])
}
console.log(result2)




