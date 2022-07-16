var commonChars = function(words) {
    let hash = new Map();
    for (let i = 0; i < words[0].length; i++) {
        if (!hash.get(words[0][i])) {
            hash.set(words[0][i], 1)
        } else {
            hash.set(words[0][i], hash.get(words[0][i]) +1)
        }
    }
    for (let i = 1; i < words.length; i++) {
        let map = new Map();
        for (let j = 0; j < words[i].length; j++) {
            if (hash.get(words[i][j]) && hash.get(words[i][j]) > 0) {
                hash.set(words[i][j], hash.get(words[i][j]) -1)
            
                if (!map.get(words[i][j])) {
                        map.set(words[i][j], 1)
                    } else {
                        map.set(words[i][j], map.get(words[i][j]) +1)
                    }
                
            }
        }
        hash = map
    }
    let arr = []
    for (const [key, value] of hash) {
        arr.push(key.repeat(value))
    }
    return arr.join('').split('')
};
