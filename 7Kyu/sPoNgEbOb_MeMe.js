function spongeMeme(str){
    let arr = []
    str = str.toLowerCase().split('')
    for (let i = 0; i < str.length; i++) {
        if (i % 2 == 0) {
            arr.push(str[i].toUpperCase())
        } else {
            arr.push(str[i])
        }
    }
    return arr.join('')
}
