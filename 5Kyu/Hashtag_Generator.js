function generateHashtag(str) {
    str = '#' + str.split(' ').map((element) => {
        if (element != ' ') {
            return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase()
        }
    }).join('')
    if (str.length <= 140 && str != '#') {
        return str
    } else {
        return false
    }
}
