function squareDigits(num){
    return Number(num.toString().split('').map(item => {
        return item * item
    }).join(''))
}

console.log(squareDigits(3212));