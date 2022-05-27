function min(arr, n) {
    let largest = Number.MAX_SAFE_INTEGER
    let index = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < largest) {
            largest = arr[i]
            index = i
        }
    }
    if (n == 'value') {
        return largest
    } else {
        return index
    }
}
