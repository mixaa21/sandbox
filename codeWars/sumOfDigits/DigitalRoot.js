function digitalRoot(n) {
    n = String(n)
    while(n.length > 1) {
        n = n.split('').map(item => {
            return Number(item)
        })
        n = n.reduce((a,b) => {
            return a += b
        })
        n = String(n)
    }
    return Number(n)
}

digitalRoot(123333)
