function nameShuffler(str){
    let newName = []
    str = str.split(' ')
    newName.push(str[1], str[0])
    return newName.join(' ')
}
