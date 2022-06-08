function anagrams(str, arr) {
    function isEqual(a, b) { 
        for (key in a) {
            if (a[key] != b[key]) {
                return false
            }
        }
        for (key in b) {
            if (a[key] != b[key]) {
                return false
            }
        }
        return true
    }
    str = str.split('')
    let obj = {}
    let arr2 = []
    for (let i = 0; i < str.length; i++) {
        if (!obj[str[i]]) {
            obj[str[i]] = 1
        } else {
            obj[str[i]] += 1
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let obj2 = {}
        for (let j = 0; j < arr[i].length; j++) {
            if (!obj2[arr[i][j]]) {
                obj2[arr[i][j]] = 1
            } else {
                obj2[arr[i][j]] += 1
            }
        }

        if (isEqual(obj, obj2)) {
            arr2.push(arr[i])
        }
    }
    return arr2
}
