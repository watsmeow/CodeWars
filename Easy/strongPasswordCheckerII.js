var strongPasswordCheckerII = function(password) {
    if (password.length < 8) {
        return false
    }
    let list = "!@#$%^&*()-+"
    let smashy = new Set(list.split(''))
    
    let uppercase = false
    let lowercase = false
    let digit = false
    let special = false
    let same = false
    for (let i = 0; i < password.length; i++) {
        if (password[i] === password[i].toUpperCase()) {
            uppercase = true
        }
        if (password[i] === password[i].toLowerCase()) {
            lowercase = true
        }
        if (password[i] == Number(password[i])) {
            digit = true
        }
        if (smashy.has(password[i])) {
            special = true
        }
        if (password[i] === password[i + 1]) {
            same = true
        }
    }
    return uppercase && lowercase && digit && special && !same

    
};
