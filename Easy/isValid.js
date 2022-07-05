var isValid = function(s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
        stack.push(s[i])
        }
        if (s[i] == ')' || s[i] == '}' || s[i] == ']') {
            if (stack.length == 0) {
                return false
            }
            if (stack[stack.length -1] == '(' && s[i] == ')') {
                stack.pop()
            } else if (stack[stack.length -1] == '[' && s[i] == ']') {
                stack.pop()
            } else if (stack[stack.length -1] == '{' && s[i] == '}') {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length == 0
};
