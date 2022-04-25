function createPhoneNumber(num){
    let phone = []
    for (let i = 0; i < num.length; i++) {
        if (i == 0) {
            phone.unshift('(', num[i])
        } else if (i == 2) {
            phone.push(num[i], ')', ' ')
        } else if (i == 5) {
            phone.push(num[i], '-')
        } else {
            phone.push(num[i])
        }
    }
    return phone.join('')
}
