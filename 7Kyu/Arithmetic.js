function arithmetic(p1, p2, p3) {
    let obj = {}
    obj['multiply'] = p1 * p2
    obj['subtract'] = p1 - p2
    obj['divide'] = p1 / p2
    obj['add'] = p1 + p2
    return obj[p3]
}
