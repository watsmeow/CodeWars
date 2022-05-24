function validate(num) {
    let arr = []
    num = String(num).split('')
    if (num.length % 2 != 0) {
        num = num.map((element, index) => {
            if (index % 2 != 0) {
                return parseInt(element) * 2
            } else {
                return parseInt(element)
            }
        })
    } else if (num.length % 2 == 0) {
        num = num.map((element, index) => {
            if (index % 2 == 0) {
                return parseInt(element) * 2
            } else {
                return parseInt(element)
            }
        })
    }
    if (num.map((element) => {
        if (element > 9) {
            return element - 9
        } else {
            return element
        }
    }).reduce((a, v) => a + v, 0) % 10 == 0) {
        return true
    } else {
        return false
    }
}
