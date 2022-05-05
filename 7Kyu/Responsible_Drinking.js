function hydrate(s) {
  s = s.split(' ').filter((element)=> (element == parseInt(element))).map(element => parseInt(element)).reduce((a, v) => a + v, 0)
  if (s > 1) {
      return `${s} glasses of water`
  } else {
      return `${s} glass of water`
  }
}
