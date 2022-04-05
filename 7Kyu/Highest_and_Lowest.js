function highAndLow(numbers){
    numbers = numbers.split(' ').sort((a, b) => a - b).reverse();
    return `${numbers[0]} ${numbers[numbers.length -1]}`
}
