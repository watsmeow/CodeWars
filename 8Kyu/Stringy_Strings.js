    let newlist = []
    for (let i = 0; i < size; i++) {
        if (i % 2 == 0) {
            newlist.push(1)
        } else {
            newlist.push(0)
        }
    }
    return newlist.join('')
}
