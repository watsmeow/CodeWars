var bestHand = function(ranks, suits) {
    let flush = true
    for (let i = 0; i < suits.length - 1; i++) {
        if (suits[i] != suits[i + 1]) {
            flush = false
        }
    }
    if (flush === true) {
        return "Flush"
    }
    let hand = new Map();
    for (let i = 0; i < ranks.length; i++) {
        hand.set(ranks[i], hand.get(ranks[i]) +1 || 1)
    }
    let values = Array.from(hand.values())
    if (values.includes(3) || values.includes(4) || values.includes(5)) {
        return "Three of a Kind"
    } else if (values.includes(2)) {
        return "Pair"
    }
    return "High Card"
};
