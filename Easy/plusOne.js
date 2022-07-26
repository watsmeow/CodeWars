var plusOne = function(digits) {
    let len = digits.length -1
    let done = false
    for (let i = len; i >= 0; i--) {
        if (done == false) {
            if (digits[i] == 9) {
                digits[i] = 0
            } else {
                digits[i] +=1
                done = true
            }
        }
    }
    if (done == false) {
        digits.unshift(1)
    }
    return digits
};
