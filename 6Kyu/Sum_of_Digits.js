function digital_root(n) {
    n = Array.from(String(n))
    while (n.length > 1) {
        n = n.map((element) => Number(element)).reduce((a, v) => a + v, 0)
        n = Array.from(String(n))
    }
    return Number(n)
}
