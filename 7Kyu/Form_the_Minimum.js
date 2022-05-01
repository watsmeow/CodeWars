function minValue(list) {
    list = new Set(list)
    return parseInt(Array.from(list).sort((a, b) => a - b).join(''))
}
