const rps = (p1, p2) => {
    let winner = {}
    winner["scissors"] = ["paper"]
    winner["paper"] = ["rock"]
    winner["rock"] = ["scissors"]
    if (p1 === p2) {
        return "Draw!"
    } else if (winner[p1] == p2) {
        return "Player 1 won!"
    } else {
        return "Player 2 won!"
    }
};
