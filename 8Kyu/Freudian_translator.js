function toFreud(string) {
    if (string.length > 0) {
        string = string.split(' ')
        for (let i = 0; i < string.length; i++) {
            string.splice([i], 1, 'sex')
        }
        return string.join(' ')
    } else {
        return string
  }
}
