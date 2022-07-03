var reverseString = function(s) {
    let right = s.length -1 
    let left = 0
    while (left < right) {
        let holder = s[right]
        s[right] = s[left]
        s[left] = holder
        right -= 1
        left += 1
    }
    return s
};
