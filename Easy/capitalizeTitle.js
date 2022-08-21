var capitalizeTitle = function(title) {
    title = title.toLowerCase().split(' ')
    let newTitle = []
    for (let i = 0; i < title.length; i++) {
        if (title[i].length > 2) {
            let cap = title[i].charAt(0).toUpperCase() + title[i].slice(1)
            newTitle.push(cap)
        } else {
            newTitle.push(title[i])
        }
    }
    return newTitle.join(' ')
}
