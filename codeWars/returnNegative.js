function makeNegative(num) {
    return Math.sign(num) === 0 ? Math.abs(num) : Math.sign(num) === -1 ? num : -num
}

console.log(makeNegative(-1));