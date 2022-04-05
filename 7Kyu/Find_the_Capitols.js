var capitals = function (word) {
    word = word.split('')
    console.log(word)
    let newArr = []
    word.forEach((element, i) => {
        if (element == element.toUpperCase()) {
            newArr.push(i)
        }
    })
    return newArr
};
