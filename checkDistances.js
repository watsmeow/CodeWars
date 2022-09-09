var checkDistances = function(s, distance) {
    let hash = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!hash.has(s[i])) {
            hash.set(s[i], i)
        } else {
            let index = s[i].charCodeAt(0) - 97
            let dis = (i - 1)- hash.get(s[i])
            if (distance[index] != dis) {
                return false
            }
        }
    }
    return true
};
