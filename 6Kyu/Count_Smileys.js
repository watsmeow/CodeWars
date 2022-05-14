function countSmileys(arr) {
    arr = arr.filter((element) => (element.includes(':') || element.includes(';')) && (element.includes('D') || element.includes(')')))
    let arr2 = arr.filter((element) => {
        if (element.length == 2) {
            return element
        } else if (element.length == 3 && (element.includes('-') || element.includes('~')) && (element.includes(':') || element.includes(';')) && (element.includes('D') || element.includes(')'))) {
            return element
        }
    })
    
    return arr2.length
}
