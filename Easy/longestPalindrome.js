var longestPalindrome = function(s) {
    let hash = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!hash.has(s[i])) {
            hash.set(s[i], 1)
        } else {
            hash.set(s[i], hash.get(s[i]) + 1)
        }
    }
    let oddExists = false
    let total = 0
    for (const [key, value] of hash) {
        if (value % 2 != 0) {
            oddExists = true
            total += value -1
        } else {
            total += value
        }
    }
    if (oddExists) {
        total += 1
    }
    return total
};
