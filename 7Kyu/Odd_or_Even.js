function oddOrEven(arr) {
    arr = arr.reduce((a, v) => a + v, 0)
    if (arr % 2 ==0) {
        return 'even'
    } else {
        return 'odd'
    }
}
