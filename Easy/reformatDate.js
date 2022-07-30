var reformatDate = function(date) {
    let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",        "Sep", "Oct", "Nov", "Dec"]
    date = date.split(' ')
    let output = []
    output.push(date[2])
    for (let i = 0; i < month.length; i++) {
        if (date[1] == month[i]) {
            if (i + 1 < 10) {
                output.push("0" + (i + 1))
            } else {
                output.push(i + 1)
            }
        }
    }
    if (date[0].length > 3) {
        let day = date[0].slice(0, 2)
        output.push(day)
    } else {
        output.push("0" + date[0][0])
    }
    return output.join('-')
};
