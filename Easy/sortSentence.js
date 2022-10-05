var sortSentence = function(s) {
    return s.split(' ').sort((a, b) => a[a.length -1] - b[b.length -1]).map((element) =>      element.slice(0, element.length -1)).join(' ')
};

/*

let res = []
for (let i = 1; i < map.keys.length; i++) {
    res.push(map[i])
}
return res.join(' ')
