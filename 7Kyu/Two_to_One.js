function longest(s1, s2) {
    let z = s1 + s2;
    z = z.split('').sort();
    let newz = [];
    z.forEach((element) => {
        if (!newz.includes(element)) {
            newz.push(element);
        }
    });
    return newz.join('')
}
