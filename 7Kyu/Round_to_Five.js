function roundUp(num) {
    if (num % 5 == 0) {
        return num
    } else {
        num = Math.ceil(num / 5) * 5
        if (num === -0) {
            return 0 
        } else {
            return num
        }
    }
}
