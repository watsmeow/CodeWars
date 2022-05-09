function isValidWalk(arr) {
    let north = 0
    let south = 0
    let west = 0
    let east = 0
    arr = arr.forEach((element) => {
        if (element == 'n') {
            north += 1
        } else if (element == 's') {
            south +=1
        } else if (element == 'w') {
            west +=1
        } else if (element == 'e') {
            east +=1
        }
    })
    if ((north == south && east == west) && (north + south + west + east == 10)) {
        return true
    } else {
        return false
    }
}
