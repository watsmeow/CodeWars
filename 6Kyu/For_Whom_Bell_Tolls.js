function bell(n) {
    let arr = []
    let numOne = n
    let numTwo = 0
    for (let i = n; n > arr.length; i++) {
            arr.push(numOne + numTwo)
            numTwo += numOne
            numOne -= 2
    }
    return arr
}
