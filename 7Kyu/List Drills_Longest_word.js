function longest(words) {
    let newlist = []
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split('')
        newlist.push(words[i].length) 
    }
    return parseInt(newlist.sort((a, b) => a - b).slice(-1))
}
