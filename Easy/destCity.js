var destCity = function(paths) {
    let s = new Set();
    for (let i = 0; i < paths.length; i++) {
        s.add(paths[i][0])
    }
    for (let i = 0; i < paths.length; i++) {
        if (!s.has(paths[i][1])) {
            return paths[i][1]
        }
    }
};
