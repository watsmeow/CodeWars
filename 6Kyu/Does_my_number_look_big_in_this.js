function narcissistic(num) {
  if (num === parseInt(num) && num > 0) {
      let num1 = String(num).split('')
      let len = num1.length
      let num2 = num1.map(element => parseInt(element) ** len).reduce((a, v) => a + v, 0)
      if (num2 == num) {
          return true
      } else {
          return false
      }
    }
}
