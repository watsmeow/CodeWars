function encode(str) {
    let obj = {}
    obj['a'] = 1
    obj['e'] = 2
    obj['i'] = 3
    obj['o'] = 4
    obj['u'] = 5
    return str.split('').map((element) => {
            if (element in obj) {
                return obj[element]
            } else {
                return element
            }
    }).join('')
}

function decode(str) {
    let obj = {}
    obj[1] = 'a'
    obj[2] = 'e'
    obj[3] = 'i'
    obj[4] = 'o'
    obj[5] = 'u'
    return str.split('').map((element) => {
            if (element in obj) {
                return obj[element]
            } else {
                return element
            }
    }).join('')
}
