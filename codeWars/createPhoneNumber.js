function createPhoneNumber(numbers){
    numbers.splice(0,0,'(')
    numbers.splice(4,0,') ')
    numbers.splice(8,0,'-')
    return numbers.join('')
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));