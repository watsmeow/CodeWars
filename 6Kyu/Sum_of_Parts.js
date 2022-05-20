function partsSums(ls) {
    let arr = []
    let ls2 = ls.reduce((a, v) => a + v, 0)
    arr.push(ls2)
    for (let i = 0; i < ls.length; i++) {
        ls2 -= ls[i]
        arr.push(ls2)
    }
    return arr
}
