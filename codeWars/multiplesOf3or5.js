function solution(number){
    if (Math.sign(number) !== -1 && number) {
        let array = []
        for(let i = 0; i < number; i++) {
            if(i % 3 === 0 || i % 5 === 0) {
                array.push(i)
            }
        }
        return array.reduce((a,b) => {
            return a += b
        })
    } else {
        return 0
    }
}

console.log(solution(-89));