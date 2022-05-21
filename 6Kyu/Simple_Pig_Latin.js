function pigIt(str) {
    let first = ''
    let second = ''
    let arr = []
    str = str.split(' ')
    for (let i = 0; i < str.length; i++) {
        if (str[i] != '!' && str[i] != '?') {
            first = str[i].charAt(0)
            second = str[i].substring(1)
            arr.push(second + first + 'ay')
        } else {
            arr.push(str[i])
        }
    } 
    return arr.join(' ')
}
