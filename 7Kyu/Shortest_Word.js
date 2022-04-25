function findShort(s){
      return s.split(' ').map((element) => {return element.length}).sort((a, b) => a - b)[0]
}
