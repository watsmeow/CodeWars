function dataReverse(str) {
    let arr = []
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (count == 7 && i != str.length -1) {
            arr.push(str[i], ' ')
            count = 0
        } else {
            arr.push(str[i])
            count += 1
        }
    }
    return arr.join('').split(' ').reverse().join('').split('').map((element) => parseInt(element))
}
