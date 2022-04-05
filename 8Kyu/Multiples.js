function multiples(a, b) {
    c = []
    e = a
    while (a <= b) {
        c.push(a);
        a += e
    }
    return c
}
