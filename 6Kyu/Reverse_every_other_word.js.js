function reverse(str){
    let newstring = []
    str = str.split(' ')
    for (let i = 0; i < str.length; i++) {
        if (i % 2 != 0) {
            newstring.push(str[i].split('').reverse().join(''))
        } else {
            newstring.push(str[i])
        }
    } 
    return newstring = newstring.join(' ').trim()
}
