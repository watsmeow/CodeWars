function filterLongWords(sentence, n) {
  return sentence.split(' ').filter(element => element.length > n)
}
