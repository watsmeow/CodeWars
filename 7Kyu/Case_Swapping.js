function swap(str){
    str = str.split('')
    let newstring = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            newstring.push(str[i].toLowerCase())
        } else if (str[i] === str[i].toLowerCase()) {
            newstring.push(str[i].toUpperCase())
        }
    }
    return newstring.join('')
}
