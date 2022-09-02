var lengthOfLastWord = function(s) {
    let count = 0
    let seenchar = false
    for (let i = s.length -1; i >= 0; i--) {
        if (s[i] != ' ' && seenchar == false) {
            seenchar = true
            count +=1
        } else if (s[i] != ' ' && seenchar == true) {
            count += 1
        } else if (s[i] == ' ' && seenchar ==true) {
            return count
        }
    }
    return count  
};
