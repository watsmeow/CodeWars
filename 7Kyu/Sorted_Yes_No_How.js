function isSortedAndHow(array) {
    let ascending = true
    let descending = true
    for (let i = 0; i < array.length - 1; i ++) {
      if ((array[i]) > array[i + 1]) {
         ascending = false}
      }

    for (let i = array.length -1; i > 0; i--) {
        if ((array[i]) > array[i - 1]) { 
          descending = false
      } 
  } if (descending === true) {
      return "yes, descending"
  } else if (ascending === true) {
      return "yes, ascending"
  } else {
      return "no"
    }
}
