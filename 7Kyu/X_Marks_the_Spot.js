const xMarksTheSpot = (input) => {
    let coords = []
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[0].length; j++) {
            if (input[i][j] == 'x') {
                coords.push(i, j)
            }
        }
    }
    if (coords.length > 2) {
        return []
    } else {
        return coords
    }
}
