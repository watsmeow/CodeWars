function countDivisors(num) {
    let newarr = []
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            newarr.push(i)
        }
    }
    return newarr.length
}
