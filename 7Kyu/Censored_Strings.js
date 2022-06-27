function uncensor(str1, str2) {
    str2 = str2.split('')
    let arr = []
    for ( let i = 0; i < str1.length; i++) {
        if (str1[i] == '*') {
            arr.push(str2[0])
            str2.shift()
        } else {
            arr.push(str1[i])
        }
    }
    return arr.join('')
  }
