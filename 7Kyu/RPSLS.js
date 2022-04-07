function rpsls(pl1, pl2) {
    let winner = {}
    winner["scissors"] = ["paper", 'lizard']
    winner["paper"] = ["rock",'spock']
    winner["rock"] = ["lizard","scissors"]
    winner["lizard"] = ["spock", "paper"]
    winner["spock"] = ["rock", 'scissors']
    if (pl1 === pl2) {
        return "Draw!"
    } else if (winner[pl1].includes(pl2)) {
        return "Player 1 Won!"
    } else {
        return "Player 2 Won!"
    }
}
