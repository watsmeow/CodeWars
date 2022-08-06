var mostWordsFound = function(sentences) {
    let counter = 0
    for (let i = 0; i < sentences.length; i++) {
        if (sentences[i].split(' ').length > counter) {
            counter = sentences[i].split(' ').length
        }
    }
    return counter
};
