var stringMatching = function(words) {
    let output = []
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (words[i] != words[j] && words[i].includes(words[j])) {
                output.push(words[j])
            }
        }
    }
    let setter = new Set(output)
    return [...setter]
};
