var makeFancyString = function(s) {
    let stack = []
    let counter = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === stack[stack.length -1]) {
            counter += 1
        } else {
            counter = 0
        }
        if (counter < 2) {
            stack.push(s[i])
        }
    }
    return stack.join('')
};
