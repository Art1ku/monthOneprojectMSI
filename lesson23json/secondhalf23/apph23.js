// const string = prompt("Say your name!!!")

// console.log(string)

// const regExp = /[Yy]/i              // 1 способ
// const regExp = new RegExp("a", "i")               // 2 способ

// console.log(string.match(regExp))


// const letter = '1AaBbCcD1cccCCCdccc1c'
// const regExp = /[a-c]/gi
const regExp = /[a-z0-9]/gi
// const regExp = /\d/gi
// flags = g  i
// classes = \d = [0-9] \w = [a-z0-9]
// const regExp = /[a-z]/gi

// console.log(letter.replace('a', "*"))
// console.log(letter.replace(regExp, "*"))
// console.log(regExp)



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

const gmailRegExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
const gmailInput = document.querySelector(".gmailInput")
const gmailCheck = document.querySelector(".gmailCheck")
const gmailResult = document.querySelector(".gmailResult")

gmailCheck.addEventListener('click', () => {
    // console.log(phoneRegExp.test(phoneInput.value))
    if(gmailRegExp.test(gmailInput.value)){
        gmailResult.textContent = "ok :)"
    }else{
        gmailResult.textContent = "wtf man >:("
    }
})

const passwordRegExp = /.{1,}/
const passwordInput = document.querySelector(".passwordInput")
const passwordCheck = document.querySelector(".passwordCheck")
const passwordResult = document.querySelector(".passwordResult")

passwordCheck.addEventListener('click', () => {
    // console.log(phoneRegExp.test(phoneInput.value))
    if(passwordRegExp.test(passwordInput.value)){
        passwordResult.textContent = "ok :)"
    }else{
        passwordResult.textContent = "wtf man >:("
    }
})





let sum = 0;
for (let i = 1; i <= 100; i += 2) {
    sum += i;
}
console.log(sum);
