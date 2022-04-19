function comp(array1, array2){
    if (array1 == null || array2 == null) {
      return false
    } else if (array1.length == array2.length) {
        a = array1.map(element => element * element).sort((a, b) => a - b).join('')
        b = array2.sort((a, b) => a - b).join('')
        return a === b
    } else {
        return false
    }
}
