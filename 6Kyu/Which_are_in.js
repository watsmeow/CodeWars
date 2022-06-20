function inArray(a1, a2) {
    let newarr = []
    for (let i = 0; i < a2.length; i++) {
        a1.forEach((element) => {
            if (a2[i].includes(element) && !newarr.includes(element)) {
                newarr.push(element)
            } 
        })
    }
    return newarr.sort()
}
