var findSpecialInteger = function(arr) {
    let hash = new Map();
    for (let i = 0; i < arr.length; i++) {
        hash.set(arr[i], hash.get(arr[i]) +1 || 1) 
    }
    let greatest = Math.floor(arr.length/4)
    for (const [key, value] of hash) {
        if (value > greatest) {
            return key
        }
    }
};
