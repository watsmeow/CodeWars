function accum(str) {
    let newstr = []
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < i + 1; j++) {
            if (j == 0) {
                newstr.push(str[i].toUpperCase()) 
            } else {
                newstr.push(str[i].toLowerCase())
            }
        }
        newstr.push('-')
    }
    return newstr.join('').slice(0, newstr.length - 1)
}
