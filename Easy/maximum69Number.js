var maximum69Number  = function(num) {
    let changer = 1
    let newnum = []
    num = String(num).split('')
    for (let i = 0; i < num.length; i++) {
        if (changer > 0 && num[i] == '6') {
            newnum.push('9')
            changer -=1
        } else {
            newnum.push(num[i])
        }
    }
    return newnum.join('')
};
