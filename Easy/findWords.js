var findWords = function(words) {
    let helper = function(word, set) {
        for (let i = 1; i < word.length; i++) {
            if (!set.has(word[i].toLowerCase())) {
                return false
            }
        }
        return true
    }
    let first = new Set("qwertyuiop".split(''))
    let second = new Set("asdfghjkl".split(''))
    let third = new Set("zxcvbnm".split(''))
    let output = []
    for (let i = 0; i < words.length; i++) {
        if (first.has(words[i][0].toLowerCase())) {
            if (helper(words[i], first)) {
                output.push(words[i])
            }
        } else if (second.has(words[i][0].toLowerCase())) {
            if (helper(words[i], second)) {
                output.push(words[i])
            }
        } else {
            if (helper(words[i], third)) {
                output.push(words[i])
            }
        }
    }
    return output
};
