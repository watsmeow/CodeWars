var canConstruct = function(ransomNote, magazine) {
    let hash = new Map()
    for (let i = 0; i < magazine.length; i++) {
        if (!hash.get(magazine[i])) {
            hash.set(magazine[i], 1)
        } else {
            hash.set(magazine[i], hash.get(magazine[i]) + 1)
        }
    }
    for (let i = 0; i < ransomNote.length; i++) {
        if (hash.get(ransomNote[i]) > 0) {
            hash.set(ransomNote[i], hash.get(ransomNote[i]) - 1)
        } else {
            return false
        }
    }
    return true
};
