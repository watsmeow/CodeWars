function sumOfN(n) {
    let pushnum = 0
    let arr = []
    while (arr.length <= Math.abs(n)) {
      if (n < 0 && arr.length > 0) {
        arr.push(pushnum * -1)
        pushnum += arr.length
      } else {
        arr.push(pushnum)
        pushnum += arr.length
      }
    }
    return arr
}
