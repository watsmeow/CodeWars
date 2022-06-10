function meeting(str) {
    str = str.toUpperCase().split(';')
    let arr = []
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].split(':')
        arr.push('(' + str[i][1] + ', ' + str[i][0] + ')')
    }
    return arr.sort().join('')
}
