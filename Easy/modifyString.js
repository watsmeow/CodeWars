var modifyString = function(s) {
    let newstr = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '?') {
            if (newstr[i -1] != 'a' && s[i + 1] != 'a') {
                newstr.push('a')
            } else if (newstr[i -1] != 'b' && s[i + 1] != 'b') {
                newstr.push('b')
            } else if (newstr[i -1] != 'c' && s[i + 1] != 'c') {
                newstr.push('c')
            } 
        } else {
            newstr.push(s[i])
        }
    }
    return newstr.join('')
};
