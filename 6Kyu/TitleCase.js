function titleCase(title, minorWords) {
    if (minorWords == undefined) {
      minorWords = new Set()
    } else {
          minorWords = new Set(minorWords.toLowerCase().split(' '))
    }
  
    title = title.split(' ').map(element => {
        return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
      });

      for (let i = 1; i < title.length; i++) {
        if (minorWords.has(title[i].toLowerCase())) {
            title[i] = title[i].toLowerCase()
        } 
    }
    return title.join(' ')
}
