function dirReduc(arr) {
 let newarr = []
 for (let i = 0; i < arr.length; i++) {
     if (newarr.length > 0) {
        let last = newarr[newarr.length -1] 
        if (last == "NORTH" && arr[i] == "SOUTH" || last == "SOUTH" && arr[i] == "NORTH" ||
        last == "EAST" && arr[i] == "WEST" || last == "WEST" && arr[i] == "EAST") {
            newarr.pop()
        } else {
            newarr.push(arr[i])
        }
     } else {
         newarr.push(arr[i])
     }
 }
 return newarr
}
