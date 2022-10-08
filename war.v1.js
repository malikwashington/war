//starting position
const cards0 = {
  diamonds: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
  clubs: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
  hearts: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
  spades: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
};
//playing deck
const cards = JSON.parse(JSON.stringify(cards0));
//shuffle
function r(arr) {
  let i = arr.length;
  while (--i > 0) {
    let randIndex = Math.floor(Math.random() * (i + 1));
    [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
  }
}
const player1 = {};
const player2 = {};

for (let key in cards) {
  r(cards[key]);
}
//dealing
function deal(deck) {
  let allSuits = Object.keys(deck);
  let suit;
  for (let i = 1; i <= 26; i++) {
    suit = allSuits[Math.floor(Math.random() * allSuits.length)];
    while (deck[suit].length === 0) {
      suit = allSuits[Math.floor(Math.random() * allSuits.length)];
    }
    player1[i] = [deck[suit][0], suit];
    deck[suit].shift();
  }
  for (let i = 1; i <= 26; i++) {
    suit = allSuits[Math.floor(Math.random() * allSuits.length)];
    while (
      deck[suit].length === 0 &&
      (cards.clubs.length > 0 ||
        cards.diamonds.length > 0 ||
        cards.hearts.length > 0 ||
        cards.spades.length > 0)
    ) {
      suit = allSuits[Math.floor(Math.random() * allSuits.length)];
    }
    player2[i] = [deck[suit][0], suit];
    deck[suit].shift();
  }
}

deal(cards);
// //I declare war
// declareWar = () => {
//   i += 4;
  
// }
// //war
// function game() {
//   f
// }