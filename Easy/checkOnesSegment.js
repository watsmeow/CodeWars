var checkOnesSegment = function(s) {
 let answer = true
 for (let i = 0; i < s.length -1; i++) {
     if (s[i] == '0' && s[i + 1] == '1') {
         answer = false
     }
 }
    return answer
};
