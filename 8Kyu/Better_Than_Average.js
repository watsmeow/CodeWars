 function betterThanAverage(classPoints, yourPoints) {
    if ((classPoints.reduce((acc, val) => acc + val, 0)/classPoints.length) < yourPoints) {
        return true
    } else {
        return false
    }
  }
