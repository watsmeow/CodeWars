var decodeMessage = function(key, message) {
    let alphaCounter = 0
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let table = new Map();
    for (let i = 0; i < key.length; i++) {
        if (!table.get(key[i]) && key[i] != ' ') {
            table.set(key[i], alphabet[alphaCounter])
            alphaCounter +=1
        }
    }
    let decoded = []
    for (let i = 0; i < message.length; i++) {
        if (message[i] == ' ') {
            decoded.push(message[i])
        } else if (table.get(message[i])) {
            decoded.push(table.get(message[i]))
        }
    }
    return decoded.join('')
};
