var shortestToChar = function(s, c) {
    
    function findMin(a, b) {
        let holder = Number.MAX_VALUE
        for (let i = 0; i < b.length; i++) {
            if (Math.abs(b[i] - a) < holder) {
                holder = Math.abs(b[i] - a)
            }
        }
        return holder
    }
    
    
    let ees = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == c) {
            ees.push(i)
        }
    }
    let results = []
    for (let i = 0; i < s.length; i++) {
        results.push(findMin(i, ees))
    }
    return results
};
