function solution(number){
    let arr = []
    for (let i = 1; i < number; i++) {
        if (i % 3 == 0 && i % 5 ==0 || i % 3 == 0 || i % 5 ==0) {
            arr.push(i)
        }
    }
    let total = arr.reduce((acc, val) => acc + val, 0)
    if (total > 0) {
        return total 
    } else {
        return 0
    }
}
