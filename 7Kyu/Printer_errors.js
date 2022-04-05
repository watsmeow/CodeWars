function printerError(s) {
    let i = 0;
    let x = 0;
    while (i <= s.length) {
        if (s[i] == 'n' || s[i] == 'o' || s[i] == 'p' || s[i] == 'q' || s[i] == 'r' || s[i] == 's' || s[i] == 't' || s[i] == 'u' || s[i] == 'v' || s[i] == 'w' || s[i] == 'x' || s[i] == 'y' || s[i] == 'z') { 
           x++
        }
    i++
    }
    return `${x}/${s.length}`
}
