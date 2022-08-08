var countAsterisks = function(s) {
    let inPair = false
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '|' && inPair == false) {
            inPair = true
        } else if (s[i] == '|' && inPair == true) {
            inPair = false
        }
        if (s[i] == '*' && inPair == false) {
            count += 1
        }
    }
    return count
};
