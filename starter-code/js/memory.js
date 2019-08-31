class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    let result = false;
    let str1 = JSON.stringify(card1);
    let str2 = JSON.stringify(card2);
    if (str1 == str2) {
      this.pairsGuessed++;
      result = true;
    }
    return result;
  }
  isFinished() {
    let finished = false;
    let pairsInGame = this.cards.length / 2;
    if (this.pairsGuessed == pairsInGame) {
      finished = true;
    }
    return finished;
  }
}
