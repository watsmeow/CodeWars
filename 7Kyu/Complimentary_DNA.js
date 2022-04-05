function DNAStrand(dna){
    let copy = dna.split('').map(function(letter) { if (letter == "A") {
          return "T"
      } else if (letter == "T") {
          return "A"
      } else if (letter == "C") {
          return "G"
      } else if (letter == "G") {
          return "C"
      }
    })
    return copy.join('')
}
