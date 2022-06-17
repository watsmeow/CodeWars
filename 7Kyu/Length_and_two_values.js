function alternate(num, a, b) {
    let arr = []
    for (let i = 0; i < num; i++) {
        if (i % 2 == 0) {
            arr.push(a)
        } else {
            arr.push(b)
        }
    }
    return arr
}
