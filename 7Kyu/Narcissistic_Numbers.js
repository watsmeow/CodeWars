function isNarcissistic(n){
    let newlist = []
    let x = String(n).split('')
    let len = x.length
    for (let j = 0; j < x.length; j++) {
        newlist.push(Number(x[j]) ** len)
    }
    let total = newlist.reduce((val, acc) => val + acc, 0)
    if (total == n) {
        return true
    } else {
      return false
    }
}
