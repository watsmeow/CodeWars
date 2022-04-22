function sandwhich(n) {
    let newlist = []
    if (n == 2) {
        return 'sandwich'
    } else if (n > 2 && n % 2 == 0) {
        let len = n / 2
        for (let i = 1; i <= len; i++) {
            newlist.push('sandwich')
        }
    } else if (n > 2 && n % 2 != 0) {
        newlist.push('bread')
        let len = Math.floor(n / 2)
        for (let i = 1; i <= len; i++) {
            newlist.push('sandwich')
        }
    } else {
        return null
    }
    return newlist.join(' ')
}



function nameToSlices(name) {
    let newlist = []
    if (typeof name == 'string' && name.length >= 0) {
        name = name.split(' ').map((element) => {
            if (element == 'bread') {
                return 1
            } else if (element == 'sandwich') {
                return 2
            } else {
                return null
            }
        })
        console.log(name)
        if (name.includes(2)) {
            for (let i = 1; i < name.length; i++) {
                if (name[i] == 1) {
                    newlist.push(1)
                }
            }
            if (newlist.length >= 1) {
                return null
            } else {
                return name.reduce((a, v) => a + v, 0)
            }
        } else {
            return null
        }
    } else {
        return null
    }
}
