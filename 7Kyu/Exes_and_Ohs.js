function XO(s) {
    let a = s.split('').filter((element) => element.toLowerCase() == 'o')
    let b = s.split('').filter((element) => element.toLowerCase() == 'x')
    return a.length == b.length
}
