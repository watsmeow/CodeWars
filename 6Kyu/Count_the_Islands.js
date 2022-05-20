function countIslands(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == 1) {
                count += 1
                arr[i][j] = 0
                newfunc(arr, i -1, j -1)
                newfunc(arr, i -1, j)
                newfunc(arr, i -1, j +1)
                newfunc(arr, i, j +1)
                newfunc(arr, i +1, j +1)
                newfunc(arr, i +1, j)
                newfunc(arr, i +1, j -1)
                newfunc(arr, i, j -1)
            }
        }
    }
    return count
}

function newfunc(arr, i, j) {
    if (i < 0 || j < 0 || i >= arr.length || j >= arr[i].length) {
        return
    } else if (arr[i][j] == 0) {
        return
    }
    arr[i][j] = 0

    newfunc(arr, i -1, j -1)
    newfunc(arr, i -1, j)
    newfunc(arr, i -1, j +1)
    newfunc(arr, i, j +1)
    newfunc(arr, i +1, j +1)
    newfunc(arr, i +1, j)
    newfunc(arr, i +1, j -1)
    newfunc(arr, i, j -1)

}
