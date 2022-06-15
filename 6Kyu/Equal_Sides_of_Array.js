function findEvenIndex(arr) {
    let left = 0
    let right = [...arr]
    right.shift()
    for (let i = 0; i < arr.length; i++) {
        if (left == right.reduce((a, v) => a + v, 0)) {
            return i 
        } 
        left += arr[i]
        right.shift()
    }
    return -1
}
