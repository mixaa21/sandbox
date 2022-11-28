var encryptThis = function(text) {
    text = text.split(' ')
    return text.map(item => {
        item = item.split('')
        item[0] = item[0].charCodeAt(0)
        const second = item[1]
        item[1] = item[item.length-1]
        item[item.length-1] = second
        return item.join('')
    }).join(' ')
}

console.log(encryptThis('Hello world'));