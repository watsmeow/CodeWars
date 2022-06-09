function unpackSausages(arr) {
    let sausages = []
    arr = arr.flat(1).filter((element) => {
        if (element.startsWith('[')) {
            return element
        }
    })
  let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length == 6 && arr[i][1] == arr[i][2] && arr[i][1] == arr[i][3] && arr[i][1] == arr[i][4]) {
            if (count < 4) {
                sausages.push(arr[i][1], ' ', arr[i][1], ' ', arr[i][1], ' ', arr[i][1], ' ')
                count += 1
            } else {
                count = 0
            }
        }
    }
    return sausages.join('').trim()
}
