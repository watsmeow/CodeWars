function unusedDigits() {
    let arr = []
    for (let j = 0; j < arguments.length; j++) {
        arr.push(arguments[j])
    }
    arr = arr.join('').split('')
    arr = new Set(arr)
    console.log(arr)
    let newarr = []
    for (let i = 0; i < 10; i++) {
       if (!arr.has(i.toString())) {
          newarr.push(i)
       }
    }
    return newarr.join('')
}
