    let str = String(num).split('')
    let newlist = []
    for (let i = 0; i < str.length; i++) {
        if ((str[i] % 2 != 0 && str[i + 1] % 2 != 0) && (i != str.length-1)) {
            newlist.push(str[i],'-')
        } else {
            newlist.push(str[i])
        }
    }
    return newlist.join('')
