var minOperations = function(logs) {
    let count = 0
    for (let i = 0; i < logs.length; i ++) {
        if (logs[i] == '../' && count > 0) {
            count -= 1
        } else if (logs[i] == './') {
            count = count
        } else if (logs[i][0] != '.') {
            count += 1
        }
    }
    return count
};
