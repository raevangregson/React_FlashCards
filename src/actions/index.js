export function flipCard(card) {
    return {
        type: "FLIP_CARD",
        card
    }
}

export function shuffleCards(cards) {
    return {
        type: "SHUFFLE_CARDS",
        cards
    }
}

export function nextCard(index) {
    return {
      type: "NEXT_CARD",
      index
    }
}
export function nextCard(index) {
    return {
      type: "PREV_CARD",
      index
    }
}
