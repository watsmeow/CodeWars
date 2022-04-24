function getMiddle(s)
{
    let str = s.split('')
    if (str.length % 2 == 0 ) {
        return str[str.length / 2 -1] + str[str.length / 2]
    } else {
        return str[Math.floor(str.length / 2)]
    }
}
