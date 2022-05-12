function persistence(n) {
    let count = 0
    n = Array.from(String(n))
    while (n.length > 1) {
        n = n.map((element) => Number(element)).reduce((a, v) => a * v, 1)
        count += 1
        n = Array.from(String(n))
    }
    return count
}
