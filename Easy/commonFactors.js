var commonFactors = function(a, b) {
    let count = 0
    let z = Math.max(a, b)
    let i = 0
    while (i < z + 1) {
        if (a % i == 0 && b % i == 0) {
            count += 1
        }
        i += 1
    }
    return count
};
