function moveZeros(arr) {
    arr.sort((a,b) => {
        return a === 0 ? 1 : b === 0 ? -1 : 0;
    })
    return arr
}

moveZeros([false,1,2,3,'sdf',0,'sdf',1,0,3333])

console.log(0 < false)