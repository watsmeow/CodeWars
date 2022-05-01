function lastManStanding(n){
    let newlist = []
    for (let i = 1; i <= n; i++) {
        newlist.push(i)
    }  
    while (newlist.length > 1) {
        newlist = newlist.filter((element, index) => {
            if (index % 2 == 1) {
                return newlist[index]
            }
        })
        newlist.reverse()
    }
    return newlist[0]
  }
