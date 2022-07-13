var average = function(salary) {
    let min = salary[0]
    let max = 0
    let total = 0 
    for (let i = 0; i < salary.length; i++) {
        total += salary[i]
        if (salary[i] < min) {
            min = salary[i]
        }
        if (salary[i] > max) {
            max = salary[i]
        }
    }
    return (total - (min + max))/(salary.length -2)
};
