function robberEncode(str) {
    let consonants = 'BCDFGHJKLMNPQRSTVWXYZ'
    let newarr = []
    for (let i = 0; i < str.length; i ++) {
        if (consonants.includes(str[i].toUpperCase())) {
            if (str[i] == str[i].toUpperCase()) {
                newarr.push(str[i], 'O', str[i])
            } else {
                newarr.push(str[i], 'o', str[i])
            }
        } else {
            newarr.push(str[i])
        }
    }
    return newarr.join('')
}
