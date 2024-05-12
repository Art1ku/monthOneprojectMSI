// const string = prompt("Say your name!!!")

// console.log(string)

// const regExp = /[Yy]/i              // 1 способ
// const regExp = new RegExp("a", "i")               // 2 способ

// console.log(string.match(regExp))


// const letter = '1AaBbCcD1cccCCCdccc1c'
// const regExp = /[a-c]/gi
// const regExp = /[a-z0-9]/gi
// const regExp = /\d/gi
// flags = g  i
// classes = \d = [0-9] \w = [a-z0-9]
// const regExp = /[a-z]/gi

// console.log(letter.replace('a', "*"))
// console.log(letter.replace(regExp, "*"))




const phoneRegExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/
const phoneInput = document.querySelector(".phoneInput")
const phoneCheck = document.querySelector(".phoneCheck")
const phoneResult = document.querySelector(".phoneResult")

phoneCheck.addEventListener('click', () => {
    // console.log(phoneRegExp.test(phoneInput.value))
    if(phoneRegExp.test(phoneInput.value)){
        phoneResult.textContent = "ok :)"
    }else{
        phoneResult.textContent = "wtf man >:("
    }
})