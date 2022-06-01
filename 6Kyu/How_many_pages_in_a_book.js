function amountOfPages(summary){
    let count = 0
    let str = ''
    while (str.length < summary) {
        count += 1
        str += String(count)
    }
    return count
}
