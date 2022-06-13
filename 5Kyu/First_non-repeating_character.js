function firstNonRepeatingLetter(str) {
    str = str.split('')
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        if (!obj[str[i].toLowerCase()]) {
            obj[str[i].toLowerCase()] = 1
        } else {
            obj[str[i].toLowerCase()] +=1
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i].toLowerCase()] == 1) {
            return str[i]
        }
    }
    return ''
}
