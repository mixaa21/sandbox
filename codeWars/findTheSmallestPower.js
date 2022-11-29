function findNextPower(val, pow_) {
    let num = Math.floor(Math.pow(val, 1 / pow_));
    while(Math.pow(num, pow_) <= val) {
        num++
    }
    return Math.pow(num, pow_)
}

console.log(findNextPower(8, 3));