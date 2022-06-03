function numberOfPairs(arr) {
    let count = 0
    let pairs = {}
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in pairs == false) {
            pairs[arr[i]] = 1
        } else {
            pairs[arr[i]] += 1
        }
    }
    for (key in pairs) {
        if (pairs[key] / 2 > 0) {
            count += Math.floor(pairs[key] / 2)
        }
    }
    return count
}
