function pigIt(str){
    const re = RegExp('^[A-Za-z0-9]+$')
    str = str.split(' ')
    str = str.map(item => {
        if (re.test(item)) {
            item = item.split('');
            item.push(item[0])
            console.log(item);
            item.splice(0, 1)
            item.push('ay')
            item = item.join('')
        }
        return item
    })
    return str.join(' ')
}


console.log(pigIt('Hello world !'));