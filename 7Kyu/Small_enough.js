function smallEnough(arr, limit) {
   let arr2 = arr.filter((element => element <= limit))
   if (arr2.length == arr.length) {
       return true
   } else {
       return false
   }
}
