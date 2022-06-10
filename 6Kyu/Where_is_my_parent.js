function findChildren(str) {
    str = str.split('').sort()
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase() && !obj[str[i]]) {
            obj[str[i]] = 0
        } else {
            obj[str[i].toUpperCase()] +=1
        }
    }
    let arr = []
    for (key in obj) {
        arr.push(key)
        for (let j = 0; j < obj[key]; j++) {
            arr.push(key.toLowerCase())
        }
    }
    return arr.join('')
}
