  function breakcase(str) {
      let newlist = []
      str = str.split('')
      console.log(str)
      for (let i = 0; i < str.length; i++) {
          if (
              i < str.length - 1 &&
            str[i] == str[i].toLowerCase() && 
            str[i + 1] == str[i + 1].toUpperCase()) {
              newlist.push(str[i], ' ')
          } else {
              newlist.push(str[i])
          }
      }
      return newlist.join('')
  }  
