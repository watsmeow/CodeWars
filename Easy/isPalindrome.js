var isPalindrome = function(x) {
    x = String(x)
    let right = x.length -1
    let left = 0
    while (left < right) {
        if (x[left] != x[right]) {
            return false
        }
        right -= 1
        left += 1
    }
    return true
};
