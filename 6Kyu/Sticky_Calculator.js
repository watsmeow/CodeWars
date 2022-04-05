function stickCalc(operation, val1, val2) {
    val3 = Math.round(val1).toString() + Math.round(val2).toString()
    let val4 = parseInt(val3)
    if (operation === "+") {
        return Math.round(val4 + Math.round(val2))
    } else if (operation === "-") {
        return Math.round(val4 - Math.round(val2))
    } else if (operation === "*") {
        return Math.round(val4 * Math.round(val2))
    } else if (operation === "/") {
        return Math.round(val4 / Math.round(val2))
    }
}
