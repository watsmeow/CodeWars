function descendingOrder(num) {
    if (num >= 0) {
        let numArray = num.toString().split('');
        numArray.sort();
        numArray = numArray.reverse();
        return Number(numArray.join(''));
    }
}
