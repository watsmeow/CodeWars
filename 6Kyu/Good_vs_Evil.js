function goodVsEvil(good, evil){
  let goodGuys = {
    0: 1,
    1: 2,
    2: 3, 
    3: 3, 
    4: 4, 
    5: 10
  }
  
  let badGuys = {
    0: 1,
    1: 2,
    2: 2, 
    3: 2, 
    4: 3, 
    5: 5,
    6: 10
  }
  let goodCount = 0
  let badCount = 0
  good.split(' ').forEach((element, index) => (goodCount += (goodGuys[index] * element)))
  evil.split(' ').forEach((element, index) => (badCount += (badGuys[index] * element)))
  if (goodCount > badCount) {
    return 'Battle Result: Good triumphs over Evil'
  } else if (goodCount < badCount) {
    return 'Battle Result: Evil eradicates all trace of Good'
  } else {
    return 'Battle Result: No victor on this battle field'
  }
}
