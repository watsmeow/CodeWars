function findOutlier(arr) {
    let arr2 = arr.filter((element) => element % 2 !=0)
    if (arr2.length > 1) {
        return arr.filter((element) => element % 2 ==0)[0]
    } else {
        return arr2[0]
    }
}
