var toLowerCase = function(s) {
    s = s.split('')
    let newS = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) {
            newS.push(s[i] = s[i].toLowerCase())
        } else {
            newS.push(s[i])
        }
    }
    return newS.join('')
};
