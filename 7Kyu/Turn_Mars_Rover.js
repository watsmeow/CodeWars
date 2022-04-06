function turn(current, target) {
    let right = {}
    right["N"] = "E"
    right["E"] = "S"
    right["S"] = "W"
    right["W"] = "N"
    if (right[current] == target) {
        return "right"
    }
    return "left"
}
