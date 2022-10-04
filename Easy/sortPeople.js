var sortPeople = function(names, heights) {
    let hash = new Map();
    for (let i = 0; i < names.length; i++) {

         hash.set(heights[i], names[i])

    }
    const sortedHash = new Map([...hash].sort((a, b) => a[0] - b[0])) 
    let arr = []
    for (const [key, value] of sortedHash) {
        arr.push(value)
    }
    return arr.reverse()
};
