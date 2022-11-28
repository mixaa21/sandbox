function findOdd(A) {
    let count = 0
    for(var i = 0; i < A.length; i++) {
        A.forEach(item => {
            item === A[i] ? count += 1 : ''
        })
        if(count % 2 !== 0) {
            break
        } else {
            continue
        }
    }
    return A[i]
}

console.log(findOdd([2, 1, 1, 2,5, 2, 2, 3,3,]));

let a = 7 // 010
let b = 2 // 010

console.log(a^b)