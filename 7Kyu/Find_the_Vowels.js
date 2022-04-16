function vowelIndices(word){
    word = word.toUpperCase()
    let list = []
    for (let i = 0; i < word.length; i++) {
        if (word[i] == 'A' || word[i] == 'E' || word[i] == 'I' || word[i] == 'O' || word[i]== 'U' || word[i] == 'Y') {
            list.push(i +1)
        }
    }
    return list
}
