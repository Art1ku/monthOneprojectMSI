const task11 = () => {
    let sum = 0
    for(let i = 1; i <=100; i++){
        if(i % 2 !== 0){
            sum += i
        }
    }
    console.log(sum)
}
task11()



const task12 = () => {
    const num1 = 23579
    const num2 = 23456780
    console.log(num1 % num2)
}
task12()



const task13 = () => {
    const numbers = [6,-2,-4,1,12,3,-9]
    const result = 22
    
    function filter(numbers) {
   
        return numbers.filter(num => num > 0 && num < 10);
    }
    
    let a = filter(numbers);
    console.log(a);
    
}
task13()



const task14 = () => {
    const arr = [-1,-2,-3,-4,-5,-6,-6,1,2,3,4,5,6,7]
    const arr2 = []
    

}


const task15 = () => {
    const arr = [-1, -2, -3, -4, -5, -6, -6, 1, 2, 3, 4, 5, 6, 7];
    const neg = arr.filter(num => num < 0);
    const negr = neg.length;
    console.log(negr);
}

task15();

const task16 = () => {
    // const str = ['index.html', 'index.html','index.html']
    // lol1 = str[1].reverse()
    // lol2 = lol1.splice(0,4)
    // console.log(lol2)
}
task16()
