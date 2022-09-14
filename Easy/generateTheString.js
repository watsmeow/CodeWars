var generateTheString = function(n) {
    let output = []
    if (n % 2 == 0) {
        for (let i = 0; i < n - 1; i++) {
            output.push('a')
        }
        output.push('b')
    } else {
        for (let i = 0; i < n; i++) {
            output.push('a')
        }
    }
    return output.join('')
};
