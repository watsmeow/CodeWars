function positiveSum(arr) {
    return arr.filter(element => element > 0).reduce((acc, val) => acc + val, 0)
}
