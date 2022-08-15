var percentageLetter = function(s, letter) {
    return Math.floor(s.split('').filter((element) => {
        if (element === letter) {
            return element
        }
    }).length / s.length * 100)
};
