function spinWords(string){
    console.log(string.split(' '));
    string = string.split(' ')
    string = string.map(item => {
        return item.length > 4 ? item.split('').reverse().join('') : item
    }).join(' ')
    return  string
}

spinWords('Hello World it')