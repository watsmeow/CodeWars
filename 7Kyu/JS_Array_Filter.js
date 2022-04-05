function getEvenNumbers(numbersArray){
    let newArray = numbersArray.filter(odd => odd % 2 == 0)
    return newArray
  }
