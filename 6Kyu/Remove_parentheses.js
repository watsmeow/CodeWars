function removeParentheses(str) {
    let newstr = []
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "(") {
            count += 1
        } else if (str[i] ==")") {
            count -= 1
        } else if (count == 0) {
            newstr.push(str[i])
        }
    }
    return newstr.join('')
}
