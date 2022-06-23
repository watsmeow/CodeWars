function sortArray(arr) {
    let newarr = []
    let another = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            newarr.push(arr[i])
        }
    }
    newarr.sort((a, b) => a -b)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            another.push(newarr[0])
            newarr.shift()
        } else {
            another.push(arr[i])
        }
    }
    return another
}
