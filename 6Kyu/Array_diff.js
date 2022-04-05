function arrayDiff(a, b) {
    let arr3 = []
    let setb = new Set(b)
    for (let i = 0; i < a.length; i++) {
        if (!setb.has(a[i])) {
            arr3.push(a[i])
        }
    }
    return arr3
}
