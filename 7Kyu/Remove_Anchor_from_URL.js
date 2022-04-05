function removeUrlAnchor(url){
      url = url.split('')
      if (url.includes('#')) {
        let hash = url.indexOf('#')
        return url2 = url.join('').slice(0 , hash)
      }
      else {
          return url.join('')
      }
}
