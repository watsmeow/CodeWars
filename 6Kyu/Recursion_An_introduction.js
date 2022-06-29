function  stepDown(stair, width, arr = []) {
  if (width == 0) {
    return []
  }
    if (stair < 0) {
        return arr.reverse()
    }
    arr.push(stair)
    return stepDown(stair - width, width, arr) 
}
