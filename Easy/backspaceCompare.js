var backspaceCompare = function(s, t) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] != '#') {
            stack.push(s[i])
        } else {
            stack.pop()
        }
    }
    let stacktwo = []
    for (let i = 0; i < t.length; i++) {
        if (t[i] != '#') {
            stacktwo.push(t[i])
        } else {
            stacktwo.pop()
        }
    }
    return stack.join('') == stacktwo.join('')
};
