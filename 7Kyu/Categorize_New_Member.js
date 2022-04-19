function openOrSenior(data){
    let newlist = []
    for (let i = 0; i < data.length; i++) {
        if ((data[i][0] >= 55) && (data[i][1] > 7)) {
            newlist.push('Senior')
        } else {
            newlist.push('Open')
        }
    }
    return newlist
}
