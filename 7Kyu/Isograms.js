function isIsogram(str){
      str = str.toLowerCase()
      for (let i = 0; i < str.length-1; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str.charAt(i) == str.charAt(j)) {
                console.log(str.charAt(j))
                return false
            }
        }
    }
    return true
}
