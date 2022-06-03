function consecutive(arr, a, b) {
    let con1 = false
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == a && arr[i + 1] == b) {
            con1 = true
        } else if (arr[i] == b && arr[i + 1] == a) {
            con1 = true
        }
    }
    if (con1 == true) {
        return true
    } else {
        return false
    }
}
