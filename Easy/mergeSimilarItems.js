var mergeSimilarItems = function(items1, items2) {
    let hash = new Map();
    for (let i = 0; i < items1.length; i++) {
        if (!hash.get(items1[i][0])) {
            hash.set(items1[i][0], items1[i][1])
        } 
    }
    for (let i = 0; i < items2.length; i++) {
        if (!hash.get(items2[i][0])) {
            hash.set(items2[i][0], items2[i][1])
        } else {
            hash.set(items2[i][0], hash.get(items2[i][0]) + items2[i][1])
        }
    }
    let arr = []
    for (const [key, value] of hash) {
        arr.push([key, value])
    }
    return arr.sort((a, b) => a[0] - b[0])
};
