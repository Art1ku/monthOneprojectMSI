function findZeroPositions(string) {
    let gde0 = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '0') {
            gde0.push(i);
        }
    }
    return gde0;
}
let string = '0afafa0sfaf0af0';
let zeroPosition = findZeroPositions(string);
console.log(zeroPosition);



function remover(str) {
    return str.split('').filter((char, index) => (index + 1) % 3 !== 0).join('');
}








function funkk(number) {

    let lol = number.toString().split('');
    let sum = lol.reduce((lol2, lol) => lol2 + parseInt(lol), 0);
    return sum
}
let result = funkk(1234567890);
console.log(result);