  function camel(str) {
      if (str.includes('-')) {
        return str.split('-').map((element, index) => {
            if (index != 0) {
                return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase()
            } else {
                return element
            }
        }).join('')
      } else if (str.includes('_')) {
        return str.split('_').map((element, index) => {
            if (index != 0) {
                return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase()
            } else {
                return element
            }
        }).join('')
      } else {
          return ''
      }
  } 
