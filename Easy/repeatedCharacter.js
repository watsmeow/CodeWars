var repeatedCharacter = function(s) {
    let hash = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!hash.get(s[i])) {
            hash.set(s[i], [i])
        } else {
            let temp = hash.get(s[i])
            temp.push(i)
            hash.set(s[i], temp)
        }
    }
    let answer = s.length + 1
    for (let i = 0; i < s.length; i++) {
        if (hash.get(s[i]).length > 1) {
            answer = Math.min(answer, hash.get(s[i])[1])
        }
    }
    return s[answer]
};
