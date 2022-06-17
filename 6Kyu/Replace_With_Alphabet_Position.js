function alphabetPosition(str) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    str = str.toLowerCase()
    let arr = []
    for (let i = 0; i < str.length; i++) {
        if (!alpha.split('').find(element => element == str[i])) {
            arr.push('-')
        } else {
            arr.push(alpha.indexOf(str[i]) + 1)
        }
    }
    return arr.filter(element => element != '-').join(' ')
}
