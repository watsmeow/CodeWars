function duplicateEncode(str) {
    str = str.toLowerCase()
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        if (!obj[str[i]]) {
            obj[str[i]] = '('
        } else {
            obj[str[i]] =')'
        }
    }
    let arr = []
    for (let i = 0; i < str.length; i++) {
        for (key in obj) {
            if (key == str[i]) {
                arr.push(obj[key])
            }
        }
    }
    return arr.join('')
}
