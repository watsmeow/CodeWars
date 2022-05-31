function prefill(times, thing) {
    if (isNaN(parseInt(times))) {
        throw new TypeError(`${times} is invalid`)
    } else if (String(times).includes('.')) {
      throw new TypeError(`${times} is invalid`)
    } else if (times < 0) {
      throw new TypeError(`${times} is invalid`)
    } else {
        let arr = ['str ']
        arr = arr.map((element) => element.repeat(times)).join('').split(' ')
        arr = arr.fill(thing , 0, times)
        return arr.slice(0, arr.length -1)
    }
}
