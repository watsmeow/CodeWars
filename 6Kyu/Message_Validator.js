function isAValidMessage(str) {
    if (str == []) {
        return true
    } else if (str[0] != Number(str[0]) || Number(str[str.length -1])) {
        return false
    }
    let arr = []
    str = str.split('')
    let count = 0
    while (count < str.length) {
        while (count < str.length && Number(str[count])) {
            arr.push(str[count]) 
            count +=1
        }
        arr.push(' ')
        while (count < str.length && !Number(str[count])) {
            arr.push(str[count]) 
            count +=1
        }
        arr.push(' ')
    }
    arr = arr.join(''). trim().split(' ')
    let determine = true
    for (let j = 0; j < arr.length; j++) {
        if (Number(arr[j]) && arr[j + 1].length != Number(arr[j])) {
            determine = false
        }
    }
    return determine
}
