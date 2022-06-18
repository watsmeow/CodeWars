function validParentheses(str) {
    let open = 0
    let close = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '(') {
            open += 1
        } else if (str[i] == ')') {
            close += 1
        }
        if (close > open) {
            return false
        }
    }
    if (open == close) {
        return true
    } else {
        return false
    }
}
