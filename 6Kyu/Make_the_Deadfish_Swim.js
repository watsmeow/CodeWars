function parse(data) {
    let arr = []
    let begin = 0
    for (let i = 0; i < data.length; i++) {
        if (data[i] == 'i') {
            begin += 1
        } else if (data[i] == 'd') {
            begin -= 1
        } else if (data[i] == 's') {
            begin *= begin 
        } else if (data[i] == 'o') {
            arr.push(begin)
        }
    }
    return arr
}
