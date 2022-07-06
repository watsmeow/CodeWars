var calPoints = function(ops) {
    let record = []
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] == Number(ops[i])) {
            record.push(Number(ops[i]))
        } else if (ops[i] == '+') {
            record.push(record[record.length -1] + record[record.length -2])
        } else if (ops[i] == 'D') {
            record.push(record[record.length -1] * 2)
        } else {
            record.pop()
        }
    }
    return record.reduce((a, v) => a + v, 0)
};
