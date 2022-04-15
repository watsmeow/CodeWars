function squareDigits(num){
    num = num.toString().split('').map(element => element * element);
    return parseInt(num.join(''))
}
