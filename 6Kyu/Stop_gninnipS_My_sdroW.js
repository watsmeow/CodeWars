function spinWords(str) {
      str = str.split(' ').map((element) => {
          if (element.length >= 5) {
              return element.split('').reverse().join('')
          } else {
              return element
          }
      }).join(' ')
      return str
  }
