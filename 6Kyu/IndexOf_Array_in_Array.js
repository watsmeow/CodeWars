var searchArray = function (arrayToSearch, query) {
    if (query.length != 2 || Array.isArray(query) == false || Array.isArray(arrayToSearch[0]) ==false) {
        throw "Error"
    }
    for (let i = 0; i < arrayToSearch.length; i++) {
      if (arrayToSearch[i].length > 2) {
        throw "Error"
      }
        let variable = true
        for (let j = 0; j < arrayToSearch[i].length; j++) {
            if (arrayToSearch[i][j] != query[j]) {
                variable = false
            } 
        }
        if (variable == true) {
            return i
        } 
    } 
    return -1
}
