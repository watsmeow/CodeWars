function to_nato(words) {
    words = words.toLowerCase().split('').map((element) => {
        if (element in NATO) {
            return NATO[element]
        } else {
            return element
        }
    }).filter((element) => element != ' ').join(' ')
    return words
}
