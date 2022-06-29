function findOdd(arr) {
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1
    } else {
      obj[arr[i]] += 1
    }
  }
  for (key in obj) {
    if (obj[key] % 2 !=0) {
      return Number(key)
    }
  }
 }
