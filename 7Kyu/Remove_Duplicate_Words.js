function removeDuplicateWords(word) {
    word = word.split(' ')
    word = new Set(word)
    return Array.from(word).join(' ')
}
