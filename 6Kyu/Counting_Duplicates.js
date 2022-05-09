function duplicateCount(str) {
    let count = 0
    str = str.toLowerCase()
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        if (str[i] in obj == false) {
            obj[str[i]] = 1
        } else {
            obj[str[i]] += 1
        }
    }
    for (key in obj) {
        if (obj[key] > 1) {
            count += 1
        }
    }
    return count
}
