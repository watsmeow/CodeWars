function deleteNth(arr, n) {
    let newarr = []
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in obj)) {
            obj[arr[i]] = 1
            newarr.push(arr[i])
        } else {
            if (obj[arr[i]] < n) {
                obj[arr[i]] += 1
                newarr.push(arr[i])
            }
        }
    }
    return newarr
}
