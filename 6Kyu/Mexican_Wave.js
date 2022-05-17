function wave(str) {
    let newarr = []
    let newarr2 = []
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (str[i] != ' ') {
                if (i == j) {
                    newarr.push(str[j].toUpperCase())
                } else {
                    newarr.push(str[j])
                }
            } 
        }
      if (newarr.length > 0) {
        newarr2.push(newarr.join(''))
        newarr = []
      }

    }
    return newarr2
}
