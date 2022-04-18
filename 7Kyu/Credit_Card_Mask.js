function maskify(cc) {
    let four = cc.slice(-4)
    let hash = cc.slice(0, -4).split('').map(x => '#').join('')
    return hash + four 
}
