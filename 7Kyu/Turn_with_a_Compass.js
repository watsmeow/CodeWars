function direction(facing, turn) {
      let compass = {}
      compass['N'] = ['NE', 'NW']
      compass['NE'] = ['E', 'N']
      compass['E'] = ['SE', 'NE']
      compass['SE'] = ['S', 'E']
      compass['S'] = ['SW', 'SE']
      compass['SW'] = ['W', 'S']
      compass['W'] = ['NW', 'SW']
      compass['NW'] = ['N', 'W'] 
      turn = turn / 45
    if (turn < 0) {
        for (let i = turn; i < 0; i++) {
            facing = compass[facing][1]
        }
    } else {
        for (let i = 0; i < turn; i++) {
            facing = compass[facing][0]
        }
    }
    return facing
  }
