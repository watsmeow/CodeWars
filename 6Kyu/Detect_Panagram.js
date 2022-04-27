function isPangram(str){
  return new Set(str.toUpperCase().match(/[A-Z]/g)).size === 26;
}
