function solution(str){
      let newlist = []
      str = str + '_'
      for (let i = 0; i < str.length; i++) {
          if (i % 2 != 0) {
              newlist.push(str[i -1] + str[i])
          }
      }
      return newlist
  }
